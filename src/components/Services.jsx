import "./Services.css";
import { Shirt, Scissors, Package, ShieldCheck } from "lucide-react";

const whatsappUrl = `https://wa.me/551120350589?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

const services = [
  {
    Icon: Shirt,
    title: "Uniformes Escolares",
    description: "Confecção completa de uniformes para escolas: camisetas, agasalhos, bermudas e mais, com materiais duráveis e confortáveis.",
  },
  {
    Icon: Scissors,
    title: "Bordados e Personalizações",
    description: "Bordados precisos com a identidade visual da sua escola — logo, nome e cores com acabamento profissional.",
  },
  {
    Icon: Package,
    title: "Pedidos por Encomenda",
    description: "Produção sob medida para qualquer volume, do pedido pequeno ao fornecimento de toda a grade escolar.",
  },
  {
    Icon: ShieldCheck,
    title: "Qualidade Garantida",
    description: "Cada peça passa por controle de qualidade rigoroso antes de ser entregue, garantindo padronização total.",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="services-label">O que fazemos</span>
          <h2>Nossos Serviços</h2>
          <p>Soluções completas em uniformes escolares, do projeto à entrega.</p>
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
        <div className="services-cta">
          <p>Pronto para fazer o pedido da sua escola?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta-btn"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
