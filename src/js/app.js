(function(){
    // VARIABLES
    let imgEmisora = document.querySelector('#imgRadio');
    let nombRadio = document.querySelector('#nombRadio');
    let frRadio = document.querySelector('#frRadio');
    let ranking = document.querySelector('#ranking');

    const listEmisoras = document.querySelector('#listEmisoras');
    let listaTop = [];

    // EVENTOS
    document.addEventListener('DOMContentLoaded', () => {
        iniciarApp();
        
        listEmisoras.addEventListener('click', cambiarEmisora);
    });

    // FUNCIONES
    function iniciarApp() {
        imgEmisora.src = "build/img/LogoRadio.png";
        nombRadio.textContent = '---------';
        frRadio.textContent = '---------';
    };

    function cambiarEmisora(e) {
        e.preventDefault();
        const srcEmisora = e.target.getAttribute('src');

        let ObjEmisora = dbEmisoras.find( e => srcEmisora === e.imagen);
        console.log(ObjEmisora);

        imgEmisora.src = ObjEmisora.imagen;
        nombRadio.textContent = ObjEmisora.nombreEmisora;
        frRadio.textContent = ObjEmisora.frecuenciaEmisora;

        console.log(imgEmisora.src)

        ordenaEmisoras(ObjEmisora);
        suenaEmisora(ObjEmisora);
    };

    function ordenaEmisoras(ob) {
        const ObjEmisora = {
            nomb: ob.nombreEmisora,
            frec: ob.frecuenciaEmisora,
            img: ob.imagen,
            enl: ob.enlace,
            contador: 1
        };

        const existe = listaTop.some(ob => ob.nomb === ObjEmisora.nomb);
        if (existe) {
            const listaTop2 = listaTop.map(ob => {
                if (ob.nomb === ObjEmisora.nomb) {
                    ob.contador++;
                    return ob; // devuelve el obj actualizado en cantidad
                } else {
                    return ob; //devuelve los obj que no son duplicados
                };
            });
            listaTop = [...listaTop2];
        } else {
            listaTop = [...listaTop, ObjEmisora];
        }

        const listaTopCopia = [...listaTop];
        let indice = null;

        for (let i = 0; i < 5; i++) {
            let cont = 0;
            listaTopCopia.forEach(ob => {
                if (ob.contador > cont) {
                    cont = ob.contador;
                    ranking.children[i].children[0].children[0].textContent = ob.nomb.toUpperCase();
                    ranking.children[i].children[1].attributes.href.value = ob.enl;
                };
            });
            indice = listaTopCopia.findIndex(ob => ob.contador === cont);
            listaTopCopia.splice(indice, 1);
        };
    };

    function suenaEmisora(ob) {
        console.log('estoy sonando...');
    };
})();
