import "./WhyChoose.css";

import { 
  Palette,      // Para Cores Personalizadas
  Ruler,        // Para Modelagem Exclusiva
  Scissors,     // Para Bordados/Corte
  Shirt,        // Para Tecidos de Qualidade
  Truck,        // Para Entrega Programada
  Users         // Para Tamanhos Variados
} from 'lucide-react';

// Array com os dados das vantagens.
const advantages = [
  {
    Icon: Shirt,
    title: "Tecidos de Alta Qualidade",
    description: "Selecionamos materiais que garantem conforto, durabilidade e ótima aparência."
  },
  {
    Icon: Scissors,
    title: "Bordados Personalizados",
    description: "Sua marca em destaque com bordados e estampas de alta precisão e acabamento."
  },
  {
    Icon: Palette,
    title: "Cores Personalizadas",
    description: "Uma vasta gama de cores para alinhar os uniformes à identidade visual da sua instituição."
  },
  {
    Icon: Ruler,
    title: "Modelagem Comprovada",
    description: "Nossos modelos são testados para garantir um caimento perfeito e conforto no dia a dia."
  },
  {
    Icon: Users,
    title: "Tamanhos Variados",
    description: "Atendemos todos os públicos, do infantil ao adulto, com uma grade de tamanhos completa."
  },
  {
    Icon: Truck,
    title: "Entrega Programada",
    description: "Receba seu pedido no prazo combinado, sem surpresas e com total confiabilidade."
  }
];

export default function WhyChoose() {
  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="section-header">
          <h2>Por que escolher a Detalhes Uniformes?</h2>
          <p>
            Nossa experiência e dedicação garantem uniformes de qualidade superior que atendem às necessidades de cada instituição.
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div className="advantage-card" key={index}>
              <div className="advantage-icon-wrapper">
                <advantage.Icon size={32} strokeWidth={1.5} />
              </div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
        
        <div className="why-choose-cta">
          <h3>Pronto para começar?</h3>
          <p>Entre em contato conosco e receba uma proposta personalizada para sua instituição.</p>
          <button className="cta-button">Solicite um Orçamento</button>
        </div>
      </div>
    </section>
  );
}
