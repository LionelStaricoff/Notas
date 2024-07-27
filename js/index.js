
try {


const buttons = document.querySelectorAll('li');


buttons[2].addEventListener('click', util.btnCargar);
buttons[1].addEventListener('click', util.btnCrearNota);
buttons[3].addEventListener('click', util.btnGuardar);
buttons[6].addEventListener('click', util.mostrarDesarrolladores);
//estos son los eventos para las funciones que faltan:
buttons[5].addEventListener('click', util.btnImportarArchivo);
buttons[4].addEventListener('click', util.btnExportarArchivo);
buttons[7].addEventListener('click',  util.login);


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




  
//serviceworker
let sw;

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
        sw = registration.active;
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }

const cargarNotasServiceWorker = ()=>sw.postMessage({ action: 'read' });
const guardarNotasServiceWorker = ()=>sw.postMessage({ action: 'update' });


// constructor:
new cartelBbdd('main')
const btn = document.querySelector('#btn')
btn.addEventListener('click', ()=>alert('.functionBtn'))
const btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', ()=>alert('.functionBtn1'))

//constructor builder
/*
 cartelBbdd.builder().padre('main')
 .nameBtn('Guardar_bbdd')
 .nameBtn1('cargar_bbdd')
 .functionBtn(()=>alert('.functionBtn'))
 .functionBtn1(()=>alert('.functionBtn1'))
 .build();
*/

} catch (error) {
  console.error( new Error('error al cargar la pagina 404'))
}