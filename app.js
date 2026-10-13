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
    return type.toLowerCase().replace(/\s+/g, "-");
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
   * @param {Array<Object>} sessions - Sessions to display.
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
      const key = session.day;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(session);
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

    const filtered = agendaData.filter((session) => {
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

  const days = [...new Set(agendaData.map((item) => item.day))];
  const tracks = [...new Set(agendaData.map((item) => item.track))];
  const types = [...new Set(agendaData.map((item) => item.type))];

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

  render(agendaData);
})();
