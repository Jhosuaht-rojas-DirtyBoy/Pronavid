// ============ CATÁLOGO ============
const catalogoSinId = {
  Granola: [
    { nombre: "Granola Tradicional 1000g", precio: 18000, img: "https://via.placeholder.com/200" },
    { nombre: "Granola Tradicional 500g", precio: 12000, img: "https://via.placeholder.com/200" },
    { nombre: "Granola Tradicional 250g", precio: 8000, img: "https://via.placeholder.com/200" },
    { nombre: "Granola Frutos Tropicales 1000g", precio: 19000, img: "https://via.placeholder.com/200" },
    { nombre: "Granola Frutos Tropicales 500g", precio: 13000, img: "https://via.placeholder.com/200" },
    { nombre: "Granola Frutos Tropicales 250g", precio: 9000, img: "https://via.placeholder.com/200" },
    { nombre: "Granola Sin Azúcar Añadido 370g", precio: 15000, img: "https://via.placeholder.com/200" },
    { nombre: "Granola MAX 1000g", precio: 21000, img: "https://via.placeholder.com/200" },
    { nombre: "Granola MAX 400g", precio: 12000, img: "https://via.placeholder.com/200" },
  ],
  Cereales: [
    { nombre: "Frutty Anillos 1000g", precio: 16000, img: "https://via.placeholder.com/200" },
    { nombre: "Frutty Anillos 500g", precio: 10000, img: "https://via.placeholder.com/200" },
    { nombre: "Frutty Anillos 250g", precio: 6000, img: "https://via.placeholder.com/200" },
    { nombre: "Frutty Anillos 90g", precio: 3000, img: "https://via.placeholder.com/200" },
    { nombre: "Choquy Arroz 1000g", precio: 17000, img: "https://via.placeholder.com/200" },
    { nombre: "Choquy Arroz 500g", precio: 11000, img: "https://via.placeholder.com/200" },
    { nombre: "Choquy Arroz 250g", precio: 7000, img: "https://via.placeholder.com/200" },
    { nombre: "Choquy Arroz 90g", precio: 3000, img: "https://via.placeholder.com/200" },
    { nombre: "Zucar Ricos 1000g", precio: 16000, img: "https://via.placeholder.com/200" },
    { nombre: "Zucar Ricos 500g", precio: 10000, img: "https://via.placeholder.com/200" },
    { nombre: "Zucar Ricos 250g", precio: 6000, img: "https://via.placeholder.com/200" },
    { nombre: "Zucar Ricos 90g", precio: 3000, img: "https://via.placeholder.com/200" },
    { nombre: "Chicharrines 40g", precio: 2000, img: "https://via.placeholder.com/200" },
  ],
  Snacks: [
    { nombre: "Turrón Ajonjolí 20g", precio: 1000, img: "https://via.placeholder.com/200" },
    { nombre: "Turrón Maní 20g", precio: 1000, img: "https://via.placeholder.com/200" },
    { nombre: "Turrón Combinado 20g", precio: 1000, img: "https://via.placeholder.com/200" },
    { nombre: "Barra Cereal Frutos Rojos (Caja x12)", precio: 14000, img: "https://via.placeholder.com/200" },
    { nombre: "Barra Cereal Chocolate (Caja x12)", precio: 14000, img: "https://via.placeholder.com/200" },
    { nombre: "Barra Cereal Piña & Coco (Caja x12)", precio: 14000, img: "https://via.placeholder.com/200" },
    { nombre: "Barra Cereal Fresa & Banano (Caja x12)", precio: 14000, img: "https://via.placeholder.com/200" },
  ],
  Galletas: [
    { nombre: "Natural Cookie Almendra 60g (x14 und)", precio: 18000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Ajonjolí 60g (x14 und)", precio: 18000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Uva 60g (x14 und)", precio: 18000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Coco 60g (x14 und)", precio: 18000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Nuez 60g (x14 und)", precio: 18000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Maní 60g (x14 und)", precio: 18000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Almendra 40g (x10 und)", precio: 13000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Nuez 40g (x10 und)", precio: 13000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Mini Chip 60g (x14 und)", precio: 18000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Mini Chip 40g (x10 und)", precio: 13000, img: "https://via.placeholder.com/200" },
    { nombre: "Natural Cookie Domo x80 und", precio: 35000, img: "https://via.placeholder.com/200" },
    { nombre: "Galleta Navideña Caja 200g", precio: 16000, img: "https://via.placeholder.com/200" },
    { nombre: "Galleta Navideña Bolsa 180g", precio: 12000, img: "https://via.placeholder.com/200" },
  ],
  "Frutos Secos": [
    { nombre: "Maní & Pasas 125g", precio: 6000, img: "https://via.placeholder.com/200" },
    { nombre: "Almendras 125g", precio: 8000, img: "https://via.placeholder.com/200" },
  ],
  "Panadería Integral": [
    { nombre: "Mogolla Integral (Bolsa x10 und)", precio: 5000, img: "https://via.placeholder.com/200" },
    { nombre: "Pan Tajado Integral 500g", precio: 6500, img: "https://via.placeholder.com/200" },
    { nombre: "Pan Tajado Integral 650g", precio: 8500, img: "https://via.placeholder.com/200" },
    { nombre: "Roscón Integral (Bolsa x4 und)", precio: 6000, img: "https://via.placeholder.com/200" },
    { nombre: "Hojaldrado Integral (Bolsa x8 und)", precio: 5500, img: "https://via.placeholder.com/200" },
  ],
  "Panadería Tradicional": [
    { nombre: "Pan Campesino (Bolsa x8 und)", precio: 5000, img: "https://via.placeholder.com/200" },
    { nombre: "Pan Campesino (Bolsa x6 und)", precio: 4000, img: "https://via.placeholder.com/200" },
    { nombre: "Almojábana (Bolsa x6 und)", precio: 5000, img: "https://via.placeholder.com/200" },
    { nombre: "Pan de Quesos (Bolsa x6 und)", precio: 5000, img: "https://via.placeholder.com/200" },
  ],
};

// Agregar IDs automáticamente
const catalogo = {};
Object.entries(catalogoSinId).forEach(([categoria, productos]) => {
  catalogo[categoria] = productos.map((producto, index) => ({
    ...producto,
    id: `${categoria.toLowerCase().replace(/\s+/g, '-')}-${index}`
  }));
});

// ============ ESTADO ============
let categoriaActual = "Granola";
let carrito = {};
let cantidades = {};

// ============ RENDERIZAR CATEGORÍAS ============
const categoriasDiv = document.getElementById('categorias');
const categorias = Object.keys(catalogo);

function renderizarCategorias() {
  categoriasDiv.innerHTML = '';
  categorias.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `btn ${cat === categoriaActual ? 'activo' : ''}`;
    btn.textContent = cat;
    btn.onclick = () => {
      categoriaActual = cat;
      renderizarCategorias();
      renderizarProductos();
    };
    categoriasDiv.appendChild(btn);
  });
}

// ============ RENDERIZAR PRODUCTOS ============
const productosDiv = document.getElementById('productos');

function renderizarProductos() {
  productosDiv.innerHTML = '';
  const productos = catalogo[categoriaActual];

  productos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p class="precio">$${p.precio.toLocaleString()}</p>
      <input type="number" min="1" value="${cantidades[p.id] || 1}" class="cantidad" data-id="${p.id}">
      <button class="agregar" data-id="${p.id}">Agregar al carrito</button>
    `;

    card.querySelector('.cantidad').addEventListener('input', (e) => {
      cantidades[p.id] = parseInt(e.target.value) || 1;
    });

    card.querySelector('.agregar').addEventListener('click', () => {
      agregarCarrito(categoriaActual, p.id, cantidades[p.id] || 1);
    });

    productosDiv.appendChild(card);
  });
}

// ============ AGREGAR AL CARRITO ============
function agregarCarrito(categoria, id, cantidad) {
  const producto = catalogo[categoria].find(p => p.id === id);
  if (!producto) return;

  if (!carrito[categoria]) carrito[categoria] = [];

  const existe = carrito[categoria].find(p => p.id === id);
  if (existe) {
    existe.cantidad += cantidad;
  } else {
    carrito[categoria].push({
      id,
      nombre: producto.nombre,
      precio: producto.precio,
      img: producto.img,
      cantidad
    });
  }

  mostrarCarrito();
  renderizarCarrito();
}

// ============ MOSTRAR/OCULTAR CARRITO ============
const carritoDiv = document.getElementById('carrito');
const cerrarBtn = document.getElementById('cerrarCarrito');
const agregarMasBtn = document.getElementById('agregarMas');

function mostrarCarrito() {
  carritoDiv.classList.add('visible');
}

function ocultarCarrito() {
  carritoDiv.classList.remove('visible');
}

cerrarBtn.addEventListener('click', ocultarCarrito);
agregarMasBtn.addEventListener('click', ocultarCarrito);

// ============ RENDERIZAR CARRITO ============
const contenidoCarrito = document.getElementById('contenido-carrito');
const totalElem = document.getElementById('total');

function renderizarCarrito() {
  contenidoCarrito.innerHTML = '';
  let total = 0;

  Object.entries(carrito).forEach(([cat, items]) => {
    if (items.length === 0) return;

    const titulo = document.createElement('h3');
    titulo.className = 'titulo-cat';
    titulo.textContent = cat;
    contenidoCarrito.appendChild(titulo);

    items.forEach(item => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;

      const itemDiv = document.createElement('div');
      itemDiv.className = 'item-carrito';
      itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.nombre}">
        <div class="info">
          <p>${item.nombre}</p>
          <p>Precio: $${item.precio.toLocaleString()}</p>
          <input type="number" min="1" value="${item.cantidad}" data-cat="${cat}" data-id="${item.id}">
          <p class="sub">Subtotal: $${subtotal.toLocaleString()}</p>
        </div>
        <button class="eliminar" data-cat="${cat}" data-id="${item.id}">X</button>
      `;

      itemDiv.querySelector('input').addEventListener('input', (e) => {
        cambiarCantidad(cat, item.id, e.target.value);
      });

      itemDiv.querySelector('.eliminar').addEventListener('click', () => {
        eliminarDelCarrito(cat, item.id);
      });

      contenidoCarrito.appendChild(itemDiv);
    });
  });

  totalElem.textContent = `Total: $${total.toLocaleString()}`;
}

// ============ CAMBIAR CANTIDAD ============
function cambiarCantidad(categoria, id, cant) {
  const cantidad = parseInt(cant);
  if (cantidad < 1 || isNaN(cantidad)) return;

  const item = carrito[categoria].find(i => i.id === id);
  if (item) {
    item.cantidad = cantidad;
    renderizarCarrito();
  }
}

// ============ ELIMINAR DEL CARRITO ============
function eliminarDelCarrito(categoria, id) {
  carrito[categoria] = carrito[categoria].filter(i => i.id !== id);
  renderizarCarrito();
}

// ============ GENERAR PDF ============
async function generarPDF(tipo) {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  const fecha = new Date().toLocaleString();
  const nDoc = Math.floor(Math.random() * 90000) + 10000;

  // Logo
  const logoURL = "https://i.imgur.com/b7cT5OQ.png";
  const img = await loadImage(logoURL);
  pdf.addImage(img, "PNG", 10, 10, 30, 30);

  // Título
  pdf.setFontSize(20);
  pdf.text(tipo === "cotizacion" ? "Cotización PRONAVID" : "Pedido PRONAVID", 50, 20);
  pdf.setFontSize(12);
  pdf.text("Fecha: " + fecha, 50, 28);
  pdf.text("Documento N°: " + nDoc, 50, 35);

  // Tabla
  let y = 60;
  let totalGeneral = 0;

  for (const categoria in carrito) {
    const items = carrito[categoria];
    if (!items || items.length === 0) continue;

    pdf.setFontSize(14);
    pdf.text(categoria, 10, y);
    y += 6;

    pdf.setFontSize(12);
    pdf.text("Producto", 10, y);
    pdf.text("Cant", 90, y);
    pdf.text("Precio", 120, y);
    pdf.text("Subtotal", 160, y);
    y += 4;

    items.forEach(prod => {
      const subtotal = prod.precio * prod.cantidad;
      totalGeneral += subtotal;

      pdf.text(prod.nombre, 10, y);
      pdf.text(String(prod.cantidad), 95, y);
      pdf.text("$" + prod.precio.toLocaleString(), 120, y);
      pdf.text("$" + subtotal.toLocaleString(), 160, y);
      y += 6;

      if (y > 270) {
        pdf.addPage();
        y = 20;
      }
    });

    y += 6;
  }

  pdf.setFontSize(14);
  pdf.text(`TOTAL GENERAL: $${totalGeneral.toLocaleString()}`, 10, y + 5);

  // QR
  const canvas = document.getElementById('qr-canvas');
  const qrData = `${tipo.toUpperCase()} #${nDoc} - Total: $${totalGeneral}`;
  const qr = new QRious({
    element: canvas,
    value: qrData,
    size: 200
  });

  const dataUrl = canvas.toDataURL("image/png");
  pdf.addImage(dataUrl, "PNG", 160, 10, 40, 40);

  pdf.save(`${tipo}_pronavid_${nDoc}.pdf`);
}

function loadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => resolve(img);
    img.src = url;
  });
}

document.getElementById('guardarCotizacion').addEventListener('click', () => generarPDF('cotizacion'));
document.getElementById('registrarPedido').addEventListener('click', () => generarPDF('pedido'));

// ============ INICIALIZAR ============
renderizarCategorias();
renderizarProductos();