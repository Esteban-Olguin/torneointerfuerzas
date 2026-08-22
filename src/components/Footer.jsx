import { NavLink } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" aria-label="Pie de página">
            <div className="container">
                <div className="row align-items-center g-3">
                    {/* Columna 1: Copyright */}
                    <div className="col-lg-4">
                        <div className="footer-copyright">
                            <p>
                                © {currentYear} Torneo Interfuerzas
                            </p>
                            <p>
                                Todos los derechos reservados
                            </p>
                        </div>
                    </div>

                    {/* Columna 2: Redes sociales */}
                    <div className="col-lg-4">
                        <div className="footer-social">
                            <a
                                href="https://instagram.com/tuCuenta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://tiktok.com/@tuCuenta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="TikTok"
                            >
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a
                                href="https://youtube.com/@tuCuenta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="YouTube"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    {/* Columna 3: Enlaces legales */}
                    <div className="col-lg-4">
                        <div className="footer-links">
                            <NavLink to="/terminos" className="footer-link">
                                Términos y Condiciones
                            </NavLink>
                            <span className="footer-separator">|</span>
                            <NavLink to="/privacidad" className="footer-link">
                                Política de Privacidad
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}