// alert('JS is connected')
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const menu = document.getElementById('Menu');

    toggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
});