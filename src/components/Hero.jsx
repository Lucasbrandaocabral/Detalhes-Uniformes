import React, { useState, useEffect } from "react";
import "./Hero.css";
import { ArrowDown } from "lucide-react";

const dynamicWords = ["Incomparável", "Garantida", "Excepcional"];
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

    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedWord, isDeleting, currentWordIndex]);

  return (
    <section className="hero-section">
      {/* Imagem de fundo com pan horizontal */}
      <div
        className="image-background"
        style={{ backgroundImage: `url(/Detalhes-Uniformes/assets/hero-background.jpg)` }}
      > 
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-badge">Mais de 15 anos de experiência</div>
        <h1 className="hero-title">
          Uniformes Escolares de Qualidade{" "}
          <span className="dynamic-word">{displayedWord}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="hero-subtitle">
          Confeccionamos uniformes com excelência, atendendo instituições de
          ensino em toda São Paulo.
        </p>
        <div className="hero-cta-container">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-cta-primary">Solicitar Orçamento</a>
          <a href="#services" className="hero-cta-secondary">
            Conhecer Serviços <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
