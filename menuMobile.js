document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header__menu-icon");
  const menu = document.querySelector(".header__menu");

  const menuIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2.66663 8H13.3333M2.66663 4H13.3333M2.66663 12H13.3333" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;

  const closeIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 4L12 12M4 12L12 4" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
  function toggleMenu() {
    menuButton.classList.toggle("opened");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    menuButton.innerHTML =
      menu.style.display === "block" ? closeIcon : menuIcon;
  }
  menuButton.addEventListener("click", toggleMenu);
});
