import { useRef, useState, useEffect, Fragment } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import "./Hero.css";
import { ArrowDown } from "lucide-react";

const dynamicWords = ["Identidade", "Tradição", "Propósito"];
const whatsappUrl = `https://wa.me/551120350589?text=${encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento."
)}`;

const TITLE_STATIC = "Uniformes Escolares com";
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

  const onMouseMove = (e) => {
    if (isTouch || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
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
    const garmentP = GARMENTS.map((g) => new Path2D(g.d));

    const renderArt = () => {
      art.width = W;
      art.height = H;
      const s = Math.max(W / 1440, H / 900);
      const ox = (W - 1440 * s) / 2;
      const oy = (H - 900 * s) / 2;
      actx.setTransform(1, 0, 0, 1, 0, 0);
      actx.clearRect(0, 0, W, H);
      actx.translate(ox, oy);
      actx.scale(s, s);
      actx.lineCap = "round";
      actx.lineJoin = "round";
      actx.strokeStyle = "rgba(13, 37, 87, 0.55)";
      actx.lineWidth = 1.6;
      actx.setLineDash([1.6, 10]);
      stitchP.forEach((p) => actx.stroke(p));
      actx.setLineDash([]);
      actx.strokeStyle = "rgba(13, 37, 87, 0.42)";
      actx.lineWidth = 1.4;
      GARMENTS.forEach((g, i) => {
        actx.save();
        actx.translate(g.x, g.y);
        actx.scale(g.s, g.s);
        actx.stroke(garmentP[i]);
        actx.restore();
      });
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
    const frame = () => {
      ctx.clearRect(0, 0, W, H);

      // No celular (sem mouse), o ponto de luz passeia sozinho pelo hero
      let cx;
      let cy;
      if (isTouch) {
        t += 0.006;
        cx = W * (0.5 + 0.3 * Math.sin(t) * Math.cos(t * 0.45));
        cy = H * (0.42 + 0.26 * Math.sin(t * 0.85));
        glowX.set(cx);
        glowY.set(cy);
      } else {
        cx = gx.get();
        cy = gy.get();
      }

      // Reveal: costura/peças iluminadas só no raio do ponto de luz
      const R = W < 600 ? 210 : 300;
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

      <canvas className="hero-fx" ref={fxRef} aria-hidden="true" />

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

        <motion.p className="hero-subtitle" variants={fadeUp}>
          Há 25 anos vestindo escolas de São Paulo com qualidade, precisão e
          atenção a cada detalhe — do design à entrega.
        </motion.p>

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
    </section>
  );
}
