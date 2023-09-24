/*
const buttons = document.querySelectorAll('button');

//agregar notas
buttons[2].addEventListener('click', util.btnCrearNota);

//guardar todas las notas
buttons[0].addEventListener('click', util.btnGuardar);

//cargrar todas las notas
buttons[1].addEventListener('click', util.btnCargar);
*/

const crearNotaMenuItem = document.getElementById('crearNota');
const recuperarNotaMenuItem = document.getElementById('recuperarNota');
const guardarTableroMenuItem = document.getElementById('guardarTablero');
//faltan hacer la funciones de los de abajo:
const exportarTableroMenuItem = document.getElementById('exportarTablero');
const vaciarTableroMenuItem = document.getElementById('vaciarTablero');

crearNotaMenuItem.addEventListener('click', util.btnCrearNota);
recuperarNotaMenuItem.addEventListener('click', util.btnCargar);
guardarTableroMenuItem.addEventListener('click', util.btnGuardar);
//estos son los eventos para las funciones que faltan:
exportarTableroMenuItem.addEventListener('click', util.exportarTablero);
vaciarTableroMenuItem.addEventListener('click', util.vaciarTablero);
