class Nota {

    constructor(titulo, descripcion, color, position, estado) {

        this.titulo = titulo ?? '';
        this.descripcion = descripcion ?? '';
        this.color = color ?? '#ffd200';
        this.estado = estado ?? util.estados[0];
        this.position = position ?? 'absolute';
        this.nota;

    }

    crearNota() {

        const nota = document.createElement('div');
        nota.className = 'nota';
        nota.style.backgroundColor = this.color;
        nota.style.position = this.position;

        const img1 = document.createElement('img');
        img1.src = 'img/chinche.png';
        img1.alt = 'imagen de chinche';
        img1.className = 'chinche';

        const h2 = document.createElement('h2');
        const titulo = document.createElement('input');
        titulo.type = "text";
        titulo.placeholder = "TITULO";
        titulo.className = "titulo";
        titulo.value = this.titulo;
        h2.appendChild(titulo);

        const textarea = document.createElement('textarea');
        textarea.cols = '30';
        textarea.rows = '10';
        textarea.placeholder = 'Descripción';
        const titleTextarea = document.createTextNode(this.descripcion);
        textarea.appendChild(titleTextarea);

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
        input.value = this.color;
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
        i.style.borderLeftColor = this.color;

        nota.appendChild(img1);
        nota.appendChild(h2);
        nota.appendChild(textarea);
        nota.appendChild(section);
        nota.appendChild(i);

        this.modificarColor(btnColor, nota, i, input);
        this.editarNota(btnTilde, titulo, textarea, nota);
        this.eliminar(nota, btnX);

        this.nota = nota;
        return nota;
    }

    agregarAlFront() {
        const div1 = document.querySelector('.idea');
        const div2 = document.querySelector('.enProceso');
        const div3 = document.querySelector('.completada');
        const columnas = [div1, div2, div3];
       
        const nota = this.crearNota();
        columnas[this.getEstado()].appendChild(nota);

    }
    cambiarDeEstado() {
        const cambioDeEstado = document.querySelector('cambioDeEstado')
        const cambioDeColumna = document.createElement('div');
        cambioDeColumna.className = 'cambioDeColumna'

        const btnIdea = document.createElement('button');
        const img = document.createElement('img');
        img.src = 'img/idea.png';
        img.alt = 'imagen IDEA';
        btnIdea.appendChild(img);

        const btnEnProceso = document.createElement('button');
        const img1 = document.createElement('img');
        img1.src = 'img/enProceso.png';
        img1.alt = 'imagen En Proceso';
        btnEnProceso.appendChild(img1);

        const btnCompletada = document.createElement('button');
        const img2 = document.createElement('img');
        img2.src = 'img/hecho.png';
        img2.alt = 'imagen Completada';
        btnCompletada.appendChild(img2);

        cambioDeColumna.appendChild(btnIdea);
        cambioDeColumna.appendChild(btnEnProceso);
        cambioDeColumna.appendChild(btnCompletada);

    }


    editarNota(btnTilde, titulo, textarea, nota) {

        btnTilde.addEventListener('click', () => {

            if (nota.style.position == 'relative') {
                titulo.readOnly = false;
                textarea.readOnly = false;
                nota.style.position = 'absolute';
                this.agrandarNota(nota);

            } else {
                this.titulo = titulo.value;
                this.descripcion = textarea.value;
                titulo.readOnly = true;
                textarea.readOnly = true;
                nota.style.position = 'relative';
                this.achicarNota(nota);

            }

        });




    }
    eliminar(nota, btnX) {
        btnX.addEventListener('click', () => {
            // modificar el prompt
            const respuesta = confirm("Seguro que decesa eliminarlo?");
            if (respuesta == 1) {
                const padre = nota.parentNode;
                padre.removeChild(nota);
                 }

        });


    }
    modificarColor(btnColor, nota, i, input) {

        btnColor.addEventListener("change", () => {
            this.color = input.value;
            nota.style.backgroundColor = this.color;
            i.style.borderLeftColor = this.color;

        });
    }

    achicarNota(nota) {

        const btns = nota.querySelectorAll('button');


        const textarea = nota.querySelector('textarea');


        const titulo = nota.querySelector('input')


        textarea.style.display = 'none';
        nota.style.height = '5em';

        const btnEditar = document.createElement('button');
        btnEditar.className = 'boton-editar';
        const imgEditar = document.createElement('img');
        imgEditar.src = 'img/edit.png'
        btnEditar.appendChild(imgEditar);
        btnEditar.addEventListener('click',
            this.editarNota(btnEditar, titulo, textarea, nota));

        const btnMover = document.createElement('button');
        btnMover.className = 'boton-mover';
        const imgMover = document.createElement('img');
        imgMover.src = 'img/flecha.png'
        btnMover.appendChild(imgMover);
        btnMover.addEventListener('click', () => {
            util.promptCambiarNota(this, this.getEstado());
        })

        btns[1].replaceWith(btnEditar);
        btns[2].replaceWith(btnMover);

    }

    agrandarNota(nota) {
        const btns = nota.querySelectorAll('button');
        const textarea = nota.querySelector('textarea');
        const section = nota.querySelector('section');
        const i = nota.querySelector('i');
        const titulo = nota.querySelector('input');

        textarea.style.display = 'block';
        nota.style.height = '15em';

        const btnTilde = document.createElement('button');
        const img2 = document.createElement('img');
        img2.src = 'img/correct-symbol.png';
        img2.alt = 'imagen de un tilde';
        btnTilde.appendChild(img2);

        const btnColor = document.createElement('button');
        const input = document.createElement('input');
        input.className = 'color';
        input.type = 'color';
        input.value = this.color;
        btnColor.appendChild(input);


        this.modificarColor(btnColor, nota, i, input);
        this.editarNota(btnTilde, titulo, textarea, nota);

        btns[1].replaceWith(btnColor);
        btns[2].replaceWith(btnTilde);




    }

    getNota() {
        const n = this.nota;
        return n;
    }

    getEstado() {
        let e = this.estado;
        switch (e) {
            case util.estados[0]:
                e = 0;
                break;
            case util.estados[1]:
                e = 1;
                break;
            case util.estados[2]:
                e = 2;
                break;
        }


        return e;
    }

        


    
    modificarColor(btnColor, nota, i, input) {
        btnColor.addEventListener("change", () => {
            this.color = input.value;
            nota.style.backgroundColor = this.color;
            i.style.borderLeftColor = this.color;

        });
    }

}


