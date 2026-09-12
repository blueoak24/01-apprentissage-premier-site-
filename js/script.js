// Récupère le bouton burger
const menuToggle = document.querySelector('.menu-toggle');

// Récupère le menu de navigation
const navMenu = document.querySelector('nav ul');

// Au clic sur le bouton, bascule l'affichage du menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-ouverte');
});

// Diaporama de la page d'accueil
const diapos = document.querySelectorAll('.diapo');

if (diapos.length > 0) {
  let indexActuel = 0;

  setInterval(() => {
    diapos[indexActuel].classList.remove('active');
    indexActuel = (indexActuel + 1) % diapos.length;
    diapos[indexActuel].classList.add('active');
  }, 4000);
}
