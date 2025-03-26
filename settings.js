const naamHondInput = document.getElementById("naam-hond");

naamHondInput.addEventListener("input", function () {
    localStorage.setItem("hondNaam", naamHondInput.value);
});

document.getElementById("submit-naam").addEventListener("click", function () {
    const naamHondInput = document.getElementById("naam-hond").value;

    if (naamHondInput) {
        localStorage.setItem("hondNaam", naamHondInput);
    }
});

document.getElementById("submit-naam").addEventListener("click", function () {
    const naamHondInput = document.getElementById("naam-hond").value;

    if (naamHondInput) {
        localStorage.setItem("hondNaam", naamHondInput);
    }
});