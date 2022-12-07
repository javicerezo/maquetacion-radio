(function(){
    
    //EVENTOS
    window.addEventListener('DOMContentLoaded', () => {
        desplegarMenu();
    })
    
    //FUNCIONES
    function desplegarMenu() {
        const navBoton = document.querySelector('.js-header-button');
        const navEnlaces = document.querySelector('.js-header-nav');

        navBoton.addEventListener('click', (e) => {
            e.preventDefault();

            navBoton.classList.toggle('.u-rotation');
            navEnlaces.classList.toggle('.u-inline-block');
            console.log(navEnlaces);
        });

    }
    
})();