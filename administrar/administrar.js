function mostrarPanel() {
    const rol = document.getElementById("rol").value;

    document.getElementById("panelAdmin").style.display = "none";

    if (rol === "admin") {
        document.getElementById("panelAdmin").style.display = "block";
    } else {
        alert("Por favor selecciona el rol Administrador");
    }
}
