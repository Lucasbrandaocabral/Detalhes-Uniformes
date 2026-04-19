import './Footer.css';

import { Instagram, PhoneCall, Send, MessageCircle } from 'lucide-react';

const whatsappUrl = `https://wa.me/551120350589?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column about">
          <h3 className="footer-logo">Detalhes Uniformes</h3>
          <p>Qualidade e confiança em uniformes escolares há mais de 15 anos em toda São Paulo.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-whatsapp">
            <MessageCircle size={16} />
            Fale no WhatsApp
          </a>
        </div>

        <div className="footer-column links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#about-us">Quem Somos</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Diferenciais</a></li>
            <li><a href="#tecidos">Materiais</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h4>Contato</h4>
          <ul>
            <li>
              <Send size={16} />
              <a href="mailto:detalhesunif@gmail.com">detalhesunif@gmail.com</a>
            </li>
            <li>
              <PhoneCall size={16} />
              <a href="tel:+551120350589">+55 (11) 2035-0589</a>
            </li>
          </ul>
        </div>

        <div className="footer-column social">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/detalhesuniformes" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Detalhes Uniformes. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
