$(function() {

    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。
    $("#header-icon, #header-live-btn").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。


    //第２ヘッダーの各ボタンをクリックすると、指定の位置までページスライダーアニメーションを行う処理。
    $("#header2-schedule-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-schedule').offset().top });
    });
    $("#header2-recruit-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-recruit').offset().top });
    });
    $("#header2-system-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-system').offset().top });
    });
    //第２ヘッダーの各ボタンをクリックすると、指定の位置までページスライダーアニメーションを行う処理。


    //スケジュール年度をクリックすると情報モーダルを表示する処理。
    $('.schedule-2020-btn').on('click', function() {
        $('#schedule-2020-pop').addClass('popup-content-active')
    });
    $('.schedule-2019-btn').on('click', function() {
        $('#schedule-2019-pop').addClass('popup-content-active')
    });
    $('.schedule-2018-btn').on('click', function() {
        $('#schedule-2018-pop').addClass('popup-content-active')
    });
    $('.schedule-2017-btn').on('click', function() {
        $('#schedule-2017-pop').addClass('popup-content-active')
    });
    $('.schedule-2016-btn').on('click', function() {
        $('#schedule-2016-pop').addClass('popup-content-active')
    });
    $('.schedule-2015-btn').on('click', function() {
        $('#schedule-2015-pop').addClass('popup-content-active')
    });
    $('.schedule-2014-btn').on('click', function() {
        $('#schedule-2014-pop').addClass('popup-content-active')
    });
    $('.schedule-2013-btn').on('click', function() {
        $('#schedule-2013-pop').addClass('popup-content-active')
    });
    $('.schedule-2012-btn').on('click', function() {
        $('#schedule-2012-pop').addClass('popup-content-active')
    });
    //スケジュール年度をクリックすると情報モーダルを表示する処理。

    //ライブのシステム詳細モーダルを表示する処理。
    $('.live-system-detail-btn').on('click', function() {
        $('#live-system-detail-pop').addClass('popup-content-active')
    });
    //ライブのシステム詳細モーダルを表示する処理。

    //レコーディングについての詳細、機材名・レンタル楽器及び機材の詳細をクリックした時に、背景スクロールができないように固定する処理。
    var scrollPosition;
    $(".schedule-year-btn, .live-system-detail-btn").on("click", function() {
        scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({ 'top': -scrollPosition });
    });
    //レコーディングについての詳細、機材名・レンタル楽器及び機材の詳細をクリックした時に、背景スクロールができないように固定する処理。

    //モーダルの閉じるボタンをクリックした時に背景固定を解除しモーダルを閉じる処理。
    $('.popup-content-close-btn').on('click', function() {
        $('.popup-content').removeClass('popup-content-active');
        $('body').removeClass('fixed').css({ 'top': 0 });
        window.scrollTo(0, scrollPosition);
    });
    //モーダルの閉じるボタンをクリックした時に背景固定を解除しモーダルを閉じる処理。

    //ヘッダーメニューボタンを押した時にボタンが変化しリンクメニューが表示/非表示され、背景の固定が、有効/無効になる処理。
    $("#header-menu-btn").on("click", function() {
        if ($(this).hasClass('header-menu-btn-active')) {
            $(this).html('<span class="fa fa-bars"></span>');
            $(this).removeClass('header-menu-btn-active');
            $("#main-menu").addClass("main-menu-close");
            $('body').removeClass('fixed').css({ 'top': 0 });
            window.scrollTo(0, scrollPosition);
        } else {
            $(this).html('<span class="fa fa-times"></span>');
            $(this).addClass('header-menu-btn-active');
            $("#main-menu").removeClass("main-menu-close");
            scrollPosition = $(window).scrollTop();
            $('body').addClass('fixed').css({ 'top': -scrollPosition });
        }
    });
    //ヘッダーメニューボタンを押した時にボタンが変化しリンクメニューが表示/非表示され、背景の固定が、有効/無効になる処理。


});