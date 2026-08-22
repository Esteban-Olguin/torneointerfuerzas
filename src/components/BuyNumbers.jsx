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
        <section id="buyNumbersSection" className="buy-numbers-section">
            <div className="container">
                <div className="row justify-content-center align-items-stretch">
                    {/* Columna izquierda - Texto y contador */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <motion.div
                            className="buy-header"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <span className="buy-eyebrow">Participá ahora</span>

                            <h2 className="buy-title">
                                Compra de Números
                            </h2>

                            <p className="buy-subtitle">
                                ¡Participá del Sorteo y gana increíbles premios!
                            </p>

                            <div className="buy-divider">
                                <span />
                                <span className="buy-divider-star">✦</span>
                                <span />
                            </div>

                            {/* Contador regresivo */}
                            <div className="countdown">
                                <div className="countdown-item">
                                    <span className="countdown-number">{timeLeft.days}</span>
                                    <span className="countdown-label">Días</span>
                                </div>
                                <div className="countdown-item">
                                    <span className="countdown-number">{timeLeft.hours}</span>
                                    <span className="countdown-label">Horas</span>
                                </div>
                                <div className="countdown-item">
                                    <span className="countdown-number">{timeLeft.minutes}</span>
                                    <span className="countdown-label">Minutos</span>
                                </div>
                                <div className="countdown-item">
                                    <span className="countdown-number">{timeLeft.seconds}</span>
                                    <span className="countdown-label">Segundos</span>
                                </div>
                            </div>

                            <motion.a
                                href="#"
                                className="buy-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Comprar Ahora
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Columna derecha - Premio */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <motion.div
                            className="prize-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <span className="prize-eyebrow">Premio en juego</span>

                            <h3 className="prize-title">
                                {prize || "Gran Premio"}
                            </h3>

                            {prizeImage && (
                                <div className="prize-image-wrapper">
                                    <img
                                        src={prizeImage}
                                        alt={prize}
                                        className="prize-image"
                                    />
                                    <div className="prize-image-overlay" />
                                </div>
                            )}

                            <div className="prize-accent" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}