window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__link'),
        hamburger = document.querySelector('.hamburger'),
        body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        body.classList.toggle('noScroll');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    const loupe = document.querySelector('.search-btn-loupe'),
        searchField = document.querySelector('.search-field');

    loupe.addEventListener('click', () => {
        searchField.classList.toggle('search-field_active');
    });

});