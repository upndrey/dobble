// slick
$(document).ready(function() {
    console.log(1);
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