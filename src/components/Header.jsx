import { NavLink } from "react-router-dom";
import Collapse from "bootstrap/js/dist/collapse";

export default function Navbar() {
    const closeMenu = () => {
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse?.classList.contains("show")) {
            Collapse.getOrCreateInstance(navbarCollapse).hide();
        }
    };

    return (
        <header className="header fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark py-2 shadow-sm" aria-label="Menú principal">
                <div className="container">
                    {/* Logo */}
                    <NavLink to="/" className="navbar-brand d-flex align-items-center" onClick={closeMenu}>
                        <img
                            src="/assets/logos/copa_chots-logo.png"
                            alt="Logo Copa Chots"
                            width="55"
                            height="55"
                            className="me-2"
                        />
                        <span className="navbar_logo-name text-uppercase">Torneo Interfuerzas
                            <br /> <span className="fs-6 fw-lighter navbar_logo-name--bottom">Copa Chots</span>
                        </span>
                    </NavLink>

                    {/* Botón hamburguesa */}
                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Abrir menú"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menú */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" onClick={closeMenu}>
                                    <i className="fas fa-home me-1"></i> Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/actas" onClick={closeMenu}>
                                    <i className="fas fa-trophy me-1"></i> Ganadores
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/terminos" onClick={closeMenu}>
                                    <i className="fas fa-file-contract me-1"></i> Términos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto" onClick={closeMenu}>
                                    <i className="fas fa-envelope me-1"></i> Contacto
                                </NavLink>
                            </li>
                            <li className="nav-item ms-lg-3">
                                <NavLink className="btn btn-admin" to="/admin" onClick={closeMenu}>
                                    <i className="fas fa-user-shield me-1"></i> Admin
                                </NavLink>
                            </li>
                        </ul>

                        {/* Redes sociales */}
                        <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
                            <a href="https://wa.me/549123456789" target="_blank" rel="noopener noreferrer" className="social-link me-3">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://instagram.com/tuCuenta" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
