import { useState } from "react";
import catalogo from "./data/catalogo";
import Header from "./components/Header";
import Categorias from "./components/Categorias";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";

export default function App() {
  const [categoriaActual, setCategoriaActual] = useState("Distrifruver");
  const [carrito, setCarrito] = useState({});
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarCarrito = (categoria, index, cantidad) => {
    const producto = catalogo[categoria][index];
    const id = categoria + "-" + index;

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

      return { ...copia };
    });

    setMostrarCarrito(true);
  };

  return (
    <>
      <Header />

      <Categorias 
        categoriaActual={categoriaActual}
        setCategoria={setCategoriaActual}
      />

      <Productos 
        productos={catalogo[categoriaActual]}
        categoria={categoriaActual}
        agregarCarrito={agregarCarrito}
      />

      <Carrito 
        carrito={carrito}
        setCarrito={setCarrito}
        visible={mostrarCarrito}
        cerrar={() => setMostrarCarrito(false)}
      />
    </>
  );
}
