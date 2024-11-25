// JavaScript for Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//Navbar special feature
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav_black');
    } else {
        nav.classList.remove('nav_black');
    }
});