const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 3000);
})

setTimeout(function () {

    ScrollReveal().reveal('h1', { origin: 'right', distance: '80px', duration: 3000, opacity: 0 }, 500);

}, 3000);

document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const btnsHtml = Array.from(items, () => {
        return `<span class="carousel-btn"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
    ${btnsHtml.join("")}
    </div>
    `);
    const buttons = carousel.querySelectorAll(".carousel-btn");
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(button => button.classList.remove("carousel-btn-selected"));

            items[i].classList.add("carousel-item-selected");
            button.classList.add("carousel-btn-selected");
        });
    });
    items[0].classList.add("carousel-item-selected");
    buttons[0].classList.add("carousel-btn-selected");
});