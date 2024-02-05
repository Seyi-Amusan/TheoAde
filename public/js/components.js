const menuBar = document.querySelector('#menuBar');
const menus = document.querySelector('#menus');
const body = document.querySelector('.body');
const nav = `
<li class="menuItem">
    <span><a href="./story.html">My Story</a></span>
    <img class="w-5 mx-1" src="../icons/story.svg" alt="">
</li>
<li class=" menuItem">
    <span><a href="./books.html">Books</a></span>
    <img class="w-5 mx-1" src="../icons/books.svg" alt="">
</li>
<li class=" menuItem">
    <span><a href="./projects.html">Projects</a></span>
    <img class="w-5 mx-1" src="../icons/project.svg" alt="">
</li>
<li class=" menuItem">
    <span><a href="./work-with-me.html">Work With Me</a></span>
    <img class="w-5 mx-1" src="../icons/work.svg" alt="">
</li>
<li class=" menuItem">
    <span><a href="./free.html">Free</a></span>
    <img class="w-5 mx-1" src="../icons/free.svg" alt="">
</li>
<li class=" menuItem">
    <span><a href="./blog.html">Blog</a></span>
    <img class="w-5 mx-1" src="../icons/blog.svg" alt="">
</li>`

const footer = `<div class="lg:grid">
<!-- <div class="mb-5 grid grid-flow-col gap-x-6 row-auto"> -->
<div class="mb-5 flex flex-wrap justify-evenly items-center">
    <p class="listItem primary-block my-3"><a href="./books.html">Books</a></p>
    <p class="listItem primary-block my-3"><a href="./projects.html">The Nuke Hub</a></p>
    <p class="listItem primary-block my-3"><a href="./projects.html">I-schoollabs</a></p>
    <p class="listItem primary-block my-3"><a href="./work-with-me.html">Work With Me</a></p>
</div>
<div class="mb-5 lg:mb-8 text-center">
    <p>Theo@theophilusadeyinka.com</p>
    <p>Lagos, Nigeria</p>
    <div class="flex items-center justify-center">
        <a href="#"><img class="h-7 mr-2 fill-white" src="../icons/whatsapp-icon.svg" alt=""></a>
        <a href="#"><img class="h-7 mr-2 fill-white" src="../icons/facebook-icon.svg" alt=""></a>
        <a href="#"><img class="h-7 mr-2 fill-white" src="../icons/twitter-icon.svg" alt=""></a>
        <a href="#"><img class="h-7 mr-2" src="../icons/linkedin-icon.svg" alt=""></a>
    </div>
</div>
</div>
<p class="text-center font-bold">&copy; Theophilus Adeyinka 2023</p>`


const toggleTwoClasses = (element, classOne, classTwo) => {
    element.classList.toggle(classOne); 
    element.classList.toggle(classTwo);
    return
}

const mobileNavFunc = () => {
    menuBar.addEventListener('click', () => {
        if (menuBar.src.includes('openMenu')) {
            menuBar.src = '../icons/closeMenu.svg'
            toggleTwoClasses(menus, 'remove-mobile-nav', 'add-mobile-nav')
            body.style.overflowY = 'hidden';
        } else {
            menuBar.src = '../icons/openMenu.svg'
            toggleTwoClasses(menus, 'remove-mobile-nav', 'add-mobile-nav')
            body.style.overflowY = 'visible';
        }
        return
    });
}



const navAndFooterFunc = () => {
    document.querySelector('nav').lastElementChild.innerHTML = nav
    document.querySelector('footer').innerHTML = footer
    mobileNavFunc()
    return
}

navAndFooterFunc()
