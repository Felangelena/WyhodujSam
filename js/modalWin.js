$(document).ready(function () {
    $('[data-modal=infoTypeFamily]').on('click', function () {
        $('#infoTypeFamily').fadeIn('slow');
        $('#infoNumFamily, #infoGarden').fadeOut('slow');
    });
    $('[data-modal=infoNumFamily]').on('click', function () {
        $('#infoNumFamily').fadeIn('slow');
        $('#infoTypeFamily, #infoGarden').fadeOut('slow');
    });
    $('[data-modal=infoGarden]').on('click', function () {
        $('#infoGarden').fadeIn('slow');
        $('#infoTypeFamily, #infoNumFamily').fadeOut('slow');
    });
    $('[data-modal=gardenArea]').on('click', function () {
        $('#gardenArea').fadeIn('slow');
        $('#payment').fadeOut('slow');
    });
    $('[data-modal=payment]').on('click', function () {
        $('#payment').fadeIn('slow');
        $('#gardenArea').fadeOut('slow');
    });
    $('.btn__understand').on('click', function () {
        $('#infoTypeFamily, #infoNumFamily, #infoGarden, #gardenArea, #payment').fadeOut('slow');
    });
});