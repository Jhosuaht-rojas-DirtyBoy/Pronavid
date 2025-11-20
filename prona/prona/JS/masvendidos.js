const selectorOpciones = document.getElementById("selectorOpciones");

selectorOpciones.addEventListener("change", function () {
    const pagina = this.value;
    if (pagina) {
        window.location.href = pagina;
    }
});

// Aquí más adelante agregaremos el fetch PHP con MySQL
