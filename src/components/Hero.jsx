import { NavLink } from "react-router-dom";


export default function Hero() {
    return (
        <section
            className="hero section d-flex align-items-center text-center text-light"
            style={{
                backgroundImage: "url('/public/assets/img/hero-football-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
        >
            <div className="container container-hero grid">
                <div>
                    <h1 className="section__subtitle fw-bold text-uppercase">
                        Torneo Interfuerzas
                    </h1>
                    <h2 className="section__title fw-bold text-uppercase">
                        Copa Chots
                    </h2>
                    <span className="section__text mb-2">
                        ¡El torneo que une nuestras fuerzas!
                    </span>
                    <p className="mb-4">Participá y ganá increíbles premios.</p>
                    <NavLink to="/sorteo" className="btn btn--small">
                        Comprar Números <i className="fas fa-ticket-alt btn__icon"></i>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}