const colorPicker = document.getElementById("colorPicker");
const nota = document.querySelector(".nota");

colorElegido.addEventListener("change", () => {
    const colorElegido = colorPicker.value;

    nota.style.backgroundColor = colorElegido;
})