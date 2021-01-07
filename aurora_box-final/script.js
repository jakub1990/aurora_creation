const hamburgerIcon = document.querySelector('.icon-hamburger i');
const mainMenu = document.querySelector('.main-menu');
const closeMenuBtn = document.querySelector('.btn-mobile-close');



hamburgerIcon.addEventListener('click', () => {
  mainMenu.classList.toggle('mobile-menu-active');
});


closeMenuBtn.addEventListener('click', () => {
  mainMenu.classList.remove('mobile-menu-active');
});