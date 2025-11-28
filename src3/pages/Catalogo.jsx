import { useState } from "react";
import catalogo from "../data/catalogo";
import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Productos from "../components/Productos";
import Carrito from "../components/Carrito";
import "../styles/catalogo.css";

export default function CatalogoPage() {
  const [categoriaActual, setCategoriaActual] = useState("Granola");
  const [carrito, setCarrito] = useState({});
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarCarrito = (categoria, id, cantidad) => {
    const productosCat = catalogo[categoria] || [];
    const producto = productosCat.find(p => p.id === id);

    if (!producto) {
      console.error("❌ Producto no encontrado en categoría:", categoria);
      return;
    }

    setCarrito(prev => {
      const copia = { ...prev };
      if (!copia[categoria]) copia[categoria] = [];
      const existe = copia[categoria].find(p => p.id === id);

      if (existe) {
        existe.cantidad += cantidad;
      } else {
        copia[categoria].push({
          id,
          nombre: producto.nombre,
          precio: producto.precio,
          img: producto.img,
          cantidad
        });
      }
      return copia;
    });

    setMostrarCarrito(true);
  };

  return (
    <div className="catalogo-page">
      <Header />
      <Categorias
        categoriaActual={categoriaActual}
        setCategoria={setCategoriaActual}
      />
      <Productos
        productos={catalogo[categoriaActual] || []} // ✅ siempre array
        categoria={categoriaActual}
        agregarCarrito={agregarCarrito}
      />
      <Carrito
        carrito={carrito}
        setCarrito={setCarrito}
        visible={mostrarCarrito}
        cerrar={() => setMostrarCarrito(false)}
      />
    </div>
  );
}