(function(){
    // VARIABLES
    const navBoton = document.querySelector('.js-header-button');
    const navEnlaces = document.querySelector('.js-header-nav');
    
    //EVENTOS
    window.addEventListener('DOMContentLoaded', () => {
        desplegarMenuPrincipal();
    });
    
    //FUNCIONES
    function desplegarMenuPrincipal() {

        navBoton.addEventListener('click', (e) => {
            e.preventDefault();
            navEnlaces.classList.toggle('c-header__nav--visible');
            navEnlaces.classList.toggle('c-header__nav--noVisible');
            navBoton.classList.toggle('u-rotation');
        });

        navEnlaces.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Haciendo click');
        })
    }
    
})();