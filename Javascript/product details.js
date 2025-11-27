document.addEventListener("DOMContentLoaded", () => {
    // SEARCH BAR
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

    // MOBILE NAVIGATION
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle?.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 991) {
            navMenu.classList.remove("open");
        }
    });

    // DARK MODE + LOGO
    const body = document.body;
    const logo = document.getElementById("logo");
    const toggle = document.getElementById("darkModeToggle");
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

// Quantity Controls
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".qty-btn");
    if (!btn) return;

    const wrap = btn.closest("[data-qty]");
    if (!wrap) return;

    const valueEl = wrap.querySelector(".qty-value");
    let value = parseInt(valueEl.textContent, 10);

    if (isNaN(value) || value < 1) value = 1;

    if (btn.dataset.action === "increase") {
        value++;
    } else if (btn.dataset.action === "decrease" && value > 1) {
        value--;
    }

    valueEl.textContent = value;
});
