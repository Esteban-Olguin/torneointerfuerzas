import { motion } from "framer-motion";

// Datos de los sponsors
const sponsorsData = [
    {
        id: 1,
        name: "Sponsor 1",
        logo: "/public/assets/sponsors/fd-aberturas.png",
        alt: "Logo Sponsor 1",
    },
    {
        id: 2,
        name: "Sponsor 2",
        logo: "/public/assets/sponsors/alfa-indumentaria.png",
        alt: "Logo Sponsor 2",
    },
    {
        id: 3,
        name: "Sponsor 3",
        logo: "/public/assets/sponsors/fulbito-store.png",
        alt: "Logo Sponsor 3",
    },
    {
        id: 4,
        name: "Sponsor 4",
        logo: "/public/assets/sponsors/todo-fit.png",
        alt: "Logo Sponsor 4",
    },
];

export default function Sponsors() {
    return (
        <section id="sponsorsSection" className="sponsors-section" aria-label="Sponsors del torneo">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Columna centrada */}
                    <div className="col-lg-10">
                        {/* Header centrado */}
                        <motion.div
                            className="sponsors-header text-center"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <span className="sponsors-eyebrow text-uppercase">
                                Nuestro apoyo
                            </span>

                            <h2 className="sponsors-title">
                                Sponsors
                            </h2>

                            <p className="sponsors-subtitle">
                                Las marcas que hacen posible este torneo
                            </p>

                            <div className="sponsors-divider">
                                <span />
                                <span className="sponsors-divider-star">✦</span>
                                <span />
                            </div>
                        </motion.div>

                        {/* Grid de sponsors */}
                        <div className="row justify-content-center align-items-center g-4">
                            {sponsorsData.map((sponsor, index) => (
                                <motion.div
                                    key={sponsor.id}
                                    className="col-6 col-md-3"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        type: "spring"
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className="sponsor-card">
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.alt}
                                            className="sponsor-logo"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}