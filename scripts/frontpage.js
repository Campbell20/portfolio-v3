$(document).ready(function() {
    
    //when the page loads for the first time, turn on animations
    $('.designerimage').addClass('slideInLeft');
    $('.coderimage').addClass('slideInRight');
    $(".laptop-text-1, .laptop-text-2").delay(800).show(0);
    $(".laptop-text-1, .laptop-text-2").addClass("zoomIn");
    console.log("Page loaded successfully, animations playing!");

    //when user clicks on home, turn on animations
    $("#home-click").click(function() {
        $('.designerimage').addClass('slideInLeft');
        $('.coderimage').addClass('slideInRight');
        $(".laptop-text-1, .laptop-text-2").delay(800).show(0);
        $(".laptop-text-1, .laptop-text-2").addClass("zoomIn");
        console.log("User clicked home, restarting animations.")
    });

    //when the user clicks anything other than home, turn off animations
    $("#portfolio-click, #about-click, #skills-click").click(function() {
        $('.designerimage').removeClass('slideInLeft');
        $('.coderimage').removeClass('slideInRight');
        $(".laptop-text-1, .laptop-text-2").removeClass("zoomIn");
        console.log("User clicked any navigation other than home. Removing animations.")
    });


    // when the window size is 1024, assume user is on a desktop, and play addtional animations
    $(window).ready(function(){
      var win = $(this);
      if (win.width() >= 1024) {
            console.log("window at 1024, playing addtional animations");
            //when user mouses over col-1, turn off code elements
            $('.col-1').mouseenter(function() {
                $('.col-1').animate({
                    opacity: 1
                }, 500);
                $('.col-2').animate({
                    opacity: .1
                }, 1);
            });

            //when user mouses over col-2, turn off design elements
            $('.col-2').mouseenter(function() {
                $('.col-2').animate({
                    opacity: 1
                }, 500);
                $('.col-1').animate({
                    opacity: .1
                }, 1);
            });

            //when user's mouse leaves col-1 or col-2 element, then turn both code and design back on
            $('.col-1, .col-2').mouseout(function() {
                $('.col-1, .col-2').animate({
                    opacity: 1
                }, 1);
            });
        }
    });

});
