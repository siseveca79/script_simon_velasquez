document.addEventListener('DOMContentLoaded', function () {
  const valor1Input = document.getElementById('valor1');
  const valor2Input = document.getElementById('valor2');
  const resultadoSpan = document.querySelector('.resultado');
  const btnSumar = document.getElementById('btn-sumar');
  const btnRestar = document.getElementById('btn-restar');
  const errorMensaje1 = document.getElementById('error-mensaje1');
  const errorMensaje2 = document.getElementById('error-mensaje2');

  btnSumar.addEventListener('click', function () {
      const valor1 = valor1Input.value.trim();
      const valor2 = valor2Input.value.trim();

      if (!/^\d{1,3}$/.test(valor1)) {
          errorMensaje1.textContent = /^[a-zA-Z]+$/.test(valor1) ? 'Solo ingresar números' : 'Solo ingresar hasta 3 dígitos';
          return;
      } else {
          errorMensaje1.textContent = '';
      }

      if (!/^\d{1,3}$/.test(valor2)) {
          errorMensaje2.textContent = /^[a-zA-Z]+$/.test(valor2) ? 'Solo ingresar números' : 'Solo ingresar hasta 3 dígitos';
          return;
      } else {
          errorMensaje2.textContent = '';
      }

      const valor1Number = parseFloat(valor1);
      const valor2Number = parseFloat(valor2);
      const resultado = valor1Number + valor2Number;
      resultadoSpan.textContent = resultado;
  });

  btnRestar.addEventListener('click', function () {
      const valor1 = valor1Input.value.trim();
      const valor2 = valor2Input.value.trim();

      if (!/^\d{1,3}$/.test(valor1)) {
          errorMensaje1.textContent = /^[a-zA-Z]+$/.test(valor1) ? 'Solo ingresar números' : 'Solo ingresar hasta 3 dígitos';
          return;
      } else {
          errorMensaje1.textContent = '';
      }

      if (!/^\d{1,3}$/.test(valor2)) {
          errorMensaje2.textContent = /^[a-zA-Z]+$/.test(valor2) ? 'Solo ingresar números' : 'Solo ingresar hasta 3 dígitos';
          return;
      } else {
          errorMensaje2.textContent = '';
      }

      const valor1Number = parseFloat(valor1);
      const valor2Number = parseFloat(valor2);
      let resultado = valor1Number - valor2Number;

      if (resultado < 0) {
          resultado = 0;
      }

      resultadoSpan.textContent = resultado;
  });
});
