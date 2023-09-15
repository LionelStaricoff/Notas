const botonEliminar = document.querySelector(".notaReducida .boton-eliminar");
const botonEditar = document.querySelector(".notaReducida .boton-editar");
const botonMover = document.querySelector(".notaReducida .boton-mover");
const notaReducida = document.querySelector(".notaReducida");
const cambioDeColumna = document.querySelector(".cambioDeColumna")




botonEliminar.addEventListener("click", () => {
    alert("boton-eliminar");

});

botonEditar.addEventListener("click", () => {
    alert("boton-editar");

/*cuando presionen el botón editar en la notaReducida: Debe verse con el mismo diseño de la clase Nota
    notaCompleta.querySelector("h2 input").value = notaReducida.querySelector("h2 input").value;
    notaCompleta.querySelector("textarea").value = notaReducida.querySelector("textarea").value;

    const colorElegido = botonCambiarColor.querySelector("input").value;

    const notaCompleta = document.querySelector("div");
    notaCompleta.classList.add(".nota");
    notaCompleta.innerHTML = `
    <div class="nota">
        <h2><input type="text" placeholder="TITULO"></h2>
        <textarea cols="30" rows="10" placeholder="Descripción"></textarea>
        <section class="buttons-container">
            <button><img src="img/remove-symbol.png"></button>
            <button><input id="colorPicker" class="color" type="color" value="#ffd200"></button>
            <button><img src="img/correct-symbol.png"></button>
        </section>
        <section class="triangle"></section>
    </div>
    `
*/
})



botonMover.addEventListener("click", () => {
    if (cambioDeColumna.style.display === "none" || cambioDeColumna.style.display === "") {
        cambioDeColumna.style.display = "block";
    } else {
        cambioDeColumna.style.display = "none";
    }
})