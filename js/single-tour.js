function init() {
    import("...js");
    import("./single-tour.discount.partial.js");
    import("./single-tour.photos.js");
    import("./single-tour.day-one.js");
    import("./global.burger-menu.js");
  }
  
  const totalPartials = document.querySelectorAll(
    '[hx-trigger="load"], [data-hx-trigger="load"]',
  ).length;
  let loadedPartialsCount = 0;
  
  document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
  });
