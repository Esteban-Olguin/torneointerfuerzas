import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export default function Calendar() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchMatches = async () => {
            const querySnapshot = await getDocs(collection(db, "matches"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMatches(data);
        };
        fetchMatches();
    }, []);

    return (
        <section className="calendar section py-5 bg-dark text-light">
            <div className="container">
                <motion.h2
                    className="fw-bold text-uppercase text-center mb-2 section__title sm"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Calendario de Partidos
                </motion.h2>

                <motion.h2
                    className="text-center section__subtitle sm"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    ¡No te pierdas de ningún partido!
                </motion.h2>

                <div className="row align-items-center">
                    {/* Columna derecha: imagen de la copa (arriba en móviles, al costado en tablets/desktop) */}
                    <div className="col-12 col-md-5 text-center order-1 order-md-2 mb-md-0">
                        <motion.img
                            src="/assets/logos/copa_chots-logo.png"
                            alt="Copa Chots"
                            className="img-fluid copa-img"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />
                    </div>

                    {/* Columna izquierda: calendario */}
                    <div className="col-12 col-md-7 order-2 order-md-1">
                        <div className="table-responsive">
                            <table className="table table-dark table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Hora</th>
                                        <th>Partido</th>
                                        <th>Resultado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matches.map((match, index) => (
                                        <motion.tr
                                            key={match.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <td>{match.date}</td>
                                            <td>{match.time}</td>
                                            <td>{match.teams}</td>
                                            <td>{match.result || "-"}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
