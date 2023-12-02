const body = document.querySelector('#body');
const header = document.querySelector('#header');
const div = document.querySelector('#headerDiv');
const menuBar = document.querySelector('#menuBar');
const menus = document.querySelector('#menus');
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const scroll = window.scrollY;
// const nav = document.createElement('nav')
// nav.classList.add('z-30', 'grid',  'grid-cols-1', 'grid-rows-1', 'justify-between', 'border-b', 'border-b-gray-400', 'lg:p-5', 'lg:flex', 'lg:justify-end', 'lg:m-7')
// console.log(nav);

// nav.append(navChild)

// import {navChild} from './components.js';

// header.insertBefore(nav, div);

// console.log(typeof nav);
// body.append(nav);
// console.log(body.firstChild);
// console.log(x);
// console.log(nav);

// body.firstChild = nav

// console.log(scroll);
// console.log(viewportHeight);
// console.log(document.querySelector('.header'));

// if (scroll > viewportHeight) {
//     console.log('good');
// }

const displayNavFunc = () => {
    menuBar.addEventListener('click', () => {
        if (menuBar.classList.contains('openMenuBar') && menus.classList.contains('hidden')) {
            menus.classList.remove('hidden'); //makes the nav visible
            menus.classList.add('grid'); //displays the nav as a grid
            menuBar.src = "./public/icons/closeMenu.svg"; //changes the nav icon
            menuBar.classList.remove('openMenuBar'); 
            menuBar.classList.add('closeMenuBar');
            console.log('true');
        } else if (menuBar.classList.contains('closeMenuBar') && menus.classList.contains('grid')) {
                menus.classList.remove('grid'); //makes the nav invisible
                menus.classList.add('hidden'); //displays the nav as a hidden
                menuBar.src = "./public/icons/openMenu.svg"; //changes the nav icon
                menuBar.classList.remove('closeMenuBar'); 
                menuBar.classList.add('openMenuBar');
                console.log('false');
        } 
        return;
    });
}


const navFunc = () => {
    if (viewportWidth < 1020) {
        menus.classList.add('nav-mobile');
    }
    return
}


const initApp = () => {
    navFunc();
    displayNavFunc();
}


document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 'complete') {
        initApp();
    }
})