$(document).ready(function () {
    $('.icofont-navigation-menu').click(function (e) { 
        e.preventDefault();
        $('.collapse-customer').toggleClass('d-none');
        setTimeout(() => {
            $('.collapse-customer').toggleClass('collapseToggle');
        }, 10);
    });
});