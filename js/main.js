// *** GENERAL FUNCTIONS ***
window.onscroll = function(){
    scroll();
} 

function scroll(){
    /* Every time the page is scrolled from 200px */
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        document.getElementById("topButton").style.display = "block"; /* button can be seen */
    } else {
        document.getElementById("topButton").style.display = "none"; /* button cannot be seen */
    }
}

/* A click on the button and you are on the top of the page */
$("#topButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 700);
});


// *** COMPETENCES ET REALISATIONS FUNCTIONS ***

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.compet1, .compet2, .real1, .real2, .real3').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},700);
                    
            }
            
        }); 
    
    });
    
});