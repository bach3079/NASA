function fetchData() {
  fetch(`https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=x0AY3oWTNrP3GQK6jFfmRcOUGsKWk1ROYfU6RkZg`)
    .then((x) => x.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));
}
fetch("https://api.nasa.gov/EPIC/api/natural/images?api_key=x0AY3oWTNrP3GQK6jFfmRcOUGsKWk1ROYfU6RkZg")
  .then((res) => res.json())
  .then((data) => {
    const productDiv = document.getElementById("product");
    // Clear any existing content
    productDiv.innerHTML = "";
    // Check if there is data and loop through it
    if (data && data.length > 0) {
      data.forEach(item => {
        // Extract date components for URL formatting
        const dateStr = item.date; // Format: "2025-02-27 00:03:42"
        const dateParts = dateStr.split(" ")[0].split("-"); // Extract "2025-02-27"
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];
        // Format the image URL according to NASA API requirements
        const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${item.image}.jpg`;
        // Create a card for each image
        const card = document.createElement("div");
        card.className = "card m-2";
        card.style.width = "26rem";
        card.innerHTML = `
          <img src="${imageUrl}" class="card-img-top" alt="NASA EPIC Image">
          <div class="card-body">
            <h5 class="card-title">Earth on ${year}-${month}-${day}</h5>
            <p class="card-text">${item.caption}</p>
            <p class="card-text"><small class="text-muted">Image ID: ${item.identifier}</small></p>
          </div>
        `;
        // Append this card to the product div
        productDiv.appendChild(card);
      });
    } else {
      productDiv.innerHTML = `<p>No EPIC images available</p>`;
    }
  })
  .catch((err) => {
    console.error("Error fetching EPIC images:", err);
    document.getElementById("product").innerHTML = `
      <div class="alert alert-danger" role="alert">
        Error loading NASA EPIC images. Please try again later.
      </div>
    `;
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