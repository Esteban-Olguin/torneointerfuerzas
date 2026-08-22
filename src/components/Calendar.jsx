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
        <section id="calendarSection" className="calendar-section">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Columna centrada */}
                    <div className="col-lg-10">
                        <motion.div
                            className="calendar-header text-center"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <span className="calendar-eyebrow">Próximos partidos</span>

                            <h2 className="calendar-title">
                                Calendario
                            </h2>

                            <p className="calendar-subtitle">
                                ¡No te pierdas de ningún partido!
                            </p>

                            <div className="calendar-divider">
                                <span />
                                <span className="calendar-divider-star">✦</span>
                                <span />
                            </div>
                        </motion.div>

                        <motion.div
                            className="table-responsive"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <table className="table calendar-table">
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
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}