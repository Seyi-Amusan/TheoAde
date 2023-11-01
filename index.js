const menuBar = document.querySelector('#menuBar');
const menus = document.querySelector('#menus');
const viewportWidth = window.innerWidth;

const displayNavFunc = () => {
    menuBar.addEventListener('click', () => { //when the nav icon is clicked
        if (menuBar.classList.contains('openMenuBar') && menus.classList.contains('hidden')) {
            menus.classList.remove('hidden'); //makes the nav visible
            menus.classList.add('grid'); //displays the nav as a grid
            menuBar.src = "./public/icons/closeMenu.svg"; //changes the nav icon
            menuBar.classList.remove('openMenuBar'); 
            menuBar.classList.add('closeMenuBar')
        } 
        return; 
    });
}

const removeNavFunc = () => {
    // menuBar.addEventListener('click', () => { 
    //     if (menuBar.classList.contains('closeMenuBar') && menus.classList.contains('grid')) {
    //         menus.classList.remove('grid'); //makes the nav visible
    //         menus.classList.add('hidden'); //displays the nav as a grid
    //         menuBar.src = "./public/icons/openMenu.svg"; //changes the nav icon
    //         menuBar.classList.remove('closeMenuBar'); 
    //         menuBar.classList.add('closeMenuBar')
    //         console.log('condirion is true');
    //     } 
    //     return; 
    // });
}

const navFunc = () => {
    if (viewportWidth < 1020) {
        menus.classList.add('nav-mobile');
    }
    menuBar.classList.add('hidden');
    return;
}


const initApp = () => {
    navFunc();
    displayNavFunc();
    removeNavFunc();
}


document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 'complete') {
        initApp();
    }
})