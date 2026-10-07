import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Keyboard, A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-cards";
import "./HeroShowcase.css";

const products = [
  { src: "/assets/produtos/jaqueta-moletom-marinho.webp", kind: "Jaqueta em moletom", detail: "Faixas contrastantes e brasão bordado" },
  { src: "/assets/produtos/linha-colegio-comunidade.webp", kind: "Linha completa", detail: "Colégio da Comunidade" },
  { src: "/assets/produtos/camiseta-calca-campos-piaget.webp", kind: "Camiseta e calça", detail: "Colégio Campos Piaget" },
  { src: "/assets/produtos/moletom-colegio-inovacao.webp", kind: "Moletom canguru", detail: "Colégio Inovação" },
  { src: "/assets/produtos/conjunto-mania-de-aprender.webp", kind: "Camiseta e bermuda", detail: "Colégio Mania de Aprender" },
  { src: "/assets/produtos/agasalho-colegio-comunidade.webp", kind: "Agasalho e camiseta", detail: "Colégio da Comunidade" },
];

const pad = (n) => String(n).padStart(2, "0");

export default function HeroShowcase() {
  const reduceMotion = useReducedMotion();
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);

  return (
    <div className="showcase">
      <div className="showcase-frame" aria-hidden="true" />

      <Swiper
        modules={[EffectCards, Autoplay, Keyboard, A11y]}
        effect="cards"
        grabCursor
        loop
        cardsEffect={{ perSlideOffset: 9, perSlideRotate: 3, slideShadows: false }}
        autoplay={reduceMotion ? false : { delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
        keyboard={{ enabled: true }}
        a11y={{ prevSlideMessage: "Produto anterior", nextSlideMessage: "Próximo produto" }}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="showcase-swiper"
      >
        {products.map((p, i) => (
          <SwiperSlide key={p.src} className="showcase-slide">
            <img
              src={p.src}
              alt={`${p.kind} — ${p.detail}`}
              width="720"
              height="900"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="showcase-caption">
              <span className="showcase-kind">{p.kind}</span>
              <span className="showcase-detail">{p.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="showcase-controls">
        <button type="button" className="showcase-btn" onClick={() => swiper?.slidePrev()} aria-label="Produto anterior">
          <ChevronLeft size={18} />
        </button>
        <div className="showcase-progress">
          <span className="showcase-count">
            {pad(active + 1)} <em>/ {pad(products.length)}</em>
          </span>
          <div className="showcase-bar">
            <span style={{ transform: `scaleX(${(active + 1) / products.length})` }} />
          </div>
        </div>
        <button type="button" className="showcase-btn" onClick={() => swiper?.slideNext()} aria-label="Próximo produto">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
