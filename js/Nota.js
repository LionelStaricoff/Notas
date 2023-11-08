let ids = 1;

class Nota {

    constructor(titulo, descripcion, color, position, estado, colorTexto,checkeado) {

        this.titulo = titulo ?? '';
        this.descripcion = descripcion ?? '';
        this.color = color ?? '#ffd200';
        this.estado = estado ?? util.estados[0];
        this.position = position ?? 'absolute';
        this.nota;
        this.id = ids++;
        this.colorTexto = colorTexto ?? '#000'; //COLOR TEXTO
        this.checkeado = checkeado ?? 'false';


    }

    crearNota() {

        const nota = document.createElement('div');
        nota.className = 'nota';
        nota.id = this.id;
        nota.style.backgroundColor = this.color;
        nota.style.position = this.position;
        nota.style.zIndex = '10';
        
        const img1 = document.createElement('img');
        img1.src = 'img/chinche.png';
        img1.alt = 'imagen de chinche';
        img1.className = 'chinche';
        img1.style.pointerEvents = 'none';

        const h2 = document.createElement('h2');
        const titulo = document.createElement('input');
        titulo.type = "text";
        titulo.placeholder = "TITULO";
        titulo.value = this.titulo;
        titulo.style.color = this.colorTexto;
        h2.appendChild(titulo);

        const textarea = document.createElement('textarea');
        textarea.cols = '30';
        textarea.rows = '10';
        textarea.placeholder = 'Descripción';
        textarea.style.color = this.colorTexto;
        const titleTextarea = document.createTextNode(this.descripcion);
        textarea.appendChild(titleTextarea);

        const section = document.createElement('section');
        section.className = 'buttons-container';
        const btnX = document.createElement('button');
        const img = document.createElement('img');
        img.src = 'img/remove-symbol.png';
        img.alt = 'imagen de una x'
        btnX.appendChild(img);

        const labelColorTxt = document.createElement('label'); //COLOR TEXTO desde ACÁ
        labelColorTxt.className = 'labelColorTxt';
        labelColorTxt.style.color = '#fff';
        labelColorTxt.style.background = '#000';

        const inputColorTxt = document.createElement('input');
        inputColorTxt.type = 'checkbox';
        inputColorTxt.style.display = 'none';
        inputColorTxt.id = 'checkLetra';
        inputColorTxt.checked = this.checkeado;
        inputColorTxt.value = this.color;

        const labelText = document.createTextNode('A');
        labelColorTxt.appendChild(inputColorTxt);
        labelColorTxt.appendChild(labelText);          //COLOR TEXTO hasta ACÁ


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
        section.appendChild(labelColorTxt);
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
        this.modificarColorTexto(inputColorTxt, nota, labelColorTxt);
        this.estaChecked(inputColorTxt,nota, labelColorTxt);

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


    editarNota(btnTilde, titulo, textarea, nota) {

        btnTilde.addEventListener('click', () => {

            if (nota.style.position == 'relative') {
                titulo.readOnly = false;
                titulo.style.pointerEvents = 'auto';
                textarea.readOnly = false;
                nota.style.position = 'absolute';
                this.agrandarNota(nota);

            } else {
                nota.style.zIndex = '10';
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
            util.confirmacionBase('ELIMINA LA NOTA', '¿Estás seguro que deseas eliminarla?', () => {
                const padreNota = nota.parentNode.removeChild(nota);
            });
        });

    }
    modificarColor(btnColor, nota, i, input) {

        btnColor.addEventListener("change", () => {
            this.color = input.value;
            nota.style.backgroundColor = this.color;
            i.style.borderLeftColor = this.color;

        });
    }

    modificarColorTexto(inputColorTxt, nota, labelColorTxt) {

        inputColorTxt.addEventListener('change', function () {
            
            const textarea = nota.querySelector('textarea');

            const titulo = nota.querySelector('input');
            const chequeado = inputColorTxt.checked;
               
    
            if (chequeado) {
                labelColorTxt.style.color = '#fff';
                labelColorTxt.style.background = '#000';
                this.colorTexto = '#000';
                titulo.style.color = this.colorTexto;
                textarea.style.color = this.colorTexto;
                nota.style.color = this.colorTexto;
    
            } else {
                labelColorTxt.style.color = '#000';
                labelColorTxt.style.background = '#fff';
                this.colorTexto = '#fff';
                titulo.style.color = this.colorTexto;
                textarea.style.color = this.colorTexto;
                nota.style.color = this.colorTexto;
            }

        });
    }

    estaChecked(inputColorTxt,nota, labelColorTxt){
        const textarea = nota.querySelector('textarea');

        const titulo = nota.querySelector('input');
        const chequeado = inputColorTxt.checked;
           

        if (chequeado) {
            labelColorTxt.style.color = '#fff';
            labelColorTxt.style.background = '#000';
            this.colorTexto = '#000';
            titulo.style.color = this.colorTexto;
            textarea.style.color = this.colorTexto;
            nota.style.color = this.colorTexto;

        } else {
            labelColorTxt.style.color = '#000';
            labelColorTxt.style.background = '#fff';
            this.colorTexto = '#fff';
            titulo.style.color = this.colorTexto;
            textarea.style.color = this.colorTexto;
            nota.style.color = this.colorTexto;
        }

    }

    achicarNota(nota) {

        const btns = nota.querySelectorAll('button');

        const textarea = nota.querySelector('textarea');

        const titulo = nota.querySelector('input');

        const btnColorTxt = nota.querySelector('label'); //COLOR TEXTO

        //comando para arrastrar elementos
        nota.addEventListener("dragstart", util.arrastrar);
        nota.draggable = "true";

        //comandos para arrastrar con los dedos
        nota.addEventListener("ontouchstart", util.touchStart);
        nota.addEventListener("ondragover", util.touchMove);

        titulo.style.height = '2em';
        titulo.style.fontSize = '.7em';
        titulo.style.lineHeight = '.5em';
        titulo.style.marginBottom = '3em';
        titulo.style.pointerEvents = 'none';
        textarea.style.display = 'none';
        btnColorTxt.style.marginBottom = '.7em';
        nota.style.height = '6em';
        nota.style.zIndex = '5';

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

        titulo.style.marginBottom = '.5em';
        textarea.style.display = 'block';
        nota.style.height = '15em';
        nota.style.zIndex = '10';
        nota.draggable = "false";

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


}

