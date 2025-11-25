// Seleccionamos los elementos
const paso1 = document.getElementById('paso1');
const paso2 = document.getElementById('paso2');
const paso3 = document.getElementById('paso3');

const btnCorreo = document.getElementById('btnCorreo');
const btnCodigo = document.getElementById('btnCodigo');
const btnNueva = document.getElementById('btnNueva');

// Simular el flujo paso a paso
btnCorreo.addEventListener('click', () => {
    const correo = document.getElementById('correo').value;
    if (correo === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    }
    // Mostrar siguiente paso
    paso1.classList.add('oculto');
    paso2.classList.remove('oculto');
});

btnCodigo.addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value;
    if (codigo === '') {
        alert('Por favor, ingresa el código.');
        return;
    }
    // Mostrar siguiente paso
    paso2.classList.add('oculto');
    paso3.classList.remove('oculto');
});

btnNueva.addEventListener('click', () => {
    const nueva = document.getElementById('nueva').value;
    const confirmar = document.getElementById('confirmar').value;

    if (nueva === '' || confirmar === '') {
        alert('Por favor, completa ambos campos.');
        return;
    }
    if (nueva !== confirmar) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    alert('✅ Contraseña cambiada exitosamente.');
    // Aquí podrías redirigir a login.html si existiera
    // window.location.href = 'login.html';
});
