/* -- jpreloader
   -- src: http://www.inwebson.com/jquery/jpreloader-a-preloading-screen-to-preload-images/
   ---------------------------- */

$(document).ready( function() {

    //calling jPreLoader
    $('body').jpreLoader({
      splashID: "#preloader",
      loaderVPos: '60%',
      autoClose: true
    });

 });

/* -- NiceScroll
   -- src: www.areaaperta.com/nicescroll
   ---------------------------- */

$(document).ready(
  function() {  
    $("html").niceScroll({cursorcolor:"#2C2F35"});
  }
);


// Sticky Nav Functionality in Vanilla JS

var header = $("#header");

if ($('.landing.page').length) {
  window.onscroll = function() {

    var currentWindowPos = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentWindowPos > 0) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  };
}
