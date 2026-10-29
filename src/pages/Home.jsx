import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import About from '../components/About.jsx'
import HowToParticipate from '../components/HowToParticipate.jsx'
import BuyNumbers from '../components/BuyNumbers.jsx'
import Calendar from '../components/Calendar.jsx'
import WatchPlatforms from '../components/WatchPlatforms.jsx'
import WinnersCarousel from '../components/WinnersCarousel.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Sponsors from '../components/Sponsors.jsx'
import ContactForm from '../components/ContactForm.jsx'

function Home() {
    return (
        <main>
            {/* 1. IMPACTO INICIAL - Captar atención */}
            <Hero />

            {/* 2. PRUEBA SOCIAL INMEDIATA - Generar confianza */}
            <Stats />

            {/* 3. CONTEXTO - Explicar qué es */}
            <About />

            {/* 4. FACILIDAD - Mostrar que es simple */}
            <HowToParticipate />

            {/* 5. ACCIÓN PRINCIPAL - Comprar */}
            <BuyNumbers />

            {/* 6. INFORMACIÓN COMPLEMENTARIA - Calendario */}
            <Calendar />

            {/* 7. TRANSPARENCIA - Dónde ver el sorteo */}
            <WatchPlatforms />

            {/* 8. PRUEBA SOCIAL - Ganadores anteriores */}
            <WinnersCarousel />

            {/* 9. REFUERZO DE CONFIANZA - Testimonios */}
            <Testimonials />

            {/* 10. RESPALDO - Sponsors */}
            <Sponsors />

            {/* 11. CIERRE - Contacto */}
            <ContactForm />
        </main>
    )
}

export default Home;