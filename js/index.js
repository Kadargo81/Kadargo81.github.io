$(document).ready(function(){
  // Add smooth scrolling to all links
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
  });

});
/*
 * Pure CSS Horizontal Ticker
 * Look no JS
 */
