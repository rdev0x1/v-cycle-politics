document.querySelectorAll(".vc-step").forEach((step) => {
  step.addEventListener("click", () => {
    document.querySelectorAll(".vc-step").forEach((item) => item.classList.remove("active"));
    step.classList.add("active");
    const detail = document.getElementById("vc-detail");
    if (detail) detail.textContent = step.dataset.detail || "";
  });
});

document.querySelectorAll(".question").forEach((question) => {
  question.querySelectorAll(".choice").forEach((choice) => {
    choice.addEventListener("click", () => {
      question.querySelectorAll(".choice").forEach((item) => item.classList.remove("selected"));
      choice.classList.add("selected");
    });
  });
});

function buildLanguageSwitch() {
  const currentLanguage = document.documentElement.lang === "en" ? "en" : "fr";
  const path = window.location.pathname;
  const isComparePage = path.endsWith("/compare/") || path.endsWith("/compare/index.html");

  const switchElement = document.querySelector(".lang-switch, .lang");
  if (!switchElement) return;

  const wrapper = document.createElement("span");
  wrapper.className = "lang-switch";
  wrapper.setAttribute("aria-label", currentLanguage === "fr" ? "Choix de la langue" : "Language selection");

  const frenchUrl = currentLanguage === "en"
    ? (isComparePage ? "../../compare/" : "../")
    : null;
  const englishUrl = currentLanguage === "fr"
    ? (isComparePage ? "../en/compare/" : "en/")
    : null;

  if (currentLanguage === "fr") {
    wrapper.innerHTML = `<strong aria-current="page">FR</strong><span aria-hidden="true"> · </span><a href="${englishUrl}" hreflang="en" lang="en">EN</a>`;
  } else {
    wrapper.innerHTML = `<a href="${frenchUrl}" hreflang="fr" lang="fr">FR</a><span aria-hidden="true"> · </span><strong aria-current="page">EN</strong>`;
  }

  switchElement.replaceWith(wrapper);
}

function removeRedundantFooterLanguageNote() {
  document.querySelectorAll("footer .footer-grid > div").forEach((item) => {
    const text = item.textContent.trim();
    if (text === "Français · autres langues prévues" || text === "English · Français") {
      item.remove();
    }
  });
}

buildLanguageSwitch();
removeRedundantFooterLanguageNote();
