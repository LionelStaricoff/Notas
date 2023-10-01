function promptBase (frase) {
    const main = document.querySelector('main');

    const div = document.createElement('div');
    div.className = 'promptBase';

    const textofrase = document.createElement('h2');
    let palabras = document.createTextNode(frase);
    textofrase.appendChild(palabras);

    const btnAceptar = document.createElement('button');
    const textBtn = document.createTextNode('Aceptar');
    btnAceptar.appendChild(textBtn);
    btnAceptar.addEventListener('click', () => {
      const padrePrompt = div.parentNode;
      padrePrompt.removeChild(div);
    });
    div.append(textofrase,btnAceptar);
    main.appendChild(div);
}