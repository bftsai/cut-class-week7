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
});