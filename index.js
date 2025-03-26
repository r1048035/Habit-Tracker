const circles = document.querySelectorAll('.circle');
const savedMinutes = JSON.parse(localStorage.getItem('minutes')) || Array(14).fill(0);

savedMinutes.forEach((minutes, index) => {
    circles[index].textContent = minutes;
});
