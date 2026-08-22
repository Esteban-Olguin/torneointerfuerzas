import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Collapse from "bootstrap/js/dist/collapse";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const closeMenu = () => {
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse?.classList.contains("show")) {
            Collapse.getOrCreateInstance(navbarCollapse).hide();
        }
    };

    // Función para navegar a secciones
    const scrollToSection = (sectionId) => {
        closeMenu();

        // Si no estamos en la página principal, navegar primero
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: sectionId } });
            return;
        }

        // Si estamos en la página principal, hacer scroll suave
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <header className="header fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark py-2 shadow-sm" aria-label="Menú principal">
                <div className="container">
                    {/* Logo a la izquierda */}
                    <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
                        <img
                            src="/assets/logos/copa_chots-logo.png"
                            alt="Logo Copa Chots"
                            width="50"
                            height="50"
                        />
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

                    {/* Menú y redes a la derecha */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Menú de navegación */}
                        <ul className="navbar-nav ms-auto header-nav">
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => scrollToSection("heroSection")}
                                >
                                    Inicio
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => scrollToSection("aboutSection")}
                                >
                                    Sobre el Torneo
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => scrollToSection("pastWinnersCarousel")}
                                >
                                    Ganadores
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => scrollToSection("calendarSection")}
                                >
                                    Calendario
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => scrollToSection("buyNumbersSection")}
                                >
                                    Comprar Números
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => scrollToSection("sponsorsSection")}
                                >
                                    Sponsors
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => scrollToSection("contactSection")}
                                >
                                    Contacto
                                </button>
                            </li>
                        </ul>

                        {/* Redes sociales */}
                        <div className="header-social">
                            <a
                                href="https://instagram.com/tuCuenta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://tiktok.com/@tuCuenta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="TikTok"
                            >
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a
                                href="https://youtube.com/@tuCuenta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="YouTube"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}