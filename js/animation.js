// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("./../mdb-addons/mdb-lightbox-ui.html");
});

//Might not work because it is run locally atm. 

// ===== Modal ====
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
//showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// ===== Scroll to Top ==== 
/*
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200);      // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200);     // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {    // When arrow is clicked
  $('body,html').animate({
    scrollTop : 0                         // Scroll to top of body
  }, 500);
});
*/

function runToTop() {
  $('body,html').animate({
    scrollTop : 0                         // Scroll to top of body
  }, 500);
}