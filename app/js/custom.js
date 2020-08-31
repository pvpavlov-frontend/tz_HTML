$(window).on('load', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
});
/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */
$(function() {
    /* placeholder*/
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() { $(this).attr('placeholder', ''); });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    /* sidebar */

    $('.sidebar__button').on('click', function(e) {
        $('.list').slideUp('slow'),
            $('.sidebar__button').removeClass('active');
        $(this).removeClass('active');
        if ($(this).parent().find('.list').is(':visible'))
            $(this).parent().find('.list').slideUp('slow')
        else
            $(this).parent().find('.list').slideToggle('slow'),
            $(this).toggleClass('active');
        e.preventDefault();
        e.stopPropagation();
    });

    /* sidebar */
    /* select2*/
    $('#select2').select2({
        minimumResultsForSearch: -1,
        selectOnClose: true,
    });
    $('#select2').on('select2:open', function() {
        $('.select2-results .select2-results__options').mCustomScrollbar('destroy');
        $('.select2-results .select2-results__options').mCustomScrollbar('update');
        setTimeout(function() {
            $('.select2-results .select2-results__options').mCustomScrollbar({
                setHeight: 140,
                axis: 'y',
                scrollbarPosition: 'inside',
                advanced: {
                    updateOnContentResize: true
                },
                live: true
            });
        }, 0);
    });
    /* select2*/

    /* components */

    /*
	
    if($('.styled').length) {
    	$('.styled').styler();
    };
    if($('.fancybox').length) {
    	$('.fancybox').fancybox({
    		margin  : 10,
    		padding  : 10
    	});
    };
   */

    if ($('.slick-slider').length) {
        $('.slick-slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    };

    if ($('.scrollBar').length) {
        $(".scrollBar").mCustomScrollbar({
            setHeight: 180,
            axis: "y",
        });
    };
    /* components */
});

var handler = function() {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }

}
$(window).bind('load', handler);
$(window).bind('resize', handler);