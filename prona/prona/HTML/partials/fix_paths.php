<?php

// Directorio donde están los HTML
$dir = __DIR__;  

// Extensiones que queremos modificar
$extensiones = ['html', 'htm'];

// Buscar todos los archivos HTML dentro del directorio
$archivos = glob("$dir/*.{html,htm}", GLOB_BRACE);

foreach ($archivos as $archivo) {

    $contenido = file_get_contents($archivo);

    // Reemplazos automatizados
    $nuevo = str_replace([
        "HTML/",
        "CSS/",
        "JS/",
        "../HTML/",
        "../CSS/",
        "../JS/",
        "./HTML/",
        "./CSS/",
        "./JS/",
    ], "", $contenido);

    file_put_contents($archivo, $nuevo);

    echo "✔ Rutas arregladas en: " . basename($archivo) . "<br>";
}

echo "<br><strong>Todas las rutas han sido corregidas automáticamente.</strong>";
