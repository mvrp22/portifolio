$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 50) {
      $('.redesocial')
        .css({
          'display': 'none',
          
        });
    } else {
      $('.redesocial')
        .css({
          'display': 'block',
        
        });
    }
   
  });


  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 50) {
      $('.barra')
        .css({
          'display': 'none',
          
        });
    } else {
      $('.barra')
        .css({
          'display': 'block',
        
    });
    }
  });