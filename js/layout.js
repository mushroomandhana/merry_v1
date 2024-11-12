$(document).ready(function () {
  //preload
  $(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({ 'overflow': 'visible' });
  });




  function resize_layout() {
    var window_width = $(window).outerWidth();
    var window_height = $(window).outerHeight();

    $('#width_num').html(window_width);
    $('#height_num').html(window_height);

    if (960 < window_width) {
      $(".switch_div").each(function () {
        $(this).insertAfter($(this).prev())
      })
    } else {
      $(".switch_div").each(function () {
        $(this).insertBefore($(this).prev())
      })
    }


    if (480 < window_width) {
      $(".rplc_img").each(function () {
        var chg_img = $(this).attr('datapc')
        $(this).attr('src', chg_img);
      });

      $('#KV').height(window_height - 66);
    } else {

      $(".rplc_img").each(function () {
        var chg_img = $(this).attr('datamb')
        $(this).attr('src', chg_img);
      });

      $('#KV').height(window_height - 60);
    }


  }



  /**init**/
  resize_layout();

  /**resize**/
  $(window).resize(function () {

    resize_layout();

  });


  //goTop

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.goTop').fadeIn();
    } else {
      $('.goTop').fadeOut();
    }


  });



  //Click event to scroll
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



  // var kv_slider  = $('#kv_slider').lightSlider({
  //         item:1,
  //         loop:true,
  //         slideMargin:0,
  //         controls:false,
  //         pager:false,
  //         auto:true,
  //         enableTouch:false,
  //         enableDrag:false,
  //         speed: 2000,
  //         mode: 'fade',
  //         pause: 4000
  //     });  



  $('.kv_bg').imagesLoaded(function () {
    $('.kv_bg').imagefill();
  });

  $('.sec1_img').imagesLoaded(function () {
    $('.sec1_img').imagefill();
  });

  $('.body_bg').imagesLoaded(function () {
    $('.body_bg').imagefill();
  });




  //rwd menu

  // $('.scroll_btn').click(function(){ 
  //     $('#NAV').toggleClass('reveal');
  //     $('#nav-icon3').toggleClass('open');
  //     $('body').toggleClass('menu-open');
  //   var ta_value = $(this).attr('data');
  //   $('html,body').animate({scrollTop:$(ta_value).offset().top}, 800); 
  // });


  // $('.NAV_btn_wrap').on('click', function(e) {
  //       e.stopPropagation();
  //     $('#NAV').toggleClass('reveal');
  //     $('#nav-icon3').toggleClass('open');

  //     $('body').toggleClass('menu-open');
  //     });



  var wow = new WOW(
    {
      boxClass: 'wow', // 要套用WOW.js縮需要的動畫class(預設是wow)
      animateClass: 'animated', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
      offset: 0, // 距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
      mobile: true, // 手機上是否要套用動畫 (預設是true)
      live: true, // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
      callback: function (box) {
        // 當每個要開始時, 呼叫這裡面的內容, 參數是要開始進行動畫特效的element DOM
      },
      scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
    }
  );
  wow.init();


});