const buttons = document.querySelectorAll('li');


buttons[2].addEventListener('click', util.btnCargar);
buttons[1].addEventListener('click', util.btnCrearNota);
buttons[3].addEventListener('click', util.btnGuardar);
buttons[6].addEventListener('click', util.mostrarDesarrolladores);
//estos son los eventos para las funciones que faltan:
buttons[5].addEventListener('click', util.btnImportarArchivo);
buttons[4].addEventListener('click', util.btnExportarArchivo);


//div padre eventos de arrastre
const idea = document.querySelector(".idea");
const enProceso = document.querySelector(".enProceso");
const completada = document.querySelector(".completada");
const padres = [idea, enProceso, completada];

padres.forEach((b) => {
    b.addEventListener("drop", util.soltar);
    b.addEventListener("dragover", util.permisoDescenso);
    b.addEventListener('ontouchend', util.drop);
    b.addEventListener('ondragover', util.permisoDescenso);
});

//Modo claro-oscuro
document.querySelector('.claro-oscuro').addEventListener('click', util.modoOscuro);

util.setTheme(localStorage.getItem('theme') || 'light');

// panel desarrolladores
 document.getElementById("cerrarModal").addEventListener("click",util.cerrarModal);

//para sacar el error del menu
document.getElementById("checkbox").addEventListener("click",util.cerrarMenu);

