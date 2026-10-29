import { motion } from "framer-motion";

// Datos de las plataformas
const watchPlatforms = [
    {
        id: 1,
        title: "Instagram",
        description: "Seguinos para estar al día con las novedades, fechas importantes y contenido exclusivo del torneo.",
        icon: "fab fa-instagram",
        url: "https://instagram.com/tuCuenta",
        color: "#e4405f",
        badge: "Novedades",
    },
    {
        id: 2,
        title: "TikTok",
        description: "Enterate de todo lo que pasa en la Copa Chots con videos cortos y contenido entretenido.",
        icon: "fab fa-tiktok",
        url: "https://tiktok.com/@tuCuenta",
        color: "#69c9d0",
        badge: "Contenido",
    },
    {
        id: 3,
        title: "YouTube",
        description: "Mirá la transmisión en vivo de los sorteos y reviví los momentos más importantes.",
        icon: "fab fa-youtube",
        url: "https://youtube.com/@tuCuenta",
        color: "#ff0000",
        badge: "Sorteos en vivo",
    },
];

export default function HowToWatch() {
    return (
        <section id="howToWatchSection" className="how-to-watch-section" aria-label="Nuestras redes sociales">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Columna centrada */}
                    <div className="col-lg-10">
                        {/* Header centrado */}
                        <motion.div
                            className="how-to-watch-header text-center"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <span className="how-to-watch-eyebrow text-uppercase">
                                Seguinos
                            </span>

                            <h2 className="how-to-watch-title">
                                Nuestras redes
                            </h2>

                            <p className="how-to-watch-subtitle">
                                Mantenete informado y mirá los sorteos en vivo
                            </p>

                            <div className="how-to-watch-divider">
                                <span />
                                <span className="how-to-watch-divider-star">✦</span>
                                <span />
                            </div>
                        </motion.div>

                        {/* Grid de plataformas */}
                        <div className="row g-4">
                            {watchPlatforms.map((platform, index) => (
                                <motion.div
                                    key={platform.id}
                                    className="col-12 col-md-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        type: "spring"
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <a
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="watch-card"
                                        style={{
                                            "--platform-color": platform.color,
                                        }}
                                    >
                                        {/* Badge */}
                                        <span className="watch-badge">
                                            {platform.badge}
                                        </span>

                                        <div className="watch-icon" aria-hidden="true">
                                            <i className={platform.icon}></i>
                                        </div>

                                        <h3 className="watch-title">
                                            {platform.title}
                                        </h3>

                                        <p className="watch-description">
                                            {platform.description}
                                        </p>

                                        <span className="watch-link">
                                            Visitar canal
                                            <i className="fas fa-arrow-right ms-2" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {/* Info adicional */}
                        <motion.div
                            className="how-to-watch-info text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="watch-info-box">
                                <span className="watch-info-icon" aria-hidden="true">
                                    <i className="fas fa-bell"></i>
                                </span>
                                <p className="watch-info-text">
                                    <strong>¡No te lo pierdas!</strong>{" "}
                                    Activá las notificaciones en YouTube para recibir un
                                    recordatorio cuando comience el próximo sorteo en vivo.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}