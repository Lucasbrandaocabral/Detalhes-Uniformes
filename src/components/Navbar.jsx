import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import maiaSymbol from '../assets/brand/maia-symbol.png';
import maiaWordmark from '../assets/brand/maia-wordmark.png';

const whatsappInfo = {
  number: "+551120350589", 
  message: "Olá! Gostaria de solicitar um orçamento." 
};

const navLinks = [
  { href: '#tecidos', label: 'Materiais' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#about-us', label: 'Quem Somos' },
  { href: '#services', label: 'Serviços' },
  { href: '#contact', label: 'Contato' },
];

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

  // Trava a rolagem da página enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // 2. Cria a URL completa para o link do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappInfo.number}?text=${encodeURIComponent(whatsappInfo.message )}`;

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <a
          href="#"
          className="navbar-logo"
          aria-label="MAIA Uniformes"
          onClick={(e) => {
            e.preventDefault();             // impede o reload
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (isMenuOpen) handleToggleMenu(); // fecha o menu mobile
          }}
        >
          <img src={maiaSymbol} alt="" className="logo-symbol" />
          <img src={maiaWordmark} alt="MAIA Uniformes" className="logo-wordmark" />
        </a>

        <nav
          id="site-menu"
          className={`nav-menu ${isMenuOpen ? 'active' : ''} ${isMenuClosing ? 'closing' : ''}`}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{ '--i': i }}
              onClick={handleLinkClick}
            >
              <span className="nav-index">{String(i + 1).padStart(2, '0')}</span>
              {link.label}
            </a>
          ))}

          {/* Rodapé do menu mobile: contato direto */}
          <div className="nav-menu-footer">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-menu-whatsapp"
            >
              <FaWhatsapp size={22} />
              Solicitar orçamento
            </a>
            <div className="nav-menu-contacts">
              <a href="tel:+551120350589">
                <Phone size={16} /> (11) 2035-0589
              </a>
              <a href="https://www.instagram.com/detalhesuniformes" target="_blank" rel="noopener noreferrer">
                <Instagram size={16} /> @detalhesuniformes
              </a>
            </div>
          </div>
        </nav>

        <div className="navbar-actions">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="chat-button whatsapp-button"
          >
            <FaWhatsapp size={21} />
            <span>Fale no WhatsApp</span>
          </a>
          
          <button
            type="button"
            className="menu-icon"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
    </header>
  );
}
