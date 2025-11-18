import './ContactSection.css';

import { Phone, Mail, Instagram, MessageCircle, MapPin } from 'lucide-react';

// --- Informações de Contato ---
const contactInfo = {
  phone: "+55 11 2035-0589",
  whatsapp: "+551120350589",
  email: "detalhesunif@gmail.com",
  instagram: "https://www.instagram.com/detalhesuniformes",
  address: "Rua"
};

// URL do Google Maps
const mapUrl =
  "https://www.google.com/maps/d/embed?mid=1SUYTwhZwSOfOr-UG1ynLt8_7ZPCuwKs&ehbc=2E312F&noprof=1";


export default function ContactSection( ) {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender sua instituição. Escolha o melhor canal para você.</p>
        </div>

        <div className="contact-layout">
          {/* --- LADO ESQUERDO: MAPA --- */}
          <div className="map-container">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Endereço da Detalhes Uniformes"
            ></iframe>
          </div>

          {/* --- LADO DIREITO: INFORMAÇÕES --- */}
          <div className="info-container">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon-wrapper whatsapp">
                <MessageCircle size={24} />
              </div>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </a>

            <a href={`tel:${contactInfo.phone}`} className="contact-card">
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
