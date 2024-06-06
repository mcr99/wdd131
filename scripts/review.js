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


const visitDisplay = document.querySelector(".norr");

let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
	visitDisplay.textContent = numVisits;
} else {
	visitDisplay.textContent = `This is your first review! `;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);