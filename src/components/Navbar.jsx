import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  // State para controlar o fundo da navbar no scroll
  const [isScrolled, setIsScrolled] = useState(false);
  // State para controlar a abertura do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para abrir o chatbot
  const handleChatClick = () => {
    alert("Abrindo o assistente virtual..."); 
  };

  // Efeito para detectar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      // Se o scroll for maior que 10px, muda o estado
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o listener de evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpa o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // fecha o menu no mobile
  }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* --- Logo --- */}
        <a href="/" className="navbar-logo">
          Detalhes Uniformes
        </a>

        {/* --- Links de Navegação (Desktop) --- */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#tecidos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Tecidos</a>
          <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contato</a>
        </nav>


        {/* --- Botão de Chat e Ícone do Menu Mobile --- */}
        <div className="navbar-actions">
          <button
            className="chat-button"
            onClick={() => {
              window.open("https://wa.me/5511912345678", "_blank");
            }}
            >
            <MessageCircle size={20} />
            <span>Entre em contato</span>
          </button>
          
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>
      </div>
    </header>
  );
}
