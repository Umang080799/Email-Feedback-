var $container = $('.container');
var $backdrop = $('.backdrop');
var $highlights = $('.highlights');
var $textarea = $('textarea');
var $toggle = $('button');
var height =  $(".backdrop").height();

$(document).on("mouseover",".test",function(){
     $('[data-toggle="tooltip"]').tooltip( {container : 'body'});
     $(".tooltip").css("placement","top");
 });

 $(document).on("mouseleave",".test",function(){
   $(".backdrop").css("height",height);
 });
 


var ua = window.navigator.userAgent.toLowerCase();
var isIE = !!ua.match(/msie|trident\/7|edge/);
var isWinPhone = ua.indexOf('windows phone') !== -1;
var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);

function applyHighlights(text) {
  if(text != undefined)
    text = text.replace(/\n$/g, '\n\n').replace(/[A-Z].*?\b/g, '<mark>$&</mark>');
  
  if (isIE) {
    text = text.replace(/ /g, ' <wbr>');
  }
  
  return text; 
}

function handleInput() {
  var text = $textarea.val();
  var highlightedText = applyHighlights(text);
  $highlights.html(highlightedText);
}

function handleScroll() {
  var scrollTop = $textarea.scrollTop();
  $backdrop.scrollTop(scrollTop);
  
  var scrollLeft = $textarea.scrollLeft();
  $backdrop.scrollLeft(scrollLeft);  
}

function fixIOS() {
  $highlights.css({
    'padding-left': '+=3px',
    'padding-right': '+=3px'
  });
}

function bindEvents() {
  $textarea.on({
    'input': handleInput,
    'scroll': handleScroll
  });

  $toggle.on('click', function() {
    $container.toggleClass('perspective');
  });  
}

if (isIOS) {
  fixIOS();
}

bindEvents();
handleInput();