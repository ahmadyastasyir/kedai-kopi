// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di click
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan navbarnya
const menu = document.querySelector("#ham-menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
