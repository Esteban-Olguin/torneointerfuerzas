import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    {/* Columna centrada */}
                    <div className="col-lg-10">
                        <div className="hero-header text-center">
                            {/* Subtítulo animado */}
                            <motion.span
                                className="hero-eyebrow"
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", duration: 0.8 }}
                            >
                                Torneo Interfuerzas
                            </motion.span>

                            {/* Título animado */}
                            <motion.h1
                                className="hero-title"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                Copa Chots
                            </motion.h1>

                            {/* Descripción animada */}
                            <motion.p
                                className="hero-subtitle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                ¡El torneo que une nuestras fuerzas!
                            </motion.p>

                            <motion.p
                                className="hero-text"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                Participá y ganá increíbles premios.
                            </motion.p>

                            {/* Divider decorativo */}
                            <motion.div
                                className="hero-divider"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                            >
                                <span />
                                <span className="hero-divider-star">✦</span>
                                <span />
                            </motion.div>

                            {/* Botón animado */}
                            <motion.div
                                className="hero-actions"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
                            >
                                <NavLink to="/sorteo" className="hero-btn">
                                    Comprar Números <i className="fas fa-ticket-alt hero-btn-icon"></i>
                                </NavLink>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}