class Nota{
    constructor(){
        this.titulo;
        this.descripcion;
        this.color;
        crearNota();
    }
 
    crearNota(){


        const nota = document.createElement('div');
        nota.className = 'nota';

        const h2 = document.createElement('h2');
        const titulo =  document.createElement('input');
        titulo.type = "text";
        titulo.placeholder = "TITULO";
        h2.appendChild(titulo);

        const textarea = document.createElement('textarea');
        textarea.cols = '30';
        textarea.rows = '10';
        textarea.placeholder = 'Descripción';

       const section = document.createElement('section');
       section.className = 'buttons-container';
       const button1 = document.createElement('button');
       const img = document.createElement('img');
       img.src = 'img/remove-symbol.png';
       button1.appendChild(img);
       const button2 = document.createElement('button');
       const button3 = document.createElement('button');
       section.appendChild(button1);
       section.appendChild(button2);
       section.appendChild(button3);

        nota.appendChild(h2);
        nota.appendChild(textarea);
        nota.appendChild(section);


        
        `<div class="notaSinAbsolute">
        <h2><input type="text" placeholder="TITULO"></h2>
        <textarea cols="30" rows="10" placeholder="Descripción"></textarea>
        <section class="buttons-container">
            <button><img src="img/remove-symbol.png"></button>
            <button><input id="colorPicker" class="color" type="color" value="#ffd200"></button>
            <button><img src="img/correct-symbol.png"></button>
=======
        const nota = ` <div class="nota">
        <h2><input type="text" placeholder="TITULO"></h2>
        <textarea  cols="30" rows="10" placeholder="Descripción"></textarea>
        <section class="buttons-container">  
            <button><img src="img/remove-symbol.png"></button> 
            <button><input class="color" type="color" value="#ffd200"></button> 
            <button><img src="img/correct-symbol.png"></button> 
>>>>>>> dd60454a79d949e3192f8aa95c8f0a76bfe24e3f
        </section>
        <section class="triangle"></section>
    </div>`
    }

    agregarAlFront(){

    }
    cambiarDeEstado(){

    }
    editar(){

    }
    eliminar(){
        
    }
    modificarColor(){
        
    }
}