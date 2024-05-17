let principal2 = document.getElementById('imgVisita')

fotoVisitas = new Array()

fotoVisitas[0] = ['img/Recursos polimericos/s1.webp'],
fotoVisitas[1] = ['img/Recursos polimericos/s2.webp'],
fotoVisitas[2] = ['img/Recursos polimericos/s3.webp'],
fotoVisitas[3] = ['img/Recursos polimericos/s4.webp'],
fotoVisitas[4] = ['img/Recursos polimericos/s5.webp'],
fotoVisitas[5] = ['img/Recursos polimericos/s6.webp'],
fotoVisitas[6] = ['img/Recursos polimericos/s7.webp'],
fotoVisitas[7] = ['img/Recursos polimericos/s8.webp'],
fotoVisitas[8] = ['img/Recursos polimericos/s9.webp'],
fotoVisitas[9] = ['img/Recursos polimericos/s10.webp'],
fotoVisitas[10] = ['img/Recursos polimericos/s11.webp'],
fotoVisitas[11] = ['img/Recursos polimericos/s12.webp'],
fotoVisitas[12] = ['img/Recursos polimericos/s13.webp']

if (principal2) {
    for (i = 0; i < fotoVisitas.length; i++) {
        let crearSlide2 = document.createElement('div');
        let crearImg2 = document.createElement('img');

        crearSlide2.setAttribute('class', 'slide');

        // Agrega la imagen al slide
        crearImg2.setAttribute('src', fotoVisitas[i][0]);
        crearSlide2.appendChild(crearImg2); // Añade la imagen al div del slide
        crearImg2.setAttribute('class', 'imagen-creada');
        crearImg2.setAttribute('alt', 'img representativa');

        
        principal2.appendChild(crearSlide2);
    }
}

