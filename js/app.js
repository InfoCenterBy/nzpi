// radio language reset
$(function () {
     $('input[name="langBtn"]').click(function () {
          var $radio = $(this);
          // if this was previously checked
          if ($radio.data('waschecked') == true) {
               $radio.prop('checked', false);
               $radio.data('waschecked', false);
          } else $radio.data('waschecked', true);
          // remove was checked from other radios
          $radio.siblings('input[name="langBtn"]').data('waschecked', false);
     });
});
//

let visionBtn = document.querySelector('.vision-btn');

if (visionBtn) {
     visionBtn.addEventListener('click', () => {
          visionBtn.querySelector('i').classList.toggle('bi-eye');
          visionBtn.querySelector('i').classList.toggle('bi-eye-slash');
     });
}

$('.burger, .overlay').click(function () {
     $('.burger').toggleClass('show');
     $('.overlay').toggleClass('show');
     $('nav.mobile-menu').toggleClass('show');
});

//adaptive margin
const topHeader = document.querySelector('#topHeader');
const mobMenu = document.querySelector('nav.mobile-menu');
const mobList = document.querySelector('nav.mobile-menu .mobile-list');

function calcBlockMargin() {
     if (topHeader) {
          let numberHeight = new Number(topHeader.offsetHeight) + 55 + 'px';
          mobMenu.style.marginTop = numberHeight;
          mobList.style.paddingBottom = numberHeight;
     }
}

window.addEventListener('load', calcBlockMargin);
window.addEventListener('resize', calcBlockMargin);

const swiperNews = new Swiper('#swiperNews', {
     speed: 400,
     navigation: {
          nextEl: '#swiperNews .swiper-button-next',
          prevEl: '#swiperNews .swiper-button-prev',
     },
     pagination: {
          el: '.swiper-pagination',
          clickable: true,
     },
});

const swiperPhoto = new Swiper('#swiperPhoto', {
     speed: 400,
     slidesPerView: 1,
     spaceBetween: 20,
     navigation: {
          nextEl: '#photoNav .swiper-button-next',
          prevEl: '#photoNav .swiper-button-prev',
     },
     breakpoints: {
          1100: {
               slidesPerView: 2,
          },
     },
});

const swiperVideo = new Swiper('#swiperVideo', {
     speed: 400,
     slidesPerView: 1,
     spaceBetween: 20,
     navigation: {
          nextEl: '#videoNav .swiper-button-next',
          prevEl: '#videoNav .swiper-button-prev',
     },
     breakpoints: {
          1100: {
               slidesPerView: 2,
          },
     },
});

const swiperNet = new Swiper('#swiperNet', {
     speed: 400,
     slidesPerView: 4,
     spaceBetween: 24,
     navigation: {
          nextEl: '#netNav .swiper-button-next',
          prevEl: '#netNav .swiper-button-prev',
     },
     breakpoints: {
          320: {
               slidesPerView: 1,
          },
          640: {
               slidesPerView: 2,
          },
          1000: {
               slidesPerView: 2,
          },
          1100: {
               slidesPerView: 3,
          },
          1200: {
               slidesPerView: 4,
          },
     },
});

let sortBtn = document.querySelectorAll('.sort-btn');

if (sortBtn) {
     sortBtn.forEach((el) => {
          el.addEventListener('click', () => {
               el.classList.toggle('sort-btn-clicked');
          });
     });
}
