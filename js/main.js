$(document).ready(function () {
    $('.jcarousel').jcarouselAutoscroll({
        target: '+=1'
    });

     /*------------mobile filters slideToggle-------*/

    $('.filters-btn').on('click', function(){
        $(this).closest('.wrapper-sort-catalog').find('.filter-mobile').slideToggle(500);

    });
    
    /*-----------------counter------------------*/

    $('.to-bottom').on('click', function () {
        var $input = $(this).closest('.counter').find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.to-top').on('click', function () {
        var $input = $(this).closest('.counter').find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    /*---------------catalog-open--------------*/

    $('.catalog-open-link').on('click', function (e) {
        e.preventDefault();
       $(this).closest('.catalog-drop-down').find('.left-navigation').slideToggle(500);
       $('.catalog-drop-down').toggleClass('btn-active');
    });

    $('.header-input-block').on('click',function () {
       $(this).closest('.item-filters').find('.list-filters-input').slideToggle('fast');
    });

    /*---------bayer-menu---------*/

    $(".title-menu-bayer").on('click', function () {
        $(this).closest('.left-menu-return').find('.bayer-list').slideToggle(500);

    });

    /*-------------click link sort---------------*/

    $('.sorting-link').on('click', function () {
       $('.sorting-link').removeClass('active-sort');
       $(this).addClass('active-sort');
    });

    $('.switcher-btn').on('click', function (e) {
        e.preventDefault();
        $('.switcher-btn').removeClass('active-btn-list');
        $(this).addClass('active-btn-list');
    });

/*--------------back to top-------------*/

    $('.up-btn').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $(".square-button").on('click', function () {
        $(this).closest('.wrapper-sort-catalog').find('.list-button').removeClass('active-btn-list');
        $(this).closest('.wrapper-sort-catalog').find('.container-card').removeClass('sort-block-li');
        $(this).closest('.wrapper-sort-catalog').find('.list-catalog-sort').removeClass('display-inline');
        $(this).addClass('active-btn-list');

    });

    $(".list-button").on('click', function () {
        $(this).closest('.wrapper-sort-catalog').find('.square-button').removeClass('active-btn-list');
        $(this).addClass('active-btn-list');
        $(this).closest('.wrapper-sort-catalog').find('.list-catalog-sort').addClass('display-inline');
        $(this).closest('.wrapper-sort-catalog').find('.container-card').addClass('sort-block-li')
    });

    /*---------tabs----------*/


    $('ul.tabs li').click(function(){
        let tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    $('ul.tabs-choose li').click(function(){
        let tab_id = $(this).attr('data-tab');

        $('ul.tabs-choose li').removeClass('current-link');
        $('.tabs-content-choose').removeClass('current-link');

        $(this).addClass('current-link');
        $("#"+tab_id).addClass('current-link');
    });


    /*-----------------mobile-menu----------*/
    $(".wrapper-content-all").addClass("mobile");

    $(".mobile-btn-menu").on('click', function () {
        $(this).closest(".wrapper-content-all").toggleClass("active-menu-mobile");
        $(this).closest(".wrapper-content-all").find(".mobile-menu").toggle(500, function() {
            if ($(this).is(':visible'))
                $(this).css('display','flex');
        });

    });

    $('.mobile-catalog').on('click', function () {
        $(this).closest("body").toggleClass("active-catalog");
        $(this).closest(".content-all").find(".catalog-menu-mobile").slideToggle(500);
    });

    $(".list-button").on('click', function () {
        $(this).closest('.wrapper-sort-catalog').find('.square-button').removeClass('active-btn-list');
        $(this).addClass('active-btn-list');
        $(this).closest('.wrapper-sort-catalog').find('.list-catalog-sort').removeClass('display-inline');
        $(this).closest('.wrapper-sort-catalog').find('.container-card').removeClass('sort-block-li');
    });

    /*-----------slider-------------*/
    new flickerplate('.flicker-example');

    /*------------click pay card--------------*/

    $('.pay-card-btn').on('click', function () {
       $(this).closest('.content-all').find('.form-pay-card').fadeIn(0, function() {
           if ($(this).is(':visible'))
               $(this).css('display','flex');

       });
        $(this).closest('body').css('overflow', 'hidden');
    });
    $('.close-btn').on('click', function () {
        $('.form-pay-card').fadeOut();
        $(this).closest('body').css('overflow', 'inherit');
    });


});