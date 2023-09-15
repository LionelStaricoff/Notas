class Nota{
    constructor(){
        this.titulo = '';
        this.descripcion= '';
        this.color='';
      
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
       const btnX = document.createElement('button');
       const img = document.createElement('img');
       img.src = 'img/remove-symbol.png';
       btnX.appendChild(img);
       const btnColor = document.createElement('button');
       const input = document.createElement('input');
       input.id = 'colorPicker';
       input.className = 'color';
       input.type = 'color';
       input.value = '#ffd200';
       this.color = '#ffd200';
       btnColor.appendChild(input);
       btnColor.addEventListener("change", () => {
        const colorPicker = document.getElementById("colorPicker");
        const triangle = document.querySelector(".triangle");
        const colorElegido = colorPicker.value;
    
        nota.style.backgroundColor = colorElegido;
        triangle.style.borderLeftColor = colorElegido;
    })
       const btnTilde = document.createElement('button');
       const img2 = document.createElement('img');
       img2.src = 'img/correct-symbol.png';
       btnTilde.appendChild(img2);
       section.appendChild(btnX);
       section.appendChild(btnColor);
       section.appendChild(btnTilde);
       const i = document.createElement('i');
       i.className = 'triangle';

        nota.appendChild(h2);
        nota.appendChild(textarea);
        nota.appendChild(section);
        nota.appendChild(i);

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