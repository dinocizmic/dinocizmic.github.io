$( document ).ready(function(){
$('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:1
            },
            600:{
                items:2
            }
        }
    });
});