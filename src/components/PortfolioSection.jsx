import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "./PortfolioSection.css";

const BASE = "/assets/portfolio/";

const categories = [
  { id: "todos", label: "Todos", cta: "Quero um orçamento", message: "Olá! Vi o portfólio no site e gostaria de um orçamento." },
  { id: "escolares", label: "Uniformes Escolares", cta: "Quero para minha escola", message: "Olá! Vi os uniformes no site e gostaria de um orçamento para minha escola." },
  { id: "terceirao", label: "Terceirão e Formaturas", cta: "Quero para minha turma", message: "Olá! Vi as peças de terceirão no site e gostaria de um orçamento para minha turma." },
  { id: "eventos", label: "Eventos e Igrejas", cta: "Quero para meu evento", message: "Olá! Vi as camisetas de eventos no site e gostaria de um orçamento." },
];

// Ordem pensada para o mosaico "Todos" alternar categorias e formatos
const works = [
  { file: "jaqueta-universitaria-marinho", w: 800, h: 1000, cat: "escolares", title: "Jaqueta universitária", detail: "Brasão bordado e punhos listrados" },
  { file: "moletom-terceirao-costas", w: 800, h: 1000, cat: "terceirao", title: "Moletom Terceirão 2025", detail: "Costas com estampa e apelido" },
  { file: "ruach-ate-que-o-senhor-venha", w: 800, h: 1200, cat: "eventos", title: "Camiseta Ruach", detail: "Até que o Senhor venha" },
  { file: "quimono-campos-piaget", w: 800, h: 800, cat: "escolares", title: "Quimono", detail: "Colégio Campos Piaget" },
  { file: "camiseta-terceirao-costas", w: 800, h: 1067, cat: "terceirao", title: "Camiseta Terceirão 2025", detail: "Estampa exclusiva da turma" },
  { file: "ruach-a-ele-toda-gloria", w: 800, h: 1000, cat: "eventos", title: "Camiseta Ruach", detail: "A Ele toda a glória" },
  { file: "jaqueta-universitaria-cdc", w: 800, h: 1000, cat: "escolares", title: "Jaqueta universitária", detail: "Colégio da Comunidade" },
  { file: "capuz-forrado-personalizado", w: 800, h: 1000, cat: "terceirao", title: "Capuz forrado", detail: "Forro com as assinaturas da turma" },
  { file: "camisetas-esportivas", w: 724, h: 543, cat: "escolares", title: "Camisetas esportivas", detail: "Linha de educação física" },
  { file: "ruach-fogo-arde", w: 800, h: 1200, cat: "eventos", title: "Camiseta Ruach", detail: "O fogo arderá" },
  { file: "agasalho-colegio-inovacao", w: 800, h: 1067, cat: "escolares", title: "Agasalho", detail: "Colégio Inovação" },
  { file: "camiseta-terceirao-frente", w: 800, h: 800, cat: "terceirao", title: "Camiseta Terceirão", detail: "Frente com o símbolo da turma" },
  { file: "ruach-cristo", w: 800, h: 1000, cat: "eventos", title: "Camiseta Ruach", detail: "Cristo" },
  { file: "conjunto-mania-de-aprender", w: 780, h: 780, cat: "escolares", title: "Regata, camiseta e shorts", detail: "Colégio Mania de Aprender" },
  { file: "moletom-terceirao-frente", w: 800, h: 1000, cat: "terceirao", title: "Moletom Terceirão 2025", detail: "Canguru com o símbolo da turma" },
  { file: "ruach-geracao-eleita", w: 800, h: 1200, cat: "eventos", title: "Camiseta Ruach", detail: "Somos a geração eleita" },
  { file: "polo-colegio-inovacao", w: 800, h: 600, cat: "escolares", title: "Camiseta gola V", detail: "Colégio Inovação" },
  { file: "camiseta-terceirao-nome-numero", w: 800, h: 1200, cat: "terceirao", title: "Camiseta Terceirão", detail: "Nome e número personalizados" },
  { file: "ruach-apaixonados-pelo-rei", w: 800, h: 1000, cat: "eventos", title: "Camiseta Ruach", detail: "Apaixonados pelo Rei" },
  { file: "ruach-orai-sem-cessar", w: 800, h: 1000, cat: "eventos", title: "Camiseta Ruach", detail: "Orai sem cessar" },
  { file: "ruach-jesus-the-way", w: 800, h: 1000, cat: "eventos", title: "Camiseta Ruach", detail: "Jesus — The way, the truth, the life" },
];

const INITIAL = 12;

const catLabel = Object.fromEntries(categories.map((c) => [c.id, c.label]));

export default function PortfolioSection() {
  const [active, setActive] = useState("todos");
  const [open, setOpen] = useState(null); // índice dentro da lista filtrada
  const [showAll, setShowAll] = useState(false);
  const touchX = useRef(null);

  const list = useMemo(
    () => (active === "todos" ? works : works.filter((w) => w.cat === active)),
    [active]
  );
  const current = categories.find((c) => c.id === active);
  const whatsappUrl = `https://wa.me/551120350589?text=${encodeURIComponent(current.message)}`;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + list.length) % list.length)),
    [list.length]
  );

  // Teclado + trava de rolagem com a foto ampliada
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const item = open !== null ? list[open] : null;

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <header className="portfolio-header">
          <span className="portfolio-label">Portfólio</span>
          <h2 className="portfolio-title">Nossos Trabalhos</h2>
          <p className="portfolio-subtitle">
            Peças que já saíram da nossa produção — de uniformes escolares a moletons
            de terceirão e camisetas para eventos.
          </p>
        </header>

        <div className="portfolio-tabs" role="tablist" aria-label="Categorias do portfólio">
          {categories.map((c) => {
            const count = c.id === "todos" ? works.length : works.filter((w) => w.cat === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active === c.id}
                className={`portfolio-tab ${active === c.id ? "is-active" : ""}`}
                onClick={() => {
                  setActive(c.id);
                  setShowAll(false);
                }}
              >
                {c.label}
                <span className="portfolio-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className={`portfolio-grid ${list.length <= 8 ? "is-small" : ""}`} key={active}>
          {(showAll ? list : list.slice(0, INITIAL)).map((w, i) => (
            <figure className="portfolio-item" key={w.file} style={{ "--i": i }}>
              <button
                type="button"
                className="portfolio-open"
                onClick={() => setOpen(i)}
                aria-label={`Ampliar: ${w.title} — ${w.detail}`}
              >
                <img
                  src={`${BASE}${w.file}.webp`}
                  alt={`${w.title} — ${w.detail}`}
                  width={w.w}
                  height={w.h}
                  loading="lazy"
                  decoding="async"
                />
                <span className="portfolio-zoom" aria-hidden="true">
                  <Expand size={16} />
                </span>
              </button>
              <figcaption className="portfolio-caption">
                <span className="portfolio-cat">{catLabel[w.cat]}</span>
                <span className="portfolio-name">{w.title}</span>
                <span className="portfolio-detail">{w.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {!showAll && list.length > INITIAL && (
          <div className="portfolio-more">
            <button type="button" className="portfolio-more-btn" onClick={() => setShowAll(true)}>
              Ver mais trabalhos <span>+{list.length - INITIAL}</span>
            </button>
          </div>
        )}

        <div className="portfolio-cta">
          <p>Gostou? Fazemos do jeito da sua escola, turma ou evento.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="portfolio-cta-btn">
            <FaWhatsapp size={20} />
            {current.cta}
          </a>
        </div>
      </div>

      {item && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} — ${item.detail}`}
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Fechar">
            <X size={26} />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={26} />
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img key={item.file} src={`${BASE}${item.file}.webp`} alt={`${item.title} — ${item.detail}`} />
            <figcaption>
              <span className="portfolio-cat">{catLabel[item.cat]}</span>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
              <em>{String(open + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}</em>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Próxima foto"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}
