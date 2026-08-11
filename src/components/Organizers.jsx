import { motion } from "framer-motion";

export default function Organizers() {
    const organizers = [
        {
            name: "Capitán Juan Pérez",
            role: "Coordinador General",
            img: "/public/assets/img/organizer1.jpg",
            bio: "Responsable de la organización integral del torneo, supervisa la logística y asegura que cada encuentro se desarrolle con transparencia y disciplina."
        },
        {
            name: "Teniente María Gómez",
            role: "Encargada de Sorteos",
            img: "/public/assets/img/organizer2.jpg",
            bio: "Lidera el área de sorteos y actas, garantizando imparcialidad en cada número asignado y en la comunicación de resultados."
        },
        {
            name: "Sargento Carlos López",
            role: "Coordinador de Partidos",
            img: "/public/assets/img/organizer3.jpg",
            bio: "Planifica el calendario de partidos, gestiona horarios y asegura que cada equipo tenga condiciones justas para competir."
        },
        {
            name: "Suboficial Ana Fernández",
            role: "Relaciones Institucionales",
            img: "/public/assets/img/organizer4.jpg",
            bio: "Se encarga de la comunicación con auspiciantes y fuerzas participantes, fortaleciendo los vínculos y la difusión del torneo."
        }
    ];

    return (
        <section className="organizers section py-5 bg-dark text-light">
            <div className="container">
                <motion.h2
                    className="fw-bold text-uppercase text-center mb-5 section__title sm"
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Organizadores
                </motion.h2>

                <div className="row justify-content-center">
                    {organizers.map((org, index) => (
                        <motion.div
                            key={index}
                            className="col-12 col-md-6 col-lg-3 mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="card h-100 shadow border-0 bg-dark text-light">
                                <img
                                    src={org.img}
                                    alt={org.name}
                                    className="card-img-top"
                                    style={{ height: "220px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">{org.name}</h5>
                                    <p className="text-warning mb-2">{org.role}</p>
                                    <p className="card-text flex-grow-1">{org.bio}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
