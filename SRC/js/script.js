$(function() {
  let resolutionMobile = 426;
  let x = window.innerWidth;
  console.log(x);

  if (x < resolutionMobile) {
    $('#header_menu-js').hide();
  };

  $('#menu-js').on('click', function () {
    if (x < resolutionMobile) {
      $('#header_menu-js').toggle(250);
    };
  })

  $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();

      let sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */

      $('html, body').animate({scrollTop: dn}, 500);

      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
});
