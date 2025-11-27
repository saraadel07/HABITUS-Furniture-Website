// Search Bar Toggle
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

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 991) navMenu.classList.remove('open');
});

// Dark Mode Toggle + Logo Swap
const toggle = document.getElementById('darkModeToggle');
const body = document.body;
const logo = document.getElementById('logo');

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        toggle.textContent = '☀️';
        logo.src = 'imgs/LOGODARK.png';
    } else {
        body.classList.remove('dark-mode');
        toggle.textContent = '🌙';
        logo.src = 'imgs/LOGOLIGHT.png';
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

toggle?.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

// Countdown Timer (7 days)
const dEl = document.getElementById('d');
const hEl = document.getElementById('h');
const mEl = document.getElementById('m');
const sEl = document.getElementById('s');

const end = new Date();
end.setDate(end.getDate() + 7);

function tick() {
    const now = new Date();
    const diff = end - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const mins = Math.floor(diff / (1000 * 60)) % 60;
    const secs = Math.floor(diff / 1000) % 60;

    dEl.textContent = String(days).padStart(2, '0');
    hEl.textContent = String(hours).padStart(2, '0');
    mEl.textContent = String(mins).padStart(2, '0');
    sEl.textContent = String(secs).padStart(2, '0');
}

tick();
setInterval(tick, 1000);