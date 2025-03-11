const slides = [
  '<div><img src="img/animals/edinorog.png" alt="Edinorog"></div>',
  '<div><img src="img/animals/cheetah.png" alt="Cheetah"></div>',
  '<div><img src="img/animals/elephant.png" alt="Elephant"></div>',
  '<div><img src="img/animals/zebra.png" alt="Zebra"></div>',
];

let currentSlideIndex = 0;

function renderCarousel(slides) {
  const carouselContainer = document.querySelector(".animals-carousel__slides");
  carouselContainer.innerHTML = slides[currentSlideIndex];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIndex = (currentSlideIndex + 1) % slides.length;
    carouselContainer.innerHTML += slides[secondSlideIndex];
  }
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  renderCarousel(slides);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  renderCarousel(slides);
}

renderCarousel(slides);
//setInterval(nextSlide, 2000);
const nextButton = document.querySelector(".animals-carousel__btn-next");
const prevButton = document.querySelector(".animals-carousel__btn-prev");
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

window.addEventListener("resize", () => {
    renderCarousel(slides);
});