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
document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2016-09-30&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=DEMO_KEY";
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cmeContainer = document.getElementById("cme-data");
            cmeContainer.innerHTML = "";
            if (data.length === 0) {
                cmeContainer.innerHTML = "<p class='text-danger'>Không có dữ liệu CME nào trong khoảng thời gian này.</p>";
                return;
            }
            data.forEach(event => {
                const { time21_5, speed, halfAngle, isMostAccurate, sourceLocation } = event;
                const cmeCard = `
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">CME Event</h5>
                                <p><strong>Thời gian:</strong> ${time21_5 || "Không có dữ liệu"}</p>
                                <p><strong>Tốc độ:</strong> ${speed ? speed + " km/s" : "Không có dữ liệu"}</p>
                                <p><strong>Góc mở rộng:</strong> ${halfAngle ? halfAngle + "°" : "Không có dữ liệu"}</p>
                                <p><strong>Vị trí nguồn gốc:</strong> ${sourceLocation || "Không có dữ liệu"}</p>
                                <p><strong>Dữ liệu chính xác nhất:</strong> ${isMostAccurate ? "Có" : "Không"}</p>
                            </div>
                        </div>
                    </div>
                `;

                cmeContainer.innerHTML += cmeCard;
            });
        })
        .catch(error => {
            console.error("Lỗi khi gọi API NASA:", error);
            document.getElementById("cme-data").innerHTML = `
                <p class="text-danger">Không thể tải dữ liệu CME. Vui lòng thử lại sau.</p>
            `;
        });
});
