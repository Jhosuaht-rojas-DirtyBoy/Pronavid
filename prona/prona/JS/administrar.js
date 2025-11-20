// Datos simulados, luego se reemplazan con datos reales desde la base de datos
let usuarios = [
    { nombre: "Carlos", rol: "asesor" },
    { nombre: "María", rol: "asesor" },
    { nombre: "Luis", rol: "admin" }
];

// Mostrar panel administrador
function mostrarPanel() {
    const rol = document.getElementById("rol").value;

    document.getElementById("panelAdmin").style.display = "none";

    if (rol === "admin") {
        document.getElementById("panelAdmin").style.display = "block";
        cargarUsuarios();
    } else {
        alert("Debes seleccionar Administrador");
    }
}

// Cargar lista en la tabla
function cargarUsuarios() {
    const tbody = document.querySelector("#tablaUsuarios tbody");
    tbody.innerHTML = ""; // Limpiar antes de volver a pintar

    usuarios.forEach((user, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${user.nombre}</td>
                <td>${user.rol}</td>
                <td>
                    <button class="btn-accion" onclick="eliminarUsuario(${index})">Eliminar</button>
                    <button class="btn-accion" onclick="concederPermisos(${index})">Conceder permisos</button>
                </td>
            </tr>
        `;
    });
}

// Eliminar usuario del arreglo
function eliminarUsuario(index) {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
        usuarios.splice(index, 1);
        cargarUsuarios();
    }
}

// Convertir asesor a admin
function concederPermisos(index) {
    usuarios[index].rol = "admin";
    cargarUsuarios();
    alert("Permisos concedidos. Ahora es Administrador.");
}
