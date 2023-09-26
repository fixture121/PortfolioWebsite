function toggleMenu() {
    // Target the .menu-links and .hamburger-icon elements so that when they are clicked, different styles are applied
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
