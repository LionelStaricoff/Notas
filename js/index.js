/*
const buttons = document.querySelectorAll('button');

//agregar notas
buttons[2].addEventListener('click', util.btnCrearNota);

//guardar todas las notas
buttons[0].addEventListener('click', util.btnGuardar);

//cargrar todas las notas
buttons[1].addEventListener('click', util.btnCargar);
*/

const agregarNota = document.querySelector('agregarNota');
const recuperarNota = document.querySelector('recuperarNota');
const guardarTablero = document.querySelector('guardarTablero');
//faltan hacer la funciones de los de abajo:
const exportarTablero = document.querySelector('exportarTablero');
const vaciarTablero = document.querySelector('vaciarTablero');

crearNotaMenuItem.addEventListener('click', util.btnCrearNota);
recuperarNotaMenuItem.addEventListener('click', util.btnCargar);
guardarTableroMenuItem.addEventListener('click', util.btnGuardar);
//estos son los eventos para las funciones que faltan:
exportarTableroMenuItem.addEventListener('click', util.exportarTablero);
vaciarTableroMenuItem.addEventListener('click', util.vaciarTablero);
