$(function () {
  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/back.svg" alt="back"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/forward.svg" alt="forward"></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }

    ]
  });

  $('.reviews__slider').slick({
    dots: true,
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }); 

  $('.menu__btn').on('click', function() {
    $('.header__overlay').slideToggle(300, function(){
          if( $(this).css('display') === "none"){
            $(this).removeAttr('style');
        }
     });
  });
  $(".header__navbar-item").click(function(event) {
    $(".header__overlay").removeAttr('style');

  });


  //const menuBtn = document.querySelector('.menu__btn');
  //const menuOverlay = document.querySelector('.header__overlay');
  //menuBtn.addEventListener('click', togglePlay => {
  //  if(menuOverlay.style.display === 'none') {
  //    console.log("menu open");
  //    menuOverlay.classList.add('active');
  //    menuOverlay.classList.remove('header__overlay');
  //  } else {
  //    menuOverlay.classList.add('header__overlay');
  //    menuOverlay.classList.remove('active');
  //    console.log("menu close");
  //  }
  //});

});

function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1500);
  return false;
};