const advantages = [
  {
    id: 1,
    icon_src: "img/advantages/behemoth_icon.svg",
    icon_alt: "Behemoth icon",
    title: "Travel Experiences",
    description:
      "We deliver custom tours to Africa to create unforgettable memories for you and your companions.",
  },
  {
    id: 2,
    icon_src: "img/advantages/elephant_icon.svg",
    icon_alt: "Elephant icon",
    title: "Highly Qualified Team",
    description:
      "All our guides are fully licensed and insured to carry out tours in their country.",
  },
  {
    id: 3,
    icon_src: "img/advantages/giraffe_icon.svg",
    icon_alt: "Giraffe icon",
    title: "Social Responsibility",
    description:
      "All our guides are fully licensed and insured to carry out tours in their country.",
  },
  {
    id: 4,
    icon_src: "img/advantages/lion_icon.svg",
    icon_alt: "Lion icon",
    title: "Financial Insurance",
    description:
      "We provide ATOL License & International Passenger Protection for each trip.",
  },
];

function renderAdvantages(advantages) {
  let advantagesHTML = "";
  for (const item of advantages) {
    advantagesHTML += `<div class="advantages__item">
        <div class="advantages__icon-wrapper">
            <img class="advantages__icon" src="${item.icon_src}" alt="${item.icon_alt}" width="22" />
        </div>
        <h3 class="advantages__title">${item.title}</h3>
        <svg class="advantages__line" xmlns="http://www.w3.org/2000/svg" width="3000px" height="33" style="width: 15%">
            <path d="M0 16.5 L3000 16.5" style="fill: none; stroke: #f7c702; stroke-width: 3px"></path>
        </svg>
        <p class="advantages__text">${item.description}</p>
    </div>
    `;
  }
  const advantagesList = document.querySelector(".advantages");
  advantagesList.innerHTML = advantagesHTML;
}

renderAdvantages(advantages);
