/*

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

*/

$("a").click(function(){
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 200);
});

document.getElementById('About').onmouseover = function() {
  this.style.color = '#DE3163';
};

document.getElementById('About').onmouseout = function() {
  this.style.color = 'black';
};

document.getElementById('Lavori').onmouseover = function() {
  this.style.color = '#DE3163';
};

document.getElementById('Lavori').onmouseout = function() {
  this.style.color = 'black';
};

document.getElementById('Contatti').onmouseover = function() {
  this.style.color = '#DE3163';
};

document.getElementById('Contatti').onmouseout = function() {
  this.style.color = 'black';
};