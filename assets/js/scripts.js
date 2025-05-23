document.addEventListener("DOMContentLoaded", () => {
  /* slideshow */
  const slides = document.querySelectorAll(".slideshow img");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 8000);
  }

  /* theme toggle */
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  const toggleMode = document.getElementById("toggle-mode");
  if (toggleMode) {
    toggleMode.addEventListener("click", () => {
      const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  /* language switch */
  const langBtn = document.getElementById("toggle-lang");
  let currentLang = localStorage.getItem("lang") || "en";

  if (langBtn) {
    const switchLanguage = (lang) => {
      document.querySelectorAll("[data-lang]").forEach(el => {
        el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
      });
      langBtn.innerHTML = lang === "en" ? "ITA" : "ENG";
    };

    switchLanguage(currentLang);

    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "it" : "en";
      localStorage.setItem("lang", currentLang);
      switchLanguage(currentLang);
    });
  }

  /* cookie banner */
  const banner = document.getElementById("cookie-banner");
  if (banner && !localStorage.getItem("cookiesAccepted")) {
    banner.classList.add("show");
  }
});


function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookie-banner").classList.remove("show");
}

function rejectCookies() {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookie-banner").classList.remove("show");
}
