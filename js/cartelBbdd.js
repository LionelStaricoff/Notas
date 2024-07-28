class cartelBbdd {
    constructor(padre, nameBtn, nameBtn1, funcion, function1) {
        this._padre = padre ?? 'body';
        this._nameBtn = nameBtn ?? 'Guardar';
        this._nameBtn1 = nameBtn1 ?? 'Cargar';
        this._funcion = funcion;
        this._function1 = function1;


        this._div;
        this.builderCartel;

        this.isAgregarAlFront();
    }

    agregarAlFront() {
        this.caragarStyle();
        const padre = document.querySelector(this._padre);
        padre.appendChild(this.armarCartel());
    }

    armarCartel() {
        this._div = document.createElement('div');
        this._div.id = "doble_button";
        const span = document.createElement('span');
        span.innerText = 'X';
        span.addEventListener('click', () => this.cerrarCartel())

        const button = document.createElement('input');
        button.type = 'button';
        button.value = this._nameBtn;
        button.id = 'btn';
        button.addEventListener('click', () => this.isFunction(this._funcion));

        const button1 = document.createElement('input');
        button1.type = 'button';
        button1.value = this._nameBtn1;
        button1.id = 'btn1';
        button1.addEventListener('click', () => this.isFunction(this._function1));

        this._div.append(span, button, button1);
        return this._div;
    }

    caragarStyle() {
        const head = document.querySelector('head');
        const style = document.createElement('style');
        style.innerText = `#doble_button {
    position: absolute;
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
      /*  const cartel = document.querySelector('#doble_button');

        if (cartel) {
               const padre = cartel.parentNode;
               padre.removeChild(cartel)
            }*/
            this.agregarAlFront(); 
    }

    isFunction(funcion) {
        if (typeof funcion == 'function') {
            funcion()
        } else {
            alert('el parametro debe ser una funcion')
        }
    }

    cerrarCartel() {
        const padre = this._div.parentNode;
        padre.removeChild(this._div);
    }


    static cerrarCarterLogin() {

        const cartel = document.querySelector('#login')
        const padre = cartel.parentNode;
        padre.removeChild(cartel)

    }

    static builder() {
        this.builderCartel ={};
        return this;
    }

    static padre(dtoPadre) {
        this.builderCartel._padre = dtoPadre;
        return this;
    }

    static nameBtn(dtoNameBtn) {
        this.builderCartel._nameBtn = dtoNameBtn;
        return this;
    }

    static nameBtn1(dtoNameBtn1) {
        this.builderCartel._nameBtn1 = dtoNameBtn1;
        return this;
    }

    static functionBtn(dtoFunction) {
        this.builderCartel._funcion = dtoFunction;
        return this;
    }

    static functionBtn1(dtoFunction) {
        this.builderCartel._function1 = dtoFunction;
        return this;
    }
    static build() {

        return new cartelBbdd(this.builderCartel._padre,this.builderCartel._nameBtn,this.builderCartel._nameBtn1,this.builderCartel._funcion,this.builderCartel._function1 ) ;
    }
}









