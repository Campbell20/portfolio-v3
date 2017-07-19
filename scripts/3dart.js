$(window).scroll(function(){
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
     
    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if(elementScrolled('.art-1')) {
        var els = $('.art-1'),
            i = 0,
            f = function () {
                $(els[i++]).addClass('bounceInLeft');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }
});


$(window).scroll(function(){
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
     
    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if(elementScrolled('.art-2')) {
        var els = $('.art-2'),
            i = 0,
            f = function () {
                $(els[i++]).addClass('bounceInRight');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }
});