document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded!");

  function init() {
    console.log("Loading additional scripts...");

    const scripts = [
      "./single-tour.discount.partial.js",
      "./single-tour.photos.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }

  setTimeout(() => {
    const totalPartials = document.querySelectorAll(
      '[hx-trigger="load"], [data-hx-trigger="load"]'
    ).length;
    console.log(`Total Partials: ${totalPartials}`);

    let loadedPartialsCount = 0;

    htmx.on("htmx:afterOnLoad", () => {
      loadedPartialsCount++;
      console.log(`Loaded Partial ${loadedPartialsCount}/${totalPartials}`);

      if (loadedPartialsCount === totalPartials) {
        console.log("All Partials Loaded! Running init()");
        init();
      }
    });
  }, 200);
});
