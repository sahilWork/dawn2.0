$(document).ready(function(){
  $('.collectionList').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
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

  $('body').on('click', '.optionAdd', function(e){
    e.preventDefault();
    var id = $(this).attr('varid');
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: {
        quantity: 1,
        id: id
      },
      dataType: 'json',           
      success: function(data) {
        var image = data.image;
        var title = data.title;
        var price = data.original_price;
        $.ajax({
          type: 'GET',
          url: '/cart.js',
          dataType: 'json',           
          success: function(cart) {
            var itemCount = cart.item_count;
            $('.countNumber').html(itemCount);
            $('.proPopImage').html('<img src="'+image+'" />');
            $('.proPopTitle').html(title);
            $('.priceVlaue').html(price/100);
          }
        });
      }
    });
  });  
});