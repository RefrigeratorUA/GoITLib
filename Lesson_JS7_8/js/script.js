$(function() {
    var $link = $('.tabs_menu a');
    $link.on('click', function(event) {
        event.preventDefault;
        $(this).parent().addClass("tab_active");
        $(this).parent().siblings().removeClass("tab_active");
        var $tab = $(this).attr("href");
        $(".tab_content").not($tab).css("display", "none");
        $($tab).fadeIn();
    });

    var $input_ = $(this).find('input');
    var $input_id_mouse;
    var $input_id_focus;
    var $input_title_mouse;
    var $input_title_focus;

    $input_.on('mouseenter', function(event) {
        event.preventDefault;
        if (($(this).attr('title') !== undefined) && ($(this).attr('title') !== "")) {
            $input_title_mouse = $(this).attr('title');
            $input_id_mouse = $(this).attr('id');
            $(this).removeAttr('title');
            display($input_id_mouse, $input_title_mouse);
        }
    });
    $input_.on('focus', function(event) {
        event.preventDefault;
        if (($(this).attr('title') !== undefined) && ($(this).attr('title') !== "")) {
            $input_title_focus = $(this).attr('title');
            $input_id_focus = $(this).attr('id');
            $(this).removeAttr('title');
            display($input_id_focus, $input_title_focus);
        }
    });
    $input_.on('mouseleave', function(event) {
        event.preventDefault;
        if ($(this).attr('id') === $input_id_mouse) {
            $(this).attr('title', $input_title_mouse);
            noDisplay($input_id_mouse);
            $input_title_mouse = undefined;
            $input_id_mouse = undefined;
        }
    });
    $input_.on('focusout', function(event) {
        event.preventDefault;
        if ($(this).attr('id') === $input_id_focus) {
            $(this).attr('title', $input_title_focus);
            noDisplay($input_id_focus);
            $input_title_focus = undefined;
            $input_id_focus = undefined;
        }
    });

    function display($id, $title) {
        var $idshnik = $('#' + $id);
        $idshnik.parent().append('<div class=' + 'title' + '>' + $title + '</div>');
    }

    function noDisplay($id) {
        var $idshnik = $('#' + $id);
        $idshnik.parent().find('div.title').remove();
    }

    $('button').on('click', function(event) {
        event.preventDefault;
        for (var i = 0; i < $input_.length; i++) {
            if (($input_[i].title !== undefined) && ($input_[i].title !== "")) {
                noDisplay($input_[i].id, $input_[i].title);
                display($input_[i].id, $input_[i].title);
            }
        }
    });
});
