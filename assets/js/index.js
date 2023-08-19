$(document).ready(function () {
    //swiper albums
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        speed: 3000,
        loop: true, //設置為true 時，swiper 數量需超過slidesPerView 設定數量的兩倍，才能成功
        slidesPerView: "auto", //決定能顯示幾個swiper 
        //loopedSlides: "number", //Defines how many slides before end/beginning it should rearrange (loop) slides. If not specified, defaults to slidesPerView
        //centeredSlides: true, //使swiper 居中
        allowTouchMove: false,
        spaceBetween: 0, //swiper 間隔距離
        
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        effect: 'slide',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
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
    //CSShake
    $('.icofont-rounded-double-right').parent().hover(function () {
            // over
            $('.icofont-rounded-double-right').parent().addClass('shake');
        }, function () {
            // out
            $('.icofont-rounded-double-right').parent().removeClass('shake');
        }
    );
});