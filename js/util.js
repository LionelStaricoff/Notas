const util = {


  estados: ['ideas', 'en proceso', 'completadas'],

  btnCrearNota: function () {
    const columnas = document.querySelectorAll('.columnaCuadro');
    const nota = new Nota();
    nota.agregarAlFront();

  },
  btnGuardar: function () {
    //limpiando datos anteriores
    localStorage.clear();

    // cargando todas las notas
    const notas = document.querySelectorAll('.nota');

    //crando un arreglo para extraer los datos
    const datosNotas = [];



    // Recorrer los elementos y obtener los valores
    for (var i = 0; i < notas.length; i++) {

     const a =notas[i].style.position;
    
      const nuevaNota = {
        input: notas[i].querySelector('.titulo').value,
        textarea: notas[i].querySelector('textarea').value,
        color: notas[i].querySelector('.color').value,
        position : notas[i].style.position
      }

      datosNotas.push(nuevaNota);

    }
  

    // Guarda el array de notas en el local storage
    localStorage.setItem('notas', JSON.stringify(datosNotas));

    // Notifica al usuario que las notas fueron guardadas
    alert('Notas guardadas exitosamente');
  },


  btnCargar: function () {

    // Verificar si hay notas guardadas en el local storage
    if (localStorage.getItem('notas')) {
      // Obtén las notas del local storage y conviértelas en un objeto JS
      const notasArray = JSON.parse(localStorage.getItem('notas'));

      const columnas = document.querySelectorAll('.columnaCuadro');

      for ( a  of notasArray ){
        const nota = new Nota(a.input,a.textarea,
          a.color,a.position);
        nota.agregarAlFront();
      }
   

      // Notifica al usuario que las notas fueron recuperadas
      alert('Notas recuperadas exitosamente');
    } else {
      // Si no hay notas guardadas, notifica al usuario
      alert('No hay notas guardadas');
    }
  },




 importarArchivo :  ()=>{
  alert('GuardarArchivoBBDD');
 
// Define el contenido del archivo de texto
const contenido = 'Este es el contenido del archivo de texto';

// Crea un enlace simulado para descargar el archivo
const link = document.createElement('a');
link.href = URL.createObjectURL(new Blob([contenido], { type: 'text/plain' }));
link.download = 'archivo.txt';
link.click();


  },

  exportarArchivo :()=>{
    alert('cargarArchivoBBDD');
 
// Carga el archivo utilizando la API fetch
fetch('archivo.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo');
    }
    return response.text();
  })
  .then(data => {
    // Muestra el contenido del archivo en la consola
    console.log(data);
  })
  .catch(error => {
    // Maneja el error
    console.error(error);
  

});



  },

   btnCargarArchivo: ()=>{
    const openFile = async () => {
      return new Promise((resolve) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', () => {
          resolve(input.files[0]);
        });
        input.click();
      });
    };
  },

  btnGuardarArchivo : ()=>{
    const saveFile = async (blob) => {
      const a = document.createElement('a');
      a.download = 'my-file.txt';
      a.href = URL.createObjectURL(blob);
      a.addEventListener('click', (e) => {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
      });
      a.click();
    };
  }

}


//https://developer.chrome.com/es/articles/browser-fs-access/##%20La%20API%20de%20File%20System%20Access

