'use strict'

// Make navbar transparant when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }
    scrollIntoView(link); 
});


// Handle scrolling when tapping on the 'contact me' button
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});


// Make #Home font fade to transparant as the window scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - (window.scrollY / homeHeight);
});



// Show Arrow-Up button when scrolling down 
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});


// Handle click on the 'Arrow-up' button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});



// Projects
// check more at Hortenssiaa's blog
const workBtnContainer = document.querySelector(".work__categories");
const projectsContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
const categoryBtnContainerArr = document.querySelectorAll(".category__btn");
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    // Change clicked category button color  
    categoryBtnContainerArr.forEach((categoryBtn) => {
        if (categoryBtn.dataset.filter === filter) {
            categoryBtn.classList.add('active');
        } else {
            categoryBtn.classList.remove('active');
        }
    });

    // 다 보여지고난 다음에 (giving some times for anim-out)
    projectsContainer.classList.add("anim-out");
    
    // after 0.3s, filtering with IF-ELSE then remove anim-out (-> make it's opacity : 1)
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === "*" || project.dataset.type === filter) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });

        projectsContainer.classList.remove("anim-out");
    }, 270);

});



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : 'smooth'});
}
