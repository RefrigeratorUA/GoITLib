$(function() {
//CAROUSEL
    $('.jcarousel').jcarousel({
        wrap: 'circular',
        animation: {
            duration: 900,
            easing: 'easeInOutCubic',
            complete: function() {
            }
        }
    });
    $('.jcarousel-prev').jcarouselControl({
          target: '-=1'
      });

      $('.jcarousel-next').jcarouselControl({
      target: '+=1'
  });

    $('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
    });
    $('.jcarousel-pagination')
              .on('jcarouselpagination:active', 'a', function() {
                  $(this).addClass('active');
              })
              .on('jcarouselpagination:inactive', 'a', function() {
                  $(this).removeClass('active');
              })
              .jcarouselPagination();

    $('.jcarousel').jcarouselAutoscroll({
      interval: 5000,
      target: '+=1',
      autostart: true
    });

//SELECT
$('input, select').styler();
//CHECKBOX
$('input, checkbox').styler();

var $dis = true;
$('button.activate').click(function(e) {
  e.preventDefault();
  /* делаем чекбокс неактивным */
  if ($dis) {
      /* обновляем состояние псевдочекбокса */
      $('button.activate')[0].innerHTML = "Активировать";
      $('input:checkbox').attr('disabled', true).trigger('refresh');
      $dis = false;
  } else {
      $('button.activate')[0].innerHTML = "Деактивировать";
      $('input:checkbox').attr('disabled', false).trigger('refresh');
      $dis = true;
  }
});

});
