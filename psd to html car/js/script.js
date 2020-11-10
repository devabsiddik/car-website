jQuery(document).ready(function(){

//RESPONSIVE NAV BAR
$('#nav').slicknav();

// STICKY NAV BAr
$("#sticker").sticky({topSpacing:5});


// END TO TOP SCROOLUP

$(function(){
    $.scrollUp();
  });

//OWL CAROUSAL   

$('.card_areaa').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});









});





