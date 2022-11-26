const dbEmisoras = [
    {
        nombreEmisora : '40 principales', 
        frecuenciaEmisora : '93.9 FM',
        imagen : 'https://los40.com/los40/imagenes/2016/07/12/album/1468301612_739102_1496038374_album_normal.jpg" alt="boton escuchar radio', 
        enlace : 'https://los40.com/'
    },
    {
        nombreEmisora : 'Cadena 100', 
        frecuenciaEmisora : '99.5 FM', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cadena100.svg/1161px-Cadena100.svg.png', 
        enlace : 'https://www.cadena100.es/'
    },
    {
        nombreEmisora : 'Cadena Digital', 
        frecuenciaEmisora : '97.8 FM', 
        imagen : 'https://radiodigital.fm/wp-content/uploads/2022/01/logo-cadena-digital.png', 
        enlace : 'http://www.cadenadigital.com/'
    },
    {
        nombreEmisora : 'Canal Fiesta Radio', 
        frecuenciaEmisora : '103.9 FM', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/CANAL_FIESTA_RADIO-copia6.jpg/1200px-CANAL_FIESTA_RADIO-copia6.jpg',
        enlace : 'https://www.radio.es/s/canalfiesta'
        },
    {
        nombreEmisora : 'Canal Sur Radio', 
        frecuenciaEmisora : '98.6 FM', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/4/44/Canal_Sur_Radio.png',
        enlace : 'https://www.canalsur.es/portada-2808.html'
    },
    {
        nombreEmisora : 'Radio Catalana', 
        frecuenciaEmisora : '102.8 FM', 
        imagen : 'https://www.cmb.cat/wp-content/uploads/2018/03/LOGO-Catalunya-radio.png',
         enlace : 'https://www.ccma.cat/catradio/'
        },
    {
        nombreEmisora : 'Cope', 
        frecuenciaEmisora : '100.7 FM', 
        imagen : 'https://cope-cdnmed.agilecontent.com/resources/jpg/0/3/1650636370430.jpg', 
        enlace : 'https://www.cope.es/'
    },
    {
        nombreEmisora : 'Cadena Dial', 
        frecuenciaEmisora : '91.7 FM', 
        imagen : 'https://tonimascaroradio.files.wordpress.com/2016/08/logo-dial-1.jpg', 
        enlace : 'https://www.cadenadial.com/'
    },
    {
        nombreEmisora : 'Es Radio', 
        frecuenciaEmisora : '', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/EsRadio_logo.svg/2560px-EsRadio_logo.svg.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'Europa FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://image.europafm.com/clipping/cmsimages01/2022/10/06/E482EE0F-94B7-4549-BEDF-A9EE57151B27/nuevo-logo-europa_69.jpg?crop=1200,675,x0,y13&width=1280&height=720&optimize=low&format=webply', 
        enlace : ''
    },
    {
        nombreEmisora : 'Flaix FM', 
        frecuenciaEmisora : '', 
        imagen : 'http://api.my-radios.com/images/thumb.php?countryCode=ES&name=Flaix_FM.png&size=200', 
        enlace : ''
    },
    {
        nombreEmisora : 'Flamenco FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://www.radio.es/images/broadcasts/50/d2/4927/c300.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'Flaixbac FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/5d/cd/4229/1/c175.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'GUM FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://i1.sndcdn.com/avatars-000578452659-0es7eq-t500x500.jpg', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio Andaluza Información', 
        frecuenciaEmisora : '', 
        imagen : 'https://myradioonline.es/public/uploads/radio_img/radio-andalucia-informacion/fb_cover.jpg', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio Nacional 5', 
        frecuenciaEmisora : '', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Radio_5_RNE_Spain.svg/541px-Radio_5_RNE_Spain.svg.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'BBC Radio 4', 
        frecuenciaEmisora : '', 
        imagen : 'https://opennuclear.org/sites/default/files/styles/hero_image_837x460/public/2022-07/bbc-radio-4.jpeg?itok=pCo7ENTB', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio 3', 
        frecuenciaEmisora : '', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/c/c8/RNE_Radio_3_%282016%29.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio Nacional España', 
        frecuenciaEmisora : '', 
        imagen : 'https://cdn-profiles.tunein.com/s9752/images/logog.png?t=153858', 
        enlace : ''
    },
    {
        nombreEmisora : 'Rac 105 FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Logotip_de_RAC_1.svg/2048px-Logotip_de_RAC_1.svg.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'Onda Cero', 
        frecuenciaEmisora : '', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/RAC105.svg/1200px-RAC105.svg.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'Máxima FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://image.ondacero.es/clipping/cmsimages01/2022/03/24/34F4C65C-7DA5-4C88-9CAC-3F4B2234B965/onda-cero-logo-seccion_69.jpg', 
        enlace : ''
    },
    {
        nombreEmisora : 'm80 Radio', 
        frecuenciaEmisora : '', 
        imagen : 'https://seeklogo.com/images/M/maxima-fm-logo-3B1B8E0D56-seeklogo.com.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'Loca FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://www.radio.es/images/broadcasts/7b/a5/13396/1/c300.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'La Bomba Radio', 
        frecuenciaEmisora : '104.1', 
        imagen : 'https://cdn-profiles.tunein.com/s7989/images/logog.jpg?t=164314', 
        enlace : ''
    },
    {
        nombreEmisora : 'Kiss FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDyrNaLrXdNxSPTuzSkGIXC5s-cC53v0QY3lbh6ACcg&s', 
        enlace : ''
    },
    {
        nombreEmisora : 'JFK Radio', 
        frecuenciaEmisora : '', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/c/c0/KISS_FM_logo.svg', 
        enlace : ''
    },
    {
        nombreEmisora : 'Ibiza Sónica', 
        frecuenciaEmisora : '', 
        imagen : 'https://jfkibiza.com/assets/logo-black.svg', 
        enlace : ''
    },
    {
        nombreEmisora : '', 
        frecuenciaEmisora : '', 
        imagen : 'https://res.cloudinary.com/filtermusic/w_500,c_scale,f_auto,q_auto/v1637141626/ibiza-sonica-radio_0.jpg', 
        enlace : ''
    },
    {
        nombreEmisora : 'Ibiza Global Radio', 
        frecuenciaEmisora : '', 
        imagen : 'https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/c1/fe/1645/1/c175.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'Hit FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wjFiSSKyZH1mEP01WCm8bqKtaNkqHxTpnjxzHALkhg&s', 
        enlace : ''
    },
    {
        nombreEmisora : 'Brava FM', 
        frecuenciaEmisora : '', 
        imagen : 'http://cdn-profiles.tunein.com/s156760/images/logod.png?t=637693035400000000', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio Xtra FM', 
        frecuenciaEmisora : '', 
        imagen : 'https://static.mytuner.mobi/media/tvos_radios/a42mjsqwnw.jpg', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio Tres', 
        frecuenciaEmisora : '', 
        imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd22TaEgNx5gaZbmzCwAvYoRr8IWmlMdBomA&usqp=CAU', 
        enlace : ''
    },
    {
        nombreEmisora : 'Cadena Ser', 
        frecuenciaEmisora : '', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/7/75/Cadena_Ser_logo-2.jpg', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio Teletaxi', 
        frecuenciaEmisora : '', 
        imagen : 'https://www.radioteletaxi.com/rttwp/wp-content/uploads/2019/11/logortt-nuevo.jpg', 
        enlace : ''
    },
    {
        nombreEmisora : 'Rock Fm', 
        frecuenciaEmisora : '', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/RockFM_Logo.svg/1200px-RockFM_Logo.svg.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio Olé', 
        frecuenciaEmisora : '', 
        imagen : 'https://pbs.twimg.com/profile_images/1168549721771823108/QAiElJn3_400x400.jpg', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio Maria', 
        frecuenciaEmisora : '', 
        imagen : 'https://radiomaria.es/wp-content/uploads/2022/04/RM_22_principal_pais_web.png', 
        enlace : ''
    },{
        nombreEmisora : 'Radio Nacional Clásica', 
        frecuenciaEmisora : '', 
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Radio_Cl%C3%A1sica_RNE_Spain.svg/1280px-Radio_Cl%C3%A1sica_RNE_Spain.svg.png', 
        enlace : ''
    },
    {
        nombreEmisora : 'Radio Capital', 
        frecuenciaEmisora : '', 
        imagen : 'https://img1.freepng.es/20180704/hsf/kisspng-radio-capital-fm-broadcasting-internet-radio-telev-5b3d9706971590.1112608715307630146189.jpg', 
        enlace : ''
    }
];