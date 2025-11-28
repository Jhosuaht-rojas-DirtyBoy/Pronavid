import GenerarPDF from "./GenerarPDF";
export default function Carrito({ carrito, setCarrito, visible, cerrar }) {
  const cambiarCantidad = (categoria, id, cant) => {
    const cantidad = parseInt(cant);
    if (cantidad < 1 || isNaN(cantidad)) return;
    
    setCarrito(prev => {
      const copia = { ...prev };
      const item = copia[categoria].find(i => i.id === id);
      if (item) {
        item.cantidad = cantidad;
      }
      return { ...copia };
    });
  };
  const eliminar = (categoria, id) => {
    setCarrito(prev => {
      const copia = { ...prev };
      copia[categoria] = copia[categoria].filter(i => i.id !== id);
      return copia;
    });
  };
  const vaciarCarrito = () => {
    if (window.confirm("¿Estás seguro de vaciar el carrito?")) {
      setCarrito({});
    }
  };
  const total = Object.values(carrito)
    .flat()
    .reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  const hayProductos = Object.values(carrito).flat().length > 0;
  return (
    <div className={`carrito-flotante ${visible ? "visible" : ""}`}>
      <div className="carrito-header">
        <h2>🛒 Mi Carrito</h2>
        <button className="btn-cerrar-carrito" onClick={cerrar}>✕</button>
      </div>
      <div className="carrito-contenido">
        {!hayProductos ? (
          <div className="carrito-vacio">
            <div className="carrito-vacio-icon">🛒</div>
            <p>Tu carrito está vacío</p>
            <small>Agrega productos para comenzar</small>
          </div>
        ) : (
          Object.entries(carrito).map(([cat, items]) => {
            if (items.length === 0) return null;
            
            return (
              <div key={cat}>
                <h3 style={{ color: '#b30000', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '1rem' }}>
                  {cat}
                </h3>
                {items.map(item => (
                  <div className="carrito-item" key={item.id}>
                    <img src={item.img} alt={item.nombre} className="carrito-item-img" />
                    <div className="carrito-item-info">
                      <p className="carrito-item-nombre">{item.nombre}</p>
                      <p className="carrito-item-precio">${item.precio.toLocaleString()}</p>
                      <input 
                        type="number" 
                        min="1"
                        value={item.cantidad}
                        onChange={(e) => cambiarCantidad(cat, item.id, e.target.value)}
                        className="carrito-item-cantidad"
                      />
                      <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.3rem' }}>
                        Subtotal: ${(item.precio * item.cantidad).toLocaleString()}
                      </p>
                    </div>
                    <button 
                      className="btn-eliminar"
                      onClick={() => eliminar(cat, item.id)}
                      title="Eliminar producto"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            );
          })
        )}
      </div>
      {hayProductos && (
        <div className="carrito-footer">
          <div className="carrito-total">
            Total: ${total.toLocaleString()}
          </div>
          <div className="carrito-acciones">
            <GenerarPDF carrito={carrito} tipo="cotizacion" />
            <GenerarPDF carrito={carrito} tipo="pedido" />
            
            <button className="btn-accion btn-vaciar" onClick={vaciarCarrito}>
              🗑️ Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}