import { motion } from "framer-motion";

export default function Terms() {
  return (
    <section id="termsSection" className="terms-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header */}
            <motion.div
              className="terms-header text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <span className="terms-eyebrow text-uppercase">
                Información legal
              </span>

              <h1 className="terms-title">
                Términos y Condiciones
              </h1>

              <p className="terms-subtitle">
                Última actualización: {new Date().toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>

              <div className="terms-divider">
                <span />
                <span className="terms-divider-star">✦</span>
                <span />
              </div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              className="terms-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="terms-card">
                <h2>1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar este sitio web, usted acepta estar
                  sujeto a estos Términos y Condiciones. Si no está de
                  acuerdo con alguna parte de estos términos, le
                  recomendamos que no utilice nuestros servicios.
                </p>
              </div>

              <div className="terms-card">
                <h2>2. Descripción del Servicio</h2>
                <p>
                  "Copa Chots" es una plataforma dedicada a la
                  organización de torneos deportivos de fantasía y
                  actividades de entretenimiento relacionadas. Nuestros
                  servicios incluyen:
                </p>
                <ul>
                  <li>Organización de campeonatos deportivos de fantasía</li>
                  <li>Organización de torneos y competencias</li>
                  <li>Programas de concursos y sorteos</li>
                  <li>Servicios de entretenimiento en formato de concursos</li>
                  <li>Gestión de participación en eventos deportivos</li>
                </ul>
              </div>

              <div className="terms-card">
                <h2>3. Propiedad Intelectual</h2>
                <p>
                  El nombre "Copa Chots" y todos los elementos asociados
                  son propiedad de su titular registrado. La marca se
                  encuentra debidamente registrada ante el Instituto
                  Nacional de la Propiedad Industrial (INPI) de la
                  República Argentina.
                </p>
                <div className="terms-info-box">
                  <span className="terms-info-icon" aria-hidden="true">®</span>
                  <div>
                    <strong>Marca Registrada</strong>
                    <p>
                      Todos los derechos de propiedad intelectual
                      están reservados. Queda prohibida la
                      reproducción, distribución o uso no autorizado
                      de la marca sin consentimiento previo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="terms-card">
                <h2>4. Uso del Sitio Web</h2>
                <p>
                  Los usuarios se comprometen a utilizar este sitio web
                  de manera responsable y conforme a la ley. Está
                  prohibido:
                </p>
                <ul>
                  <li>Utilizar el sitio para fines ilegales o no autorizados</li>
                  <li>Intentar acceder a información restringida</li>
                  <li>Interferir con el funcionamiento normal del sitio</li>
                  <li>Utilizar contenido sin autorización previa</li>
                  <li>Suplantar la identidad de otros usuarios</li>
                </ul>
              </div>

              <div className="terms-card">
                <h2>5. Participación en Torneos y Sorteos</h2>
                <p>
                  La participación en torneos, concursos y sorteos
                  organizados a través de esta plataforma está sujeta a
                  las bases y condiciones específicas de cada evento.
                  Los participantes deben:
                </p>
                <ul>
                  <li>Ser mayores de edad o contar con autorización</li>
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Cumplir con las reglas específicas de cada evento</li>
                  <li>Aceptar los resultados de manera transparente</li>
                </ul>
              </div>

              <div className="terms-card">
                <h2>6. Responsabilidades del Usuario</h2>
                <p>
                  El usuario es responsable de:
                </p>
                <ul>
                  <li>Mantener la confidencialidad de sus datos de acceso</li>
                  <li>Proporcionar información precisa y actualizada</li>
                  <li>Utilizar el servicio de manera ética y legal</li>
                  <li>No realizar actividades que puedan dañar la plataforma</li>
                </ul>
              </div>

              <div className="terms-card">
                <h2>7. Limitación de Responsabilidad</h2>
                <p>
                  "Copa Chots" no se hace responsable por:
                </p>
                <ul>
                  <li>Interrupciones temporales del servicio</li>
                  <li>Errores en la información proporcionada por usuarios</li>
                  <li>Daños derivados del uso inadecuado de la plataforma</li>
                  <li>Problemas técnicos fuera de nuestro control</li>
                </ul>
              </div>

              <div className="terms-card">
                <h2>8. Modificaciones de los Términos</h2>
                <p>
                  Nos reservamos el derecho de modificar estos Términos y
                  Condiciones en cualquier momento. Los cambios entrarán
                  en vigor inmediatamente después de su publicación. Se
                  recomienda revisar periódicamente este documento.
                </p>
              </div>

              <div className="terms-card">
                <h2>9. Legislación Aplicable</h2>
                <p>
                  Estos Términos y Condiciones se rigen por las leyes de
                  la República Argentina. Cualquier controversia será
                  sometida a la jurisdicción de los tribunales
                  competentes.
                </p>
              </div>

              <div className="terms-card">
                <h2>10. Contacto</h2>
                <p>
                  Para consultas relacionadas con estos Términos y
                  Condiciones, puede contactarnos a través de nuestros
                  canales oficiales disponibles en la sección de
                  contacto.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}