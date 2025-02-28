/*Render carousel*/
const slides = [
  {
    img_src: "img/popular_tours/ultimate-safari.webp",
    img_alt: "Ultimate Safari tour",
    tag: "Long Tour",
    title: "Ultimate Safari",
    detailslist: ["7 days", "20-35", "$840"],
    description:
      "Set out on an exciting week-long journey through Zimbabwe – from Hwange National Park to Mana Pools to Victoria Falls National Park.",
  },
  {
    img_src: "img/popular_tours/wildlife-safari.webp",
    img_alt: "Wildlife Safari tour",
    tag: "Weekend Tour",
    title: "Wildlife Safari",
    detailslist: ["3 days", "20-35", "$140"],
    description:
      "Led by professional guides, you will spend your vacations searching for the Big Five and marvelous wildlife on a journey in the National Park.",
  },
  {
    img_src: "img/popular_tours/classic-safari.webp",
    img_alt: "Classic Safari tour",
    tag: "Weekend Tour",
    title: "Classic Safari",
    detailslist: ["3 days", "20-35", "$240"],
    description:
      "Experience the best wildlife viewing and authentic culture on our 3-day family-friendly Classic Safari tour to Hwange National Park.",
  },
  {
    img_src: "img/popular_tours/luxury-safary.webp",
    img_alt: "Luxury Safari tour",
    tag: "Weekend Tour",
    title: "Luxury Safari",
    detailslist: ["3 days", "20-35", "$340"],
    description:
      "Discover some of the most diverse wildlife on a 6-day journey through the rainforests of the Congo Basin. For experienced adventurers only.",
  },
];

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
