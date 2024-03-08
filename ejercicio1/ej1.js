const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');

nombreInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '').toUpperCase().slice(0, 30);
});

asuntoInput.addEventListener('input', function () {
    this.value = this.value.toUpperCase().slice(0, 40);
});

mensajeInput.addEventListener('input', function () {
    this.value = this.value.slice(0, 200);
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const asunto = asuntoInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    const regexNombre = /^[a-zA-Z\s]+$/;
    const regexAsunto = /^[A-Z0-9\s,.!?]+$/; // Permitir letras mayúsculas y números en el asunto
    const regexMensaje = /^.{100,200}$/;

    if (!regexNombre.test(nombre) || nombre === '') {
        document.querySelector('.errorNombre').textContent = 'Ingrese solo letras en el nombre';
    } else {
        document.querySelector('.errorNombre').textContent = '';
    }

    if (!regexAsunto.test(asunto) || asunto === '') {
        document.querySelector('.errorAsunto').textContent = 'Asunto requerido';
    } else {
        document.querySelector('.errorAsunto').textContent = '';
    }

    if (!regexMensaje.test(mensaje) || mensaje === '') {
        document.querySelector('.errorMensaje').textContent = 'El mensaje debe tener entre 100 y 200 caracteres';
    } else {
        document.querySelector('.errorMensaje').textContent = '';
    }

    if (regexNombre.test(nombre) && regexAsunto.test(asunto) && regexMensaje.test(mensaje) &&
        nombre !== '' && asunto !== '' && mensaje !== '') {
        document.querySelector('.resultado').textContent = 'Mensaje enviado con éxito';
    }
});
