$('.owl-1').owlCarousel({
    center: true,
    loop:true,
    margin:30,
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
})
$('.owl-2').owlCarousel({
    loop:true,
    margin:10,
    margin: 20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
})
$('.owl-3').owlCarousel({
    center: true,
    loop:true,
    margin:20,
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
})



/* Animate On Scroll (AOS) Library starts */
AOS.init();
