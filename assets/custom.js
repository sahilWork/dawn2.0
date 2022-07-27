$(document).ready(function(){
  $('.collectionList').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
      dots: true,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      dots: true,
    }
  }
]
  });
});