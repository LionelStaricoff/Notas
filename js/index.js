const buttons = document.querySelectorAll('li');


buttons[1].addEventListener('click', util.btnCrearNota);
buttons[2].addEventListener('click', util.btnCargar);
buttons[3].addEventListener('click', util.btnGuardar);
//estos son los eventos para las funciones que faltan:
buttons[4].addEventListener('click', util.exportarTablero);
buttons[5].addEventListener('click', util.vaciarTablero);


util.promptConfirmacion();