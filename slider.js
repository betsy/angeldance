var counter = 0, // to keep track of current slide
    // $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = 0; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
  $items = $('.diy-slideshow figure');
  $items.removeClass('show'); // remove .show from whichever element currently has it
  $items.eq(itemToShow).addClass('show');    
};

var myVar=setInterval(function () {slideChange()}, 5000);

function slideChange() {
    counter++;
    showCurrent(); 
}

// add click events to prev & next buttons 
$('.next').on('click', function(){
    counter++;
    showCurrent(); 
});
$('.prev').on('click', function(){
    counter--;
    if(counter<0) counter=numItems;
    showCurrent(); 
});

// if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
// if('ontouchstart' in window){
//   $('.diy-slideshow').swipe({
//     swipeLeft:function() {
//       counter++;
//       showCurrent(); 
//     },
//     swipeRight:function() {
//       counter--;
//       showCurrent(); 
//     }
//   });
// }

$(document).ready(function() {
  var figure, i, items;
  items = (function() {
    var _i, _results;
    _results = [];
    for (i = _i = 2; _i <= 12; i = ++_i) {
      figure = $('<figure><div class="crop"><img src="images/homePageSlider/image (' + i + ').jpg" width="100%" /></div></figure>');
      $(".diy-slideshow").append(figure);
      _results.push(figure);
    }
    return _results;
  })();
  numItems=items.length;
  return console.log(items.length + " figures.");
});