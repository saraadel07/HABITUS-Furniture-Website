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
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 991) navMenu.classList.remove("open");
});

// Dark Mode Toggle + Logo Swap
const toggle = document.getElementById("darkModeToggle");
const body = document.body;
const logo = document.getElementById("logo");

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

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

toggle?.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});

// Update product row total
function updateTotal(input) {
    const row = input.closest("tr");
    const priceText = row.children[1].textContent.trim().replace(" EGP", "").replace(",", "");
    const quantity = parseInt(input.value);
    const total = priceText * quantity;

    row.querySelector(".total-cell").textContent =
        new Intl.NumberFormat().format(total) + " EGP";

    updateGrandTotal();
}

// Update overall grand total
function updateGrandTotal() {
    let total = 0;
    document.querySelectorAll(".total-cell").forEach(cell => {
        const amount = parseFloat(
            cell.textContent.replace(" EGP", "").replace(/,/g, "")
        );
        total += amount;
    });

    document.getElementById("grand-total").textContent =
        "Grand Total: " + new Intl.NumberFormat().format(total) + " EGP";
}

// Submit Order Message
document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitOrderBtn");
    const message = document.getElementById("order-message");

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const grandTotalText = document.getElementById("grand-total").textContent;
        const totalValue = parseFloat(
            grandTotalText.replace("Grand Total: ", "").replace(" EGP", "").replace(/,/g, "")
        );

        if (isNaN(totalValue) || totalValue === 0) {
            message.textContent = "Your cart is empty. Please add items before submitting.";
            message.style.color = "red";
        } else {
            message.textContent = "Order Submitted! Thank you for ordering from our website!";
            message.style.color = "green";

            setTimeout(() => window.location.href = "index.html", 2500);
        }
    });
});