class Nota {
    constructor() {
        this.titulo = '';
        this.descripcion = '';
        this.color = '';
        this.editar = true;

    }

    crearNota() {

        const nota = document.createElement('div');
        nota.className = 'nota';

        const img1 = document.createElement('img');
        img1.src = 'img/chinche.png';
        img1.alt = 'imagen de chinche';
        img1.className = 'chinche';

        const h2 = document.createElement('h2');
        const titulo = document.createElement('input');
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
        img.alt = 'imagen de una x'
        btnX.appendChild(img);
        const btnColor = document.createElement('button');
        const input = document.createElement('input');
        input.className = 'color';
        input.type = 'color';
        input.value = '#ffd200';
        this.color = '#ffd200';
        btnColor.appendChild(input);

        const btnTilde = document.createElement('button');
        const img2 = document.createElement('img');
        img2.src = 'img/correct-symbol.png';
        img2.alt = 'imagen de un tilde';
        btnTilde.appendChild(img2);
        section.appendChild(btnX);
        section.appendChild(btnColor);
        section.appendChild(btnTilde);
        const i = document.createElement('i');
        i.className = 'triangle';

        nota.appendChild(img1);
        nota.appendChild(h2);
        nota.appendChild(textarea);
        nota.appendChild(section);
        nota.appendChild(i);

        this.modificarColor(btnColor, nota, i, input);
        this.editarNota(btnTilde, titulo, textarea, nota);
        this.eliminar(nota,btnX);

        return nota;
    }

    agregarAlFront() {
        const columnas = document.querySelectorAll('.columnaCuadro');
        const nota = this.crearNota();
        columnas[0].appendChild(nota);

    }
    cambiarDeEstado() {
        const cambioDeColumna = document.createElement('div');
        cambioDeColumna.className = 'cambioDeColumna'
    
        const btnIdea = document.createElement('button');
        const img =  'img/idea.png';
        img.src = 'img/idea.png';
        img.alt = 'imagen IDEA';
        btnIdea.appendChild(img);
    
        const btnEnProceso = document.createElement('button');
        const img1 =  'img/enProceso.png';
        img1.src = 'img/enProceso.png';
        img1.alt = 'imagen En Proceso';
        btnEnProceso.appendChild(img1);
    
    
        const btnCompletada = document.createElement('button');
        const img2 =  'img/hecho.png';
        img2.src = 'img/hecho.png';
        img2.alt = 'imagen Completada';
        btnCompletada.appendChild(img2);
    
    }
    editarNota(btnTilde, titulo, textarea, nota) {


        btnTilde.addEventListener('click', () => {

            if (nota.style.position == 'relative') {
                titulo.readOnly = false;
                textarea.readOnly = false;
                nota.style.position = 'absolute';
            } else {
                this.titulo = titulo.value;
                this.descripcion = textarea.value;
                titulo.readOnly = true;
                textarea.readOnly = true;
                nota.style.position = 'relative';

            }

        });


    

}
eliminar(nota,btnX) {
    btnX.addEventListener('click',()=>{
      // modificar el prompt
       const respuesta = confirm("Seguro que decesa eliminarlo?");
         if(respuesta == 1){ nota.style.display = 'none'};
        
    });


}
modificarColor(btnColor, nota, i, input) {
    btnColor.addEventListener("change", () => {
        this.color = input.value;
        nota.style.backgroundColor = this.color;
        i.style.borderLeftColor = this.color;

    });
}
}

