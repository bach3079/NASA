document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".redtangle img");
    let currentIndex = 0;
    if (images.length > 0) {
        images[currentIndex].classList.add("active");
        setInterval(() => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }, 5000);
    }
});