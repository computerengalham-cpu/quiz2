let cards = document.querySelectorAll(".card img");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");
let closeBtn = document.getElementById("close");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let currentIndex = 0;

cards.forEach(function (img, index) {
    img.addEventListener("click", function () {

        currentIndex = index;

        let imgSrc = img.getAttribute("src");   
        modalImg.setAttribute("src", imgSrc);   

        modal.classList.add("active");
    });
});


closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
});
modal.addEventListener("click", function (e) {

    if (e.target === modal) {
        modal.classList.remove("active");
    }

});

nextBtn.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    let nextSrc = cards[currentIndex].getAttribute("src");
    modalImg.setAttribute("src", nextSrc);
});

prevBtn.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }

    let prevSrc = cards[currentIndex].getAttribute("src");
    modalImg.setAttribute("src", prevSrc);
});

document.addEventListener("keydown", function (e) {

    if (!modal.classList.contains("active")) return;

    if (e.key === "ArrowRight") {
        nextBtn.click();
    }

    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }

    if (e.key === "Escape") {
        modal.classList.remove("active");
    }
});