import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const statsData = [
    {
        id: 1,
        value: 500,
        suffix: "+",
        label: "Participantes",
        icon: "fas fa-users",
    },
    {
        id: 2,
        value: 10,
        suffix: "",
        label: "Sorteos realizados",
        icon: "fas fa-bullseye",
    },
    {
        id: 3,
        value: 2,
        prefix: "$",
        suffix: "M+",
        label: "En premios entregados",
        icon: "fas fa-trophy",
    },
    {
        id: 4,
        value: 100,
        suffix: "%",
        label: "Transparente",
        icon: "fas fa-check-circle",
    },
];

function AnimatedNumber({ value, prefix = "", suffix = "" }) {
    const [displayValue, setDisplayValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            if (currentStep <= steps) {
                setDisplayValue(Math.round(increment * currentStep));
            } else {
                setDisplayValue(value);
                clearInterval(interval);
            }
        }, duration / steps);

        return () => clearInterval(interval);
    }, [isVisible, value]);

    return (
        <span className="stat-number" ref={elementRef}>
            {prefix}{displayValue}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section id="statsSection" className="stats-section" aria-label="Estadísticas del torneo">
            <div className="container">
                <div className="row justify-content-center g-4">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            className="col-6 col-lg-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                type: "spring"
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="stat-card">
                                <div className="stat-icon" aria-hidden="true">
                                    <i className={stat.icon}></i>
                                </div>
                                <AnimatedNumber
                                    value={stat.value}
                                    prefix={stat.prefix || ""}
                                    suffix={stat.suffix || ""}
                                />
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}