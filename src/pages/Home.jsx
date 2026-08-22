import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Calendar from '../components/Calendar.jsx'
import BuyNumbers from '../components/BuyNumbers.jsx'
import WinnersCarousel from '../components/WinnersCarousel.jsx'
import Sponsors from '../components/Sponsors.jsx'
import ContactForm from '../components/ContactForm.jsx'

function Home() {
    return (
        <main>
            {/* Sección Hero */}
            <Hero />

            {/* Sección Sobre el torneo */}
            <About />

            {/* Calendario de partidos */}
            <Calendar />

            {/* Módulo de compra de números */}
            <BuyNumbers />

            {/* Carrusel de ganadores */}
            <WinnersCarousel />

            {/* Auspiciantes */}
            <Sponsors />

            {/* Contacto */}
            <ContactForm />
        </main>
    )
}

export default Home;