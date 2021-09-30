
// Abrir Menu
const menu = document.getElementById('burgerMenu');
if(menu){
    menu.addEventListener("click", () => {
        document.querySelector('.menu_screen').classList.add('active');
        console.log('click')
    })
}

// Cerrar Menu
const close = document.querySelector('.close');
if(close){
    close.addEventListener("click", () => {
        document.querySelector('.menu_screen').classList.remove('active');
    })
}

// Cerrar el menu cuando se le da click a un link del menu
let links = document.querySelectorAll('.menu_screen a');

links.forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.menu_screen').classList.remove('active');        
    })
})