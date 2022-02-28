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

sliderOpen.forEach((item) => {
  item.addEventListener('click', () => {
    sliderThesis.forEach((item) => {
      item.style.display = 'none';
    });
    sliderText.forEach((item) => {
      item.style.display = 'block';
    });
    sliderClose.forEach((item) => {
      item.style.display = 'flex';
    });
    sliderOpen.forEach((item) => {
      item.style.display = 'none';
    });
  });
});

sliderClose.forEach((item) => {
  item.addEventListener('click', () => {
    sliderThesis.forEach((item) => {
      item.style.display = 'block';
    });
    sliderText.forEach((item) => {
      item.style.display = 'none';
    });
    sliderClose.forEach((item) => {
      item.style.display = 'none';
    });
    sliderOpen.forEach((item) => {
      item.style.display = 'flex';
    });
  });
});

// map

const mapBtnOpen = document.querySelector('.map__btn_open');
const mapBtnClose = document.querySelector('.map__btn_close');
const mapMsk = document.querySelector('.map__msk');
const mapSpb = document.querySelector('.map__spb');
const mapInput = document.querySelector('.map__input');
const contactChoice1 = document.querySelector('#contactChoice1');
const contactChoice2 = document.querySelector('#contactChoice2');

mapBtnOpen.addEventListener('click', () => {
  mapBtnClose.style.display = 'flex';
  mapBtnOpen.style.display = 'none';
  mapInput.style.display = 'flex';
  mapMsk.style.display = 'block';
});


mapBtnClose.addEventListener('click', () => {
  mapBtnClose.style.display = 'none';
  mapBtnOpen.style.display = 'flex';
  mapInput.style.display = 'none';
  mapMsk.style.display = 'none';
  mapSpb.style.display = 'none';
});

contactChoice2.addEventListener('click', () => {
	mapMsk.style.display = 'none';
	mapSpb.style.display = 'block'
})

contactChoice1.addEventListener('click', () => {
	mapMsk.style.display = 'block';
	mapSpb.style.display = 'none';
})
