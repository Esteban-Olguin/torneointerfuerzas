import { motion } from "framer-motion";

export default function Privacy() {
    return (
        <section id="privacySection" className="privacy-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Header */}
                        <motion.div
                            className="privacy-header text-center"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            <span className="privacy-eyebrow text-uppercase">
                                Información legal
                            </span>

                            <h1 className="privacy-title">
                                Política de Privacidad
                            </h1>

                            <p className="privacy-subtitle">
                                Última actualización: {new Date().toLocaleDateString('es-AR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>

                            <div className="privacy-divider">
                                <span />
                                <span className="privacy-divider-star">✦</span>
                                <span />
                            </div>
                        </motion.div>

                        {/* Contenido */}
                        <motion.div
                            className="privacy-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="privacy-card">
                                <h2>1. Información que Recopilamos</h2>
                                <p>
                                    Al utilizar nuestros servicios, podemos recopilar la
                                    siguiente información:
                                </p>
                                <ul>
                                    <li>Nombre y apellido</li>
                                    <li>Dirección de correo electrónico</li>
                                    <li>Número de teléfono (opcional)</li>
                                    <li>Información de participación en torneos</li>
                                    <li>Datos de navegación y uso del sitio</li>
                                </ul>
                            </div>

                            <div className="privacy-card">
                                <h2>2. Uso de la Información</h2>
                                <p>
                                    La información recopilada se utiliza para:
                                </p>
                                <ul>
                                    <li>Gestionar tu participación en eventos y sorteos</li>
                                    <li>Enviar comunicaciones relacionadas con los torneos</li>
                                    <li>Mejorar nuestros servicios y experiencia de usuario</li>
                                    <li>Cumplir con obligaciones legales y regulatorias</li>
                                    <li>Prevenir fraudes y mantener la seguridad</li>
                                </ul>
                            </div>

                            <div className="privacy-card">
                                <h2>3. Protección de Datos</h2>
                                <p>
                                    Implementamos medidas de seguridad técnicas y
                                    organizativas para proteger tu información personal
                                    contra:
                                </p>
                                <ul>
                                    <li>Acceso no autorizado</li>
                                    <li>Alteración indebida</li>
                                    <li>Divulgación no permitida</li>
                                    <li>Destrucción accidental</li>
                                </ul>
                                <div className="privacy-info-box">
                                    <span className="privacy-info-icon" aria-hidden="true">🔒</span>
                                    <div>
                                        <strong>Compromiso de Seguridad</strong>
                                        <p>
                                            Tus datos son tratados con la máxima
                                            confidencialidad y solo se utilizan para los
                                            fines indicados en esta política.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="privacy-card">
                                <h2>4. Cookies y Tecnologías Similares</h2>
                                <p>
                                    Utilizamos cookies y tecnologías similares para:
                                </p>
                                <ul>
                                    <li>Mantener tu sesión activa</li>
                                    <li>Recordar tus preferencias</li>
                                    <li>Analizar el tráfico del sitio</li>
                                    <li>Mejorar la funcionalidad general</li>
                                </ul>
                                <p>
                                    Puedes desactivar las cookies en la configuración de
                                    tu navegador, aunque esto puede afectar algunas
                                    funcionalidades del sitio.
                                </p>
                            </div>

                            <div className="privacy-card">
                                <h2>5. Compartir Información</h2>
                                <p>
                                    No vendemos ni compartimos tu información personal
                                    con terceros, excepto en los siguientes casos:
                                </p>
                                <ul>
                                    <li>Cuando sea necesario para proporcionar el servicio</li>
                                    <li>Para cumplir con obligaciones legales</li>
                                    <li>Con tu consentimiento explícito</li>
                                    <li>Para proteger nuestros derechos legales</li>
                                </ul>
                            </div>

                            <div className="privacy-card">
                                <h2>6. Retención de Datos</h2>
                                <p>
                                    Conservamos tu información personal solo durante el
                                    tiempo necesario para cumplir con los fines descritos
                                    en esta política, a menos que la ley exija un período
                                    de retención más largo.
                                </p>
                            </div>

                            <div className="privacy-card">
                                <h2>7. Tus Derechos</h2>
                                <p>
                                    De acuerdo con la legislación aplicable, tienes
                                    derecho a:
                                </p>
                                <ul>
                                    <li>Acceder a tus datos personales</li>
                                    <li>Solicitar la corrección de datos inexactos</li>
                                    <li>Pedir la eliminación de tus datos</li>
                                    <li>Oponerte al tratamiento de tu información</li>
                                    <li>Solicitar la portabilidad de tus datos</li>
                                </ul>
                                <p>
                                    Para ejercer estos derechos, contáctanos a través de
                                    nuestros canales oficiales.
                                </p>
                            </div>

                            <div className="privacy-card">
                                <h2>8. Privacidad de Menores</h2>
                                <p>
                                    Nuestros servicios no están dirigidos a menores de 18
                                    años. No recopilamos intencionalmente información de
                                    menores. Si descubrimos que hemos recopilado datos de
                                    un menor, los eliminaremos de inmediato.
                                </p>
                            </div>

                            <div className="privacy-card">
                                <h2>9. Cambios en esta Política</h2>
                                <p>
                                    Nos reservamos el derecho de actualizar esta Política
                                    de Privacidad en cualquier momento. Los cambios serán
                                    publicados en esta página con la fecha de
                                    actualización correspondiente.
                                </p>
                            </div>

                            <div className="privacy-card">
                                <h2>10. Contacto</h2>
                                <p>
                                    Si tienes preguntas sobre esta Política de Privacidad
                                    o sobre el tratamiento de tus datos personales,
                                    puedes contactarnos a través de:
                                </p>
                                <ul>
                                    <li>El formulario de contacto de nuestro sitio</li>
                                    <li>Nuestras redes sociales oficiales</li>
                                    <li>Los canales de comunicación indicados en la sección de contacto</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}