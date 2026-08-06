export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer py-3 mt-auto shadow-sm">
            <div className="container">
                <div className="row text-light text-center text-sm-start">

                    {/* Columna 1: Texto legal */}
                    <div className="col-sm-4 d-flex flex-column align-items-center align-items-sm-start mb-2 mb-sm-0">
                        <p className="mb-0 small">
                            © {currentYear} Torneo Interfuerzas <br />| Todos los derechos reservados
                        </p>
                    </div>

                    {/* Columna 2: Redes sociales */}
                    <div className="col-sm-4 d-flex justify-content-center align-items-center gap-3 mb-2 mb-sm-0">
                        <a href="https://facebook.com/tuCuenta" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="Facebook">
                            <i className="fab fa-facebook fa-lg"></i>
                        </a>
                        <a href="https://instagram.com/tuCuenta" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="Instagram">
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href="https://wa.me/549123456789" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="WhatsApp">
                            <i className="fab fa-whatsapp fa-lg"></i>
                        </a>
                    </div>

                    {/* Columna 3: Enlaces legales */}
                    <div className="col-sm-4 d-flex flex-column align-items-center align-items-sm-end mb-2 mb-sm-0">
                        <p className="mb-0 small">
                            <a href="/Terms" className="text-light text-decoration-none">Términos y Condiciones <br /></a> |{" "}
                            <a href="/Privacy" className="text-light text-decoration-none"> Política de Privacidad</a>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
