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
