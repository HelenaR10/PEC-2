const darkModeButton = document.getElementById('temaOscuro');
const body = document.body;
darkModeButton.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');
})