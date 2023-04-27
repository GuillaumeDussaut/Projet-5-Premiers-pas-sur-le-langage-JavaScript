const slides = [
	{
	  "image":"slide1.jpg",
	  "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image":"slide2.jpg",
	  "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image":"slide3.jpg",
	  "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image":"slide4.png",
	  "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	} ];
const nbSlides = slides.length;
let numero = 0;
const suivant = document.querySelector(".arrow_right");
const precedent = document.querySelector(".arrow_left");
const slider = document.getElementById('slider');
const dotsContainer = document.querySelector('.dots');
const txtImg = document.querySelector('.tagLine');

// partie dots creation
for (let i = 0; i < nbSlides; i++) {
	const dot = document.createElement('span');
	dot.classList.add('dot');
  
// Ajouter la classe .dot_selected si c'est la première slide
	if (i == 0) {
	  dot.classList.add('dot_selected');
	}
  
	dot.addEventListener('click', () => {
	  numero = i;
	  showSlide(numero);
	});
  
	dotsContainer.appendChild(dot);
} 
// src img du slide
function showSlide(num) {
	slider.src = './assets/images/slideshow/' + slides[num].image;
  
// Mettre à jour la classe `dot_selected` en fonction de la slide affichée
	const dots = dotsContainer.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
	  if (i === num) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
});
	const texteImage = txtImg.innerHTML = slides[num].tagLine;
}
 
// Fleche droite
function slideSuivante() {
	numero++;
	if (numero > nbSlides - 1) {
	  numero = 0;
	}
	showSlide(numero);
}
  
suivant.addEventListener('click', slideSuivante);
  
// Fleche gauche
function slidePrecedente() {
	numero--;
	if (numero < 0) {
	  numero = nbSlides - 1;
	}
	showSlide(numero);
}
  
precedent.addEventListener('click', slidePrecedente);



