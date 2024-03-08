
const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;


    const regex = /^[a-zA-Z\s]*$/;


    if (!nombre.match(regex) || nombre.trim() === '') {
        document.querySelector('.errorNombre').textContent = 'Nombre requiere';
    } else {
        document.querySelector('.errorNombre').textContent = '';
    }


    if (!asunto.match(regex) || asunto.trim() === '') {
        document.querySelector('.errorAsunto').textContent = 'Asunto requiere';
    } else {
        document.querySelector('.errorAsunto').textContent = '';
    }


    if (!mensaje.match(regex) || mensaje.trim() === '') {
        document.querySelector('.errorMensaje').textContent = 'Mensaje requiere';
    } else {
        document.querySelector('.errorMensaje').textContent = '';
    }


    if (nombre.match(regex) && asunto.match(regex) && mensaje.match(regex) &&
        nombre.trim() !== '' && asunto.trim() !== '' && mensaje.trim() !== '') {
        document.querySelector('.resultado').textContent = 'Mensaje enviado con éxito';
    }
});
