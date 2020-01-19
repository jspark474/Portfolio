function myFunction(x) {
  x.classList.toggle("change");
  var y = document.getElementById("menu-content");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}


function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}
//navbar burger
function myFunction(x) {
  x.classList.toggle("change");
}


// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
        showImages('.star');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
        showImages('.star');
});


/*
$(function() {
  $('.image-card').hover(function() {
    $('.hover-text').css('color', 'red');
  }, function() {
    // on mouseout, reset the background colour
    $('.hover-text').css('color', 'black');
  });
});


function changeText(id) {
  console.log("hello");
  id.style.backgroundColor = "green";
  id.sytle.color="blue";
}
*/
