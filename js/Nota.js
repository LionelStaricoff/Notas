class Nota{

    constructor(titulo, descripcion, color){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.color = color;

    }
 
    crearNota(){
        const nota = ` <div class="nota">
        <h2><input type="text" placeholder="TITULO"></h2>
        <textarea  cols="30" rows="10" placeholder="Descripción"></textarea>
        <section class="buttons-container">  
            <button><img src="img/remove-symbol.png"></button> 
            <button><input class="color" type="color" value="#ffd200"></button> 
            <button><img src="img/correct-symbol.png"></button> 
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