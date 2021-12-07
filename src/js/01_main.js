// slick
$(document).ready(function() {
    if ($(window).width() > 768) {
        $('.slick').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
        });
    } 
    else {
        $('.slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });
    }
    let currentActiveLink = null;
    $(".buyLink").click(function(e) {
      e.preventDefault();
      if(currentActiveLink && currentActiveLink !== ".buyLink")
        $(".buyLink").removeClass("active");
      currentActiveLink = ".buyLink";
      $(".buyLink").addClass("active");

      $([document.documentElement, document.body]).animate({
        scrollTop: $("#buy").offset().top
      }, 2000);
    });

    $(".rulesLink").click(function(e) {
      e.preventDefault();
      if(currentActiveLink && currentActiveLink !== ".rulesLink")
        $(".rulesLink").removeClass("active");
      currentActiveLink = ".rulesLink";
      $(".rulesLink").addClass("active");

      $([document.documentElement, document.body]).animate({
        scrollTop: $("#rules").offset().top
      }, 2000);
    });

    $(".featuresLink").click(function(e) {
      e.preventDefault();
      if(currentActiveLink && currentActiveLink !== ".featuresLink")
        $(".featuresLink").removeClass("active");
      currentActiveLink = ".featuresLink";
      $(".featuresLink").addClass("active");

      $([document.documentElement, document.body]).animate({
        scrollTop: $("#features").offset().top
      }, 2000);
    });

    $(".benefitsLink").click(function(e) {
      e.preventDefault();
      if(currentActiveLink && currentActiveLink !== ".benefitsLink")
        $(".benefitsLink").removeClass("active");
      currentActiveLink = ".benefitsLink";
      $(".benefitsLink").addClass("active");

      $([document.documentElement, document.body]).animate({
        scrollTop: $("#benefits").offset().top
      }, 2000);
    });

    $(".reviewsLink").click(function(e) {
      e.preventDefault();
      if(currentActiveLink && currentActiveLink !== ".reviewsLink")
        $(".reviewsLink").removeClass("active");
      currentActiveLink = ".reviewsLink";
      $(".reviewsLink").addClass("active");

      $([document.documentElement, document.body]).animate({
        scrollTop: $("#reviews").offset().top
      }, 2000);
    });

    $(".questionsLink").click(function(e) {
      e.preventDefault();
      if(currentActiveLink && currentActiveLink !== ".questionsLink")
        $(".questionsLink").removeClass("active");
      currentActiveLink = ".questionsLink";
      $(".questionsLink").addClass("active");

      $([document.documentElement, document.body]).animate({
        scrollTop: $("#questions").offset().top - 100
      }, 2000);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  // questions
  let questionsDom = document.querySelectorAll('.question__title');
  questionsDom.forEach((item) => {
    if (item.nextElementSibling.classList.contains("hidden")) {
      $(item.nextElementSibling).hide();
    }
    item.addEventListener("click", () => {
      item.nextElementSibling.classList.toggle("hidden");
      if (!item.nextElementSibling.classList.contains("hidden")) {
        $(item.nextElementSibling).slideDown("slow");
      } else {
        $(item.nextElementSibling).slideUp("slow");
      }
      item.classList.toggle("active");
    });
  });

  // burger
  let burgerDom = document.querySelector(".burger");
  let mobileNavDom = document.querySelector(".mobileNav__wrapper");
  burgerDom.addEventListener("click", () => {
    burgerDom.classList.toggle("active");
    mobileNavDom.classList.toggle("hidden");
  });
});