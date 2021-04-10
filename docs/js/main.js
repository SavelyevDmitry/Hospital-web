
// Mobile menu
const mobileMenu = document.querySelector('.header__mobile-menu');
const menu = document.querySelector('.header__menu')

mobileMenu.addEventListener('click', function() {
    menu.classList.toggle('active');
})

menu.addEventListener('click', function(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }
})

window.addEventListener('scroll', function() {
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }
})

window.addEventListener('resize', function(){
    menu.classList.remove('active');        
})