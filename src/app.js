const darkModeButton = document.getElementById('temaOscuro');
const body = document.body;
darkModeButton.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');
});

const whiteModeButton = document.getElementById('temaClaro');
whiteModeButton.addEventListener('click', () => {
    body.classList.toggle('modo-claro');
});

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname;
    const linksNav = document.querySelectorAll('.link-nav');

    linksNav.forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});