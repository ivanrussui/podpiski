// аккордион

const questionsListItem = document.querySelectorAll('.questions__list-item');

questionsListItem.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });
});





// // Tiny Slider
// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
// 	mouseDrag: true,
// 	controls: false,
// 	// navPosition: bottom
// });

// const slider2 = tns({
//   container: '.carousel__inner2',
//   items: 1,
//   slideBy: 'page',
// 	mouseDrag: true,
// 	controls: false,
// 	// navPosition: bottom
// });


// menu 
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const bodyLock = document.querySelector('body');

console.log(hamburger);

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  bodyLock.classList.add('lock');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  bodyLock.classList.remove('lock');
});

// slider 

const historyLink1 = document.querySelector('.history__link1');
const historyLink2 = document.querySelector('.history__link2');
const historyLink3 = document.querySelector('.history__link3');
const historyLink4 = document.querySelector('.history__link4');
const overlay = document.querySelector('.overlay');
const sliderBlock2 = document.querySelector('.slider__block2');
// const bodyLock = document.querySelector('body');
const questionsList = document.querySelector('.questions__list');
const tns1Ow = document.querySelector('#tns1-ow');

// historyLink1.addEventListener('click', () => {
	// overlay.style.display = 'block';
	// questionsList.style.display = 'none';
	// bodyLock.classList.add('lock');
	// tns1Ow.style.display = 'none';
// });