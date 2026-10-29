import { motion } from "framer-motion";

// Datos de los pasos
const stepsData = [
    {
        id: 1,
        title: "Elegí tu número",
        description: "Seleccioná el número de la suerte con el que querés participar en el próximo sorteo.",
        icon: "fas fa-bullseye",
        color: "#8b5cf6",
    },
    {
        id: 2,
        title: "Realizá el pago",
        description: "Pagá de forma segura a través de nuestros medios habilitados y confirmá tu participación.",
        icon: "fas fa-credit-card",
        color: "#fbbf24",
    },
    {
        id: 3,
        title: "Recibí tu comprobante",
        description: "Te enviaremos un comprobante digital con tu número para que tengas total tranquilidad.",
        icon: "fas fa-envelope-open-text",
        color: "#10b981",
    },
    {
        id: 4,
        title: "Seguí el sorteo",
        description: "Mirá la transmisión en vivo y descubrí si sos el ganador de los increíbles premios.",
        icon: "fas fa-video",
        color: "#ef4444",
    },
];

export default function HowToParticipate() {
    return (
        <section id="howToSection" className="how-to-section" aria-label="Cómo participar">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Columna centrada */}
                    <div className="col-lg-10">
                        {/* Header centrado */}
                        <motion.div
                            className="how-to-header text-center"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <span className="how-to-eyebrow text-uppercase">
                                Proceso simple
                            </span>

                            <h2 className="how-to-title">
                                ¿Cómo participar?
                            </h2>

                            <p className="how-to-subtitle">
                                Seguí estos simples pasos y participá del próximo sorteo
                            </p>

                            <div className="how-to-divider">
                                <span />
                                <span className="how-to-divider-star">✦</span>
                                <span />
                            </div>
                        </motion.div>

                        {/* Grid de pasos */}
                        <div className="row g-4">
                            {stepsData.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    className="col-12 col-md-6 col-lg-3"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        type: "spring"
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className="step-card">
                                        {/* Número de paso */}
                                        <div className="step-number" aria-label={`Paso ${index + 1}`}>
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        {/* Icono */}
                                        <div
                                            className="step-icon"
                                            style={{
                                                "--step-color": step.color,
                                            }}
                                            aria-hidden="true"
                                        >
                                            <i className={step.icon}></i>
                                        </div>

                                        {/* Contenido */}
                                        <h3 className="step-title">
                                            {step.title}
                                        </h3>

                                        <p className="step-description">
                                            {step.description}
                                        </p>

                                        {/* Acento de color */}
                                        <div
                                            className="step-accent"
                                            style={{ backgroundColor: step.color }}
                                            aria-hidden="true"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            className="how-to-cta text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <button
                                className="how-to-btn"
                                onClick={() => {
                                    const section = document.getElementById("buyNumbersSection");
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }
                                }}
                            >
                                Comprar Números Ahora
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}