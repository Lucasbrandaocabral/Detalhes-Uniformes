import "./MissionSection.css";
import { Target, Telescope, Gem, Landmark, Scale, Eye, Handshake, Users } from "lucide-react";

const values = [
  { Icon: Gem,       label: "Qualidade" },
  { Icon: Landmark,  label: "Tradição" },
  { Icon: Scale,     label: "Ética" },
  { Icon: Eye,       label: "Transparência" },
  { Icon: Handshake, label: "Respeito" },
  { Icon: Users,     label: "Foco no cliente" },
];

export default function MissionSection() {
  return (
    <section className="mvv-section">
      <div className="mvv-container">
        <div className="mvv-header">
          <span className="mvv-label">Nossa Essência</span>
          <h2>Missão, Visão e Valores</h2>
          <p className="mvv-intro">
            O que nos move e os princípios que guiam cada peça que produzimos.
          </p>
        </div>

        <div className="mvv-cards">
          <article className="mvv-card mvv-card--mission">
            <div className="mvv-card-icon">
              <Target size={26} strokeWidth={1.5} />
            </div>
            <h3>Missão</h3>
            <p>
              Criar uniformes e vestuários personalizados que representem a
              identidade do cliente, oferecendo qualidade, conforto e
              exclusividade para cada colégio.
            </p>
          </article>

          <article className="mvv-card mvv-card--vision">
            <div className="mvv-card-icon">
              <Telescope size={26} strokeWidth={1.5} />
            </div>
            <h3>Visão</h3>
            <p>
              Ser uma referência de uniformes para colégios na região da zona
              leste, destacando-se pelas parcerias de longa data, excelência e
              satisfação dos clientes.
            </p>
          </article>
        </div>

        <div className="mvv-values">
          <h3 className="mvv-values-title">Nossos Valores</h3>
          <div className="mvv-values-grid">
            {values.map(({ Icon, label }, i) => (
              <div className="mvv-value" key={i}>
                <span className="mvv-value-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <span className="mvv-value-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
