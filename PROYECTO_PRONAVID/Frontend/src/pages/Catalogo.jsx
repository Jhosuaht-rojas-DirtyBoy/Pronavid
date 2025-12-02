import { useState, useEffect } from "react";
import Categorias from "../components/Categorias";
import Productos from "../components/ProductosCRUD";
import Modal from "../components/Modal";
import "../styles/Catalogo.css";
import Catalogo from "../data/catalogo";

export default function CatalogoCRUDPage() {
    // 📌 Estado principal
    const [categoriaActual, setCategoriaActual] = useState("Granola");
    const [catalogo, setCatalogo] = useState(Catalogo);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toast, setToast] = useState({ show: false, message: "", type: "" });

    // 📌 Form CRUD
    const initialForm = {
        id: "",
        nombre: "",
        precio: "",
        img: "",
        categoria: "Granola"
    };
    const [form, setForm] = useState(initialForm);
    const [editando, setEditando] = useState(false);

    // 📌 Efecto para cerrar toast
    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => setToast({ ...toast, show: false }), 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const showToast = (message, type = "success") => {
        setToast({ show: true, message, type });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const abrirModalCrear = () => {
        setForm({ ...initialForm, categoria: categoriaActual });
        setEditando(false);
        setIsModalOpen(true);
    };

    const abrirModalEditar = (producto) => {
        setForm({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            img: producto.img,
            categoria: categoriaActual
        });
        setEditando(true);
        setIsModalOpen(true);
    };

    const cerrarModal = () => {
        setIsModalOpen(false);
        setForm(initialForm);
    };

    const crearProducto = () => {
        if (!form.nombre || !form.precio || !form.img) {
            showToast("Por favor completa todos los campos", "error");
            return;
        }

        const nuevo = {
            id: crypto.randomUUID(),
            nombre: form.nombre,
            precio: parseFloat(form.precio),
            img: form.img,
        };

        setCatalogo(prev => ({
            ...prev,
            [form.categoria]: [...(prev[form.categoria] || []), nuevo]
        }));

        showToast("Producto creado exitosamente");
        cerrarModal();
    };

    const guardarEdicion = () => {
        setCatalogo(prev => ({
            ...prev,
            [form.categoria]: prev[form.categoria].map(p =>
                p.id === form.id ? { ...form, precio: parseFloat(form.precio) } : p
            )
        }));
        showToast("Producto actualizado exitosamente");
        cerrarModal();
    };

    const eliminar = (id) => {
        if (!confirm("¿Estás seguro de eliminar este producto?")) return;

        setCatalogo(prev => ({
            ...prev,
            [categoriaActual]: prev[categoriaActual].filter(p => p.id !== id)
        }));
        showToast("Producto eliminado", "error");
    };

    // 📌 Filtrado
    const productosFiltrados = (catalogo[categoriaActual] || []).filter(p =>
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="catalogo-page">
            {/* Toast Notification */}
            <div className={`toast ${toast.show ? "show" : ""} ${toast.type}`}>
                {toast.message}
            </div>

            <div className="catalogo-header">
                <div className="header-content">
                    <div>
                        <h1>Panel De Administración De Productos</h1>
                    </div>

                    <div className="header-actions">
                        <div className="search-bar">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button onClick={abrirModalCrear} className="btn-nuevo">
                            + Nuevo Producto
                        </button>
                    </div>
                </div>
            </div>

            <Categorias
                categoriaActual={categoriaActual}
                setCategoria={setCategoriaActual}
                categorias={Object.keys(catalogo)}
            />

            <Productos
                productos={productosFiltrados}
                categoria={categoriaActual}
                modoCRUD={true}
                onEditar={abrirModalEditar}
                onEliminar={eliminar}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={cerrarModal}
                title={editando ? "Editar Producto" : "Nuevo Producto"}
            >
                <div className="form-group">
                    <label>Nombre del Producto</label>
                    <input
                        name="nombre"
                        placeholder="Ej. Granola Especial"
                        value={form.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Precio ($)</label>
                    <input
                        name="precio"
                        type="number"
                        placeholder="0.00"
                        value={form.precio}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>URL de Imagen</label>
                    <input
                        name="img"
                        placeholder="https://..."
                        value={form.img}
                        onChange={handleChange}
                    />
                    {form.img && <div className="img-preview"><img src={form.img} alt="Vista previa" /></div>}
                </div>

                <div className="form-group">
                    <label>Categoría</label>
                    <select
                        name="categoria"
                        value={form.categoria}
                        onChange={handleChange}
                        disabled={editando}
                    >
                        {Object.keys(catalogo).map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="modal-actions">
                    <button onClick={cerrarModal} className="btn-cancelar">Cancelar</button>
                    <button
                        onClick={editando ? guardarEdicion : crearProducto}
                        className="btn-guardar"
                    >
                        {editando ? "Guardar Cambios" : "Crear Producto"}
                    </button>
                </div>
            </Modal>
        </div>
    );
}
