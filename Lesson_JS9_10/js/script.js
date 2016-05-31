$(function() {
    //CAROUSEL
    $('.jcarousel').jcarousel({
        wrap: 'circular',
        animation: {
            duration: 900,
            easing: 'easeInOutCubic',
            complete: function() {}
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

    $('checkbox, #brand2').attr('checked', true);
    $('checkbox, #brand2').attr('disabled', true).trigger('refresh');
    $('checkbox, #brand4').attr('checked', true);
    $('checkbox, #brand4').attr('disabled', true).trigger('refresh');

    //Активируем/деактивируем
    var $activate = true;
    $('button.activate').click(function(e) {
        e.preventDefault();
        if ($activate) {
            $('button.activate')[0].innerHTML = "Активировать";
            $('checkbox, .only_js').attr('disabled', true).trigger('refresh');
            $activate = false;
        } else {
            $('button.activate')[0].innerHTML = "Деактивировать";
            $('checkbox, .only_js').attr('disabled', false).trigger('refresh');
            $activate = true;
        }
    });
    //Меняем состояние активности
    $.fn.toggleDisabled = function() {
        return this.each(function() {
            this.disabled = !this.disabled;
        });
    };
    $('button.reverse').click(function(e) {
        e.preventDefault();
        $(this).closest('div.checks').find('checkbox, .only_js').toggleDisabled().trigger('refresh');
    });
    //Отмечаем или оменяем все
    $.fn.toggleChecked = function() {
        return this.each(function() {
            this.checked = !this.checked;
        });
    };
    var $select = true;
    $('button.selectall').click(function(e) {
        e.preventDefault();
        if ($select) {
            $select = false;
            $('button.selectall')[0].innerHTML = "Отменить все";
            for (var i = 1; i <= $('checkbox, .only_js').length / 2; i++) {
                if (!$('checkbox, #brand' + i).is(':disabled')) {
                    if (!$('checkbox, #brand' + i).is(':checked')) {
                        $('checkbox, #brand' + i).toggleChecked().trigger('refresh');
                    }
                }
            }
        } else {
            $('button.selectall')[0].innerHTML = "Выбрать все";
            $select = true;
            for (var i = 1; i <= $('checkbox, .only_js').length / 2; i++) {
                if (!$('checkbox, #brand' + i).is(':disabled')) {
                    if ($('checkbox, #brand' + i).is(':checked')) {
                        $('checkbox, #brand' + i).toggleChecked().trigger('refresh');
                    }
                }
            }
        }

    });

    $('checkbox, .only_css').styler('destroy');


    // Animation menu
    var i = 0;
    $('li.dropdown').on('mouseenter', function() {
        var $ulist = $(this).children('ul');
        var $list = $ulist.children('li');
        var $dispLi = function() {
            if (i < $list.length) {
                $list.eq(i).animate({
                    opacity: 1
                }, 500);
                i++;
            } else {
                clearInterval($dispLiID);
                i = 0;
            }
        };
        var $dispLiID = setInterval($dispLi, 50);
    });
    $('li.dropdown').on('mouseleave', function() {
        var $ulist = $(this).find('ul');
        var $list = $ulist.find('li');
        i = 0;
        $list.animate().stop();
        $list.css("opacity", "0");
    });

});
