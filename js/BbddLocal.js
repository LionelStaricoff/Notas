
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

                    cartelBbdd.builder().padre('main')
                        .nameBtn('Guardar notas')
                        .nameBtn1('Cargar notas')
                        .functionBtn(async () => alert('Guardar notas'))
                        .functionBtn1(async () => alert('Cargar notas'))
                        .build();
                        
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