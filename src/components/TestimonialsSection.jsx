import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './TestimonialsSection.css';

import logoComunidade from '../assets/logos/colegio-da-comunidade.png';
import logoRodrigues from '../assets/logos/colegio-alheambra-rodrigues.png';
import logoItaquera from '../assets/logos/colegio-evangelico-de-itaquera.png';
import logoInovacao from '../assets/logos/colegio-inovaçao.png';
import logoMania from '../assets/logos/Colégio-Mania-de-Aprender.png';
import logoVisao from '../assets/logos/Colégio-Mega-Visão.png';

// Ícone para as aspas do depoimento
import { Quote } from 'lucide-react';

// --- Dados (Exemplos) ---
const testimonialsData = [
  {
    name: "Maria Silva",
    title: "Diretora, Colégio Aprender Mais",
    avatar: "/assets/avatars/maria-silva.jpg",
    text: "A parceria com a Detalhes Uniformes foi um divisor de águas. A qualidade do material é excepcional e a entrega programada nos deu uma tranquilidade que não tínhamos com outros fornecedores."
  },
  {
    name: "João Pereira",
    title: "Coordenador, Escola Crescer",
    avatar: "/assets/avatars/joao-pereira.jpg",
    text: "O atendimento personalizado fez toda a diferença. Eles entenderam nossa necessidade e entregaram uniformes com um caimento perfeito e cores fiéis à nossa identidade visual. Recomendo!"
  },
  {
    name: "Ana Costa",
    title: "Gerente Adm., Instituto Educar",
    avatar: "/assets/avatars/ana-costa.jpg",
    text: "Qualidade, pontualidade e um ótimo custo-benefício. Os pais dos alunos elogiaram muito o conforto e a durabilidade dos novos uniformes. Estamos muito satisfeitos."
  }
];

const logosData = [
  { id: 1, src: logoComunidade, alt: "Colégio da Comunidade" },
  { id: 2, src: logoRodrigues, alt: "Colégio Alheambra Rodrigues" },
  { id: 3, src: logoItaquera, alt: "Colégio Evangelico de Itaquera" },
  { id: 4, src: logoInovacao, alt: "Colégio Inovação" },
  { id: 5, src: logoMania, alt: "Colégio Mania de Aprender" },
  { id: 6, src: logoVisao, alt: "Colégio Mega Visão" },
];

// --- Componente Principal ---
export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        {/* --- Cabeçalho --- */}
        <div className="section-header">
          <h2>O que nossos clientes dizem</h2>
          <p>A satisfação de quem confia em nosso trabalho é nossa maior conquista.</p>
        </div>

        {/* --- Carrossel de Depoimentos --- */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="testimonials-swiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="testimonial-card">
                <Quote className="quote-icon" size={40} />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="author-info">
                  <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                  <div className="author-details">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-title">{testimonial.title}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Carrossel de Logos --- */}
        <div className="logos-container">
          <h3 className="logos-title">Escolas que confiam em nosso trabalho</h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2} // Começa com 2 logos em telas muito pequenas
            loop={true}
            autoplay={{
              delay: 2500, // Tempo em ms entre cada transição
              disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 40 },
              768: { slidesPerView: 4, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 60 },
            }}
            className="logos-swiper"
          >
            {logosData.map((logo) => (
              <SwiperSlide key={logo.id} className="logo-slide">
                <img src={logo.src} alt={logo.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
