$(document).ready(function () {


  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.unique-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
    },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true

        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  var nftCard = $('.nft-card');
  var nftCardList = nftCard.html();
  $('.nft-cardList').append(nftCardList)

  nftCard.slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true

        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });



  $('.team-slider').append($('.team-desktop').html());
  $('.team-slider .team-item').removeClass('large')
  $('.team-slider').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true

        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });



  $('.projects-slider').append($('.projects-desktop').html());
  $('.projects-slider').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true

        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  var visible = 0,
    speedVisible = 300;

  $(window).scroll(function () {
    var $sections = $('.unique');

    $sections.each(function (i, el) {
      const top = $(el).offset().top - ($(el).height() - $(el).height() / 2);
      const bottom = top + $(el).height() + $(window).height() / 3;
      const scroll = $(window).scrollTop();

      const topMenu = $(el).offset().top - 70;
      const bottomMunu = topMenu + $(el).height() + $(window).height() / 3;

      if (scroll > top && scroll < bottom && $(el).hasClass('unique') && !visible) {
        $('.unique-card').each(function () {
          var $this = $(this);
          setTimeout(function () {
            $this.addClass('active');
          }, speedVisible)

          speedVisible = speedVisible + 200;
        })
        console.log(visible)
        visible = 1;
        console.log(visible)

        return false;
      }

    })

  });

  if ($('.mechanics').data('autoplay') && $(window).width()) {
    var mechanicsList = $('.mechanics-list li').length - 1,
      mechanicsListCount = 0;

    var mechanicsImgPlay = setInterval(function () {
      if (mechanicsListCount > mechanicsList) {
        mechanicsListCount = 0;
      }
      $('.mechanics-list li, .mechanics-img img').removeClass('active');
      $($('.mechanics-list li')[mechanicsListCount]).addClass('active');
      //      $('#mechanics-img').attr('src', $($('.mechanics-list li')[mechanicsListCount]).data('img'));

      $('.mechanics-img-' + mechanicsListCount).addClass('active');

      mechanicsListCount++;
    }, 3500);


/*    $('.mechanics-list').hover(function () {
      window.clearInterval(mechanicsImgPlay);
    }, function () {

      mechanicsImgPlay = setInterval(function () {
        if (mechanicsListCount > mechanicsList) {
          mechanicsListCount = 0;
        }
        $('.mechanics-list li, .mechanics-img img').removeClass('active');
        $($('.mechanics-list li')[mechanicsListCount]).addClass('active');
        //      $('#mechanics-img').attr('src', $($('.mechanics-list li')[mechanicsListCount]).data('img'));

        $('.mechanics-img-' + mechanicsListCount).addClass('active');
        mechanicsListCount++;
      }, 3000);

    })*/

  }


  $('.mechanics-list li').click(function () {
    $('.mechanics-list li, .mechanics-img img').removeClass('active');
    $(this).addClass('active');
    mechanicsListCount = $(this).data('number')

    $('.mechanics-img-' + mechanicsListCount).addClass('active');
  })



  // Вешаем на прикосновение функцию handleTouchStart
  document.addEventListener('touchstart', handleTouchStart, false);
  // А на движение пальцем по экрану - handleTouchMove      
  document.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  };

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        if ($('.mechanics-list li.active').next().length > 0) {
          $('.mechanics-list li.active').next().trigger('click')
        } else {
          $($('.mechanics-list li')[0]).trigger('click')
        }

      } else {
        if ($('.mechanics-list li.active').prev().length > 0) {
          $('.mechanics-list li.active').prev().trigger('click')
        } else {
          $($('.mechanics-list li')[mechanicsList]).trigger('click')
        }

        /* right swipe */
      }
    } else { // Это вам, в общем-то, не надо, вы ведь только влево-вправо собираетесь двигать
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };


  $('.mechanics-img').click(function () {
    if ($('.mechanics-list li.active').next().length > 0) {
      $('.mechanics-list li.active').next().trigger('click')
    } else {
      $($('.mechanics-list li')[0]).trigger('click')
    }
  })



  /*json*/


  var countRoadmapShow, countCompleted, countPlanned;
  if ($(window).width() > 1024) {
    countRoadmapShow = 10;

  } else {
    countRoadmapShow = 5;

  }

  $(window).resize(function () {
    if ($(window).width() > 1200) {
      $('.unique-slider')[0].slick.refresh();
    }

    if ($(window).width() > 1024) {
      countRoadmapShow = 10;


    } else {
      countRoadmapShow = 5;

    }
  })


  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  readTextFile("roadmap.json", function (text) {
    var data = JSON.parse(text);

    for (var i = 0; i < data.length; i++) {
      if (data[i].complete) {
        $('#completed').append('<li><h6><svg viewBox="0 0 32 33" width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.73 8.969a1.6 1.6 0 0 1 0 2.262l-12.8 12.8a1.6 1.6 0 0 1-2.262 0l-6.4-6.4A1.6 1.6 0 0 1 7.53 15.37l5.269 5.269 11.669-11.67a1.6 1.6 0 0 1 2.262 0Z" fill="#fff"/></svg> <span>' + data[i].title + '</span></h6><p> ' + data[i].info + '</p></li>')
      } else {
        $('#planned').append('<li><h6><span>' + data[i].title + '</span></h6><p> ' + data[i].info + '</p></li>')
      }
    }

    $('#upcoming .title').text($("#planned li:first-child").find('h6').text());
    $('#upcoming .info').text($("#planned li:first-child").find('p').text());
    $("#planned li:first-child").remove();


    countCompleted = $('#completed li').length;
    countPlanned = $('#planned li').length;

    if (countRoadmapShow < countCompleted) {

      $('#completed li').each(function ($i) {
        if ($i > (countRoadmapShow - 1)) {
          $(this).addClass('d-none');
        }
      })

      $('.show-more[href="#completed"]').css({
        'display': 'inline-block',
      })
    }

    if (countRoadmapShow < countPlanned) {

      $('#planned li').each(function ($i) {
        if ($i > (countRoadmapShow - 1)) {
          $(this).addClass('d-none');
        }
      })

      $('.show-more[href="#planned"]').css({
        'display': 'inline-block',
      })
    }

    console.log('countCompleted', countCompleted);
    console.log('countPlanned', countPlanned);
    console.log('countRoadmapShow', countRoadmapShow);

  });
  /*end json*/


  $('.show-more').click(function (e) {
    e.preventDefault();

    $(this).hide();
    $($(this).attr('href') + ' li').removeClass('d-none');
  })


  $('.mob-menu a, .close-menu').click(function () {
    $('#menu').addClass('hide-menu');
  })

  $('#nav-btn').click(function () {
    $('#menu').removeClass('hide-menu');
  })

  $('.scroll').click(function (e) {

    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 80;

    $('body,html').animate({
      scrollTop: top
    }, 1500);

  });



  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('subscription-form');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        var $form = $(this);

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

          $form.find('input').addClass('error')
          $form.append('<span class="error-info">Please enter a valid email</span>')

        } else {
          event.preventDefault();


          var $data = $form.serialize();

          $form.find('.submit').attr('disabled', 'disabled');


          alert('success')

          setTimeout(function () {
            $form.parents('.modal').find('.close-modal').trigger('click');
            $form[0].reset();
          }, 500)



          $form.find('input').removeClass('error');
          $form.find('.error-info').remove();
          $form.find('.submit').removeAttr('disabled');

          form.classList.add('was-validated');

        }

      }, false);
    });
  }, false);

});