let currentElement = null;

const util = {


  estados: ['idea', 'enProceso', 'completada'],

  btnCrearNota: function () {
    const nota = new Nota();
    nota.agregarAlFront();

  },

  btnGuardar: function () {

    util.confirmacionBase('GUARDANDO NOTAS', '¿QUIERE GUARDAR LAS NOTAS?', () => {

      //limpiando datos anteriores
      localStorage.clear();

      // cargando todas las notas
      const notas = document.querySelectorAll('.nota');
      //crando un arreglo para extraer los datos
      const datosNotas = [];

      // Recorrer los elementos y obtener los valores
      for (var i = 0; i < notas.length; i++) {

        const a = notas[i].style.position;
        const padre = notas[i].parentNode.classList;
        //const checkbox = 

        const nuevaNota = {
          input: notas[i].querySelector('input').value,
          textarea: notas[i].querySelector('textarea').value,
          color: notas[i].style.backgroundColor,
          position: notas[i].style.position,
          colorTexto: notas[i].style.color,   //COLOR TEXTO 
          checkeado: notas[i].querySelector('#checkLetra').checked,
          estado: padre[1]
        }

        datosNotas.push(nuevaNota);
      }


      // Guarda el array de notas en el local storage
      localStorage.setItem('notas', JSON.stringify(datosNotas));

      // Notifica al usuario que las notas fueron guardadas
      //alert('Notas guardadas exitosamente');
      util.promptBase('Notas guardadas exitosamente');
    });

  },


  btnCargar: function () {

    util.confirmacionBase('CARGANDO NOTAS', '¿QUIERE CARGAR LAS NOTAS?', () => {



      util.borrarTodasLasNotas();

      // Verificar si hay notas guardadas en el local storage
      if (localStorage.getItem('notas')) {
        // Obtén las notas del local storage y conviértelas en un objeto JS
        const notasArray = JSON.parse(localStorage.getItem('notas'));
        if (notasArray == '') util.promptBase('No hay notas guardadas');

        const columnas = document.querySelectorAll('.columnaCuadro');
        for (a of notasArray) {

          let nota = new Nota(a.input, a.textarea,
            a.color, a.position, a.estado, a.colorTexto, a.checkeado);

          nota.crearNota();

          nota.agregarAlFront();
          nota1 = nota.getNota();

          if (nota.position != 'absolute') {
            nota.agrandarNota(nota1);
            nota.achicarNota(nota1);
          }
        }

      } else {
        // Si no hay notas guardadas, notifica al usuario
        util.promptBase('No hay notas guardadas');

      }
    });
  },


  borrarTodasLasNotas: () => {
    const div1 = document.querySelector('.idea');
    const div2 = document.querySelector('.enProceso');
    const div3 = document.querySelector('.completada');
    div1.replaceChildren();
    div2.replaceChildren();
    div3.replaceChildren();
  },

  importarArchivo: () => {
    alert('GuardarArchivoBBDD');

    // Define el contenido del archivo de texto
    const contenido = 'Este es el contenido del archivo de texto';

    // Crea un enlace simulado para descargar el archivo
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([contenido], { type: 'text/plain' }));
    link.download = 'archivo.txt';
    link.click();


  },

  exportarArchivo: () => {
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

  btnImportarArchivo: () => {
    async function importar() {
      return new Promise(() => {
        const input = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', () => {
          let file = input.files[0];
          let reader = new FileReader();
          reader.readAsText(file);
          reader.onload = function () {
            util.borrarTodasLasNotas();


            try {
              const notasArray = JSON.parse(reader.result);



              const columnas = document.querySelectorAll('.columnaCuadro');

              for (a of notasArray) {

                let nota = new Nota(a.input, a.textarea,
                  a.color, a.position, a.estado, a.colorTexto, a.checkeado);

                nota.crearNota();

                nota.agregarAlFront();
                nota1 = nota.getNota();

                if (nota.position != 'absolute') {
                  nota.agrandarNota(nota1);
                  nota.achicarNota(nota1);
                }
              }

            } catch (error) {
              util.promptBase('archivo no valido o vacio ');
            }
          }


        });
        input.click();
      });
    }
    importar();

  },

  btnExportarArchivo: () => {
    function download(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }

    // cargando todas las notas
    const notas = document.querySelectorAll('.nota');

    //crando un arreglo para extraer los datos
    const datosNotas = [];

    // Recorrer los elementos y obtener los valores
    for (var i = 0; i < notas.length; i++) {

      const a = notas[i].style.position;
      const padre = notas[i].parentNode.classList;

      const nuevaNota = {
        input: notas[i].querySelector('input').value,
        textarea: notas[i].querySelector('textarea').value,
        color: notas[i].style.backgroundColor,
        position: notas[i].style.position,
        colorTexto: notas[i].style.color,   //COLOR TEXTO 
        checkeado: notas[i].querySelector('#checkLetra').checked,
        estado: padre[1]
      }


      datosNotas.push(nuevaNota);
    }

    var text = JSON.stringify(datosNotas);
    var filename = 'notas.json';


    download(filename, text);


  },

  promptCambiarNota: (nota, estado) => {

    const main = document.querySelector('.cuerpoCuadro');
    const div1 = main.querySelector('.idea');
    const div2 = main.querySelector('.enProceso');
    const div3 = main.querySelector('.completada');
    const divs = [div1, div2, div3];

    const section = document.createElement('section');
    section.className = 'prompt';

    const titulo = document.createElement('h4');
    const palabras = document.createTextNode('MOVER A:');
    titulo.appendChild(palabras);

    const button1 = document.createElement('button');
    button1.addEventListener('click', () => {
      divs[0].appendChild(nota.nota);
      nota.estado = util.estados[0];
      section.style.display = 'none';
    });

    const button2 = document.createElement('button');
    button2.addEventListener('click', () => {
      divs[1].appendChild(nota.nota);
      nota.estado = util.estados[1];
      section.style.display = 'none';
    });

    const button3 = document.createElement('button');
    button3.addEventListener('click', () => {
      divs[2].appendChild(nota.nota);
      nota.estado = util.estados[2];
      section.style.display = 'none';
    });

    const buttonX = document.createElement('button');
    buttonX.innerHTML = 'X';
    buttonX.addEventListener('click', () => {
      const padre = section.parentNode;
      padre.removeChild(section);

    });

    section.append(titulo, button1, button2, button3, buttonX);
    main.appendChild(section);
  },

  permisoDescenso: function (event) {
    event.preventDefault();
  },

  arrastrar: function (event) {
    event.dataTransfer.setData("text", event.target.id);

  },

  soltar: function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(data);
    const padre = event.target.classList;

    if (padre[1] == "idea" || padre[1] == "enProceso" || padre[1] == "completada") {
      event.target.appendChild(draggableElement);
    }

  },

  mostrarDesarrolladores: () => {
    const modalDesarrolladores = document.querySelector(".modal");
    modalDesarrolladores.style.display = "block";

    
  },

  cerrarModal: () => {
    const modalDesarrolladores = document.querySelector(".modal");

    modalDesarrolladores.className += " modal_contenido_cerrado";

    const myTimeout = setTimeout(myGreeting, 1000);

    function myGreeting() {
      modalDesarrolladores.classList.remove("modal_contenido_cerrado");
      modalDesarrolladores.style.display = "none";

    }

  },

  touchStart: (event) => {

    currentElement = event.target;
  },

  touchMove: (event) => {

    if (currentElement) {
      event.preventDefault();
      const touch = event.touches[0];
      const container = currentElement.parentNode;
      const offsetX = touch.clientX - container.getBoundingClientRect().left;
      const offsetY = touch.clientY - container.getBoundingClientRect().top;

      currentElement.style.left = offsetX + "px";
      currentElement.style.top = offsetY + "px";

    }

  },

  drop: (event) => {
    if (currentElement) {
      event.target.appendChild(currentElement);
      currentElement = null;
    }
  },
  promptBase: (frase) => {
    const main = document.querySelector('main');

    const div = document.createElement('div');
    div.className = 'promptBase';

    const textofrase = document.createElement('h2');
    let palabras = document.createTextNode(frase);
    textofrase.appendChild(palabras);

    const btnAceptar = document.createElement('button');
    const textBtn = document.createTextNode('Aceptar');
    btnAceptar.appendChild(textBtn);
    btnAceptar.addEventListener('click', () => {
      const padrePrompt = div.parentNode;
      padrePrompt.removeChild(div);
    });
    div.append(textofrase, btnAceptar);
    main.appendChild(div);
  },

  confirmacionBase: (titulo, pregunta, callbackAceptar) => {
    const main = document.querySelector('main')
    const div = document.createElement('div');
    div.className = 'promptConfirmacion'

    const tituloCartel = document.createElement('h3');
    tituloCartel.textContent = titulo;
    tituloCartel.className = 'tituloCartel';

    const preguntaCartel = document.createElement('h2');
    preguntaCartel.textContent = pregunta;
    preguntaCartel.className = 'preguntaCartel';

    const btnAceptar = document.createElement('button');
    btnAceptar.textContent = 'Aceptar';
    btnAceptar.addEventListener('click', () => {
      if (typeof callbackAceptar === 'function') {
        callbackAceptar();
      }
      const padrePrompt = div.parentNode;
      padrePrompt.removeChild(div);
    });

    const btnCancelar = document.createElement('button');
    btnCancelar.textContent = 'Cancelar';
    btnCancelar.addEventListener('click', () => {
      const padrePrompt = div.parentNode;
      padrePrompt.removeChild(div);
    });

    div.append(tituloCartel, preguntaCartel, btnAceptar, btnCancelar);
    main.appendChild(div)
  },
  setTheme: (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  },

  modoOscuro: () => {
    let themeApp = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    util.setTheme(themeApp);
  },

  
  cerrarMenu: () => {
    const menu = document.querySelector(".menu-list");
    if( menu.style.display == "none"){
      const myTimeout = setTimeout(myGreeting, 10);
    }else{
      const myTimeout = setTimeout(myGreeting, 1000);
    }

   

    function myGreeting() {
      if( menu.style.display == "none"){
        menu.style.display = "block";
      }else{
        menu.style.display = "none";
      }
     

    }
  },
}





