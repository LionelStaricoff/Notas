const botonEliminar = document.querySelector(".notaReducida .boton-eliminar");
const botonEditar = document.querySelector(".notaReducida .boton-editar");
const botonMover = document.querySelector(".notaReducida .boton-mover");
const notaReducida = document.querySelector(".notaReducida");
const cambioDeColumna = document.querySelector(".cambioDeColumna");

botonEliminar.addEventListener("click", () => {
    alert("boton-eliminar")
    
});

botonEditar.addEventListener("click", ()=>{
    alert("boton-editar")

});

botonMover.addEventListener("click", () => {
    
    if (cambioDeColumna.style.display === "none" || cambioDeColumna.style.display === "") {
        cambioDeColumna.style.display = "block";
    } else {
        cambioDeColumna.style.display = "none";
    }
    
}); 