(() => {
  const agendaRoot = document.getElementById("agenda");
  const countRoot = document.getElementById("resultCount");
  const searchInput = document.getElementById("searchInput");
  const dayFilter = document.getElementById("dayFilter");
  const trackFilter = document.getElementById("trackFilter");
  const typeFilter = document.getElementById("typeFilter");
  const clearBtn = document.getElementById("clearBtn");
  const tabButtons = document.querySelectorAll(".tab-btn");

  /**
   * Convert the start of a "HH:MM - HH:MM" range to minutes since midnight.
   * @param {string} time - Time range string.
   * @returns {number} Start time in minutes (large value if unparsable).
   */
  function startMinutes(time) {
    const match = /(\d{1,2}):(\d{2})/.exec(time || "");
    return match ? Number(match[1]) * 60 + Number(match[2]) : 24 * 60;
  }

  /**
   * Compare two sessions by date, start time, then track/location.
   * @param {Object} a - First session.
   * @param {Object} b - Second session.
   * @returns {number} Sort order value.
   */
  function compareSessions(a, b) {
    return (
      a.date.localeCompare(b.date) ||
      startMinutes(a.time) - startMinutes(b.time) ||
      (a.location || "").localeCompare(b.location || "") ||
      a.title.localeCompare(b.title)
    );
  }

  // Sorted copy so the source dataset order does not matter.
  const sortedAgenda = [...agendaData].sort(compareSessions);

  /**
   * Add unique option values to a select input.
   * @param {HTMLSelectElement} selectElement - Select to populate.
   * @param {string[]} values - Option values.
   */
  function populateSelect(selectElement, values) {
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      selectElement.appendChild(option);
    });
  }

  /**
   * Convert session type to a css-friendly class suffix.
   * @param {string} type - Session type.
   * @returns {string} Normalized type.
   */
  function normalizeType(type) {
    return type.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  /**
   * Toggle active state for mobile day tabs.
   * @param {string} day - Selected day value.
   * @returns {void}
   */
  function updateActiveTab(day) {
    tabButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.day === day);
    });
  }

  /**
   * Render agenda cards grouped by day.
   * @param {Array<Object>} sessions - Sessions to display (already sorted).
   * @returns {void}
   */
  function render(sessions) {
    agendaRoot.innerHTML = "";

    if (sessions.length === 0) {
      countRoot.textContent = "0 sessions found.";
      const empty = document.createElement("p");
      empty.textContent = "No sessions match the current filters.";
      agendaRoot.appendChild(empty);
      return;
    }

    countRoot.textContent = `${sessions.length} session${sessions.length > 1 ? "s" : ""} found.`;

    const byDay = sessions.reduce((acc, session) => {
      if (!acc[session.day]) {
        acc[session.day] = [];
      }
      acc[session.day].push(session);
      return acc;
    }, {});

    Object.entries(byDay).forEach(([day, daySessions]) => {
      const dayBlock = document.createElement("section");
      dayBlock.className = "day-block";

      const dayTitle = document.createElement("h2");
      dayTitle.className = "day-title";
      dayTitle.textContent = day;
      dayBlock.appendChild(dayTitle);

      const sessionsWrap = document.createElement("div");
      sessionsWrap.className = "sessions";

      daySessions.forEach((session) => {
        const card = document.createElement("article");
        card.className = `session session--${normalizeType(session.type)}`;

        card.innerHTML = `
          <div class="session__top">
            <span class="session__time">${session.time}</span>
            <span class="session__track">${session.track}</span>
          </div>
          <h3 class="session__title">${session.title}</h3>
          <p class="session__details">
            <strong>Type:</strong> ${session.type}
            ${session.speakers ? `<br /><strong>Speakers:</strong> ${session.speakers}` : ""}
            ${session.location ? `<br /><strong>Location:</strong> ${session.location}` : ""}
          </p>
        `;

        sessionsWrap.appendChild(card);
      });

      dayBlock.appendChild(sessionsWrap);
      agendaRoot.appendChild(dayBlock);
    });
  }

  /**
   * Apply all active filters to the agenda.
   * @returns {void}
   */
  function applyFilters() {
    const search = searchInput.value.trim().toLowerCase();
    const day = dayFilter.value;
    const track = trackFilter.value;
    const type = typeFilter.value;

    const filtered = sortedAgenda.filter((session) => {
      const matchesSearch =
        search.length === 0 ||
        [session.title, session.speakers, session.location, session.track, session.type]
          .join(" ")
          .toLowerCase()
          .includes(search);

      const matchesDay = day === "all" || session.day === day;
      const matchesTrack = track === "all" || session.track === track;
      const matchesType = type === "all" || session.type === type;

      return matchesSearch && matchesDay && matchesTrack && matchesType;
    });

    updateActiveTab(day);
    render(filtered);
  }

  const days = [...new Set(sortedAgenda.map((item) => item.day))];
  const tracks = [...new Set(sortedAgenda.map((item) => item.track))];
  const types = [...new Set(sortedAgenda.map((item) => item.type))];

  populateSelect(dayFilter, days);
  populateSelect(trackFilter, tracks);
  populateSelect(typeFilter, types);

  [searchInput, dayFilter, trackFilter, typeFilter].forEach((element) => {
    element.addEventListener("input", applyFilters);
    element.addEventListener("change", applyFilters);
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      dayFilter.value = button.dataset.day;
      applyFilters();
    });
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    dayFilter.value = "all";
    trackFilter.value = "all";
    typeFilter.value = "all";
    applyFilters();
  });

  render(sortedAgenda);
})();
