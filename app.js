
// JS-Erweiterung für Etappe 1

const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.nav-btn');

// Navigation
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.section;
    sections.forEach(s => s.classList.remove('active'));
    navButtons.forEach(b => b.classList.remove('active'));
    document.getElementById(target).classList.add('active');
    button.classList.add('active');
  });
});

// Kategorieauswahl (nur visuell)
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`Kategorie "${button.dataset.category}" ausgewählt (noch keine Funktion)`);
  });
});
