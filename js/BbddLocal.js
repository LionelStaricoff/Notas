
 class BbddLocal {
    constructor(archivo) {
        this._archivo = archivo;
       
    }

    insertarDatos() {
        alert('insertando datos')

    }

    async login(_name, _password ) {

       await fetch(this._archivo)
            .then(response => response.json())
            .then(data => {
           
                for(let d of data.users){
                  
                    if(d.name == _name && d.password == _password){
                        alert('acceso correcto')
                        cartelLogin.cerrarCarterLogin();
                        return;
                    }
                }
                alert('datos incorrectos')
                return false;
            })
            .catch(error => {
                console.error('Error al cargar el archivo:', error);
            });


    }
}