import './ContactSection.css';

import { Phone, Mail, Instagram, MessageCircle, MapPin, Truck } from 'lucide-react';

const contactInfo = {
  phone: "+55 11 2035-0589",
  whatsapp: "+551120350589",
  email: "detalhesunif@gmail.com",
  instagram: "https://www.instagram.com/detalhesuniformes",
};

const zones = [
  "Zona Norte",
  "Zona Sul",
  "Zona Leste",
  "Zona Oeste",
  "Centro",
  "Grande SP",
];

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="contact-label">Fale Conosco</span>
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender sua instituição. Escolha o melhor canal para você.</p>
        </div>

        <div className="contact-layout">
          {/* --- LADO ESQUERDO: COBERTURA --- */}
          <div className="coverage-container">
            <div className="coverage-header">
              <div className="coverage-icon-wrap">
                <MapPin size={28} />
              </div>
              <div>
                <h3>Atendemos toda São Paulo</h3>
                <p>Entregamos em qualquer região da cidade e Grande SP</p>
              </div>
            </div>

            <div className="zones-grid">
              {zones.map((zone) => (
                <div className="zone-badge" key={zone}>
                  <span className="zone-dot" />
                  {zone}
                </div>
              ))}
            </div>

            <div className="coverage-delivery">
              <Truck size={20} />
              <span>Entrega via transportadora para todo o estado de SP</span>
            </div>

            <div className="coverage-note">
              Não encontrou sua região? Entre em contato — atendemos sob consulta para qualquer localidade.
            </div>
          </div>

          {/* --- LADO DIREITO: CANAIS --- */}
          <div className="info-container">
            <a href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon-wrapper whatsapp">
                <MessageCircle size={24} />
              </div>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </a>

            <a href={`tel:${contactInfo.whatsapp}`} className="contact-card">
              <div className="contact-icon-wrapper phone">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>Telefone</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </a>

            <a href={`mailto:${contactInfo.email}`} className="contact-card">
              <div className="contact-icon-wrapper email">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h4>E-mail</h4>
                <p>{contactInfo.email}</p>
              </div>
            </a>

            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon-wrapper instagram">
                <Instagram size={24} />
              </div>
              <div className="contact-details">
                <h4>Instagram</h4>
                <p>@detalhesuniformes</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
