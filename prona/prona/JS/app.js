// --- Selecciones de elementos ---
const rolAsesorBtn = document.getElementById("rolAsesor");
const rolAdminBtn = document.getElementById("rolAdmin");
const loginForm = document.getElementById("loginForm");
const registroForm = document.getElementById("registroForm");
const tituloRol = document.getElementById("tituloRol");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const mensajeDiv = document.getElementById("mensaje");
const irRegistro = document.getElementById("irRegistro");
const irLogin = document.getElementById("irLogin");
const regName = document.getElementById("regName");
const regEmail = document.getElementById("regEmail");
const regPassword = document.getElementById("regPassword");
const regRol = document.getElementById("regRol");
const codigoAdminDiv = document.getElementById("codigoAdminDiv");
const regCodigoAdmin = document.getElementById("regCodigoAdmin");
const mensajeReg = document.getElementById("mensajeReg");

let rolSeleccionado = null;

// --- Funciones ---
function seleccionarRol(rol) {
  rolSeleccionado = rol;
  loginForm.classList.remove("oculto");
  registroForm.classList.add("oculto");
  tituloRol.textContent = `Inicio ${rol}`;
}

// Mostrar/Ocultar campo código admin
regRol.addEventListener("change", () => {
  if (regRol.value === "Administrador") codigoAdminDiv.classList.remove("oculto");
  else codigoAdminDiv.classList.add("oculto");
});

// --- Registro ---
registroForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  if (regRol.value === "Administrador" && regCodigoAdmin.value !== "admin123") {
    mostrarMensajeRegistro("Código admin incorrecto ❌", "error");
    return;
  }

  if (usuarios.some(u => u.email === regEmail.value)) {
    mostrarMensajeRegistro("El correo ya está registrado ❌", "error");
    return;
  }

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: regName.value,
    email: regEmail.value,
    password: regPassword.value,
    rol: regRol.value
  };

  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarMensajeRegistro("Usuario registrado ✅", "success");

  // Limpiar formulario
  regName.value = "";
  regEmail.value = "";
  regPassword.value = "";
  regRol.value = "Asesor";
  regCodigoAdmin.value = "";
  codigoAdminDiv.classList.add("oculto");
});

function mostrarMensajeRegistro(texto, tipo) {
  mensajeReg.textContent = texto;
  mensajeReg.className = `msg ${tipo}`;
  mensajeReg.classList.remove("oculto");
}

// --- Login ---
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const user = usuarios.find(u => u.email === emailInput.value);

  if (!user) return mostrarMensajeLogin("Usuario no encontrado ❌", "error");
  if (user.password !== passwordInput.value) return mostrarMensajeLogin("Contraseña incorrecta ❌", "error");
  if (user.rol !== rolSeleccionado) return mostrarMensajeLogin("No tienes permisos ❌", "error");

  const token = {
    id: user.id,
    nombre: user.nombre,
    email: user.email,
    rol: user.rol,
    expira: Date.now() + 86400000
  };
  localStorage.setItem("tokenJSON", JSON.stringify(token));

  mostrarMensajeLogin(`Bienvenido ${user.nombre} ✅`, "success");

  setTimeout(() => {
    alert(`Bienvenido  ${user.rol}`);
    
    if (user.rol === "Administrador") {
      location.href = "../HTML/dashboard.html";
    } else {
      location.href = "../HTML/dashboardasesor.html";
    }
  }, 1200);
});

function mostrarMensajeLogin(texto, tipo) {
  mensajeDiv.textContent = texto;
  mensajeDiv.className = `msg ${tipo}`;
  mensajeDiv.classList.remove("oculto");
}

// --- Selector de rol ---
rolAsesorBtn.addEventListener("click", () => seleccionarRol("Asesor"));
rolAdminBtn.addEventListener("click", () => seleccionarRol("Administrador"));

// --- Cambiar vista Login/Registro ---
irRegistro.addEventListener("click", () => {
  loginForm.classList.add("oculto");
  registroForm.classList.remove("oculto");
});
irLogin.addEventListener("click", () => {
  registroForm.classList.add("oculto");
  loginForm.classList.remove("oculto");
});

// --- Botones token ---
document.getElementById("checkTokenBtn").addEventListener("click", () => {
  const token = JSON.parse(localStorage.getItem("tokenJSON") || "{}");
  if (!token.nombre) return alert("No hay token guardado");
  alert("Token válido para: " + token.nombre);
});
document.getElementById("showTokenBtn").addEventListener("click", () => {
  const token = localStorage.getItem("tokenJSON");
  alert(token || "No hay token guardado");
});
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("tokenJSON");
  alert("Sesión cerrada");
});
