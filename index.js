const selectedPerson = localStorage.getItem("selectedPerson");
let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;

const circles = document.querySelectorAll(".circle");

if (selectedPerson && circles.length > 0) {
    if (currentIndex < circles.length) {
        const circle = circles[currentIndex];

        if (circle.textContent.trim() === "") {
            circle.textContent = "";
            circle.innerHTML = selectedPerson;

            currentIndex++;
            localStorage.setItem("currentIndex", currentIndex);
        }
    }
}

const storedName = localStorage.getItem("hondNaam") || "Spike";
const headers = document.querySelectorAll(".header");

headers.forEach(header => {
    header.innerHTML = header.innerHTML.replace("Spike", storedName);
});