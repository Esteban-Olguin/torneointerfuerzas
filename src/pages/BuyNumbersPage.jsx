import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = "http://localhost:3001"; // Cambiar en producción

// Precios por cantidad
const PRICES = {
    1: 100, // Precio de prueba
    2: 2000,
    3: 3000,
    4: 4000,
    5: 5000,
    10: 10000,
};

export default function BuyNumbersPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        quantity: 1,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [preferenceId, setPreferenceId] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null); // null, "pending", "paid", "error"
    const [assignedNumbers, setAssignedNumbers] = useState([]);
    const [checkingPayment, setCheckingPayment] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Crear preferencia de pago
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`${BACKEND_URL}/api/create-preference`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    quantity: parseInt(formData.quantity),
                }),
            });

            const data = await response.json();

            if (data.initPoint) {
                setPreferenceId(data.preferenceId);
                setPaymentStatus("pending");

                // Redirigir a MercadoPago
                window.location.href = data.initPoint;
            } else {
                alert("Error al crear el pago. Intentá nuevamente.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error al procesar el pago. Intentá nuevamente.");
            setPaymentStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Verificar estado del pago
    useEffect(() => {
        if (!preferenceId || paymentStatus !== "pending") return;

        const checkPaymentStatus = async () => {
            setCheckingPayment(true);

            try {
                const response = await fetch(`${BACKEND_URL}/api/payment-status/${preferenceId}`);
                const data = await response.json();

                if (data.status === "paid" && data.numbers.length > 0) {
                    setPaymentStatus("paid");
                    setAssignedNumbers(data.numbers);
                } else if (data.status === "rejected") {
                    setPaymentStatus("error");
                }
            } catch (error) {
                console.error("Error al verificar pago:", error);
            } finally {
                setCheckingPayment(false);
            }
        };

        // Verificar inmediatamente
        checkPaymentStatus();

        // Verificar cada 5 segundos
        const interval = setInterval(checkPaymentStatus, 5000);

        return () => clearInterval(interval);
    }, [preferenceId, paymentStatus]);

    // =====================================================
    // PANTALLA: Pago exitoso
    // =====================================================
    if (paymentStatus === "paid") {
        return (
            <section className="purchase-success-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <motion.div
                                className="purchase-success-card text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="success-icon">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                                <h2>¡Pago aprobado!</h2>
                                <p>Tu participación ha sido confirmada</p>

                                <div className="assigned-numbers">
                                    <h3>Tus números de la suerte:</h3>
                                    <div className="numbers-grid">
                                        {assignedNumbers.map((number) => (
                                            <span key={number} className="number-badge">
                                                {String(number).padStart(4, "0")}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="payment-info mt-4">
                                    <p className="text-muted">
                                        Te enviamos un email con los detalles de tu compra.
                                    </p>
                                    <button
                                        className="buy-page-btn mt-3"
                                        onClick={() => navigate("/")}
                                    >
                                        Volver al inicio
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // =====================================================
    // PANTALLA: Esperando pago
    // =====================================================
    if (paymentStatus === "pending") {
        return (
            <section className="purchase-pending-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <motion.div
                                className="purchase-pending-card text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="pending-icon">
                                    <i className="fas fa-clock"></i>
                                </span>
                                <h2>Esperando pago...</h2>
                                <p>Estamos verificando tu pago en MercadoPago</p>

                                <div className="spinner-border text-light mt-3" role="status">
                                    <span className="visually-hidden">Verificando...</span>
                                </div>

                                <p className="text-muted mt-3">
                                    {checkingPayment ? "Verificando pago..." : "Si ya pagaste, esperá unos segundos..."}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // =====================================================
    // PANTALLA: Error
    // =====================================================
    if (paymentStatus === "error") {
        return (
            <section className="purchase-error-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <motion.div
                                className="purchase-error-card text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="error-icon">
                                    <i className="fas fa-times-circle"></i>
                                </span>
                                <h2>Error en el pago</h2>
                                <p>No se pudo completar la compra</p>

                                <button
                                    className="buy-page-btn mt-3"
                                    onClick={() => setPaymentStatus(null)}
                                >
                                    Intentar nuevamente
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // =====================================================
    // PANTALLA: Formulario de compra
    // =====================================================
    return (
        <section className="buy-page-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <motion.div
                            className="buy-page-header text-center"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="buy-page-eyebrow">Participá ahora</span>
                            <h1 className="buy-page-title">Compra de Números</h1>
                            <p className="buy-page-subtitle">
                                Completá el formulario y participá del próximo sorteo
                            </p>
                        </motion.div>

                        <motion.div
                            className="buy-page-form-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    {/* Nombre */}
                                    <div className="col-md-6">
                                        <label className="form-label">Nombre completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                            placeholder="Tu nombre"
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="col-md-6">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                            placeholder="tucorreo@email.com"
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Teléfono */}
                                    <div className="col-md-6">
                                        <label className="form-label">Teléfono</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                            placeholder="Tu teléfono"
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Cantidad */}
                                    <div className="col-md-6">
                                        <label className="form-label">Cantidad de números</label>
                                        <select
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                            disabled={isSubmitting}
                                        >
                                            {Object.keys(PRICES).map(num => (
                                                <option key={num} value={num}>
                                                    {num} {num === "1" ? "número" : "números"} - ${PRICES[num]}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Resumen */}
                                    <div className="col-12">
                                        <div className="purchase-summary">
                                            <h3>Resumen de compra</h3>
                                            <p>
                                                Cantidad: {formData.quantity} {formData.quantity === 1 ? "número" : "números"}
                                            </p>
                                            <p>
                                                Total: ${PRICES[formData.quantity]}
                                            </p>
                                            <p className="text-muted">
                                                * Serás redirigido a MercadoPago para completar el pago
                                            </p>
                                        </div>
                                    </div>

                                    {/* Botón */}
                                    <div className="col-12 text-center">
                                        <motion.button
                                            type="submit"
                                            className="buy-page-btn"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" />
                                                    Procesando...
                                                </>
                                            ) : (
                                                "Pagar con MercadoPago"
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}