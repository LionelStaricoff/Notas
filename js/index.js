/*
const buttons = document.querySelectorAll('button');

//agregar notas
buttons[2].addEventListener('click', util.btnCrearNota);

//guardar todas las notas
buttons[0].addEventListener('click', util.btnGuardar);

//cargrar todas las notas
buttons[1].addEventListener('click', util.btnCargar);

//util.promptCambiarNota();
*/

const crearNotaMenuItem = document.getElementById('crearNota');
const recuperarNotaMenuItem = document.getElementById('recuperarNota');
const exportarTableroMenuItem = document.getElementById('exportarNota');
const vaciarTableroMenuItem = document.getElementById('vaciarNota');

crearNotaMenuItem.addEventListener('click', util.btnCrearNota);

recuperarNotaMenuItem.addEventListener('click', util.btnCargar);

exportarTableroMenuItem.addEventListener('click', util.exportarArchivo);

vaciarTableroMenuItem.addEventListener('click', util.vaciarTablero);