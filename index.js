let filledCircles = JSON.parse(localStorage.getItem("filledCircles")) || [];

const circles = document.querySelectorAll(".circle");

circles.forEach((circle, i) => {
    circle.textContent = "";
    if (filledCircles[i]) {
        circle.innerHTML = filledCircles[i];
    }
});

const selectedPerson = localStorage.getItem("selectedPerson");
if (selectedPerson && filledCircles.length < circles.length) {
    filledCircles.push(selectedPerson);
    localStorage.setItem("filledCircles", JSON.stringify(filledCircles));
    circles[filledCircles.length - 1].innerHTML = selectedPerson;
}

const storedName = localStorage.getItem("hondNaam") || "Spike";
const headers = document.querySelectorAll(".header");
headers.forEach(header => {
    header.innerHTML = header.innerHTML.replace("Spike", storedName);
});