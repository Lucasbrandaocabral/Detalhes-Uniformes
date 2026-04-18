import { useEffect, useRef, useState } from "react";
import "./StatsSection.css";

const stats = [
  { value: 15, suffix: "+", label: "Anos de Experiência" },
  { value: 50, suffix: "+", label: "Escolas Atendidas" },
  { value: 10000, suffix: "+", label: "Peças Produzidas por Ano" },
  { value: 100, suffix: "%", label: "Satisfação Garantida" },
];

function AnimatedNumber({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="stat-number">
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-container">
        <div className="stats-header">
          <span className="stats-label">Nossos Números</span>
          <h2>Resultados que falam por si</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <AnimatedNumber
                target={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
