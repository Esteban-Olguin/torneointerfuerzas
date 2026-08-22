import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Router from './Router.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Componente para manejar el scroll
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    // Si hay estado de scroll, hacer scroll a la sección
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      // Pequeño delay para asegurar que la página se renderice
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      // Limpiar el estado
      window.history.replaceState({}, document.title);
    } else {
      // Si no hay estado de scroll, ir al inicio
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <ScrollHandler />
        <Header />
        <main className="main-content">
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;