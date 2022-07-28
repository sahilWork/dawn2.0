$(document).ready(function(){
  $('.collectionList').on('init', function () {
      $('.collectionSection').removeClass('hide');
  });
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
    $('body').addClass('popOpen');
    $('.loaderEffect').removeClass('hide');
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
            if($('.cart-count-bubble').length){
              $('.countNumber').html(itemCount);
            }else{
              $('#cart-icon-bubble').append('<div class="cart-count-bubble"><span aria-hidden="true" class="countNumber">'+itemCount+'</span><span class="visually-hidden">'+itemCount+' items</span></div>');
            }
            
            $('.proPopImage').html('<img src="'+image+'" />');
            $('.proPopTitle').html(title);
            $('.priceVlaue').html((price/100).toFixed(2));
            $('.loaderEffect').addClass('hide');
            $('body').addClass('popOpen');
            $('.proAddPop').removeClass('hide');
          }
        });
      }
    });
  });  

  $('body').on('click', '.continueShopping', function() {
    $('.proAddPop').addClass('hide');
    $('body').removeClass('popOpen');
  });

  setTimeout(function() {
    $('body').removeClass('popOpen');
    $('.loaderEffect').addClass('hide');
  }, 1000);
});