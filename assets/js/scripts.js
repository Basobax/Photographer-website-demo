/*slideshow*/

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow img");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current);
    setInterval(nextSlide, 8000);
  }
});

/*switch light-night mode*/

document.getElementById('toggle-mode').addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});

/*cookies banner*/

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("cookiesAccepted")) {
      document.getElementById("cookie-banner").classList.add("show");
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