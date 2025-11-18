import "./Services.css";
import { Shirt, Handshake, Truck, ShieldCheck } from 'lucide-react';

const services = [
  {
    Icon: Shirt,
    title: "Uniformes Escolares",
    description: "Confeccionamos uniformes de alta qualidade com materiais duráveis e confortáveis."
  },
  {
    Icon: Handshake,
    title: "Atendimento Personalizado",
    description: "Oferecemos suporte próximo e soluções sob medida para cada instituição de ensino."
  },
  {
    Icon: Truck,
    title: "Entrega Rápida",
    description: "Garantimos prazos ágeis e entregas em todo o território da zona leste de São Paulo."
  },
  {
    Icon: ShieldCheck,
    title: "Qualidade Garantida",
    description: "Cada peça passa por um rigoroso controle de qualidade antes de ser entregue."
  }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p>Conheça o que torna a Detalhes Uniformes referência no setor.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                <service.Icon size={32} strokeWidth={1.5} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
