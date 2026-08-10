import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section
            ref={ref}
            className="about section d-flex align-items-center text-light"
            style={{
                backgroundImage: "url('/public/assets/img/stadium-lights-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "80vh",
            }}
        >
            <div className="container container-about">
                <div className="row justify-content-center align-items-center">
                    {/* Texto */}
                    <motion.div
                        className="col-12 col-md-6 mb-4 mb-md-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <h2 className="fw-bold text-uppercase section__title">
                            Sobre el Torneo
                        </h2>
                        <p className="section__text">
                            La Copa Chots es más que un campeonato: es el lugar donde los partidos se viven con intensidad, los sorteos se realizan con transparencia y cada encuentro fortalece la camaradería entre las fuerzas. Nuestro objetivo es que cada edición combine emoción, respeto y organización, ofreciendo un torneo que se disfrute dentro y fuera de la cancha.
                        </p>
                    </motion.div>

                    {/* Imagen ilustrativa */}
                    <motion.div
                        className="col-12 col-md-6 text-center overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                    >
                        <img
                            src="/public/assets/img/jugadores_IA.png"
                            alt="Jugadores de fútbol"
                            className="img-fluid rounded shadow about-img"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
