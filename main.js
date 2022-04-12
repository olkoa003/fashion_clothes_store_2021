'use strict';

//menuBar -opening && closing

const menuEl = document.querySelector('.main__menu');
console.log()

document.querySelector('.main_menu_close-btn').addEventListener('click', (event) => {
    menuEl.classList.add('main-menu-close');
});

document.querySelector('.main-menu-buttton').addEventListener('click', (event) => {
    menuEl.classList.remove('main-menu-close');
});
