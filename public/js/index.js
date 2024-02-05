const menuBar = document.querySelector('.menuBar');
const menus = document.querySelector('#menus');
const body = document.querySelector('#body');


const toggleTwoClasses = (element, classOne, classTwo) => {
    element.classList.toggle(classOne); 
    element.classList.toggle(classTwo);
    return
}

const mobileNavFunc = () => {
    menuBar.addEventListener('click', () => {
        if (menuBar.src.includes('openMenu')) {
            menuBar.src = './public/icons/closeMenu.svg'
            toggleTwoClasses(menus, 'remove-mobile-nav', 'add-mobile-nav')
            body.style.overflowY = 'hidden';
        } else {
            menuBar.src = './public/icons/openMenu.svg'
            toggleTwoClasses(menus, 'remove-mobile-nav', 'add-mobile-nav')
            body.style.overflowY = 'visible';
        }
        return
    });
}

document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 'complete') mobileNavFunc()
})