
class BbddLocal {
    constructor(archivo) {
        this._archivo = archivo;

    }

    insertarDatos() {
        alert('insertando datos')

    }

    async login(_name, _password) {

        await fetch(this._archivo)
            .then(response => response.json())
            .then(data => {
               
                const usuarioEncontrado = data.users.find(d => d.name == _name && d.password == _password);


                if (usuarioEncontrado) {
                    alert('acceso correcto')
                    cartelLogin.cerrarCarterLogin();
                    return;
                }

                alert('datos incorrectos')
               
            })
            .catch(error => {
                console.error('Error al cargar el archivo:', error);
            });


    }
}