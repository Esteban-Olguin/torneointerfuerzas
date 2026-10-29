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

    // Duplicar ganadores para efecto infinito
    const duplicatedWinners = winners.length > 0
        ? [...winners, ...winners, ...winners]
        : [];

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
                    <div className="col-12">
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
                                {/* Carrusel marquee */}
                                <div className="winners-marquee">
                                    <div className="winners-marquee-track">
                                        {duplicatedWinners.map((winner, index) => (
                                            <div
                                                key={`${winner.id}-${index}`}
                                                className="winners-marquee-item"
                                            >
                                                <article className="winner-card">
                                                    {/* Número de ganador */}
                                                    <div
                                                        className="winner-number"
                                                        aria-label={`Ganador número ${(index % winners.length) + 1}`}
                                                    >
                                                        {String((index % winners.length) + 1).padStart(2, "0")}
                                                    </div>

                                                    {/* Imagen */}
                                                    <div className="winner-image-wrapper">
                                                        <img
                                                            src={winner.imageUrl}
                                                            alt={`Ganador: ${winner.name}`}
                                                            className="winner-image"
                                                            loading="lazy"
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