document.addEventListener("DOMContentLoaded"),
  () => {
    console.log("JS Loaded!");

    const section = document.querySelector(".single-tour-day-one");
    const content = document.querySelector(".single-tour-day-one__content");
    const gallery = document.querySelector(".single-tour-day-one__gallery");

    if (!section || !content || !gallery) {
      console.error("❌ Один із блоків не знайдено!");
      return;
    }
  };

function updateLayout() {
  if (window.innerWidth > 1024) {
    section.style.display = "flex";
    section.style.flexDirection = "row";
    section.style.alignItems = "flex-start";

    content.style.flex = "1";
    content.style.maxWidth = "50%";

    gallery.style.flex = "1";
    gallery.style.maxWidth = "50%";
  } else {
    section.style.display = "flex";
    section.style.flexDirection = "column";
    content.style.maxWidth = "100%";
    gallery.style.maxWidth = "100%";
  }
}

updateLayout();

window.addEventListener("resize", updateLayout);
