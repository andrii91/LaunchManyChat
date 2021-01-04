$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('#nav-icon').click(function () {
    $('.hamburger').toggleClass('is-active')
    $('.nav').toggleClass('menu-open')

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu').slideToggle();
    $('header, main,footer').toggleClass('blur');
    $('body').toggleClass('overflow-hidden')

  });


  $(".slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        }
    },
      {
        breakpoint: 480,
        settings: {
          dots: true,
        }
    }
  ]
  });


  $(".buyers-slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
    }
  ]
  });


  /*==================================*/

  var anim1Frame1, anim1Frame2, anim1Frame3, anim1Frame4, anim1Frame5, anim1Frame6, anim1Frame7, anim1Frame8, anim1Frame9, anim1Frame10, anim1Frame11, anim1Frame12, anim1Frame13, anim1Frame14;


  function frameAnimation1() {
    anim1Frame1 = window.setTimeout(function () {
      $('.frame-loading').addClass('complate');
    }, 2000);

    anim1Frame2 = window.setTimeout(function () {
      $('.frame-loading').removeClass('complate');
      $('.frame-loading').hide();
    }, 3000)


    anim1Frame3 = window.setTimeout(function () {
      $('.mess-one li:nth-child(1)').addClass('fadeIn animate');
    }, 3300)


    anim1Frame4 = window.setTimeout(function () {
      $('.mess-one li:nth-child(2)').addClass('fadeIn animate');
    }, 4300)

    anim1Frame5 = window.setTimeout(function () {
      $('.mess-one li:nth-child(3)').addClass('fadeIn animate');
    }, 4500)

    anim1Frame6 = window.setTimeout(function () {
      $('.mess-one').css({
        'top': '-' + $('.mess-one li:nth-child(4)').height() + 'px'
      })
      $('.mess-one li:nth-child(4)').addClass('fadeIn animate');
    }, 5000)

    anim1Frame7 = window.setTimeout(function () {
      $('.mess-one li:nth-child(5)').addClass('fadeIn animate');

    }, 7500)

    anim1Frame8 = window.setTimeout(function () {
      $('.mess-one li:nth-child(6)').addClass('fadeIn animate');

    }, 7700)

    anim1Frame9 = window.setTimeout(function () {
      $('.mess-one').css({
        'top': '-' + (Number($('.mess-one li:nth-child(7)').height()) - parseInt($('.mess-one').css('top'))) + 'px'
      })
      $('.mess-one li:nth-child(7)').addClass('fadeIn animate');
    }, 8000)

    anim1Frame10 = window.setTimeout(function () {
      $('.mess-one li:nth-child(8)').addClass('fadeIn animate');

    }, 9500);

    anim1Frame11 = window.setTimeout(function () {
      $('.mess-one').css({
        'top': '-' + (Number($('.mess-one li:nth-child(9)').height()) - parseInt($('.mess-one').css('top'))) + 'px'
      })
      $('.mess-one li:nth-child(9)').addClass('fadeIn animate');
    }, 9700)

    anim1Frame12 = window.setTimeout(function () {
      $('.mess-one').css({
        'top': '-' + (Number($('.mess-one li:nth-child(10)').height() + 15) - parseInt($('.mess-one').css('top'))) + 'px'
      })
      $('.mess-one li:nth-child(10)').addClass('fadeIn animate');
    }, 11700)

    anim1Frame13 = window.setTimeout(function () {
      $('.mess-one').css({
        'top': '-' + (Number($('.mess-one li:nth-child(11)').height()) - parseInt($('.mess-one').css('top'))) + 'px'
      })
      $('.mess-one li:nth-child(11)').addClass('fadeIn animate');
    }, 11900)

    anim1Frame14 = window.setTimeout(function () {
      $('.mess-one').css({
        'top': '-' + (Number($('.mess-one li:nth-child(12)').height()) - parseInt($('.mess-one').css('top'))) + 'px'
      })
      $('.mess-one li:nth-child(12)').addClass('fadeIn animate');
    }, 13900)

  }

  var anim2Frame1, anim2Frame2, anim2Frame3, anim2Frame4, anim2Frame5, anim2Frame6, anim2Frame7, anim2Frame8, anim2Frame9, anim2Frame10;

  function frameAnimation2() {
    anim2Frame1 = window.setTimeout(function () {
      $('.frame-loading').addClass('complate');
    }, 2000);

    anim2Frame2 = window.setTimeout(function () {
      $('.frame-loading').removeClass('complate');
      $('.frame-loading').hide();
    }, 3000)


    anim2Frame3 = window.setTimeout(function () {
      $('.mess-two li:nth-child(1)').addClass('fadeIn animate');
    }, 3300)


    anim2Frame4 = window.setTimeout(function () {
      $('.mess-two li:nth-child(2)').addClass('fadeIn animate');
    }, 5800)

    anim2Frame5 = window.setTimeout(function () {
      $('.mess-two li:nth-child(3)').addClass('fadeIn animate');
    }, 6000)

    anim2Frame6 = window.setTimeout(function () {
      $('.mess-two li:nth-child(4)').addClass('fadeIn animate');

    }, 9000)

    anim2Frame7 = window.setTimeout(function () {
      $('.mess-two li:nth-child(5)').addClass('fadeIn animate');
      $('.mess-two').css({
        'top': '-' + $('.mess-two li:nth-child(5)').height() + 'px'
      })

    }, 9200)

    anim2Frame8 = window.setTimeout(function () {
      $('.mess-two li:nth-child(6)').addClass('fadeIn animate');
      $('.mess-two').css({
        'top': '-' + (Number($('.mess-two li:nth-child(6)').height()) - parseInt($('.mess-two').css('top'))) + 'px'
      })
    }, 10200)

    anim2Frame9 = window.setTimeout(function () {
      $('.mess-two li:nth-child(7)').addClass('fadeIn animate');
      $('.mess-two').css({
        'top': '-' + (Number($('.mess-two li:nth-child(7)').height()) - parseInt($('.mess-two').css('top'))) + 'px'
      })
    }, 12700)

    anim2Frame10 = window.setTimeout(function () {
      $('.mess-two li:nth-child(8)').addClass('fadeIn animate');
      $('.mess-two').css({
        'top': '-' + (Number($('.mess-two li:nth-child(8)').height()) - parseInt($('.mess-two').css('top'))) + 'px'
      })
    }, 12900);
  }



  var anim3Frame1,
    anim3Frame2,
    anim3Frame3,
    anim3Frame4,
    anim3Frame5,
    anim3Frame6,
    anim3Frame7,
    anim3Frame8,
    anim3Frame9,
    anim3Frame10,
    anim3Frame11,
    anim3Frame12,
    anim3Frame13,
    anim3Frame14,
    anim3Frame15,
    anim3Frame16,
    anim3Frame17,
    anim3Frame18,
    anim3Frame19;

  function frameAnimation3() {
    anim3Frame1 = window.setTimeout(function () {
      $('.frame-loading').addClass('complate');
    }, 2000);

    anim3Frame2 = window.setTimeout(function () {
      $('.frame-loading').removeClass('complate');
      $('.frame-loading').hide();
    }, 3000)


    anim3Frame3 = window.setTimeout(function () {
      $('.mess-three li:nth-child(1)').addClass('fadeIn animate');
    }, 3300)

    anim3Frame4 = window.setTimeout(function () {
      $('.mess-three li:nth-child(2)').addClass('fadeIn animate');
    }, 4800)

    anim3Frame5 = window.setTimeout(function () {
      $('.mess-three li:nth-child(3)').addClass('fadeIn animate');
    }, 6300)

    anim3Frame6 = window.setTimeout(function () {
      $('.mess-three li:nth-child(4)').addClass('fadeIn animate');

    }, 9300)

    anim3Frame7 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + $('.mess-three li:nth-child(5)').height() + 'px'
      })
      $('.mess-three li:nth-child(5)').addClass('fadeIn animate');

    }, 9500)

    anim3Frame8 = window.setTimeout(function () {
      $('.mess-three li:nth-child(6)').addClass('fadeIn animate');
    }, 11500)

    anim3Frame9 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(7)').height()) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(7)').addClass('fadeIn animate');
    }, 11700)

    anim3Frame10 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(8)').height()) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(8)').addClass('fadeIn animate');
    }, 13700);

    anim3Frame11 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(9)').height()) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(9)').addClass('fadeIn animate');
    }, 15700);

    anim3Frame12 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(10)').height()) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(10)').addClass('fadeIn animate');
    }, 17700);

    anim3Frame13 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(11)').height() + 10) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(11)').addClass('fadeIn animate');
    }, 19700);

    anim3Frame14 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(12)').height()) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(12)').addClass('fadeIn animate');
    }, 19900);

    anim3Frame15 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(13)').height()) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(13)').addClass('fadeIn animate');
    }, 20400);

    anim3Frame16 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(14)').height()) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(14)').addClass('fadeIn animate');
    }, 22400);

    anim3Frame17 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(15)').height() + 10) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(15)').addClass('fadeIn animate');
    }, 22600);

    anim3Frame18 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(16)').height() + 10) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(16)').addClass('fadeIn animate');
    }, 25100);
    anim3Frame19 = window.setTimeout(function () {
      $('.mess-three').css({
        'top': '-' + (Number($('.mess-three li:nth-child(17)').height() + 10) - parseInt($('.mess-three').css('top'))) + 'px'
      })
      $('.mess-three li:nth-child(17)').addClass('fadeIn animate');
    }, 25300);

  }





  //ticking machine  
  var percentTime;
  var tick;
  var time = 14;
  var progressBarIndex = 0;

  $('.progressBarContainer .progressBar').each(function (index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);
  });

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
    $('.frame-loading').show();
    $('.chat_mess').css({
      'top': '0px'
    })
    $('.chat_mess li').removeClass('fadeIn animate fadeIn');

    $('.progressBarContainer div').removeClass('active');
    $('.progressBarContainer div span[data-slick-index="' + progressBarIndex + '"]').parent().addClass('active');



    var obt1 = new Vivus('obturateur1', {
      type: 'oneByOne',
      duration: 100,
      onReady: function (myVivus) {
        window.clearTimeout(anim1Frame1);
        window.clearTimeout(anim1Frame2);
        window.clearTimeout(anim1Frame3);
        window.clearTimeout(anim1Frame4);
        window.clearTimeout(anim1Frame5);
        window.clearTimeout(anim1Frame6);
        window.clearTimeout(anim1Frame7);
        window.clearTimeout(anim1Frame8);
        window.clearTimeout(anim1Frame9);
        window.clearTimeout(anim1Frame10);
        window.clearTimeout(anim1Frame11);
        window.clearTimeout(anim1Frame12);
        window.clearTimeout(anim1Frame13);
        window.clearTimeout(anim1Frame14);
        frameAnimation1();
      }
    })

    var obt2 = new Vivus('obturateur2', {
      type: 'oneByOne',
      duration: 100,
      onReady: function (myVivus) {
        window.clearTimeout(anim2Frame1);
        window.clearTimeout(anim2Frame2);
        window.clearTimeout(anim2Frame3);
        window.clearTimeout(anim2Frame4);
        window.clearTimeout(anim2Frame5);
        window.clearTimeout(anim2Frame6);
        window.clearTimeout(anim2Frame7);
        window.clearTimeout(anim2Frame8);
        window.clearTimeout(anim2Frame9);
        window.clearTimeout(anim2Frame10);
        frameAnimation2();
      }
    })
    var obt3 = new Vivus('obturateur3', {
      type: 'oneByOne',
      duration: 100,
      onReady: function (myVivus) {
        window.clearTimeout(anim3Frame1);
        window.clearTimeout(anim3Frame2);
        window.clearTimeout(anim3Frame3);
        window.clearTimeout(anim3Frame4);
        window.clearTimeout(anim3Frame5);
        window.clearTimeout(anim3Frame6);
        window.clearTimeout(anim3Frame7);
        window.clearTimeout(anim3Frame8);
        window.clearTimeout(anim3Frame9);
        window.clearTimeout(anim3Frame10);
        window.clearTimeout(anim3Frame11);
        window.clearTimeout(anim3Frame12);
        window.clearTimeout(anim3Frame13);
        window.clearTimeout(anim3Frame14);
        window.clearTimeout(anim3Frame15);
        window.clearTimeout(anim3Frame16);
        window.clearTimeout(anim3Frame17);
        window.clearTimeout(anim3Frame18);
        window.clearTimeout(anim3Frame19);
        frameAnimation3();
      }
    });


  }

  function interval() {
    if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
      progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
      $('.slider_item-bg .item').removeClass('active');
      $('.slider_item-bg .item[data-slick-index=' + progressBarIndex + ']').addClass('active');


      if (progressBarIndex == 2) {
        time = 23;
      } else {
        time = 14;
      }
      startProgressbar();

    } else {
      if (progressBarIndex == 2) {
        time = 23;
      } else {
        time = 14;
      }

      percentTime += 1 / (time + 5);
      $('.inProgress' + progressBarIndex).css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $('.single-item').slick('slickNext');
        progressBarIndex++;
        if (progressBarIndex > 2) {
          progressBarIndex = 0;
        }

        $('.slider_item-bg .item').removeClass('active');
        $('.slider_item-bg .item[data-slick-index=' + progressBarIndex + ']').addClass('active');

        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $('.inProgress').css({
      width: 0 + '%'
    });
    clearInterval(tick);
  }
  startProgressbar();
  // End ticking machine

  $('.progressBarContainer div').click(function () {
    clearInterval(tick);



    var goToThisIndex = $(this).find("span").data("slickIndex");
    $('.single-item').slick('slickGoTo', goToThisIndex, false);
    $('.slider_item-bg .item').removeClass('active');
    $('.slider_item-bg .item[data-slick-index=' + goToThisIndex + ']').addClass('active');
    $('.frame-loading').removeClass('complate');
    $('.frame-loading').hide();



    startProgressbar();
  });



  var obt1 = new Vivus('obturateur1', {
    type: 'oneByOne',
    duration: 100,
    onReady: function (myVivus) {
      window.clearTimeout(anim1Frame1);
      window.clearTimeout(anim1Frame2);
      window.clearTimeout(anim1Frame3);
      window.clearTimeout(anim1Frame4);
      window.clearTimeout(anim1Frame5);
      window.clearTimeout(anim1Frame6);
      window.clearTimeout(anim1Frame7);
      window.clearTimeout(anim1Frame8);
      window.clearTimeout(anim1Frame9);
      window.clearTimeout(anim1Frame10);
      window.clearTimeout(anim1Frame11);
      window.clearTimeout(anim1Frame12);
      window.clearTimeout(anim1Frame13);
      window.clearTimeout(anim1Frame14);
      frameAnimation1();


    }
  })



  /*=============================*/

  $('.faq-item ').click(function () {
    $('.faq-item ').removeClass('active');
    $('.faq-item .more').slideUp(200);
    $(this).toggleClass('active');
    $(this).find('.more').slideToggle(200);
  });


  if ($(window).width() < 1024) {
    $('#item_2 h3').text('Engagement')
    $('#item_3 h3').text('Post purchase')
  } else {
    $('#item_2 h3').text('Automate engagement')
    $('#item_3 h3').text('Post purchase flows')
  }

  $(window).resize(function () {
    if ($(window).width() < 1024) {
      $('#item_2 h3').text('Engagement')
      $('#item_3 h3').text('Post purchase')
    } else {
      $('#item_2 h3').text('Automate engagement')
      $('#item_3 h3').text('Post purchase flows')
    }
  })

});