$.simpleTicker($("#demo"), {

  speed: 1000,

  delay: 3000,

  easing: 'swing',

  effectType: 'fade'

});
$(function () {
  $('.btn-toggle').click(function () {
    $('.sm-device-menu').toggleclass('test');
  })
});
