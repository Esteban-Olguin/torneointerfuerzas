import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="hero section d-flex align-items-center text-center text-light"
            style={{
                backgroundImage: "url('/public/assets/img/hero-football-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
        >
            <div className="container container-hero grid">
                <div>
                    {/* Subtítulo animado: entra desde arriba */}
                    <motion.h1
                        className="section__subtitle fw-bold text-uppercase"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", duration: 0.8 }}
                    >
                        Torneo Interfuerzas
                    </motion.h1>

                    {/* Título animado: escala desde pequeño */}
                    <motion.h2
                        className="section__title fw-bold text-uppercase"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Copa Chots
                    </motion.h2>

                    {/* Texto animado: aparece con delay */}
                    <motion.span
                        className="section__text mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        ¡El torneo que une nuestras fuerzas!
                    </motion.span>

                    <motion.p
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        Participá y ganá increíbles premios.
                    </motion.p>

                    {/* Botón animado: aparece con rebote */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, type: "spring", stiffness: 120 }}
                    >
                        <NavLink to="/sorteo" className="btn btn--small">
                            Comprar Números <i className="fas fa-ticket-alt btn__icon"></i>
                        </NavLink>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
