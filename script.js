
const ventana = document.getElementById("ventana");
const final = document.getElementById("final");

const abrirPregunta = document.getElementById("abrirPregunta");
const botonSi = document.getElementById("botonSi");
const botonNo = document.getElementById("botonNo");
const botonCerrar = document.getElementById("botonCerrar");

function mostrarPregunta() {
    ventana.classList.add("visible");
}

function moverVentana() {
    const modal = ventana.querySelector(".modal");

    const maxX = Math.max(0, window.innerWidth - modal.offsetWidth - 30);
    const maxY = Math.max(0, window.innerHeight - modal.offsetHeight - 30);

    modal.style.position = "fixed";
    modal.style.left = Math.random() * maxX + "px";
    modal.style.top = Math.random() * maxY + "px";
}

abrirPregunta.addEventListener("click", mostrarPregunta);

botonNo.addEventListener("click", () => {
    moverVentana();
});

botonSi.addEventListener("click", () => {
    ventana.classList.remove("visible");

    const modal = ventana.querySelector(".modal");
    modal.style.position = "";
    modal.style.left = "";
    modal.style.top = "";

    final.classList.add("visible");
});

botonCerrar.addEventListener("click", () => {
    final.classList.remove("visible");
});
