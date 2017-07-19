
$(window).scroll(function() {
   var hT = $('.art-1, .art-2').offset().top,
       hH = $('.art-1, .art-2').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $(".art-1, .art-2").addClass('flipInX')
      $('.art-1, .art-2').removeClass('flipOutX')
   } else {
      $('.art-1, .art-2').removeClass('flipInX')
      $('.art-1, .art-2').addClass('flipOutX')
   }
});



$(window).scroll(function() {
   var hT = $('.row-1').offset().top,
       hH = $('.row-1').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $(".row-1").addClass('bounceInLeft')
   } else {
      $('.row-1').removeClass('bounceInLeft')
   }
});

$(window).scroll(function() {
   var hT = $('.row-2').offset().top,
       hH = $('.row-2').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $(".row-2").addClass('bounceInUp')
   } else {
      $('.row-2').removeClass('bounceInUp')
   }
});

$(window).scroll(function() {
   var hT = $('.row-3').offset().top,
       hH = $('.row-3').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $(".row-3").addClass('bounceInRight')
   } else {
      $('.row-3').removeClass('bounceInRight')
   }
});
