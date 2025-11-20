<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$endpoint = $_GET['endpoint'] ?? '';

switch ($endpoint) {
    case 'auth':
        require_once "routes/auth.php";
        break;

    case 'cliente':
        require_once "routes/cliente.php";
        break;

    case 'producto':
        require_once "routes/producto.php";
        break;

    case 'categoria':
        require_once "routes/categoria.php";
        break;

    case 'cotizacion':
        require_once "routes/cotizacion.php";
        break;

    case 'pedido':
        require_once "routes/pedido.php";
        break;

    case 'venta':
        require_once "routes/venta.php";
        break;

    case 'seguimiento':
        require_once "routes/seguimiento.php";
        break;

    default:
        echo json_encode(["error" => "Ruta no encontrada"]);
}
