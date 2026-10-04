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

const languageLink = document.querySelector(".lang");
if (languageLink && document.documentElement.lang === "fr") {
  const isComparePage = window.location.pathname.endsWith("/compare/") ||
    window.location.pathname.endsWith("/compare/index.html");

  languageLink.textContent = "FR · EN";
  languageLink.href = isComparePage ? "../en/compare/" : "en/";
  languageLink.setAttribute("aria-label", "Passer à la version anglaise");
}
