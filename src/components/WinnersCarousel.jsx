import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../services/firebaseConfig";

export default function WinnersCarousel() {
    const [winners, setWinners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchWinners = async () => {
            try {
                setLoading(true);
                setError(false);

                const querySnapshot = await getDocs(
                    collection(db, "winners")
                );

                const winnersData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setWinners(winnersData);
            } catch (error) {
                console.error("Error al obtener ganadores:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchWinners();
    }, []);

    if (loading) {
        return (
            <section id="pastWinnersCarousel" className="winners-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="winners-header">
                                <span className="winners-eyebrow">PALMARÉS</span>
                                <h2 className="winners-title">Ganadores</h2>
                                <p className="winners-subtitle">
                                    Los protagonistas que dejaron su huella.
                                </p>
                                <div className="winners-divider">
                                    <span />
                                    <span className="winners-divider-star">✦</span>
                                    <span />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="winners-loading">
                                <div
                                    className="spinner-border"
                                    role="status"
                                    aria-label="Cargando ganadores"
                                />
                                <span>Cargando ganadores...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="pastWinnersCarousel" className="winners-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="winners-header">
                                <span className="winners-eyebrow text-uppercase">Conocé a los</span>
                                <h2 className="winners-title">Ganadores</h2>
                                <p className="winners-subtitle">
                                    Los protagonistas que dejaron su huella.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="winners-message">
                                <span className="winners-message-icon">!</span>
                                <h3>No pudimos cargar los ganadores</h3>
                                <p>Intentá nuevamente más tarde.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (winners.length === 0) {
        return (
            <section id="pastWinnersCarousel" className="winners-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="winners-header">
                                <span className="winners-eyebrow text-uppercase">Conocé a los</span>
                                <h2 className="winners-title">Ganadores</h2>
                                <p className="winners-subtitle">
                                    Todavía no hay ganadores registrados.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="winners-message">
                                <span className="winners-message-icon">!</span>
                                <h3>Sin ganadores aún</h3>
                                <p>Próximamente conocerás a los protagonistas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="pastWinnersCarousel" className="winners-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Columna izquierda - Header */}
                    <div className="col-lg-5">
                        <div className="winners-header">
                            <span className="winners-eyebrow text-uppercase">Conocé a los</span>

                            <h2 className="winners-title">
                                Ganadores
                            </h2>

                            <p className="winners-subtitle">
                                Los protagonistas que dejaron su huella.
                            </p>

                            <div className="winners-divider">
                                <span />
                                <span className="winners-divider-star">✦</span>
                                <span />
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha - Carousel */}
                    <div className="col-lg-7">
                        <div
                            id="winnersCarousel"
                            className="carousel slide winners-carousel"
                            data-bs-ride="carousel"
                            data-bs-interval="5000"
                            data-bs-touch="true"
                        >
                            {/* Slides */}
                            <div className="carousel-inner">
                                {winners.map((winner, index) => (
                                    <div
                                        key={winner.id}
                                        className={`carousel-item ${index === 0 ? "active" : ""
                                            }`}
                                    >
                                        <article className="winner-card">

                                            {/* Número de ganador */}
                                            <div className="winner-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>

                                            {/* Imagen */}
                                            <div className="winner-image-wrapper">
                                                <img
                                                    src={winner.imageUrl}
                                                    alt={`Ganador: ${winner.name}`}
                                                    className="winner-image"
                                                    loading={
                                                        index === 0
                                                            ? "eager"
                                                            : "lazy"
                                                    }
                                                />

                                                <div className="winner-image-overlay" />

                                                <div className="winner-trophy">
                                                    <span>★</span>
                                                </div>
                                            </div>

                                            {/* Información */}
                                            <div className="winner-info">
                                                <span className="winner-label">
                                                    GANADOR
                                                </span>

                                                <h3 className="winner-name">
                                                    {winner.name}
                                                </h3>

                                                <div className="winner-accent" />
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>

                            {/* Control anterior */}
                            {winners.length > 1 && (
                                <>
                                    <button
                                        className="carousel-control-prev winners-control"
                                        type="button"
                                        data-bs-target="#winnersCarousel"
                                        data-bs-slide="prev"
                                        aria-label="Ganador anterior"
                                    >
                                        <span
                                            className="winners-control-icon"
                                            aria-hidden="true"
                                        >
                                            ‹
                                        </span>
                                    </button>

                                    {/* Control siguiente */}
                                    <button
                                        className="carousel-control-next winners-control"
                                        type="button"
                                        data-bs-target="#winnersCarousel"
                                        data-bs-slide="next"
                                        aria-label="Siguiente ganador"
                                    >
                                        <span
                                            className="winners-control-icon"
                                            aria-hidden="true"
                                        >
                                            ›
                                        </span>
                                    </button>
                                </>
                            )}

                            {/* Indicadores */}
                            {winners.length > 1 && (
                                <div className="carousel-indicators winners-indicators">
                                    {winners.map((winner, index) => (
                                        <button
                                            key={winner.id}
                                            type="button"
                                            data-bs-target="#winnersCarousel"
                                            data-bs-slide-to={index}
                                            className={
                                                index === 0 ? "active" : ""
                                            }
                                            aria-current={
                                                index === 0 ? "true" : undefined
                                            }
                                            aria-label={`Mostrar ganador ${index + 1
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Contador */}
                        {winners.length > 1 && (
                            <div className="winners-count">
                                <span>{winners.length}</span>{" "}
                                {winners.length === 1
                                    ? "GANADOR"
                                    : "GANADORES"}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}