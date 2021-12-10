$(document).ready(function() {
  // slick
  if ($(window).width() > 1200) {
    $('.slick').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
    });
  } 
  else if ($(window).width() < 760) {
    $('.slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    });
  }
  else {
    $('.slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    });
  }

  //links
  let currentActiveLink = null;
  $(".dobbleLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".dobbleLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".dobbleLink";
    $(".dobbleLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#dobble").offset().top
    }, 2000);
  });
  $(".buyLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".buyLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".buyLink";
    $(".buyLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#buy").offset().top
    }, 2000);
  });

  $(".rulesLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".rulesLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".rulesLink";
    $(".rulesLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#rules").offset().top
    }, 2000);
  });

  $(".featuresLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".featuresLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".featuresLink";
    $(".featuresLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#features").offset().top
    }, 2000);
  });

  $(".benefitsLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".benefitsLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".benefitsLink";
    $(".benefitsLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#benefits").offset().top
    }, 2000);
  });

  $(".reviewsLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".reviewsLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".reviewsLink";
    $(".reviewsLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#reviews").offset().top
    }, 2000);
  });

  $(".questionsLink").click(function(e) {
    e.preventDefault();
    if(currentActiveLink && currentActiveLink !== ".questionsLink")
      document.querySelectorAll(currentActiveLink).forEach((elem) => {
        elem.classList.remove("active");
      });
    currentActiveLink = ".questionsLink";
    $(".questionsLink").addClass("active");

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#questions").offset().top - 100
    }, 2000);
  });


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

  // close window

  const CookieService = {
    setCookie(name, value, days) {
      let expires = '';

      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
      }

      document.cookie = name + '=' + (value || '')  + expires + ';';
    },

    getCookie(name) {
      const cookies = document.cookie.split(';');

      for (const cookie of cookies) {
        if (cookie.indexOf(name + '=') > -1) {
          return cookie.split('=')[1];
        }
      }

      return null;
    }
  }
  if (!CookieService.getCookie('exitIntentShown')) {
    setTimeout(() => {
      document.addEventListener('mouseout', mouseEvent);
    }, 10_000);
  }
  const mouseEvent = e => {
    const shouldShowExitIntent = 
      !e.toElement && 
      !e.relatedTarget &&
      e.clientY < 10;

    if (shouldShowExitIntent) {
      document.removeEventListener('mouseout', mouseEvent);
      document.querySelector('.closePopup').classList.remove('hidden');
      CookieService.setCookie('exitIntentShown', true, 1);
    }
  };

  $(".closePopup").click(function(e) {
    if(
      e.target.classList.contains("closePopup") || 
      e.target.classList.contains("closePopup__close")
    ){
      $(".closePopup").addClass("hidden");
    }
  });

  $(".closePopup__block>.btn").click(function(e) {
    $(".closePopup").addClass("hidden");
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#buy").offset().top
    }, 2000);
  });

  // video
  $(".--svg__rules_text3").click(function() {
    $(".videoPopup").removeClass("hidden");
  });

  $(".videoPopup").click(function(e) {
    if(
      e.target.classList.contains("videoPopup") || 
      e.target.classList.contains("videoPopup__close")
    ){
      $(".videoPopup").addClass("hidden");
      $(".videoPopup video").get(0).pause();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  
});