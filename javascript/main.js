$('.js-expand-collapse-siblings').click(function() {
  $(this)
    .find('i')
    .toggleClass('fa-caret-right')
    .toggleClass('fa-caret-down');

  $(this).siblings('.is-collapsed,.js-collapsable').each(function() {
    $(this).toggleClass('is-collapsed').toggleClass('js-collapsable');
  });
});
