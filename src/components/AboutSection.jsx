import "./AboutSection.css";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Fundada há mais de 15 anos em São Paulo",
  "Atendimento exclusivo para instituições de ensino",
  "Produção própria com controle total de qualidade",
  "Equipe especializada em moda e confecção escolar",
];

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <span className="about-label">Quem Somos</span>
          <h2>Uma história construída com dedicação e qualidade</h2>
          <p>
            Há mais de 25 anos, cuidando de cada detalhe.
            A Detalhes Uniformes é uma empresa com mais de duas décadas de experiência na confecção de uniformes, atuando com seriedade, qualidade e compromisso. Somos especializados em uniformes escolares, camisetas, blusões, calças, além de vestuário para eventos cristãos e turmas de terceirão.
          </p>
          <p>
            Nossa história é construída com atenção aos detalhes, excelência no acabamento e respeito às necessidades de cada cliente, oferecendo peças que unem conforto, durabilidade e padronização. Na Detalhes Uniformes, cada uniforme é produzido com responsabilidade, profissionalismo e dedicação.
          </p>

          <ul className="about-highlights">
            {highlights.map((item, i) => (
              <li key={i}>
                <CheckCircle size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-visual">
          <div className="about-card-main">
            <span className="about-card-number">15+</span>
            <span className="about-card-desc">Anos de experiência</span>
          </div>
          <div className="about-card-secondary top-right">
            <span className="about-card-number">50+</span>
            <span className="about-card-desc">Escolas atendidas</span>
          </div>
          <div className="about-card-secondary bottom-left">
            <span className="about-card-number">100%</span>
            <span className="about-card-desc">Feito em São Paulo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
