$(document).ready(function(){
      $('.slider').slick({
        slidesToShow: 2,
        infinite: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 1,
              dots: true,
            }
          }
        ]
      });
    });