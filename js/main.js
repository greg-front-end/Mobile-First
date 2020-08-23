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
});