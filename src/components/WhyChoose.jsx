import "./WhyChoose.css";
import { Palette, Ruler, Scissors, Shirt, Truck, Users } from "lucide-react";

const whatsappUrl = `https://wa.me/551120350589?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

const advantages = [
  { Icon: Shirt,    title: "Tecidos de Alta Qualidade",   description: "Materiais selecionados que garantem conforto e durabilidade." },
  { Icon: Scissors, title: "Bordados Personalizados",      description: "Sua marca em destaque com bordados de alta precisão e acabamento." },
  { Icon: Palette,  title: "Cores Personalizadas",         description: "Vasta gama de cores para alinhar à identidade visual da instituição." },
  { Icon: Ruler,    title: "Modelagem Comprovada",         description: "Modelos testados para caimento perfeito e conforto no dia a dia." },
  { Icon: Users,    title: "Tamanhos Variados",            description: "Grade completa do infantil ao adulto, sem exceções." },
  { Icon: Truck,    title: "Entrega Programada",           description: "Receba no prazo combinado, sem surpresas e com total confiabilidade." },
];

export default function WhyChoose() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">

        <div className="why-choose-left">
          <span className="why-choose-label">Nossos Diferenciais</span>
          <h2>Por que escolher a Detalhes Uniformes?</h2>
          <p>
            Mais de 15 anos atendendo escolas de toda São Paulo com
            qualidade, pontualidade e atendimento próximo. Cada detalhe é
            pensado para que sua instituição se destaque.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="why-choose-cta-btn"
          >
            Solicitar Orçamento
          </a>
        </div>

        <div className="why-choose-right">
          {advantages.map(({ Icon, title, description }, i) => (
            <div className="advantage-item" key={i}>
              <div className="advantage-icon">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="advantage-text">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
