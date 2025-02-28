/*Render carousel*/
const response = await fetch("api/popular-tours.json");
const slides = await response.json();

const prevButton = document.querySelector(".popular-tours__arrow--prev");
const nextButton = document.querySelector(".popular-tours__arrow--next");
let currentSlideIdx = 0;

function renderCarousel(slides) {
  const carouselContainer = document.querySelector(".popular-tours__card");
  carouselContainer.style.opacity = 0;

  setTimeout(() => {
    const currentSlide = slides[currentSlideIdx];
    carouselContainer.innerHTML = `<div class="popular-tours__card-image">
        <img src="${currentSlide.img_src}" alt="${currentSlide.img_alt}" />
      </div>
      <div class="popular-tours__card-info">
        <p class="popular-tours__card-tag">${currentSlide.tag}</p>
        <h3 class="popular-tours__card-name">${currentSlide.title}</h3>
        <ul class="popular-tours__card-details">
          <li class="popular-tours__card-detail">
            Duration — <span>${currentSlide.detailslist[0]}</span>
          </li>
          <li class="popular-tours__card-detail">
            People in group — <span>${currentSlide.detailslist[1]}</span>
          </li>
          <li class="popular-tours__card-detail">
            Price — <span>${currentSlide.detailslist[2]}</span>
          </li>
        </ul>
        <p class="popular-tours__card-description">${currentSlide.description}</p>
        <a href="/single-tour.html" class="popular-tours__card-button">Learn More</a>
      </div>`;
    carouselContainer.style.opacity = 1;
  }, 300);
}

function nextSlide() {
  currentSlideIdx = (currentSlideIdx + 1) % slides.length;
  renderCarousel(slides);
}

function prevSlide() {
  currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
  renderCarousel(slides);
}

renderCarousel(slides);

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

/*Render bottom links*/
const linkItems = [
  "Hot Air Balloon Safari",
  "Chimpanzee Trekking",
  "Photo Tours",
  "Wildlife Tours",
];
const linksList = document.querySelector(".popular-tours__list");
function renderLinks(linkItems) {
  let linksHTML = "";
  for (const item of linkItems) {
    linksHTML += `<div class="popular-tours__item">
      <h3 class="popular-tours__item-title">${item}</h3>
      <hr class="popular-tours__item-divider" />
      <a href="/single-tour" class="popular-tours__item-link">Read More</a>
    </div>`;
  }
  linksList.innerHTML = linksHTML;
}
renderLinks(linkItems);
