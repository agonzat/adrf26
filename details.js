(() => {
  const agendaRoot = document.getElementById("agenda");
  if (!agendaRoot || typeof agendaData === "undefined") {
    return;
  }

  // Build modal once (uses textContent only, so no HTML injection).
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="modal__close" type="button" aria-label="Close">&times;</button>
      <p class="modal__meta" id="modalMeta"></p>
      <h2 class="modal__title" id="modalTitle"></h2>
      <dl class="modal__list" id="modalList"></dl>
      <p class="modal__desc" id="modalDesc"></p>
    </div>`;
  document.body.appendChild(overlay);

  const modalTitle = overlay.querySelector("#modalTitle");
  const modalMeta = overlay.querySelector("#modalMeta");
  const modalList = overlay.querySelector("#modalList");
  const modalDesc = overlay.querySelector("#modalDesc");
  let lastFocus = null;

  /**
   * Find a session by its title and time (unique enough within the dataset).
   * @param {string} title - Session title shown on the card.
   * @param {string} time - Session time shown on the card.
   * @returns {Object|undefined} Matching session.
   */
  function findSession(title, time) {
    return agendaData.find((s) => s.title === title && s.time === time);
  }

  /**
   * Open the detail modal for a session.
   * @param {Object} session - Session data.
   * @returns {void}
   */
  function openModal(session) {
    modalTitle.textContent = session.title;
    modalMeta.textContent = `${session.day} · ${session.time}`;
    modalList.innerHTML = "";

    [
      ["Type", session.type],
      ["Track", session.track],
      ["Location", session.location],
      ["Speakers", session.speakers]
    ].forEach(([label, value]) => {
      if (!value) {
        return;
      }
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      modalList.append(dt, dd);
    });

    // Optional `description` field in agenda.js; fallback message otherwise.
    modalDesc.textContent =
      session.description ||
      "A detailed description has not been published yet. Please check the official programme page.";

    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("modal-open");
    overlay.querySelector(".modal__close").focus();
  }

  /**
   * Close the detail modal and restore focus.
   * @returns {void}
   */
  function closeModal() {
    overlay.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocus) {
      lastFocus.focus();
    }
  }

  /**
   * Handle activation of a session card (click or keyboard).
   * @param {Event} event - Triggering event.
   * @returns {void}
   */
  function onActivate(event) {
    const card = event.target.closest(".session");
    if (!card) {
      return;
    }
    const title = card.querySelector(".session__title").textContent;
    const time = card.querySelector(".session__time").textContent;
    const session = findSession(title, time);
    if (session) {
      openModal(session);
    }
  }

  agendaRoot.addEventListener("click", onActivate);
  agendaRoot.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate(event);
    }
  });

  // Make re-rendered cards focusable and announce them as buttons.
  function decorateCards() {
    agendaRoot.querySelectorAll(".session:not([tabindex])").forEach((card) => {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
    });
  }
  new MutationObserver(decorateCards).observe(agendaRoot, { childList: true });
  decorateCards();

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay || event.target.closest(".modal__close")) {
      closeModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) {
      closeModal();
    }
  });
})();
