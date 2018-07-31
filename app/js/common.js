$(document).ready(function() {

    /* Mmenu */
    $("#my-menu").mmenu({
        extensions: ['effect-menu-slide','theme-black', 'pagedim-black'],
        offCanvas: {
            position: "right"
        },
        navbar: {
            title: '<img src="../img/logo-1.svg" alt="" width="125px" height="24px"/>'
        }
    }, {
        offCanvas: {
            pageSelector: "#page-wrapper",
        },
        drag: {
            menu: true,
        },

    });

    var API = $("#my-menu").data("mmenu");
    var $menuBtn = $("header .hamburger");

    API.bind( "open:finish", function() {
        $menuBtn.addClass('is-active');
    });

    API.bind( "close:finish", function() {
        $menuBtn.removeClass('is-active');
    });
    // карусель
    $('.owl-carousel').on('initialized.own.carousel', function(){
        setTimeout(function() {
            carouselService();
        },100)
    });
    $('.owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:false,
            smartSpeed:700,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
            },
            800:{
              items:2,
            },
            1100:{
                items:3,
            }
            },
            navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>']});

$('select').selectize({
    create: true,
    sortField: 'text'

});
});