document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded!");

  const container = document.querySelector(".single-tour-day-one__container");
  const content = document.querySelector(".single-tour-day-one__content");
  const gallery = document.querySelector(".single-tour-day-one__gallery");

  if (!container || !content || !gallery) {
    console.error("❌ Один із блоків не знайдено!");
    return;
  }

  function updateLayout() {
    if (window.innerWidth > 768) {
      container.style.display = "flex";
      container.style.flexDirection = "row";
      container.style.alignItems = "flex-start";
      container.style.justifyContent = "center";

      content.style.flex = "1";
      content.style.maxWidth = "48%";
      content.style.textAlign = "left";

      gallery.style.flex = "1";
      gallery.style.maxWidth = "48%";
    } else {
      container.style.display = "flex";
      container.style.flexDirection = "column";

      content.style.maxWidth = "100%";
      gallery.style.maxWidth = "100%";
    }
  }

  updateLayout();
  window.addEventListener("resize", updateLayout);
});