/*
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

*/



const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      averarating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averarating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    }
  ];

  const item = document.getElementById("productName");

  products.forEach(products =>{
    const option = document.createElement("option");
    option.value = products.id;
    option.textContent = products.name;
    item.appendChild(option);
  });

