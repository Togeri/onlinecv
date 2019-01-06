(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict



// Handling SVG icons
let illustrator = document.getElementsByClassName("illustrator")[0];
let photoshop = document.getElementsByClassName("photoshop")[0];

const iconActive = (event) => {
  let target = event.target;
  let iconClass = target.className;
  if (iconClass === "photoshop") {
    target.src = "img/photoshopColor.svg"
  } else {
    target.src = "img/illustratorColor.svg"
  }
}


const iconUnactive = (event) => {
  let target = event.target;
  let iconClass = target.className;
  if (iconClass === "photoshop") {
    target.src = "img/photoshop.svg"
  } else {
    target.src = "img/illustrator.svg"
  }
}
  
illustrator.addEventListener('mouseover', iconActive)
illustrator.addEventListener('mouseout', iconUnactive)
photoshop.addEventListener('mouseover', iconActive)
photoshop.addEventListener('mouseout', iconUnactive)

//Try 1
$(function () {
  $('#myCarousel').carousel({
      interval:2000,
      pause: "false"
  });
  $('#logoVideo').click(function () {
      $('#myCarousel').carousel('pause');
  });
});

$(function () {
  $('#myCarousel').carousel({
      interval:2000,
      pause: "false"
  });
  $('#resumeVideo').click(function () {
      $('#myCarousel').carousel('pause');
  });
});