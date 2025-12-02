export default function FooterDashboard() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <footer className="barra-inferior">
            <button onClick={handleLogout} className="cerrar-sesion">Cerrar sesión</button>
        </footer>
    );
}
