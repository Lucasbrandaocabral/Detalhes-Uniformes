import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { MessageCircle, Menu, X } from 'lucide-react';

const whatsappInfo = {
  number: "+551120350589", 
  message: "Olá! Gostaria de solicitar um orçamento." 
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsMenuClosing(false);
      }, 400);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      handleToggleMenu();
    }
  };

  // 2. Cria a URL completa para o link do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappInfo.number}?text=${encodeURIComponent(whatsappInfo.message )}`;

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a 
          href="#"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();             // impede o reload
            window.scrollTo({ top: 0, behavior: "smooth" }); 
            if (isMenuOpen) handleToggleMenu(); // fecha o menu mobile
          }}
        >
          Detalhes Uniformes
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''} ${isMenuClosing ? 'closing' : ''}`}>
          <a href="#services" className="nav-link" onClick={handleLinkClick}>Serviços</a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>Sobre</a>
          <a href="#testimonials" className="nav-link" onClick={handleLinkClick}>Depoimentos</a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contato</a>
        </nav>

        <div className="navbar-actions">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="chat-button whatsapp-button"
          >
            <MessageCircle size={20} />
            <span>Fale no WhatsApp</span>
          </a>
          
          <div className="menu-icon" onClick={handleToggleMenu}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>
      </div>
    </header>
  );
}
