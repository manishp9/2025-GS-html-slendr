$(document).ready(function () {
  new WOW().init();
});

$(".trigger").click(function (e) {
  e.preventDefault();
  $("body").toggleClass("slip");
  $(".toogle-menu").slideToggle();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    // You can adjust the scroll position threshold
    $("header").addClass("scrolled");
    $(".toogle-menu").slideUp();
    $("body").removeClass("slip");
  } else {
    $("header").removeClass("scrolled");
  }
});

$("#currentYear").text(new Date().getFullYear());

$(document).ready(function () {
  $(".acoddian-item-box button").on("click", function () {
    const $currentParaBox = $(this).next(".acoddian-para-box"); // Get the clicked item's answer box
    const $currentSymbol = $(this).find("span"); // Get the clicked item's symbol

    // Slide up all other answer boxes and reset their symbols
    $(".acoddian-para-box")
      .not($currentParaBox)
      .slideUp()
      .prev()
      .find("span")
      .text("+");

    // Toggle the visibility of the clicked answer box
    $currentParaBox.slideToggle();

    // Toggle the symbol for the clicked item
    $currentSymbol.text($currentSymbol.text() === "+" ? "-" : "+");
  });
});
$(document).ready(function () {
  $(".faq-item-box button").on("click", function () {
    const $currentParaBox = $(this).next(".faq-para-box"); // Get the clicked item's answer box
    const $currentSymbol = $(this).find("span"); // Get the clicked item's symbol

    // Slide up all other answer boxes and reset their symbols
    $(".faq-para-box")
      .not($currentParaBox)
      .slideUp()
      .prev()
      .find("span")
      .text("+");

    // Toggle the visibility of the clicked answer box
    $currentParaBox.slideToggle();

    // Toggle the symbol for the clicked item
    $currentSymbol.text($currentSymbol.text() === "+" ? "-" : "+");
  });
});

$(document).ready(function () {
  $(".kit-img-btn-box button").on("click", function () {
    // Get the image source from the clicked button's image
    var newImgSrc = $(this).find("img").attr("src");

    // Change the big image's source to the new image source
    var hello = $(".big-img").attr("src", newImgSrc);
  });
});

$(document).ready(function () {
  $(".toggle-btn").on("click", function () {
    toggleNav($(this));
  });
});

function toggleNav(button) {
  const sidenav = $("#mySidenav");
  const main = $("#main");
  const screenWidth = $(window).width(); // Get the current screen width

  if (sidenav.css("right") === "-250px" || sidenav.css("right") === "-250") {
    sidenav.css("right", "0");

    // Apply margin only if the screen is wider than 786px
    if (screenWidth > 786) {
      main.css("marginRight", "250px");
    } else {
      main.css("marginRight", "0");
    }

    button.addClass("active");
  } else {
    sidenav.css("right", "-250px");
    main.css("marginRight", "0");
    button.removeClass("active");
  }
}


