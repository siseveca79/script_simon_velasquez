
const botones = document.querySelectorAll('button');


const caja = document.getElementById('caja');


botones.forEach((boton) => {
    boton.addEventListener('click', function () {

        const color = boton.style.backgroundColor;

        caja.style.backgroundColor = color;
    });
});
