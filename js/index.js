const buttons = document.querySelectorAll('li');


buttons[1].addEventListener('click', util.btnCrearNota);
buttons[2].addEventListener('click', util.btnCargar);
buttons[3].addEventListener('click', util.btnGuardar);
//estos son los eventos para las funciones que faltan:
buttons[4].addEventListener('click', util.exportarTablero);
buttons[5].addEventListener('click', util.vaciarTablero);


//div padre eventos de arrastre
document.querySelector(".idea").addEventListener("drop", util.soltar);
document.querySelector(".idea").addEventListener("dragover", util.permisoDescenso);

document.querySelector(".enProceso").addEventListener("drop", util.soltar);
document.querySelector(".enProceso").addEventListener("dragover", util.permisoDescenso);

document.querySelector(".completada").addEventListener("drop", util.soltar);
document.querySelector(".completada").addEventListener("dragover", util.permisoDescenso);
