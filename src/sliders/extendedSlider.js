
let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    const indicators = document.getElementsByClassName("indicator");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active";
}


/*second version carousel*/



let slideIndexSplit = 1;
showSlideSplit(slideIndexSplit);

function changeSlideSplit(n) {
    showSlideSplit(slideIndexSplit += n);
}

function currentSlideSplit(n) {
    showSlideSplit(slideIndexSplit = n);
}

function showSlideSplit(n) {
    const slides = document.getElementsByClassName("carousel-split-slide");
    const indicators = document.getElementsByClassName("indicator-split");
    if (n > slides.length) {
        slideIndexSplit = 1;
    }
    if (n < 1) {
        slideIndexSplit = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }
    slides[slideIndexSplit - 1].style.display = "block";
    indicators[slideIndexSplit - 1].className += " active";
}

  /*
        // Auto-advance the slides (optional)
        setInterval(() => {
            changeSlide(1);
        }, 5000); // Change slides every 5 seconds */

/*
// Attacher un gestionnaire d'événements au bouton
document.addEventListener("DOMContentLoaded", function () {
    const boutonPrev = document.getElementsByClassName(".carousel-arrow.prev");
    const boutonNext = document.getElementsByClassName(".carousel-arrow next");
    boutonPrev.addEventListener("click", function () {
      changeSlide(-1);
    });
    boutonNext.addEventListener("click", function () {
        changeSlide(1);
      });

  });
  */