document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const essaysList = document.getElementById("essaysList");
    const popularEssays = document.getElementById("popularEssays");

    if (postForm) {
        postForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let title = document.getElementById("title").value;
            let content = document.getElementById("content").value;
            let imageUpload = document.getElementById("imageUpload").files[0];

            let essays = JSON.parse(localStorage.getItem("essays")) || [];
            let newEssay = {
                title,
                content,
                image: imageUpload ? URL.createObjectURL(imageUpload) : "",
                views: 0, // Đếm lượt xem
                date: new Date().toISOString()
            };

            essays.push(newEssay);
            localStorage.setItem("essays", JSON.stringify(essays));
            alert("Essay posted successfully!");
            postForm.reset();
        });
    }
});
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
