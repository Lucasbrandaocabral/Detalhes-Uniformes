import './Footer.css';

import { Instagram, Facebook, Linkedin, PhoneCall, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* --- Coluna 1: Logo e Descrição --- */}
        <div className="footer-column about">
          <h3 className="footer-logo">Detalhes Uniformes</h3>
          <p>Qualidade e confiança em uniformes escolares e profissionais há mais de 15 anos.</p>
        </div>

        {/* --- Coluna 2: Navegação --- */}
        <div className="footer-column links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        {/* --- Coluna 3: Contato --- */}
        <div className="footer-column contact">
          <h4>Contato</h4>
          <ul>
            <li>
              <Send  size={16} />
              <a href="mailto:contato@detalhesuniformes.com.br">contato@detalhesuniformes.com.br</a>
            </li>
            <li>
              <PhoneCall size={16} />
              <a href="tel:+551120350589">+55 (11) 2035-0589</a>
            </li>
          </ul>
        </div>

        {/* --- Coluna 4: Redes Sociais --- */}
        <div className="footer-column social">
          <h4></h4>
          <div className="social-icons">
            {/*<a href="https://www.instagram.com/detalhesuniformes" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>*/}
          </div>
        </div>
      </div>

      {/* --- Barra Inferior de Copyright --- */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Lucas Brandão Cabral Todos os direitos reservados.</p>
      </div>
    </footer>
   );
}
