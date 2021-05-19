'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// whenever you scroll, show how much it scrolled!
document.addEventListener('scroll', () => {
    console.log('scroll : ' + window.scrollY);
    console.log(`navbar :  ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});