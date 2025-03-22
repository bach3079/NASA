fetch("https://api.nasa.gov/insight_weather/?api_key=x0AY3oWTNrP3GQK6jFfmRcOUGsKWk1ROYfU6RkZg&feedtype=json&ver=1.0")
  .then((res) => res.json())
  .then((data) => {
    const productDiv = document.getElementById("product");
    productDiv.innerHTML = ""; // Clear any existing content

    // Check if 'data' is available and contains weather information
    if (data && data.sol_keys && data.sol_keys.length > 0) {
      data.sol_keys.forEach((sol) => {
        const weather = data[sol]; // Get weather data for a specific 'sol'

        const date = sol; // Using sol as the date (Mars sol)
        const temperature = weather.AT ? weather.AT.av : 'N/A'; // Temperature data (average)
        const pressure = weather.AP ? weather.AP.av : 'N/A'; // Atmospheric pressure
        const windSpeed = weather.HWS ? weather.HWS.av : 'N/A'; // Wind speed

        // Create a weather card
        const card = document.createElement("div");
        card.className = "card m-2";
        card.style.width = "26rem";
        card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">Sol ${date}</h5>
                        <p class="card-text">Temperature: ${temperature}°C</p>
                        <p class="card-text">Pressure: ${pressure} Pa</p>
                        <p class="card-text">Wind Speed: ${windSpeed} m/s</p>
                    </div>
                `;

        // Append the weather card to the productDiv
        productDiv.appendChild(card);
      });
    } else {
      productDiv.innerHTML = `<p>No weather data available for InSight</p>`;
    }
  })
  .catch((err) => {
    console.error("Error fetching InSight weather data:", err);
    document.getElementById("product").innerHTML = `
            <div class="alert alert-danger" role="alert">
                Error loading NASA InSight weather data. Please try again later.
            </div>
        `;
  });
// Improved Javascript courtesy of Gemma Anible
const nasa_api_key = 'x0AY3oWTNrP3GQK6jFfmRcOUGsKWk1ROYfU6RkZg';   // Replace with personal NASA API key
const cpoints = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
if (nasa_api_key === 'x0AY3oWTNrP3GQK6jFfmRcOUGsKWk1ROYfU6RkZg') {
  $('#nasa_api_key').html('')
}
var one_sol = false;
//////////////////////////////////////////////////////////////////////
// Retrieve Mars weather data from NASA API as JSON stream
// - Write data for each Sol
// - Write JSON stream
//////////////////////////////////////////////////////////////////////
$.get(
  `https://api.nasa.gov/insight_weather/?feedtype=json&ver=1.0&api_key=${nasa_api_key}`,
  data => {
    data.sol_keys.forEach(sol => write_sol_data(sol, data[sol]));
    $("#summary").append('<hr>');
  }
).always(
  function (data) {
    // Write JSON stream to #json PRE
    $("#json").text(JSON.stringify(data, null, 2));
    if (one_sol) {
      plot_sol_data(one_sol, data[one_sol]);
    }
  }
);
//////////////////////////////////////////////////////////////////////
// Function to write data for one Sol
//////////////////////////////////////////////////////////////////////
function write_sol_data(sol, sol_obj) {
  // Summarize per-Sol temperature data to #summary DIV
  $('#summary').append(`On Sol <b>${sol}</b> the temperatures ranged from <b>${Math.round(sol_obj.AT.mn)}&deg;C</b> to <b>${Math.round(sol_obj.AT.mx)}&deg;C</b> with an atmospheric pressure of <b>${Math.round(sol_obj.PRE.mn)} Pa</b> to <b>${Math.round(sol_obj.PRE.mx)} Pa</b>.<br>`);
  one_sol = sol;
  // Add per-Sol button to #buttons DIV
  $('#buttons').append(
    $('<button>')
      .attr('id', sol)
      .on('click', e => plot_sol_data(sol, sol_obj))
      .text(sol)
  );
}
//////////////////////////////////////////////////////////////////////
// Plot Wind Direction (WD) data for one Sol to #wd_plot DIV
//////////////////////////////////////////////////////////////////////
function plot_sol_data(Sol, sol_obj) {
  var wd_obj = sol_obj.WD;   // Wind direction object for Sol
  // fill compass points with sol data
  var vals = (new Array(16)).fill(0).map((empty, idx) => wd_obj[idx] ? wd_obj[idx].ct : 0);
  var wd_data = [{               // Load WD data as one-element array
    r: vals,
    t: cpoints,
    name: `Sol ${Sol}`,
    marker: { color: 'rgb(0,127,127)' },
    type: 'area'
  }];
  var wd_layout = {              // Load WD plot layout
    font: { size: 16 },
    title: `     Wind Direction Distribution on Sol ${Sol} at InSight Mars landing site`,
    legend: { font: { size: 16 } },
    radialaxis: { ticksuffix: '' },
    orientation: 270
  };
  Plotly.newPlot('wd_plot', wd_data, wd_layout);     // Plot wind rose
  // Add most common wind direction
  $('#wd_most_common').html(`Most common wind direction is ${wd_obj.most_common ? wd_obj.most_common.compass_point : 'undefined'}<hr>`)
}
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