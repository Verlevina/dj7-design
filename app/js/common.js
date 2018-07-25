$(document).ready(function() {

    // var $menu = $("#my-menu").mmenu({
    //     extensions: ['theme-black', 'pagedim-black'],
    //     navbar: {
    //         title: '<img src="../img/logo-1.svg" alt="" width="125px" height="24px"/>'
    //     },
    //     // configuration
    //     offCanvas: {
    //         pageNodetype: "section",
    //         position: "right"
    //     },
    // });
    //
    // var $icon = $ ("#mmenu-icon");
    // var API = $menu.data ("mmenu");
    //
    // $icon.on ("click", function (event) {
    //     API.open ();
    //     setTimeout (function () {
    //         $icon.addClass("is-active");
    //     }, 100);
    //     event.preventDefault();
    // });
    // $icon.on ("click", function (event) {
    //     setTimeout (function () {
    //         $icon.removeClass("is-active");
    //     }, 100);
    //     event.preventDefault();
    // });


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
});