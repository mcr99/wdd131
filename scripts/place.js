document.querySelector('#year').textContent = new Date().getFullYear();

alert(document.lastModified);

let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

const pattern = /last_modif\s*=\s*([^;]*)/;

let day = oLastModif.getDate().toString().padStart(2,"0");
let month = (oLastModif.getMonth() + 1).toString().padStart(2,"0");
let year = oLastModif.getFullYear();

let hours = oLastModif.getHours().toString().padStart(2,"0");
let minutes = oLastModif.getMinutes().toString().padStart(2,"0");
let seconds = oLastModif.getSeconds().toString().padStart(2, "0");

let formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
document.getElementById("lastModified").innerHTML = formattedDate;


document.addEventListener("DOMContentLoaded", function() {
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 50 && windSpeed >= 3) {
            const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(1);
        } else {
            return "N/A";
        }
    }

    // Get temperature and wind speed values from the DOM
    const temp = parseFloat(document.getElementById("temp").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

    // Calculate windchill
    const windChill = calculateWindChill(temp, windSpeed);

    // Display the windchill factor
    document.getElementById("windChill").textContent = windChill;
});