import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="aboutSection" className="about-section" ref={ref}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    {/* Columna de texto - Primero en mobile */}
                    <div className="col-lg-6 order-1 order-lg-1">
                        <motion.div
                            className="about-header"
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            <span className="about-eyebrow">Conocé más</span>

                            <h2 className="about-title">
                                Sobre el Torneo
                            </h2>

                            <p className="about-subtitle">
                                La Copa Chots es más que un campeonato
                            </p>

                            <p className="about-text">
                                Es el lugar donde los partidos se viven con intensidad,
                                los sorteos se realizan con transparencia y cada encuentro
                                fortalece la camaradería entre las fuerzas. Nuestro objetivo
                                es que cada edición combine emoción, respeto y organización,
                                ofreciendo un torneo que se disfrute dentro y fuera de la cancha.
                            </p>

                            <div className="about-divider">
                                <span />
                                <span className="about-divider-star">✦</span>
                                <span />
                            </div>
                        </motion.div>
                    </div>

                    {/* Columna de imagen - Segundo en mobile */}
                    <div className="col-lg-6 order-2 order-lg-2">
                        <motion.div
                            className="about-visual"
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                        >
                            <div className="about-image-wrapper">
                                <img
                                    src="/public/assets/img/jugadores_IA.png"
                                    alt="Jugadores de fútbol"
                                    className="about-image"
                                    loading="lazy"
                                />
                                <div className="about-image-overlay" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}