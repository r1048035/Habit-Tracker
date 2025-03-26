const input = document.querySelector('.input');
const submitButton = document.querySelector('.knop');

submitButton.addEventListener('click', () => {
    const savedMinutes = JSON.parse(localStorage.getItem('minutes')) || Array(14).fill(0);
    savedMinutes.unshift(parseInt(input.value, 10));
    savedMinutes.pop();
    localStorage.setItem('minutes', JSON.stringify(savedMinutes));
});
