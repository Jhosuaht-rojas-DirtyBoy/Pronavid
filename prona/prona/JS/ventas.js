document.getElementById("ventaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const asesor = document.getElementById("asesor").value;
    const cliente = document.getElementById("cliente").value;
    const producto = document.getElementById("producto").value;
    const valor = document.getElementById("valor").value;
    const fecha = new Date().toLocaleDateString();

    const tabla = document.querySelector("#tablaVentas tbody");

    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${asesor}</td>
        <td>${cliente}</td>
        <td>${producto}</td>
        <td>$${valor}</td>
        <td>${fecha}</td>
    `;

    fila.style.animation = "nuevaFila .6s ease";
    tabla.appendChild(fila);

    document.getElementById("ventaForm").reset();
});
