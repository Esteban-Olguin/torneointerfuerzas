import { motion } from "framer-motion";

// Datos de testimonios
const testimonialsData = [
    {
        id: 1,
        name: "Carlos",
        lastName: "Rodríguez",
        role: "Ganador 2025",
        text: "No podía creer cuando me llamaron para avisarme que había ganado. La transparencia del sorteo me dio mucha confianza desde el primer momento.",
        rating: 5,
    },
    {
        id: 2,
        name: "Martín",
        lastName: "Fernández",
        role: "Ganador 2024",
        text: "Participé en varios sorteos y siempre todo fue claro. Finalmente gané en el último torneo y fue una experiencia increíble.",
        rating: 5,
    },
    {
        id: 3,
        name: "Diego",
        lastName: "González",
        role: "Participante frecuente",
        text: "La organización de los torneos es excelente. Los sorteos son transparentes y siempre hay buena comunicación con los participantes.",
        rating: 4,
    },
];

// Componente para las estrellas de rating
function StarRating({ rating }) {
    return (
        <div className="testimonial-rating" aria-label={`Calificación: ${rating} de 5 estrellas`}>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`testimonial-star ${index < rating ? "active" : ""}`}
                    aria-hidden="true"
                >
                    ★
                </span>
            ))}
        </div>
    );
}

// Componente para las iniciales del avatar
function AvatarInitials({ name, lastName }) {
    const initials = `${name.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

    return (
        <div className="testimonial-avatar" aria-hidden="true">
            <span className="testimonial-initials">{initials}</span>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonialsSection" className="testimonials-section" aria-label="Testimonios de ganadores">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Columna centrada */}
                    <div className="col-lg-10">
                        {/* Header centrado */}
                        <motion.div
                            className="testimonials-header text-center"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <span className="testimonials-eyebrow text-uppercase">
                                Testimonios
                            </span>

                            <h2 className="testimonials-title">
                                Ganadores reales
                            </h2>

                            <p className="testimonials-subtitle">
                                Lo que dicen los participantes de la Copa Chots
                            </p>

                            <div className="testimonials-divider">
                                <span />
                                <span className="testimonials-divider-star">✦</span>
                                <span />
                            </div>
                        </motion.div>

                        {/* Grid de testimonios */}
                        <div className="row g-4">
                            {testimonialsData.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    className="col-12 col-md-6 col-lg-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        type: "spring"
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <article className="testimonial-card">
                                        {/* Comillas decorativas */}
                                        <div className="testimonial-quote" aria-hidden="true">
                                            "
                                        </div>

                                        {/* Rating */}
                                        <StarRating rating={testimonial.rating} />

                                        {/* Texto del testimonio */}
                                        <p className="testimonial-text">
                                            {testimonial.text}
                                        </p>

                                        {/* Información del autor */}
                                        <div className="testimonial-author">
                                            <AvatarInitials
                                                name={testimonial.name}
                                                lastName={testimonial.lastName}
                                            />
                                            <div className="testimonial-info">
                                                <h3 className="testimonial-name">
                                                    {testimonial.name} {testimonial.lastName}
                                                </h3>
                                                <span className="testimonial-role">
                                                    {testimonial.role}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}