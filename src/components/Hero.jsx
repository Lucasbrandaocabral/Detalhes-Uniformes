import { useRef, useState, useEffect, Fragment } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import "./Hero.css";
import { ArrowDown } from "lucide-react";
import HeroShowcase from "./HeroShowcase";

const dynamicWords = ["Identidade", "Tradição", "Propósito"];
const whatsappUrl = `https://wa.me/551120350589?text=${encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento."
)}`;

const TITLE_STATIC = "Uniformes Escolares com";

const MARQUEE_ITEMS = [
  "Uniformes escolares",
  "Bordados personalizados",
  "Moletom",
  "Dry-fit",
  "Piquet",
  "Gabardine",
  "Oxford",
  "Pedidos sob encomenda",
  "Controle de qualidade",
];
const NAVY = "#0D2557";

// Costura curva pontilhada, atravessando o layout (mesa de modelagem)
const STITCHES = [
  "M-40,60 C360,20 700,100 1040,50 S1320,70 1480,30",
  "M-40,150 C320,60 560,250 770,170 S1180,120 1480,210",
  "M-40,300 C260,250 520,360 820,300 S1240,250 1480,330",
  "M-40,470 C320,400 560,520 900,440 S1300,470 1480,430",
  "M-40,620 C300,560 600,700 880,610 S1260,640 1480,560",
  "M-40,770 C260,850 540,660 840,770 S1250,820 1480,700",
  "M-40,880 C340,840 680,910 1020,870 S1320,890 1480,850",
  "M120,-40 C200,200 80,430 240,640 S180,860 300,940",
  "M1180,-40 C1120,220 1300,430 1160,640 S1270,860 1180,940",
];

// Wireframes de peças (camiseta, jaqueta, shorts, mochila)
const GARMENTS = [
  { d: "M22,30 L6,40 L16,58 L26,50 L26,94 L74,94 L74,50 L84,58 L94,40 L78,30 L66,22 C58,30 42,30 34,22 Z", x: 150, y: 135, s: 1.7 },
  { d: "M20,28 L6,40 L16,58 L24,50 L24,96 L46,96 L50,42 L54,96 L76,96 L76,50 L84,58 L94,40 L80,28 L64,22 L50,40 L36,22 Z", x: 1120, y: 120, s: 1.7 },
  { d: "M16,12 L84,12 L80,30 L74,66 L54,66 L50,38 L46,66 L26,66 L20,30 Z", x: 165, y: 690, s: 1.8 },
  { d: "M24,32 Q24,18 38,16 L62,16 Q76,18 76,32 L72,84 Q72,92 62,92 L38,92 Q28,92 28,84 Z M40,16 Q40,6 50,6 Q60,6 60,16 M34,56 L66,56 L62,82 L38,82 Z", x: 1175, y: 640, s: 1.8 },
];

// Peças extras que só aparecem no reveal do cursor
const circle = (cx, cy, r) =>
  `M${cx - r},${cy} a${r},${r} 0 1,0 ${r * 2},0 a${r},${r} 0 1,0 ${-r * 2},0`;
const TAPE =
  "M0,0 L240,0 L240,20 L0,20 Z " +
  Array.from({ length: 23 }, (_, i) => `M${10 + i * 10},0 L${10 + i * 10},${i % 5 === 4 ? 10 : 5}`).join(" ");

const EXTRAS = [
  // camisa polo
  { d: "M22,30 L6,40 L16,58 L26,50 L26,94 L74,94 L74,50 L84,58 L94,40 L78,30 L62,22 L50,34 L38,22 Z M50,34 L50,54 M38,22 L44,36 L50,34 L56,36 L62,22", x: 560, y: 105, s: 1.3 },
  // saia pregueada
  { d: "M30,14 L70,14 L70,22 L86,86 L14,86 L30,22 Z M30,22 L70,22 M40,22 L34,86 M50,22 L50,86 M60,22 L66,86", x: 40, y: 400, s: 1.4 },
  // boné
  { d: "M18,62 Q18,24 52,24 Q86,24 86,62 Z M86,62 L104,66 Q108,72 98,72 L60,72 L60,62 M52,24 L52,18 M36,30 Q44,46 44,62 M68,30 Q60,46 60,62", x: 610, y: 735, s: 1.3 },
  // tesoura
  { d: `${circle(30, 74, 11)} ${circle(62, 74, 11)} M36,64 L76,8 M56,64 L16,8`, x: 420, y: 570, s: 1.2 },
  // carretel de linha
  { d: "M30,14 L70,14 L70,22 L30,22 Z M30,78 L70,78 L70,86 L30,86 Z M36,22 L36,78 M64,22 L64,78 M36,32 L64,40 M36,42 L64,50 M36,52 L64,60 M36,62 L64,70 M64,70 Q92,76 86,98", x: 330, y: 745, s: 1.2 },
  // botão
  { d: `${circle(50, 50, 30)} ${circle(50, 50, 22)} ${circle(42, 42, 3)} ${circle(58, 42, 3)} ${circle(42, 58, 3)} ${circle(58, 58, 3)}`, x: 700, y: 420, s: 0.9 },
  // agulha com linha
  { d: "M10,90 L84,16 M78,16 Q86,8 90,14 Q92,20 84,22 M86,18 C60,40 74,70 40,82 S14,70 6,60", x: 50, y: 215, s: 1.2 },
  // fita métrica
  { d: TAPE, x: 860, y: 815, s: 1 },
  // lado do painel (aparecem em dourado)
  { d: `${circle(30, 74, 11)} ${circle(62, 74, 11)} M36,64 L76,8 M56,64 L16,8`, x: 1300, y: 150, s: 1.1 },
  { d: `${circle(50, 50, 30)} ${circle(50, 50, 22)} ${circle(42, 42, 3)} ${circle(58, 42, 3)} ${circle(42, 58, 3)} ${circle(58, 58, 3)}`, x: 1330, y: 430, s: 0.8 },
  { d: "M30,14 L70,14 L70,22 L30,22 Z M30,78 L70,78 L70,86 L30,86 Z M36,22 L36,78 M64,22 L64,78 M36,32 L64,40 M36,42 L64,50 M36,52 L64,60 M36,62 L64,70 M64,70 Q92,76 86,98", x: 1300, y: 690, s: 1.1 },
];

// Mesmo recorte do .hero-panel (Hero.css), em pixels do canvas.
// Abaixo de 1024px o painel vira a .hero-band, que fica por cima do canvas.
function panelPath(W, H) {
  const p = new Path2D();
  if (W < 1024) return p;
  const x0 = W * 0.54;
  p.moveTo(x0 + W * 0.46 * 0.3, 84);
  p.lineTo(W, 84);
  p.lineTo(W, H);
  p.lineTo(x0, H);
  p.closePath();
  return p;
}

const TRAIL_MS = 900;

function PanelLights() {
  return (
    <>
      <span className="hero-blob hero-blob--gold" />
      <span className="hero-blob hero-blob--sky" />
      <span className="hero-blob hero-blob--royal" />
    </>
  );
}

function HeroArt() {
  return (
    <>
      <g fill="none" stroke={NAVY} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1.6 10">
        {STITCHES.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <g fill="none" stroke={NAVY} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.72">
        {GARMENTS.map((g, i) => (
          <path key={i} d={g.d} transform={`translate(${g.x} ${g.y}) scale(${g.s})`} />
        ))}
      </g>
    </>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};
const letterStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.026, delayChildren: 0.12 } },
};
const letterReveal = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.65, ease: [0.33, 1, 0.68, 1] } },
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const fxRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  // Palavra dinâmica (digitação)
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = dynamicWords[currentWordIndex];
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedWord(fullWord.substring(0, displayedWord.length - 1));
      } else {
        setDisplayedWord(fullWord.substring(0, displayedWord.length + 1));
      }
      if (!isDeleting && displayedWord === fullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedWord === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [displayedWord, isDeleting, currentWordIndex]);

  // Só considera "sem mouse" quando NÃO há hover E o ponteiro é grosso (celular/tablet)
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Glow dourado seguindo o cursor — só transform (GPU)
  const glowX = useMotionValue(-1000);
  const glowY = useMotionValue(-1000);
  const gx = useSpring(glowX, { stiffness: 140, damping: 22, mass: 0.4 });
  const gy = useSpring(glowY, { stiffness: 140, damping: 22, mass: 0.4 });

  // Rastro de costura dourada atrás do cursor
  const trailRef = useRef([]);

  const onMouseMove = (e) => {
    if (isTouch || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowX.set(x);
    glowY.set(y);
    const trail = trailRef.current;
    trail.push({ x, y, t: performance.now() });
    if (trail.length > 80) trail.shift();
  };
  const onMouseLeave = () => {
    if (isTouch) return;
    glowX.set(-1000);
    glowY.set(-1000);
  };

  // Canvas: partículas douradas + reveal da costura/peças ao redor do cursor
  useEffect(() => {
    const canvas = fxRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let W = 0;
    let H = 0;
    let parts = [];

    const art = document.createElement("canvas");
    const actx = art.getContext("2d");
    const stitchP = STITCHES.map((d) => new Path2D(d));
    const shapes = [...GARMENTS, ...EXTRAS].map((g) => ({ ...g, p: new Path2D(g.d) }));

    // Desenha costuras + peças; marinho no fundo claro, dourado sobre o painel
    const paintArt = (s, ox, oy, stitchColor, garmentColor) => {
      actx.translate(ox, oy);
      actx.scale(s, s);
      actx.lineCap = "round";
      actx.lineJoin = "round";
      actx.strokeStyle = stitchColor;
      actx.lineWidth = 1.6;
      actx.setLineDash([1.6, 10]);
      stitchP.forEach((p) => actx.stroke(p));
      actx.setLineDash([]);
      actx.strokeStyle = garmentColor;
      actx.lineWidth = 1.4;
      shapes.forEach((g) => {
        actx.save();
        actx.translate(g.x, g.y);
        actx.scale(g.s, g.s);
        actx.stroke(g.p);
        actx.restore();
      });
    };

    const renderArt = () => {
      art.width = W;
      art.height = H;
      const s = Math.max(W / 1440, H / 900);
      const ox = (W - 1440 * s) / 2;
      const oy = (H - 900 * s) / 2;
      const panel = panelPath(W, H);
      const outside = new Path2D();
      outside.rect(0, 0, W, H);
      outside.addPath(panel);

      actx.setTransform(1, 0, 0, 1, 0, 0);
      actx.clearRect(0, 0, W, H);

      actx.save();
      actx.clip(outside, "evenodd");
      paintArt(s, ox, oy, "rgba(13, 37, 87, 0.55)", "rgba(13, 37, 87, 0.42)");
      actx.restore();

      actx.save();
      actx.clip(panel);
      paintArt(s, ox, oy, "rgba(233, 215, 176, 0.5)", "rgba(194, 160, 99, 0.8)");
      actx.restore();
    };

    // Linha de costura que segue o cursor e some aos poucos
    const drawTrail = () => {
      const now = performance.now();
      const trail = trailRef.current;
      while (trail.length && now - trail[0].t > TRAIL_MS) trail.shift();
      if (trail.length < 2) return;
      ctx.lineCap = "round";
      ctx.lineWidth = 2.6;
      ctx.setLineDash([2.5, 8]);
      let dist = 0;
      for (let i = 1; i < trail.length; i++) {
        const a = trail[i - 1];
        const b = trail[i];
        const life = 1 - (now - b.t) / TRAIL_MS;
        ctx.lineDashOffset = -dist;
        ctx.strokeStyle = `rgba(176, 143, 78, ${life})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        dist += Math.hypot(b.x - a.x, b.y - a.y);
      }
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      W = parent.clientWidth;
      H = parent.clientHeight;
      canvas.width = W;
      canvas.height = H;
      const count = Math.max(10, Math.min(18, Math.round(W / 95)));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 0.8 + Math.random() * 1.6,
        vy: -(0.04 + Math.random() * 0.09),
        vx: (Math.random() - 0.5) * 0.04,
        a: 0.12 + Math.random() * 0.24,
        tw: Math.random() * Math.PI * 2,
      }));
      renderArt();
    };
    resize();
    window.addEventListener("resize", resize);

    const drawParticles = (animate) => {
      for (const p of parts) {
        if (animate) {
          p.y += p.vy;
          p.x += p.vx;
          p.tw += 0.02;
          if (p.y < -6) {
            p.y = H + 6;
            p.x = Math.random() * W;
          }
        }
        const a = animate ? p.a * (0.55 + 0.45 * Math.sin(p.tw)) : p.a;
        ctx.beginPath();
        ctx.fillStyle = `rgba(197, 159, 89, ${a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (reduceMotion) {
      ctx.clearRect(0, 0, W, H);
      drawParticles(false);
      return () => window.removeEventListener("resize", resize);
    }

    let t = 0;

    // Linhas de costura ondulando como ondas (mobile)
    const drawWaves = (time) => {
      const M = Math.max(6, Math.min(9, Math.round(H / 110)));
      ctx.lineCap = "round";
      ctx.lineWidth = 1.4;
      ctx.setLineDash([1.6, 10]);
      for (let j = 0; j < M; j++) {
        const baseY = (H * (j + 0.6)) / (M + 0.2);
        const amp = 12 + (j % 3) * 5;
        const k = (Math.PI * 2) / (200 + (j % 4) * 60);
        const phase = j * 0.9;
        const speed = 0.13 + (j % 2) * 0.05;
        ctx.strokeStyle = `rgba(13, 37, 87, ${0.1 + (j % 3) * 0.02})`;
        ctx.beginPath();
        for (let x = -20; x <= W + 20; x += 10) {
          const y = baseY + amp * Math.sin(x * k + phase + time * speed);
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.setLineDash([]);
    };

    const frame = () => {
      ctx.clearRect(0, 0, W, H);

      if (isTouch) {
        // No celular: as linhas ondulam sozinhas + brilho dourado vagueia por cima
        t += 0.016;
        glowX.set(W * (0.5 + 0.3 * Math.sin(t * 0.4) * Math.cos(t * 0.17)));
        glowY.set(H * (0.42 + 0.26 * Math.sin(t * 0.33)));
        drawWaves(t);
      } else {
        // No desktop: reveal seguindo o cursor
        const cx = gx.get();
        const cy = gy.get();
        const R = 300;
        if (cx > -400) {
          ctx.drawImage(art, 0, 0);
          ctx.globalCompositeOperation = "destination-in";
          const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
          grd.addColorStop(0, "rgba(0,0,0,1)");
          grd.addColorStop(0.55, "rgba(0,0,0,0.85)");
          grd.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = grd;
          ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
          ctx.globalCompositeOperation = "source-over";
        }
        drawTrail();
      }

      drawParticles(true);
      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion, isTouch, gx, gy, glowX, glowY]);

  const words = TITLE_STATIC.split(" ");
  const showGlow = !reduceMotion;

  return (
    <section
      className="hero-section"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <svg
        className="hero-art"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <HeroArt />
      </svg>

      {showGlow && (
        <motion.div className="hero-glow" aria-hidden="true" style={{ x: gx, y: gy }} />
      )}

      {/* Painel marinho atrás da vitrine, com manchas de luz em movimento (desktop) */}
      <div className="hero-panel" aria-hidden="true">
        <PanelLights />
      </div>

      <canvas className="hero-fx" ref={fxRef} aria-hidden="true" />

      <div className="hero-inner">
        <motion.div className="hero-content" variants={stagger} initial="hidden" animate="show">
          <motion.div className="hero-badge" variants={fadeUp}>
            <span className="hero-badge-dot" />
            Parceiro de +50 instituições de ensino em SP
          </motion.div>

          <motion.h1 className="hero-title" variants={letterStagger}>
            {words.map((word, wi) => (
              <Fragment key={wi}>
                <span className="hero-word">
                  {word.split("").map((ch, ci) => (
                    <motion.span className="hero-letter" variants={letterReveal} key={ci}>
                      {ch}
                    </motion.span>
                  ))}
                </span>
                {wi < words.length - 1 ? " " : null}
              </Fragment>
            ))}{" "}
            <span className="dynamic-word">{displayedWord}</span>
            <span className="cursor">|</span>
          </motion.h1>

          <motion.div className="hero-cta-container" variants={fadeUp}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-primary"
            >
              Solicitar Orçamento
            </a>
            <a href="#services" className="hero-cta-secondary">
              Conhecer Serviços <ArrowDown size={16} />
            </a>
          </motion.div>

          <motion.div className="hero-stats-strip" variants={fadeUp}>
            <div className="hero-stat">
              <strong>25+</strong>
              <span>Anos no Mercado</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>50+</strong>
              <span>Escolas Atendidas</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>100%</strong>
              <span>Personalizado</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* No celular/tablet o painel vira uma faixa atrás do carrossel */}
          <div className="hero-band" aria-hidden="true">
            <PanelLights />
          </div>
          <HeroShowcase />
        </motion.div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[0, 1].map((copy) => (
            <div className="hero-marquee-group" key={copy}>
              {MARQUEE_ITEMS.map((item) => (
                <span className="hero-marquee-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
