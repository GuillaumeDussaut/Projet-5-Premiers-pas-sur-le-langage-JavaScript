const slides = document.querySelectorAll('.banner-img');
const dots = document.querySelectorAll('.dot');
const precedent = document.querySelector('.arrow_left');
const suivant = document.querySelector('.arrow_right');
const txtImg = document.querySelectorAll('.tagline p')
const nbSlide = slides.length;
let count = 0;

// fleche droite (suivant)

function slideSuivante(){
	slides[count].classList.remove('active');
	dots[count].classList.remove('dot_selected');
	txtImg[count].classList.remove('active');
	txtImg[count].classList.add('none')


	if(count < nbSlide - 1){
		count++;
	} else {
		count = 0;
	}

	slides[count].classList.add('active')
	dots[count].classList.add('dot_selected')
	txtImg[count].classList.add('active')
	txtImg[count].classList.remove('none')
	


}
suivant.addEventListener('click', slideSuivante)

// fleche gauche (precedent)

function slidePrecedente(){
	slides[count].classList.remove('active');
	dots[count].classList.remove('dot_selected');
	txtImg[count].classList.remove('active');
	txtImg[count].classList.add('none')

	if(count > 0){
		count--;
	} else {
		count = nbSlide - 1;
	}
	
	slides[count].classList.add('active')
	dots[count].classList.add('dot_selected')
	txtImg[count].classList.add('active')
	txtImg[count].classList.remove('none')
}
precedent.addEventListener('click', slidePrecedente)

// dots 

