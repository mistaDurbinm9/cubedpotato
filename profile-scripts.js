$(document).ready(function () {
    $("#info").hover(
  function () {
     $('div#info-dropdown').slideDown('medium');
  },
  function () {
     $('div#info-dropdown').slideUp('medium');
  }
);
});
