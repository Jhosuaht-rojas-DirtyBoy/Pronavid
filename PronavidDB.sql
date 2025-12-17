CREATE DATABASE Pronavid;
-- ============================
-- TABLA ROL
-- ============================
CREATE TABLE rol (
    id_rol INT PRIMARY KEY AUTO_INCREMENT,
    nombre_rol VARCHAR(50) UNIQUE NOT NULL
);

-- ============================
-- TABLA USUARIO
-- ============================
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    primer_nombre VARCHAR(50) NOT NULL,
    primer_apellido VARCHAR(50) NOT NULL,
    tipo_documento ENUM('Cédula de ciudadanía', 'Tarjeta de identidad') NOT NULL,
    numero_documento VARCHAR(30) UNIQUE NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

-- ============================
-- TABLA CATEGORIA
-- ============================
CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre_categoria VARCHAR(100) NOT NULL,
    descripcion TEXT,
    estado BOOLEAN DEFAULT TRUE,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================
-- TABLA PRODUCTO
-- ============================
CREATE TABLE producto (
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    codigo_interno VARCHAR(50) UNIQUE,
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

-- ============================
-- TABLA CLIENTE
-- (para almacenar datos de clientes externos)
-- ============================
CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre_cliente VARCHAR(100) NOT NULL,
    identificacion VARCHAR(30) UNIQUE NOT NULL,
    correo_cliente VARCHAR(100),
    telefono_cliente VARCHAR(20),
    direccion_cliente VARCHAR(255)
);

-- ============================
-- TABLA COTIZACION
-- ============================
CREATE TABLE cotizacion (
    id_cotizacion INT PRIMARY KEY AUTO_INCREMENT,
    fecha_cotizacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('Pendiente', 'Aprobada', 'Rechazada') DEFAULT 'Pendiente',
    id_usuario INT NOT NULL,
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

-- ============================
-- TABLA DETALLE_COTIZACION
-- ============================
CREATE TABLE detalle_cotizacion (
    id_detalle_cotizacion INT PRIMARY KEY AUTO_INCREMENT,
    id_cotizacion INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_cotizacion) REFERENCES cotizacion(id_cotizacion),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

-- ============================
-- TABLA PEDIDO
-- ============================
CREATE TABLE pedido (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado_pedido ENUM('Pendiente', 'En proceso', 'Entregado', 'Cancelado') DEFAULT 'Pendiente',
    id_cliente INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- ============================
-- TABLA VENTA
-- ============================
CREATE TABLE venta (
    id_venta INT PRIMARY KEY AUTO_INCREMENT,
    fecha_venta DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado_venta ENUM('Pendiente', 'Pagada', 'Cancelada') DEFAULT 'Pendiente',
    subtotal DECIMAL(10,2) NOT NULL,
    descuento DECIMAL(10,2) DEFAULT 0,
    impuestos DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2) GENERATED ALWAYS AS (subtotal - descuento + impuestos) STORED,
    id_pedido INT,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- ============================
-- TABLA DETALLE_VENTA
-- ============================
CREATE TABLE detalle_venta (
    id_detalle_venta INT PRIMARY KEY AUTO_INCREMENT,
    id_venta INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_venta) REFERENCES venta(id_venta),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

-- ============================
-- TABLA DEVOLUCION
-- ============================
CREATE TABLE devolucion (
    id_devolucion INT PRIMARY KEY AUTO_INCREMENT,
    fecha_devolucion DATETIME DEFAULT CURRENT_TIMESTAMP,
    motivo TEXT NOT NULL,
    id_venta INT NOT NULL,
    FOREIGN KEY (id_venta) REFERENCES venta(id_venta)
);

-- ============================
-- TABLA NOTIFICACION
-- ============================
CREATE TABLE notificacion (
    id_notificacion INT PRIMARY KEY AUTO_INCREMENT,
    fecha_notificacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    mensaje TEXT NOT NULL,
    id_pedido INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido)
);
-- ============================
-- TABLA DETALLE_DEVOLUCION
-- ============================
CREATE TABLE detalle_devolucion (
    id_detalle_devolucion INT PRIMARY KEY AUTO_INCREMENT,
    id_devolucion INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_devolucion) REFERENCES devolucion(id_devolucion),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);










-- ======================================
-- TABLA ROL
-- ======================================
INSERT INTO rol (nombre_rol) VALUES
('Administrador'),
('Asesor');

-- ======================================
-- TABLA USUARIO
-- ======================================
INSERT INTO usuario (primer_nombre, primer_apellido, tipo_documento, numero_documento, correo, contrasena, id_rol) VALUES
('Carlos', 'Martínez', 'Cédula de ciudadanía', '10102030', 'carlos.martinez@pronavid.com', 'hashedpass1', 1),
('Laura', 'Gómez', 'Cédula de ciudadanía', '10203040', 'laura.gomez@pronavid.com', 'hashedpass2', 2),
('Andrés', 'Pérez', 'Cédula de ciudadanía', '10304050', 'andres.perez@pronavid.com', 'hashedpass3', 2),
('María', 'Rojas', 'Cédula de ciudadanía', '10405060', 'maria.rojas@pronavid.com', 'hashedpass4', 2),
('Camilo', 'López', 'Cédula de ciudadanía', '10506070', 'camilo.lopez@pronavid.com', 'hashedpass5', 1),
('Diana', 'Ramírez', 'Cédula de ciudadanía', '10607080', 'diana.ramirez@pronavid.com', 'hashedpass6', 2),
('Felipe', 'Torres', 'Cédula de ciudadanía', '10708090', 'felipe.torres@pronavid.com', 'hashedpass7', 2),
('Natalia', 'Jiménez', 'Cédula de ciudadanía', '10809100', 'natalia.jimenez@pronavid.com', 'hashedpass8', 2),
('Jorge', 'Suárez', 'Cédula de ciudadanía', '10901020', 'jorge.suarez@pronavid.com', 'hashedpass9', 1),
('Paula', 'Castro', 'Cédula de ciudadanía', '11002030', 'paula.castro@pronavid.com', 'hashedpass10', 2);

-- ======================================
-- TABLA CATEGORIA
-- ======================================
INSERT INTO categoria (nombre_categoria, descripcion) VALUES
('Galletas', 'Productos horneados a base de cereales.'),
('Cereales', 'Desayunos nutritivos a base de avena, maíz o arroz.'),
('Panecillos', 'Panecillos dulces o salados elaborados con harina de trigo.'),
('Yogures', 'Derivados lácteos con fermentos naturales.'),
('Turrones', 'Dulces compactos elaborados con miel, frutos secos y cereal.'),
('Barras energéticas', 'Snacks saludables con avena, miel y frutas.'),
('Postres lácteos', 'Flanes, natillas y productos lácteos preparados.'),
('Derivados del maíz', 'Snacks y productos a base de maíz.'),
('Galletas integrales', 'Galletas con harinas integrales y bajos en azúcar.'),
('Cereal infantil', 'Cereales fortificados para niños.');

-- ======================================
-- TABLA PRODUCTO
-- ======================================
INSERT INTO producto (codigo_interno, nombre_producto, descripcion, precio, stock, id_categoria) VALUES
('GAL001', 'Galleta de avena y miel', 'Galleta dulce a base de avena, miel y canela.', 2500, 150, 1),
('GAL002', 'Galleta de chocolate', 'Galleta crujiente con chips de chocolate.', 2800, 200, 1),
('CER001', 'Cereal de maíz', 'Cereal clásico de hojuelas de maíz.', 6000, 180, 2),
('CER002', 'Cereal de avena con miel', 'Cereal de avena tostada endulzado con miel.', 6500, 120, 2),
('PAN001', 'Panecillo integral', 'Panecillo bajo en grasa con fibra natural.', 2000, 100, 3),
('YOG001', 'Yogur natural 200ml', 'Yogur artesanal sin azúcar.', 1800, 250, 4),
('YOG002', 'Yogur de fresa 200ml', 'Yogur natural con pulpa de fresa.', 1900, 230, 4),
('TUR001', 'Turrón de maní', 'Turrón artesanal con maní y miel.', 3200, 160, 5),
('BAR001', 'Barra energética de avena', 'Snack saludable de avena y frutos secos.', 3500, 180, 6),
('POS001', 'Flan de vainilla', 'Postre lácteo con sabor a vainilla.', 2700, 140, 7);

-- ======================================
-- TABLA CLIENTE
-- ======================================
INSERT INTO cliente (nombre_cliente, identificacion, correo_cliente, telefono_cliente, direccion_cliente) VALUES
('Supermercado El Buen Gusto', '900123456', 'contacto@elbuen.com', '3101234567', 'Cra 12 #45-21 Bogotá'),
('Tienda Don Pan', '900234567', 'ventas@donpan.com', '3102345678', 'Cll 23 #12-11 Bogotá'),
('Distribuciones La Estrella', '900345678', 'contacto@laestrella.com', '3103456789', 'Cra 67 #89-30 Bogotá'),
('Almacén NutriVida', '900456789', 'info@nutrividacol.com', '3114567890', 'Cll 45 #23-45 Bogotá'),
('Panadería Santa María', '900567890', 'ventas@santamaria.com', '3125678901', 'Cra 34 #45-67 Bogotá'),
('Comercializadora Andina', '900678901', 'pedidos@andina.com', '3136789012', 'Cll 10 #20-11 Bogotá'),
('Mercados Unidos', '900789012', 'contacto@mercadosunidos.com', '3147890123', 'Cra 50 #32-21 Bogotá'),
('DeliPan Express', '900890123', 'ventas@delipan.com', '3158901234', 'Cll 15 #30-11 Bogotá'),
('Distribuidora Láctea', '900901234', 'info@lactea.com', '3169012345', 'Cra 60 #40-22 Bogotá'),
('Panadería San Luis', '901012345', 'contacto@sanluis.com', '3170123456', 'Cll 80 #25-33 Bogotá');

-- ======================================
-- TABLA COTIZACION
-- ======================================
INSERT INTO cotizacion (estado, id_usuario, id_cliente) VALUES
('Pendiente', 2, 1),
('Aprobada', 3, 2),
('Pendiente', 4, 3),
('Rechazada', 5, 4),
('Pendiente', 6, 5),
('Aprobada', 7, 6),
('Pendiente', 8, 7),
('Pendiente', 9, 8),
('Aprobada', 10, 9),
('Rechazada', 2, 10);

-- ======================================
-- TABLA DETALLE_COTIZACION
-- ======================================
INSERT INTO detalle_cotizacion (id_cotizacion, id_producto, cantidad, precio_unitario) VALUES
(1, 1, 20, 2500),
(1, 2, 15, 2800),
(2, 3, 10, 6000),
(3, 4, 8, 6500),
(4, 6, 25, 1800),
(5, 7, 12, 1900),
(6, 8, 20, 3200),
(7, 9, 15, 3500),
(8, 10, 30, 2700),
(9, 5, 10, 2000);

-- ======================================
-- TABLA PEDIDO
-- ======================================
INSERT INTO pedido (estado_pedido, id_cliente, id_usuario) VALUES
('Pendiente', 1, 2),
('En proceso', 2, 3),
('Entregado', 3, 4),
('Pendiente', 4, 5),
('Cancelado', 5, 6),
('En proceso', 6, 7),
('Entregado', 7, 8),
('Pendiente', 8, 9),
('Entregado', 9, 10),
('Pendiente', 10, 2);

-- ======================================
-- TABLA VENTA
-- ======================================
INSERT INTO venta (estado_venta, subtotal, descuento, impuestos, id_pedido, id_usuario) VALUES
('Pagada', 80000, 0, 15200, 1, 2),
('Pendiente', 45000, 2000, 8550, 2, 3),
('Pagada', 60000, 0, 11400, 3, 4),
('Cancelada', 50000, 1000, 9500, 4, 5),
('Pagada', 90000, 0, 17100, 5, 6),
('Pendiente', 30000, 0, 5700, 6, 7),
('Pagada', 110000, 5000, 19950, 7, 8),
('Pagada', 65000, 0, 12350, 8, 9),
('Pendiente', 70000, 0, 13300, 9, 10),
('Pagada', 95000, 2000, 17500, 10, 2);

-- ======================================
-- TABLA DETALLE_VENTA
-- ======================================
INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES
(1, 1, 10, 2500),
(1, 2, 10, 2800),
(2, 3, 5, 6000),
(3, 4, 8, 6500),
(4, 6, 15, 1800),
(5, 8, 10, 3200),
(6, 9, 8, 3500),
(7, 10, 12, 2700),
(8, 5, 6, 2000),
(9, 7, 14, 1900);

-- ======================================
-- TABLA DEVOLUCION
-- ======================================
INSERT INTO devolucion (motivo, id_venta) VALUES
('Producto dañado en el transporte', 4),
('Error en cantidad entregada', 2),
('Cliente canceló el pedido antes del envío', 5),
('Retraso en entrega', 6),
('Producto equivocado', 8),
('Empaque defectuoso', 9),
('Cliente devolvió por vencimiento', 3),
('Error en cotización inicial', 1),
('Pedido duplicado', 7),
('Motivo no especificado', 10);

-- ======================================
-- TABLA NOTIFICACION
-- ======================================
INSERT INTO notificacion (mensaje, id_pedido) VALUES
('Nuevo pedido pendiente de aprobación.', 1),
('Pedido en proceso de envío.', 2),
('Pedido entregado exitosamente.', 3),
('Pedido pendiente de revisión.', 4),
('Pedido cancelado por el cliente.', 5),
('Pedido en preparación.', 6),
('Pedido entregado sin novedades.', 7),
('Nuevo pedido asignado al asesor.', 8),
('Pedido entregado al cliente.', 9),
('Pedido recibido para verificación.', 10);


