window.addEventListener('DOMContentLoaded', () => {
    const drop1 = document.querySelector('.menu__title_1'),
        subMenu1 = document.querySelector('.sub-menu-1');


    drop1.addEventListener('click', () => {
        drop1.classList.toggle('menu__title_active');
        subMenu1.classList.toggle('sub-menu-1_active');
    });


    const drop2 = document.querySelector('.menu__title_2'),
        subMenu2 = document.querySelector('.sub-menu-2');


    drop2.addEventListener('click', () => {
        drop2.classList.toggle('menu__title_active');
        subMenu2.classList.toggle('sub-menu-2_active');
    });
});