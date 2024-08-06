document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.nav__burger');
    const dropdown = document.querySelector('.nav__dropdown');

    burger.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });
});
