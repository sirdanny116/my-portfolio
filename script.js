const animatedElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    observer.observe(element);
});
window.addEventListener("scroll", function () {

    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach(function (element) {

        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (position < screenPosition) {
            element.classList.add("show");
        }

    });

});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});