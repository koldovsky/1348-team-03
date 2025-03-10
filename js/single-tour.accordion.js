document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".day-two-accordion__item");

    accordionItems.forEach((item) => {
        const button = item.querySelector(".day-two-accordion__button");

        button.addEventListener("click", function () {
            accordionItems.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("active");
                    el.querySelector(".day-two-accordion__content").style.display = "none";
                    el.querySelector(".day-two-accordion__button").innerHTML = el.querySelector(".day-two-accordion__button").innerHTML.replace("-", "+");
                }
            });

            item.classList.toggle("active");
            const content = item.querySelector(".day-two-accordion__content");
            const icon = item.querySelector(".day-two-accordion__button");

            if (item.classList.contains("active")) {
                content.style.display = "block";
                icon.innerHTML = icon.innerHTML.replace("+", "-");
            } else {
                content.style.display = "none";
                icon.innerHTML = icon.innerHTML.replace("-", "+");
            }
        });
    });
});
