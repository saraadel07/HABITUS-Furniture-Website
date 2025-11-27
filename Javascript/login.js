document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const logo = document.getElementById("logo");
  const toggle = document.getElementById("darkModeToggle");

  /* Search */
  const searchBtn = document.getElementById("searchBtn");
  const searchbar = document.getElementById("searchbar");
  const searchClose = document.getElementById("searchClose");

  searchBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    searchbar.style.display = "block";
    searchbar.querySelector("input")?.focus();
  });

  searchClose?.addEventListener("click", () => {
    searchbar.style.display = "none";
  });

  /* Mobile Navigation */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle?.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) navMenu.classList.remove("open");
  });

  /* Dark Mode + Logo */
  function applyTheme(theme) {
    if (theme === "dark") {
      body.classList.add("dark-mode");
      toggle.textContent = "☀️";
      logo.src = "imgs/LOGODARK.png";
    } else {
      body.classList.remove("dark-mode");
      toggle.textContent = "🌙";
      logo.src = "imgs/LOGOLIGHT.png";
    }
  }

  applyTheme(localStorage.getItem("theme") || "light");

  toggle?.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
});