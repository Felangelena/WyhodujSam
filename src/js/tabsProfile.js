$(document).ready(function () {
    $('ul.edit__tabs').on('click', 'li:not(.edit__tab_active)', function() {
        $(this)
          .addClass('edit__tab_active').siblings().removeClass('edit__tab_active')
          .closest('div.edit').find('div.edit__content').removeClass('edit__content_active').eq($(this).index()).addClass('edit__content_active');
        });
});
