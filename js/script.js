// menuFixed
const header = document.querySelector('header');
// const headerUp = document.querySelector('.header__up');

if( window.innerWidth >=  1201){
	headerTop();
} 

function headerTop() {
	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= '50') {
			header.style.cssText = `
			position: fixed; 
			top: -22px;
			left: 50%;
			transform: translateX(-50%);
			// padding: 22px auto;
			// padding-top: 22px;
			height: 90px;
			transition: .1s all;
			z-index: 7777;
			background: #fff;
			margin: 22px auto;
			width: 100%;
			box-shadow: 0 1px 5px rgb(0 0 0 / 14%);
			// border: 2px solid #E22F22;
			`;
		} else {
			header.style.cssText = 'position: relative; transition: .1s all;';
		}
	});
	
}

// function headerTopMob() {
// 	window.addEventListener('scroll', () => {
// 		if (window.pageYOffset >= '50') {
// 			headerUp.style.cssText = `
// 			position: fixed; 
// 			top: 0;
// 			left: 50%;
// 			transform: translateX(-50%);
// 			transition: .1s all;
// 			z-index: 7777;
// 			width: 100%;
// 			`;
// 		} else {
// 			headerMob.style.cssText = 'position: relative; transition: .1s all;';
// 		}
// 	});
	
// }



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

// внутри бургера при переходе по ссылкам на стр закрытие бургера
let menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', () => {
    menu.classList.remove('active');
    bodyLock.classList.remove('lock');
  });
}

// modal
const managerBtn = document.querySelector('.manager__btn');
const modalClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modal2Close = document.querySelector('.modal2__close');

managerBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
  bodyLock.classList.add('lock');
	modal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
  overlay.style.display = 'none';
  bodyLock.classList.remove('lock');
});

modal2Close.addEventListener('click', () => {
  modal2.style.display = 'none';
  overlay.style.display = 'none';
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
  mapSpb.style.display = 'block';
});

contactChoice1.addEventListener('click', () => {
  mapMsk.style.display = 'block';
  mapSpb.style.display = 'none';
});

// jQuery
$(document).ready(function () {
  // плавность перехода по всем ссылкам на сайте
  $("a[href^='#']").click(function () {
    const _href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(_href).offset().top + 'px',
    });
    return false;
  });

  // Masked Input
  $('input[name=phone').mask('+7 (999) 999-9999');
  $('input[name=phone2').mask('+7 (999) 999-9999');

  // Ajax
  $('form').submit(function (e) {
    e.preventDefault();

    // if (!$(this).valid()) {
    //   return;
    // }

    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');
      $('#modal').fadeOut();
      $('#overlay, #thanks').fadeIn('750');

      $('form').trigger('reset');
    });
    return false;
  });
});
