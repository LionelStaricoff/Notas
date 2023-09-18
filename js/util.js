const util = {
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
     alert(a);
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



  estados: ['ideas', 'en proceso', 'completadas']

}