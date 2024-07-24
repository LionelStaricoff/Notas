class cartelLogin {
    constructor(padre, funcion) {
        this._funcion = funcion;
        this._padre = padre ?? 'body';
        this.isAgregarAlFront();
    }

    agregarAlFront() {
        this.caragarStyle();
        const padre = document.querySelector(this._padre);
        padre.appendChild(this.armarCartel());
    }

    armarCartel() {
        const div = document.createElement('div');
        div.id = "login";
        const span = document.createElement('span');
        span.innerText = 'X';
        const usuario = document.createElement('input');
        usuario.type = 'text';
        usuario.placeholder = 'Usuario'
        const password = document.createElement('input');
        password.type = 'password';
        password.placeholder = 'constraseña'
        const button = document.createElement('input');
        button.type = 'button';
        button.value = 'Loguear';
        button.addEventListener('click', () => this.isFunction());

        div.append(span, usuario, password, button);
        return div;
    }

    caragarStyle() {
        const head = document.querySelector('head');
        const style = document.createElement('style');
        style.innerText = `#login {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: #6495ed;
    width: min(100%, 20em);
    height: fit-content;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
    padding: 30px;
    border-radius: 15px;
    border: 3px solid blue;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    span {
        position: absolute;
        font-weight: bolder;
        font-size: 1.5em;
        width: fit-content;
        text-shadow: 3px 5px 5px gray;
        border-radius: 15px;
        top: 0px;
        right: 10px;
        color: whitesmoke;

        &:hover {
            color: #333;
        }
    }

    input {
        border-radius: 25px;
        height: max(48px, 3em);
        text-align: center;
    }

    .btn {
        background-color: #061c41;
        color: beige;
        &:active{
            transform: scale(95%);
        }
    }
}`

        head.appendChild(style);
    }

    isAgregarAlFront() {
        const cartel = document.querySelector('#login') ?? null;

        if (cartel == null) this.agregarAlFront();
    }

    isFunction() {
        if ( typeof this._funcion == 'function') {
            this._funcion()
        } else {
            alert('el parametro debe ser una funcion')
        }
    }
}