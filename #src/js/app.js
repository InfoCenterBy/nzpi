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
     let numberHeight = new Number(topHeader.offsetHeight) + 55 + 'px';
     mobMenu.style.marginTop = numberHeight;
     mobList.style.paddingBottom = numberHeight;
}

window.addEventListener('load', calcBlockMargin);
window.addEventListener('resize', calcBlockMargin);