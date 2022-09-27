const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const homeLinks = document.querySelectorAll(".home-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

homeLinks.forEach((homelink) => {
  homelink.addEventListener("click", () => {
    let isActive = false;
    const styles = window.getComputedStyle(homelink);
    const backgroundColor = styles.backgroundColor;
    console.log(backgroundColor);
    if (isActive == false && backgroundColor == "rgba(0, 0, 0, 0)") {
      homelink.classList.add("active");
      isActive = true;
    } else {
      homeLinks.classList.remove("active");
      isActive = false;
    }
  });
});

// Carousel

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("item--visible");
    slide.classList.add("item--hidden");
  }

  slides[slidePosition].classList.add("item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
