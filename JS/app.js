new fullpage("#page", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  navigationTooltips: [
    "Home",
    "About",
    "Skills",
    "Services",
    "Works",
    "Slider",
    "Testimonials",
  ],
  showActiveTooltip: false,
  scrollingSpeed: 1100,
  slidesNavigation: true,
  slidesNavPosition: "bottom",
});

// typeWriter
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Front End")
  .pauseFor(300)
  .deleteChars(20)
  .typeString("Developer")
  .pauseFor(300)
  .deleteChars(20)
  .typeString("Designer")
  .pauseFor(300)
  .deleteChars(10)
  .typeString(
    '<strong>HTML | CSS | <span style="color: var(--main-color);">JS ♥</span></strong>'
  )
  .pauseFor(300)
  .deleteChars(30)
  .typeString("Designer")
  .pauseFor(1000)
  .start();

// Wow
new WOW().init();

// OwlCarusel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:3000,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: true,
      },
    },
  });
});
