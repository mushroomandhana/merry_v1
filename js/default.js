//go to top button
$(window).scroll(function () {
    var a = $(window).scrollTop();
    if (a > 500) {
        $(".up").show();
    } else {
        $(".up").hide();
    }
});

//scroll to top
$(function () {
    $('.up').click(function () {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});


// smooth scrollTo
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').stop(0, 1).animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
});


//mobile nav switch
$(function () {
    $('.header .burger').click(function () {
        //$(this).toggleClass('active');
        //$('.nav-container').toggleClass('active');
        $('.nav-container').removeClass('hide-mobile');

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.nav-container').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.nav-container').addClass('active');
        }
    });
    $('.main-nav a').click(function () {
        $('.nav-container').addClass('hide-mobile');
        $('.header .burger').removeClass('active');
    });

});





// scrollReveal
$(function () {
    window.sr = ScrollReveal({
        reset: true,
        mobile: true,
        duration: 1000,
        origin: 'bottom',
        distance: '20%',
        opacity: 0,
        scale: 0,
        delay: 0,
        easing: 'cubic-bezier( 0.6, 0.2, 0.1, 1 )',
    });
    /*
    sr.reveal('.circle', {
        distance: '0%',
        opacity: 0,
        duration: 1500,
        delay:0,
        rotate: {
            x: 0,
            y: 0,
            z: -90
        }
    })
    */
    sr.reveal('.section-about .box', {
    })
    sr.reveal('.text_area', {
    })
    sr.reveal('.ev_container .employee_voice', {
    })
    sr.reveal('.ev_container .map', {
    })
    sr.reveal('.article_table', {
    })
    sr.reveal('.section-readmore .entry:nth-child(3)', {
        delay: 600
    })

});


//swiper
$(function () {
    const swiper = new Swiper('#swiper1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });
    const swiper2 = new Swiper('#swiper2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 1300,
            disableOnInteraction: false,
        },
    });
    const swiper3 = new Swiper('#swiper3', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 1600,
            disableOnInteraction: false,
        },
    });
    const swiper4 = new Swiper('#swiper4', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 1900,
            disableOnInteraction: false,
        },
    });
});


// rwd menu and goTop 
// 使用 $(document).ready()：確保 JS 在 DOM 完全加載後執行
$(document).ready(function () {
    $('.scroll_btn').click(function () {
        $('#NAV').toggleClass('reveal');
        $('#nav-icon3').toggleClass('open');
        $('body').toggleClass('menu-open');
        var ta_value = $(this).attr('data');
        $('html,body').animate({ scrollTop: $(ta_value).offset().top }, 800);
    });

    $('.NAV_btn_wrap').on('click', function (e) {
        e.stopPropagation();
        $('#NAV').toggleClass('reveal');
        $('#nav-icon3').toggleClass('open');
        $('body').toggleClass('menu-open');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').fadeOut();
        }
    });

    $('.goTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    $('.file_item').eq(0).show();
    $('.film_btn').on('click', function (e) {
        e.stopPropagation();
        var ta_index = $(this).index();
        $('.file_item').eq(ta_index).show().siblings().hide();
    });
});

