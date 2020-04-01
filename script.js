const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('ul').forEach(el => el.classList.remove('filter'));
    event.target.classList.add('filter');

});