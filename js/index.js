const buttons = document.querySelectorAll('li');

buttons[1].addEventListener('click', util.btnCrearNota);
buttons[2].addEventListener('click', util.btnCargar);
buttons[3].addEventListener('click', util.btnGuardar);
buttons[6].addEventListener('click', util.mostrarDesarrolladores);
//estos son los eventos para las funciones que faltan:
buttons[5].addEventListener('click', util.exportarTablero);
buttons[4].addEventListener('click', util.vaciarTablero);


//div padre eventos de arrastre
const idea = document.querySelector(".idea");
idea.addEventListener("drop", util.soltar);
idea.addEventListener("dragover", util.permisoDescenso);
idea.addEventListener('ontouchend', util.drop);
idea.addEventListener('ondragover', util.permisoDescenso);

const enProceso = document.querySelector(".enProceso");
enProceso.addEventListener("drop", util.soltar);
enProceso.addEventListener("dragover", util.permisoDescenso);
enProceso.addEventListener('ontouchend', util.drop);
enProceso.addEventListener('ondragover', util.permisoDescenso );

completada = document.querySelector(".completada");
completada.addEventListener("drop", util.soltar);
completada.addEventListener("dragover", util.permisoDescenso);
completada.addEventListener('ontouchend', util.drop);
completada.addEventListener('ondragover', util.permisoDescenso );
