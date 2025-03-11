document.querySelectorAll(".day-two-accordion__button").forEach(button => {
    button.addEventListener("click", function () {
        const item = this.parentElement;
        
        document.querySelectorAll(".day-two-accordion__item").forEach(accItem => {
            if (accItem !== item) accItem.classList.remove("active");
        });

        item.classList.toggle("active");
    });
});
