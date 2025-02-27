/*Render carousel*/
const slides = [
  {
    img_src: "img/popular_tours/ultimate-safari.webp",
    img_alt: "Safari tour",
    tag: "Long Tour",
    title: "Ultimate Safari",
    detailslist: ["7 days", "20-35", "$840"],
    description:
      "Set out on an exciting week-long journey through Zimbabwe – from Hwange National Park to Mana Pools to Victoria Falls National Park.",
  },
  {
    img_src: "img/popular_tours/ultimate-safari.webp",
    img_alt: "Safari tour",
    tag: "Weekend Tour",
    title: "Classic Safari",
    detailslist: ["3 days", "20-35", "$240"],
    description:
      "Experience the best wildlife viewing and authentic culture on our 3-day family-friendly Classic Safari tour to Hwange National Park.",
  },
];

let currentSlideIdx = 0;
renderCarousel(slides);
const prevButton = document.querySelector(".popular-tours__arrow--prev");
const nextButton = document.querySelector(".popular-tours__arrow--next");

function renderCarousel(slides) {
  const carouselContainer = document.querySelector(".popular-tours__carousel");
  const currentSlide = slides[currentSlideIdx];
  carouselContainer.innerHTML = `<div class="popular-tours__card">
      <button class="popular-tours__arrow popular-tours__arrow--prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="6.586 3.293 10.121 17.414"
        >
          <path
            d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
          />
        </svg>
      </button>
      <div class="popular-tours__card-image">
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
          <li class="popular-tours__card-detail">Price — <span>${currentSlide.detailslist[2]}</span></li>
        </ul>
        <p class="popular-tours__card-description">${currentSlide.description}</p>
        <a href="/single-tour.html" class="popular-tours__card-button"
          >Learn More</a
        >
      </div>
      <button class="popular-tours__arrow popular-tours__arrow--next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="7.293 3.293 10.121 17.414"
        >
          <path
            d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
          />
        </svg>
      </button>`;
}

function nextSlide() {
  currentSlideIdx = (currentSlideIdx + 1) % slides.length;
  renderCarousel(slides);
}

function prevSlide() {
  currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
  renderCarousel(slides);
}

//renderCarousel(slides);

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

/*Render bottom links*/
const linkItems = [
  {
    id: 1,
    title: "Hot Air Balloon Safari",
  },
  {
    id: 2,
    title: "Chimpanzee Trekking",
  },
  {
    id: 3,
    title: "Photo Tours",
  },
  {
    id: 4,
    title: "Wildlife Tours",
  },
];
const linksList = document.querySelector(".popular-tours__list");
function renderLinks(linkItems) {
  let linksHTML = "";
  for (const item of linkItems) {
    linksHTML += `<div class="popular-tours__item">
      <h3 class="popular-tours__item-title">${item.title}</h3>
      <hr class="popular-tours__item-divider" />
      <a href="/single-tour" class="popular-tours__item-link">Read More</a>
    </div>`;
  }
  linksList.innerHTML = linksHTML;
}
renderLinks(linkItems);
