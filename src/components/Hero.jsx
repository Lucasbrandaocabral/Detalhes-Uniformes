import React, { useState, useEffect } from "react";
import "./Hero.css";
import { ArrowDown } from "lucide-react";

const dynamicWords = ["Identidade", "Tradição", "Propósito"];
const whatsappUrl = `https://wa.me/551120350589?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = dynamicWords[currentWordIndex];
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedWord(fullWord.substring(0, displayedWord.length - 1));
      } else {
        setDisplayedWord(fullWord.substring(0, displayedWord.length + 1));
      }
      if (!isDeleting && displayedWord === fullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedWord === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [displayedWord, isDeleting, currentWordIndex]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">Parceiro de +50 instituições de ensino em SP</div>
        <h1 className="hero-title">
          Uniformes Escolares com{" "}
          <span className="dynamic-word">{displayedWord}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="hero-subtitle">
          Há 25 anos vestindo escolas de São Paulo com qualidade, precisão e
          atenção a cada detalhe — do design à entrega.
        </p>
        <div className="hero-cta-container">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-cta-primary">
            Solicitar Orçamento
          </a>
          <a href="#services" className="hero-cta-secondary">
            Conhecer Serviços <ArrowDown size={16} />
          </a>
        </div>

        <div className="hero-stats-strip">
          <div className="hero-stat">
            <strong>25+</strong>
            <span>Anos no Mercado</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>50+</strong>
            <span>Escolas Atendidas</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>100%</strong>
            <span>Personalizado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
