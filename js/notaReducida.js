const botonEliminar = document.querySelector(".notaReducida .boton-eliminar");
const botonEditar = document.querySelector(".notaReducida .boton-editar");
const botonMover = document.querySelector(".notaReducida .boton-mover");
const notaReducida = document.querySelector(".notaReducida");
const cambioDeColumna = document.querySelector(".cambioDeColumna");
//cuando presionen el botón editar en la notaReducida: Debe verse con el mismo diseño de la clase Nota
const notaCompleta = document.querySelector(".nota");



botonEliminar.addEventListener("click", () => {
    alert("boton-eliminar")
    
});

botonEditar.addEventListener("click", ()=>{
    alert("boton-editar");
    //Copio el contenido de la nota reducida a la nota completa
    notaCompleta.querySelector("h2 input").value = notaReducida.querySelector("h2 input").value;
    notaCompleta.querySelector("textarea").value = notaReducida.querySelector("textarea").value;

    //Remuevo los botones de la notaReducida
    const buttonsContainer = notaReducida.querySelector(".buttons-container");
    while (buttonsContainer.firstChild) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
    }

    //Creo y agrego los botones de la notaCompleta
    const botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = '<img src="img/remove-symbol.png">';
    botonEliminar.addEventListener("click", () => {
        alert('Boton Eliminar');
    });

    const botonCambiarColor = document.createElement("button");
    botonCambiarColor.innerHTML = '<input id="colorPicker" class="color" type="color">';
    botonCambiarColor.addEventListener("change", () => {
        const colorElegido = botonCambiarColor.querySelector("input").value;
        notaCompleta.style.backgroundColor = colorElegido;
        notaCompleta.querySelector(".triangle").style.borderLeftColor = colorElegido;
    });

    const botonCheck = document.createElement("button");
    botonCheck.innerHTML = '<img src="img/correct-symbol.png">';
    botonCheck.addEventListener("click", () => {
        alert('Boton Check');
    });

    buttonsContainer.appendChild(botonEliminar);
    buttonsContainer.appendChild(botonCambiarColor);
    buttonsContainer.appendChild(botonCheck);

});

botonMover.addEventListener("click", () => {
    if (cambioDeColumna.style.display === "none" || cambioDeColumna.style.display === "") {
        cambioDeColumna.style.display = "block";
    } else {
        cambioDeColumna.style.display = "none";
    }
    
}); 