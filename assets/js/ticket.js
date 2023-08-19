$(document).ready(function () {
    //back to ticket
    $('.cancel').click(function (e) { 
     e.preventDefault();
         $('.orderPage').removeClass('opacity flip');
         $('.orderTitle').removeClass('opacity flip');
         $('.step1').removeClass('opacity flip');
         $('.check').addClass('d-none');
         //show ticket
         setTimeout(() => {
             $('.ticket').fadeIn(10).removeClass('opacity flip');
         }, 10);
    });
    //to step 1
   $('.buy').click(function (e) { 
    e.preventDefault();
        //hide ticket
        $('.ticket').fadeOut(10).addClass('opacity flip');
        //make element block & opacity 0
        $('.check').removeClass('d-none');
        $('.orderPage').addClass('opacity');
        $('.orderTitle').addClass('opacity');
        $('.step1').addClass('opacity');
        //rotation effect
        setTimeout(function() { 
            $('.orderPage').addClass('flip');
            $('.orderTitle').addClass('flip');
            $('.step1').addClass('flip');
        }, 10);
   }); 
   //to step 2
   $('.step1Submit').click(function (e) { 
    e.preventDefault();
        $('.orderPageStep1').text('');
        $('.orderPageStep1').addClass('icofont-verification-check');
        $('.orderPageStep2').addClass('active');
        //hidden login
        $('.step1').removeClass('opacity flip');
        //show step 2
        $('.step2').addClass('opacity');
        setTimeout(() => {
            $('.step2').addClass('flip');
        }, 10);
   });
   //to login
   $('.step2Submit').click(function (e) { 
    e.preventDefault();
        //hidden step1 & orderPage &orderTitle
        $('.orderPage').removeClass('opacity flip');
        $('.orderTitle').removeClass('opacity flip');
        $('.step2').removeClass('opacity flip');
        //show login
        $('.login').addClass('opacity');
        setTimeout(() => {
            $('.login').addClass('flip');
        }, 10);
    });
   //to step 3
   $('.submitEjs').click(function (e) { 
    e.preventDefault();
        $('.orderPageStep2').text('');
        $('.orderPageStep2').addClass('icofont-verification-check');
        $('.orderPageStep3').addClass('active');
        //hidden step1
        $('.login').removeClass('opacity flip');
        //show step 3
        $('.orderPage').addClass('opacity');
        $('.orderTitle').addClass('opacity');
        $('.step3').addClass('opacity');
        setTimeout(() => {
            $('.orderPage').addClass('flip');
            $('.orderTitle').addClass('flip');
            $('.step3').addClass('flip');
        }, 10);
   });
   //aos
   AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
});