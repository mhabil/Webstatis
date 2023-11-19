// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// humburger-menu diklik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
