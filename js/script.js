// аккордион вопросы

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


// аккордион тариф

const tarifsSeasons = document.querySelectorAll('.tarifs__seasons');

tarifsSeasons.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });
});


// menu mobile
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const bodyLock = document.querySelector('body');


hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  bodyLock.classList.add('lock');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  bodyLock.classList.remove('lock');
});

// Tiny Slider
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  mouseDrag: true,
  controls: false,
});


// кнопки для слайдера
document.querySelector('.slider__prev').addEventListener('click', () => {
	slider.goTo('prev');
});
document.querySelector('.slider__next').addEventListener('click', () => {
	slider.goTo('next');
});

const sliderOpen = document.querySelectorAll('.slider__open');
const sliderClose = document.querySelectorAll('.slider__close');
const sliderThesis = document.querySelectorAll('.slider__thesis');
const sliderText = document.querySelectorAll('.slider__text');

console.log(sliderOpen);

sliderOpen.forEach((item) => {
  item.addEventListener('click', () => {
		sliderThesis.forEach((item) => {
			item.style.display = 'none';
		})
    sliderText.forEach((item) => {
			item.style.display = 'block';
		})
		sliderClose.forEach((item) => {
			item.style.display = 'flex';
		})
		sliderOpen.forEach((item) => {
			item.style.display = 'none';
		})
  });
});

sliderClose.forEach((item) => {
  item.addEventListener('click', () => {
		sliderThesis.forEach((item) => {
			item.style.display = 'block';
		})
    sliderText.forEach((item) => {
			item.style.display = 'none';
		})
		sliderClose.forEach((item) => {
			item.style.display = 'none';
		})
		sliderOpen.forEach((item) => {
			item.style.display = 'flex';
		})
  });
});


// slider old

// const historyLink1 = document.querySelector('.history__link1');
// const historyLink2 = document.querySelector('.history__link2');
// const historyLink3 = document.querySelector('.history__link3');
// const historyLink4 = document.querySelector('.history__link4');
// const overlay = document.querySelector('.overlay');
// const sliderBlock2 = document.querySelector('.slider__block2');
// // const bodyLock = document.querySelector('body');
// const questionsList = document.querySelector('.questions__list');
// const tns1Ow = document.querySelector('#tns1-ow');

// historyLink1.addEventListener('click', () => {
// overlay.style.display = 'block';
// questionsList.style.display = 'none';
// bodyLock.classList.add('lock');
// tns1Ow.style.display = 'none';
// });
