$(document).ready(function () {
    $("#flower-btn").on('click', function () {
        $(".overlay").toggleClass('overlay_active');
        $("#flower-btn").toggleClass('modal__btn_active');
        $(".icon").toggleClass('white');
        $("#infoFlower").toggleClass('modal_active');
        $("#cameras-btn").toggleClass('hide');
        $("#infoCameras").toggleClass('hide');
        $("main").toggleClass('main_hide');
    });

    $("#cameras-btn").on('click', function () {
        $(".overlay").toggleClass('overlay_active');
        $("#cameras-btn").toggleClass('modal__btn_active');
        $(".icon").toggleClass('white');
        $("#infoCameras").toggleClass('modal_active');
        $("#flower-btn").toggleClass('hide');
        $("#infoFlower").toggleClass('hide');
        $("main").toggleClass('main_hide');
    });
});