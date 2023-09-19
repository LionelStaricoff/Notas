const buttons = document.querySelectorAll('button');

//agregar notas
buttons[2].addEventListener('click', util.btnCrearNota);

//guardar todas las notas
buttons[0].addEventListener('click', util.btnGuardar);

//cargrar todas las notas
buttons[1].addEventListener('click', util.btnCargar);

//util.promptCambiarNota();




