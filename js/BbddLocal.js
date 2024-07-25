
export default class BbddLocal {
    constructor(archivo) {
        this._archivo = archivo;
       
    }

    insertarDatos() {
        alert('insertando datos')

    }

   async leerDatos(archivo = this._archivo) {
      
      await  fetch(archivo)
            .then(response => response.text())
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error('Error al cargar el archivo:', error);
            });

 

    }
}