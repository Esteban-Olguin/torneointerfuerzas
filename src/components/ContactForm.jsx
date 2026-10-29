import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAILJS_SERVICE_ID = "service_pvfn4i8";
const EMAILJS_TEMPLATE_ID = "template_b0x82at";
const EMAILJS_PUBLIC_KEY = "P0uJsMxyKSmQcJUNR";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null, "success", "error"

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // 1. Guardar en Firestore
            const firestorePromise = addDoc(collection(db, "contactMessages"), {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim(),
                createdAt: serverTimestamp(),
                read: false,
            });

            // 2. Enviar email con EmailJS
            const emailPromise = emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            );

            // Ejecutar ambas promesas en paralelo
            await Promise.all([firestorePromise, emailPromise]);

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Resetear el estado después de 5 segundos
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contactSection" className="contact-section" aria-label="Formulario de contacto">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Columna centrada */}
                    <div className="col-lg-10">
                        {/* Header centrado */}
                        <motion.div
                            className="contact-header text-center"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <span className="contact-eyebrow text-uppercase">
                                Contáctanos
                            </span>

                            <h2 className="contact-title">
                                ¿Tenés dudas?
                            </h2>

                            <p className="contact-subtitle">
                                Escribinos y te responderemos a la brevedad
                            </p>

                            <div className="contact-divider">
                                <span />
                                <span className="contact-divider-star">✦</span>
                                <span />
                            </div>
                        </motion.div>

                        {/* Formulario */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="row g-4">
                                    {/* Campo Nombre */}
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Tu nombre"
                                                required
                                                minLength="2"
                                                maxLength="100"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    {/* Campo Email */}
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="tucorreo@email.com"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    {/* Campo Mensaje */}
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="message" className="form-label">
                                                Mensaje
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Escribí tu mensaje acá..."
                                                rows="5"
                                                required
                                                minLength="10"
                                                maxLength="5000"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    {/* Botón de envío */}
                                    <div className="col-12 text-center">
                                        <motion.button
                                            type="submit"
                                            className="contact-btn"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span
                                                        className="spinner-border spinner-border-sm me-2"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                    Enviando...
                                                </>
                                            ) : (
                                                "Enviar Mensaje"
                                            )}
                                        </motion.button>
                                    </div>

                                    {/* Mensajes de estado */}
                                    {submitStatus === "success" && (
                                        <div className="col-12">
                                            <motion.div
                                                className="contact-alert contact-alert-success"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                role="alert"
                                            >
                                                <span className="contact-alert-icon" aria-hidden="true">
                                                    <i className="fas fa-check"></i>
                                                </span>
                                                <div>
                                                    <strong>¡Mensaje enviado!</strong>
                                                    <p>Te responderemos a la brevedad.</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    )}

                                    {submitStatus === "error" && (
                                        <div className="col-12">
                                            <motion.div
                                                className="contact-alert contact-alert-error"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                role="alert"
                                            >
                                                <span className="contact-alert-icon" aria-hidden="true">
                                                    <i className="fas fa-exclamation"></i>
                                                </span>
                                                <div>
                                                    <strong>Error al enviar</strong>
                                                    <p>Intentá nuevamente más tarde.</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}