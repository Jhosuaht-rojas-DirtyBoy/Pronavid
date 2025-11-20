// registrarse.js

const btnAsesor = document.getElementById('btnAsesor');
const btnAdmin = document.getElementById('btnAdmin');
const formAsesor = document.getElementById('formAsesor');
const formAdmin = document.getElementById('formAdmin');

btnAsesor.addEventListener('click', () => {
    formAsesor.classList.remove('oculto');
    formAdmin.classList.add('oculto');
});

btnAdmin.addEventListener('click', () => {
    formAdmin.classList.remove('oculto');
    formAsesor.classList.add('oculto');
});
