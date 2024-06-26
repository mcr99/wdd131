const hamButton = document.querySelector("#hamb");
const navigation = document.querySelector(".hm");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


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


// array

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14",
        area: 17609,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/400x250/lds-temple-guatemala-city-1021144-wallpaper.jpg"
    },
    {
        templeName: "Quetzaltenago Guatemala",
        location: "Quetzaltenango, Guatemala",
        dedicated: "2011, December, 11",
        area: 282014,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quetzaltenango-guatemala/400x250/quetzaltenango-guatemala-temple-lds-893068-wallpaper.jpg",
    },
    {
        templeName: "Coban Guatemala",
        location: "Coban, Guatemala",
        dedicated: "2024, June, 9",
        area: 234653,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/4b129a33b4b311ee9c99eeeeac1e820ae5a7a3bb/full/320%2C/0/default",
    },
  ];

const container = document.getElementById("temple-cards");
// Function to create temple card
function createTempleCard(temple) {
    const card = document.createElement("div");
    card.className = "temple-cards";

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq. ft.`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    return card;
}

// Loop through temples array and create cards
temples.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
});

// next


function displayTemples(filteredTemples) {
    container.innerHTML = ''; // Clear existing temples
    filteredTemples.forEach(temple => {
      const card = createTempleCard(temple);
      container.appendChild(card);
    });
  }
  
  function filterTemples(criteria) {
    let filteredTemples = [];
    switch (criteria) {
      case 'old':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
        break;
      case 'new':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
        break;
      case 'large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case 'small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      case 'home':
      default:
        filteredTemples = temples;
        break;
    }
    displayTemples(filteredTemples);
  }
  
  // Display all temples by default on page load
  displayTemples(temples);
