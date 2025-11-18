import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./TecidosSection.css"; 
import { 
  Leaf, 
  Cloud, 
  Wind, 
  Feather, 
  StretchHorizontal, 
  Waves,
  ShieldCheck,
  Droplets,
  Shield,
  Layers,
  Flame,
  Settings 
} from 'lucide-react';


// --- Dados dos Tecidos ---
// Organizar os dados aqui facilita a manutenção.
const tecidosData = [
  {
    id: 1,
    nome: 'Algodão 100%',
    imagem: './src/assets/algodao.jpg',
    beneficios: [
      { Icone: Leaf, texto: 'Natural' },
      { Icone: Cloud, texto: 'Conforto' },
    ],
    descricao: 'Fibra natural, respirável e macia, ideal para o uso diário e uniformes escolares.',
  },
  {
    id: 2,
    nome: 'Dry-Fit',
    imagem: './src/assets/dry-fit.jpg',
    beneficios: [
      { Icone: Wind, texto: 'Secagem Rápida' },
      { Icone: Feather, texto: 'Leveza' },
    ],
    descricao: 'Perfeito para a linha esportiva, afasta o suor da pele, mantendo o corpo seco e confortável.',
  },
  {
    id: 3,
    nome: 'Piquet',
    imagem: './src/assets/piquet.jpg',
    beneficios: [
      { Icone: StretchHorizontal, texto: 'Elasticidade' },
      { Icone: Waves, texto: 'Textura' },
    ],
    descricao: 'Clássico e elegante, seu relevo característico proporciona um ótimo caimento para camisas polo.',
  },
  {
    id: 4,
    nome: 'Gabardine',
    imagem: './src/assets/gabardine.jpg',
    beneficios: [
      { Icone: ShieldCheck, texto: 'Durabilidade' },
      { Icone: Waves, texto: 'Caimento' },
    ],
    descricao: 'Tecido encorpado e resistente, indicado para uniformes profissionais que exigem durabilidade.',
  },
  {
  id: 5,
  nome: 'Oxford Light',
  imagem: './src/assets/oxford-light.jpg',
  beneficios: [
    { Icone: Wind, texto: 'Respirável' },
    { Icone: Settings, texto: 'Fácil de cuidar' },
  ],
  descricao: 'Tecido leve e elegante, ideal para camisas e uniformes sociais, com ótimo caimento e conforto térmico.',
  },
];

const TecidoCard = ({ tecido }) => (
  <div 
    className="tecido-card" 
    style={{ backgroundImage: `url(${tecido.imagem})` }}
  >
    <div className="card-overlay">
      <div className="card-content-front">
        <h3 className="tecido-nome">{tecido.nome}</h3>
        <div className="beneficios-container">
          {tecido.beneficios.map(({ Icone, texto }, index) => (
            <div key={index} className="beneficio-item">
              <Icone color="white" size={28} strokeWidth={1.5} />
              <span>{texto}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card-content-back">
        <p className="tecido-descricao">{tecido.descricao}</p>
      </div>
    </div>
  </div>
);

// --- Componente Principal da Seção ---
export default function TecidosSection() {
  return (
    <section className="tecidos-section">
      <div className="container">
        <h2 className="section-title">Qualidade que se Sente na Pele</h2>
        <p className="section-subtitle">
          Deslize para conhecer os materiais que garantem conforto, durabilidade e uma aparência impecável.
        </p>

        <Swiper
          // Módulos a serem utilizados
          modules={[Navigation, Pagination, A11y]}
          // Espaçamento entre os slides em pixels
          spaceBetween={30}
          // Habilita a navegação por setas
          navigation
          // Habilita a paginação por bolinhas clicáveis
          pagination={{ clickable: true }}
          // Permite que o carrossel rode em loop infinito
          loop={true}
          // Configurações de responsividade para diferentes tamanhos de tela
          breakpoints={{
            // Em telas com 640px ou mais, mostra 2 slides
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Em telas com 1024px ou mais, mostra 3 slides
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          // Classe CSS para customizações adicionais
          className="tecidos-swiper"
        >
          {/* Mapeia os dados para criar um slide para cada tecido */}
          {tecidosData.map((tecido) => (
            <SwiperSlide key={tecido.id}>
              <TecidoCard tecido={tecido} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
