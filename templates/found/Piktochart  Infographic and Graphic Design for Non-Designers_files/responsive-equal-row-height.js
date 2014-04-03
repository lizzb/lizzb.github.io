(function($) {

 equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.articles-wrapper .articles-column, .press-release-wrapper li, #menu-footer-menu-01-container .menu, #menu-footer-menu-02-container .menu, #menu-footer-menu-03-container .menu, #menu-footer-menu-04-container .menu');
});


$(window).resize(function(){
  equalheight('.articles-wrapper .articles-column, .press-release-wrapper li, #menu-footer-menu-01-container .menu, #menu-footer-menu-02-container .menu, #menu-footer-menu-03-container .menu, #menu-footer-menu-04-container .menu');
});

})(jQuery);