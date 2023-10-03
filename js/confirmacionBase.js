function confirmacionBase (titulo, pregunta) {

    const main = document.querySelector('main')

    const div = document.createElement('div');
    div.className = 'promptConfirmacion'

    const titulo = document.createElement('h3');
    titulo.textContent = titulo;

    const pregunta = document.createElement('h2');
    pregunta.textContent = pregunta;

    const btnAceptar = document.createElement('button');
    btnAceptar.textContent = 'Aceptar';
    btnAceptar.addEventListener('click', () => {
      if (typeof callbackAceptar === 'function') {
        callbackAceptar();
      }
      const padrePrompt = div.parentNode;
      padrePrompt.removeChild(div);
    });

    const btnCancelar = document.createElement('button');
    btnCancelar.textContent = 'Cancelar';
    btnCancelar.addEventListener('click', () => {
      const padrePrompt = div.parentNode;
      padrePrompt.removeChild(div);
    });
    div.append(titulo,pregunta,btnAceptar,btnCancelar);
    main.appendChild(div);
}