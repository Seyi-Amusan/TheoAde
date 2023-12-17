const body = document.querySelector('#body');
const header = document.querySelector('#header');
const div = document.querySelector('#headerDiv');
const menuBar = document.querySelector('#menuBar');
const menus = document.querySelector('#menus');
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const scroll = window.scrollY;
const nav = document.querySelector('#nav')

const displayNavFunc = () => {
    menuBar.addEventListener('click', () => {
        if (menuBar.classList.contains('openMenuBar') && menus.classList.contains('hidden')) {
            menus.classList.remove('hidden'); //makes the nav visible
            menus.classList.add('grid'); //displays the nav as a grid
            menuBar.src = "./public/icons/closeMenu.svg"; //changes the nav icon
            menuBar.classList.remove('openMenuBar'); 
            menuBar.classList.add('closeMenuBar');
        } else if (menuBar.classList.contains('closeMenuBar') && menus.classList.contains('grid')) {
            menus.classList.remove('grid'); //makes the nav invisible
            menus.classList.add('hidden'); //displays the nav as a hidden
            menuBar.src = "./public/icons/openMenu.svg"; //changes the nav icon
            menuBar.classList.remove('closeMenuBar'); 
            menuBar.classList.add('openMenuBar');
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