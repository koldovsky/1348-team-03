const response = await fetch("api/advantages.json");
const advantages = await response.json();

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
