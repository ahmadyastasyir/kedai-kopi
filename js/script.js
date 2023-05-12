// toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di click
document.querySelector("#ham-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// ketika search button di click
document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

// ketika shopping cart di click
document.querySelector("#shopping-cart-button").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
};

// klik di luar element
const menu = document.querySelector("#ham-menu");
const sb = document.querySelector("#search-button");
const scb = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
    }
    if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove("active");
    }
});

//  modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
});

//  klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
};
