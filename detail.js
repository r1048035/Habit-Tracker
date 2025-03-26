const hondNaam = localStorage.getItem("hondNaam") || "Spike";
const header = document.querySelector(".header");

if (header) {
    header.innerHTML = header.innerHTML.replace("Spike", hondNaam);
}

function selectPerson(personType) {
    localStorage.setItem("selectedPerson", personType);
}

const storedName = localStorage.getItem("hondNaam") || "Spike";
const headers = document.querySelectorAll(".header");

headers.forEach(header => {
    header.innerHTML = header.innerHTML.replace("Spike", storedName);
});