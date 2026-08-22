import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export default function BuyNumbers() {
    const [targetDate, setTargetDate] = useState(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [prize, setPrize] = useState("");
    const [prizeImage, setPrizeImage] = useState("");

    // Traer datos del sorteo desde Firestore
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "settings", "raffle");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data.targetDate) setTargetDate(data.targetDate.toDate());
                    if (data.prize) setPrize(data.prize);
                    if (data.prizeImage) setPrizeImage(data.prizeImage);
                }
            } catch (error) {
                console.error("Error al obtener datos del sorteo:", error);
            }
        };
        fetchData();
    }, []);

    // Calcular el tiempo restante
    useEffect(() => {
        if (!targetDate) return;

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section className="buy-numbers section py-5 text-light">
            <div className="container">
                <div className="row align-items-stretch">
                    {/* Columna izquierda: texto y contador */}
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex">
                        <motion.div
                            className="promo-box p-4 rounded w-100"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="fw-bold text-uppercase mb-3 section__title">
                                Compra de Números
                            </h2>
                            <p className="section__subtitle mb-4">
                                ¡Participá del Sorteo y gana increíbles premios!
                            </p>

                            {/* Contador regresivo */}
                            <div className="countdown d-flex justify-content-around mb-4">
                                <div>
                                    <span>{timeLeft.days}</span>
                                    <small>Días</small>
                                </div>
                                <div>
                                    <span>{timeLeft.hours}</span>
                                    <small>Horas</small>
                                </div>
                                <div>
                                    <span>{timeLeft.minutes}</span>
                                    <small>Minutos</small>
                                </div>
                                <div>
                                    <span>{timeLeft.seconds}</span>
                                    <small>Segundos</small>
                                </div>
                            </div>

                            <motion.a
                                href="#"
                                className="btn btn-warning fw-bold px-4 py-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Comprar Ahora
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Columna derecha: premio */}
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="prize-box p-4 rounded w-100 text-center"
                        >
                            <h3 className="fw-bold mb-3">Premio en Juego</h3>
                            <img
                                src={prizeImage}
                                alt={prize}
                                className="img-fluid prize-img mx-auto d-block"
                            />
                            <p className="text-light">{prize}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}