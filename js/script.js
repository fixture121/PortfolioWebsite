function toggleMenu() {
  // Target the .menu-links and .hamburger-icon elements so that when they are clicked, different styles are applied
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// When the moon icon is clicked, the website switches to dark mode
var moon = document.getElementById('moon');
moon.onclick = function () {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    moon.src = 'images/sun.png';
  } else {
    moon.src = 'images/moon.png';
  }

  // Change social media icons based on the mode
  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    const iconName = icon.dataset.name;
    if (isDarkMode) {
      icon.src = `images/${github}.png`;
    } else {
      icon.src = `images/${linkedin}.png`;
    }
  });
};
