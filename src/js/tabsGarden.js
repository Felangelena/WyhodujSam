$(document).ready(function () {
  $('ul.garden__tabs').on('click', 'li:not(.garden__tab_active)', function () {
    $(this)
      .addClass('garden__tab_active').siblings().removeClass('garden__tab_active')
      .closest('div.manage').find('div.garden__content').removeClass('garden__content_active').eq($(this).index()).addClass('garden__content_active');
  });
});
$(document).ready(function () {
  $('ul.diagrams__tabs').on('click', 'li:not(.diagrams__tab_active)', function () {
    $(this)
      .addClass('diagrams__tab_active').siblings().removeClass('diagrams__tab_active')
      .closest('div.diagrams').find('div.diagrams__content').removeClass('diagrams__content_active').eq($(this).index()).addClass('diagrams__content_active');
  });
});