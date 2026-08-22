import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../services/firebaseConfig";

// Componentes definidos FUERA del componente principal
function WinnersHeader({ subtitle = "Los protagonistas que dejaron su huella." }) {
    return (
        <div className="winners-header text-center">
            <span className="winners-eyebrow text-uppercase">
                Conocé a los
            </span>
            <h2 className="winners-title">
                Ganadores
            </h2>
            <p className="winners-subtitle">
                {subtitle}
            </p>
            <div className="winners-divider">
                <span />
                <span className="winners-divider-star">✦</span>
                <span />
            </div>
        </div>
    );
}

function WinnersState({ type }) {
    if (type === "loading") {
        return (
            <div className="winners-loading" role="status" aria-live="polite">
                <div
                    className="spinner-border"
                    role="status"
                    aria-label="Cargando ganadores"
                />
                <span>Cargando ganadores...</span>
            </div>
        );
    }

    return (
        <div className="winners-message" role="alert" aria-live="polite">
            <span className="winners-message-icon" aria-hidden="true">
                {type === "error" ? "!" : "★"}
            </span>
            <h3>
                {type === "error"
                    ? "No pudimos cargar los ganadores"
                    : "Sin ganadores aún"}
            </h3>
            <p>
                {type === "error"
                    ? "Intentá nuevamente más tarde."
                    : "Próximamente conocerás a los protagonistas."}
            </p>
        </div>
    );
}

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

    // Determinar el estado actual
    const currentState = loading
        ? "loading"
        : error
            ? "error"
            : winners.length === 0
                ? "empty"
                : "success";

    return (
        <section
            id="pastWinnersCarousel"
            className="winners-section"
            aria-label="Ganadores del torneo"
        >
            <div className="container">
                <div className="row justify-content-center">
                    {/* Columna centrada */}
                    <div className="col-lg-10">
                        {/* Header centrado */}
                        <WinnersHeader
                            subtitle={
                                winners.length === 0 && !loading && !error
                                    ? "Todavía no hay ganadores registrados."
                                    : "Los protagonistas que dejaron su huella."
                            }
                        />

                        {/* Contenido dinámico */}
                        {currentState !== "success" ? (
                            <WinnersState type={currentState} />
                        ) : (
                            <>
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
                                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                                            >
                                                <article className="winner-card">
                                                    {/* Número de ganador */}
                                                    <div
                                                        className="winner-number"
                                                        aria-label={`Ganador número ${index + 1}`}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </div>

                                                    {/* Imagen */}
                                                    <div className="winner-image-wrapper">
                                                        <img
                                                            src={winner.imageUrl}
                                                            alt={`Ganador: ${winner.name}`}
                                                            className="winner-image"
                                                            loading={index === 0 ? "eager" : "lazy"}
                                                            decoding="async"
                                                        />
                                                        <div
                                                            className="winner-image-overlay"
                                                            aria-hidden="true"
                                                        />
                                                        <div
                                                            className="winner-trophy"
                                                            aria-hidden="true"
                                                        >
                                                            <span>★</span>
                                                        </div>
                                                    </div>

                                                    {/* Información */}
                                                    <div className="winner-info">
                                                        <span className="winner-label">
                                                            Ganador
                                                        </span>
                                                        <h3 className="winner-name">
                                                            {winner.name}
                                                        </h3>
                                                        <div
                                                            className="winner-accent"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                </article>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Controles de navegación */}
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
                                                    className={index === 0 ? "active" : ""}
                                                    aria-current={index === 0 ? "true" : undefined}
                                                    aria-label={`Mostrar ganador ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Contador de ganadores */}
                                <div className="winners-count" aria-live="polite">
                                    <span>{winners.length}</span>{" "}
                                    {winners.length === 1 ? "Ganador" : "Ganadores"}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}