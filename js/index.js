const columnas = document.querySelectorAll('.columnaCuadro');
// clumna [0]: ideas, clumna [1]: en proceso, clumna [2]:completada


/*
const nota = document.querySelector(".nota");


colorPicker.addEventListener("change", () => {
    const colorPicker = document.getElementById("colorPicker");
    const triangle = document.querySelector(".triangle");
    const colorElegido = colorPicker.value;

    nota.style.backgroundColor = colorElegido;
    triangle.style.borderLeftColor = colorElegido;
})

*/
const nota = new Nota();
alert(nota.crearNota);