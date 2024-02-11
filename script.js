
//Feito para fazer com que ao clicar no pointer mude o slide e ative o pointer correto.
const pointers = document.querySelectorAll(".pointer");
const slides = document.querySelector(".slides");
const slideWidth = 100; // Largura de cada slide em vw
let currentIndex = 0; // Índice do slide atual

pointers.forEach(function(pointer, index) {
  pointer.addEventListener('click', function() {
    pointers.forEach(function(otherPointer) {
      otherPointer.classList.remove('active');
    });
    pointer.classList.add('active');
    currentIndex = index;
    slides.style.marginLeft = `-${currentIndex * slideWidth}vw`;
  });
});
