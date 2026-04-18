import "./AboutSection.css";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Fundada há mais de 15 anos na zona leste de São Paulo",
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
            A Detalhes Uniformes nasceu do sonho de oferecer uniformes escolares
            que combinassem qualidade, conforto e identidade visual. Ao longo de
            mais de 15 anos, nos tornamos referência na zona leste de São Paulo,
            atendendo dezenas de instituições de ensino com compromisso e
            excelência.
          </p>
          <p>
            Nossa missão é vestir cada aluno com orgulho, garantindo peças
            duráveis, bem acabadas e que reflitam os valores de cada escola.
            Cada detalhe importa — por isso levamos esse nome.
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
            <span className="about-card-desc">Feito na zona leste</span>
          </div>
        </div>
      </div>
    </section>
  );
}
