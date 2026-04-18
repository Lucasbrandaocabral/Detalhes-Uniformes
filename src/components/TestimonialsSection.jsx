import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './TestimonialsSection.css';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Maria Silva",
    title: "Diretora, Colégio Aprender Mais",
    avatar: '/Detalhes-Uniformes/assets/avatars/maria-silva.jpg',
    text: "A parceria com a Detalhes Uniformes foi um divisor de águas. A qualidade do material é excepcional e a entrega programada nos deu uma tranquilidade que não tínhamos com outros fornecedores.",
    stars: 5,
  },
  {
    name: "João Pereira",
    title: "Coordenador, Escola Crescer",
    avatar: '/Detalhes-Uniformes/assets/avatars/joao-pereira.jpg',
    text: "O atendimento personalizado fez toda a diferença. Eles entenderam nossa necessidade e entregaram uniformes com um caimento perfeito e cores fiéis à nossa identidade visual. Recomendo!",
    stars: 5,
  },
  {
    name: "Ana Costa",
    title: "Gerente Adm., Instituto Educar",
    avatar: '/Detalhes-Uniformes/assets/avatars/ana-costa.jpg',
    text: "Qualidade, pontualidade e um ótimo custo-benefício. Os pais dos alunos elogiaram muito o conforto e a durabilidade dos novos uniformes. Estamos muito satisfeitos.",
    stars: 5,
  },
];

const logosData = [
  { id: 1, src: '/Detalhes-Uniformes/assets/logos/colegio-da-comunidade.png', alt: "Colégio da Comunidade" },
  { id: 2, src: '/Detalhes-Uniformes/assets/logos/colegio-alheambra-rodrigues.png', alt: "Colégio Alheambra Rodrigues" },
  { id: 3, src: '/Detalhes-Uniformes/assets/logos/colegio-evangelico-de-itaquera.png', alt: "Colégio Evangelico de Itaquera" },
  { id: 4, src: '/Detalhes-Uniformes/assets/logos/colegio-inovacao.png', alt: "Colégio Inovação" },
  { id: 5, src: '/Detalhes-Uniformes/assets/logos/colegio-mania-de-aprender.png', alt: "Colégio Mania de Aprender" },
  { id: 6, src: '/Detalhes-Uniformes/assets/logos/colegio-mega-visao.png', alt: "Colégio Mega Visão" },
];

function StarRating({ count }) {
  return (
    <div className="star-rating">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="testimonials-label">Depoimentos</span>
          <h2>O que nossos clientes dizem</h2>
          <p>A satisfação de quem confia em nosso trabalho é nossa maior conquista.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1100: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="testimonials-swiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="testimonial-card">
                <StarRating count={testimonial.stars} />
                <p className="testimonial-text">"{testimonial.text}"</p>
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

        <div className="logos-container">
          <h3 className="logos-title">Escolas que confiam em nosso trabalho</h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
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
