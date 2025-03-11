function init() {
  import("./index.animals-carousel.js");
  import("./index.call-form-clock.js");
  import("./index.advantages-load.js");
  import("./indes.popular-tours-carousel.js");
  import("./global.burger-menu.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
