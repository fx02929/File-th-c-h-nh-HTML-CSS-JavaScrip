$(document).ready(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop()) {
        $(".wrapper nav").addClass("scroll");
      } else {
        $(".wrapper nav").removeClass("scroll");
      }
    });
    $(".burger").on("click", function() {
      $(".wrapper nav ul").slideToggle(500);
    });
  });
  function animateBar(x) {
    x.classList.toggle("change");
  }
  