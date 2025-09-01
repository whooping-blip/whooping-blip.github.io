
const qEl = document.getElementById('question');
const input = document.getElementById('inputCity');
const btn = document.getElementById('checkBtn');
const out = document.getElementById('output');

let countries = [];
let current = null;

const simplify = s =>
  s.toLowerCase()
   .normalize('NFD')
   .replace(/[̀-ͯ]/g, '')
   .replace(/ß/g, 'ss')
   .replace(/[^a-z]/g, '');

function next() {
  current = countries[Math.floor(Math.random() * countries.length)];
  qEl.textContent = `Wie heißt die Hauptstadt von ${current.name}?`;
  input.value = '';
  out.textContent = '';
  input.focus();
}

btn.addEventListener('click', () => {
  if (!current) return;
  const ok = simplify(input.value) === simplify(current.capital);
  if (ok) {
    out.textContent = `👍 Richtig – ${current.capital}`;
    setTimeout(next, 1500);
  } else {
    out.textContent = '❌ Falsch, versuch’s erneut.';
  }
});

fetch('countries.json')
  .then(r => r.json())
  .then(json => {
    countries = json.filter(c => c.capital);
    next();
  })
  .catch(err => {
    qEl.textContent = 'Konnte Länder-Liste nicht laden.';
    console.error(err);
  });
