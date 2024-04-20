const section1 = document.getElementById('section1');
const titre1 = section1.querySelector('h5');
const texte1 = section1.querySelector('.texte-cacher');

titre1.addEventListener('click', function() {
  if (texte1.style.display === 'none') {
    texte1.style.display = 'block';
  } else {
    texte1.style.display = 'none';
  }
});

const section2 = document.getElementById('section2');
const titre2 = section2.querySelector('h5');
const texte2 = section2.querySelector('.texte-cacher');

titre2.addEventListener('click', function() {
  if (texte2.style.display === 'none') {
    texte2.style.display = 'block';
  } else {
    texte2.style.display = 'none';
  }
});

const section3 = document.getElementById('section3');
const titre3 = section3.querySelector('h5');
const texte3 = section3.querySelector('.texte-cacher');

titre3.addEventListener('click', function() {
  if (texte3.style.display === 'none') {
    texte3.style.display = 'block';
  } else {
    texte3.style.display = 'none';
  }
});
