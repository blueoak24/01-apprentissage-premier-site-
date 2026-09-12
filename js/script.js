// Récupère le bouton burger
const menuToggle = document.querySelector('.menu-toggle');

// Récupère le menu de navigation
const navMenu = document.querySelector('nav ul');

// Au clic sur le bouton, bascule l'affichage du menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-ouverte');
});
