const WHATSAPP_URL = `https://wa.me/551120350589?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

const knowledgeBase = {
  saudacao: {
    keywords: { "oi": 3, "olá": 3, "ola": 3, "bom dia": 3, "boa tarde": 3, "boa noite": 3, "hey": 2, "hello": 2, "tudo bem": 1, "boa": 1 },
    answer: "Olá! Sou o assistente virtual da Detalhes Uniformes. Estou aqui para tirar suas dúvidas sobre nossos uniformes escolares. Como posso te ajudar?",
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?", "Quais tecidos vocês usam?"],
  },
  orcamento: {
    keywords: { "orçamento": 3, "orcamento": 3, "preço": 2, "preco": 2, "valor": 2, "quanto custa": 3, "cotação": 2, "cotacao": 2, "comprar": 1, "pedir": 1 },
    answer: `Para solicitar um orçamento é simples! Como cada pedido é único (tecido, bordado, quantidade), calculamos na hora para garantir o melhor preço. Você pode falar conosco pelo WhatsApp clicando aqui: ${WHATSAPP_URL}`,
    suggestions: ["Quais são os prazos?", "Qual o pedido mínimo?", "Vocês emitem nota fiscal?"],
  },
  prazos: {
    keywords: { "prazo": 2, "entrega": 2, "demora": 2, "quando": 1, "tempo": 1, "dias": 1, "semana": 1, "rápido": 1, "rapido": 1, "urgente": 2 },
    answer: "Nossos prazos são planejados para você se organizar com antecedência:\n\n• Início do ano letivo: 30 a 60 dias\n• Reposições no meio do ano: 15 a 30 dias\n\nTrabalharemos juntos para cumprir o prazo combinado!",
    suggestions: ["Como faço um orçamento?", "Qual o pedido mínimo?"],
  },
  pedidoMinimo: {
    keywords: { "mínimo": 3, "minimo": 3, "quantidade mínima": 3, "pouco": 2, "poucos": 2, "pequeno pedido": 2, "poucas peças": 2, "1 peça": 2, "uma peça": 2 },
    answer: "Trabalhamos com pedidos a partir de pequenas quantidades! O pedido mínimo varia conforme o tipo de peça e personalização. Entre em contato pelo WhatsApp para verificarmos a viabilidade do seu pedido.",
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?"],
  },
  tamanhos: {
    keywords: { "tamanho": 2, "medida": 2, "grade": 2, "g3": 2, "g4": 2, "plus size": 2, "especial": 1, "infantil": 1, "adulto": 1, "criança": 1 },
    answer: "Atendemos todos os públicos com grade completa:\n\n• Infantil: 2 ao 16\n• Adulto: PP, P, M, G, GG\n• Tamanhos especiais (G3 em diante): sob consulta\n\nNinguém fica de fora!",
    suggestions: ["Quais tecidos vocês usam?", "Como faço um orçamento?"],
  },
  tecidos: {
    keywords: { "tecido": 2, "material": 2, "algodão": 2, "algodao": 2, "dry-fit": 2, "dryfit": 2, "piquet": 2, "gabardine": 2, "oxford": 2, "moletom": 2, "qualidade": 1 },
    answer: "Trabalhamos com uma variedade completa de tecidos de alta qualidade:\n\n• Algodão 100% — natural e confortável\n• Dry-Fit — esportivo, secagem rápida\n• Piquet — elegante para camisas polo\n• Gabardine — resistente e encorpado\n• Oxford Light — leve e social\n\nCada material é selecionado para durabilidade e conforto!",
    suggestions: ["Vocês fazem bordados?", "Como faço um orçamento?"],
  },
  bordado: {
    keywords: { "bordado": 3, "estampa": 2, "logo": 2, "logotipo": 2, "personalizar": 2, "personalização": 2, "personalizacao": 2, "identidade": 1, "marca": 1 },
    answer: "Sim! Fazemos bordados e estampas com a identidade visual da sua escola. Trabalhamos com:\n\n• Bordados computadorizados de alta precisão\n• Estampas em silk ou sublimação\n• Cores fiéis ao padrão da instituição\n\nSeu uniforme com a cara da sua escola!",
    suggestions: ["Quais tecidos vocês usam?", "Como faço um orçamento?"],
  },
  produtos: {
    keywords: { "produto": 2, "uniforme": 1, "camiseta": 2, "calça": 1, "bermuda": 1, "agasalho": 2, "moletom": 1, "esportivo": 2, "aventura": 1 },
    answer: "Nossa linha de produtos é completa:\n\n• Camisetas (algodão e dry-fit)\n• Camisas polo em piquet\n• Calças e bermudas\n• Agasalhos e moletons\n• Uniformes de Educação Física\n\nTudo com bordado ou estampa personalizada!",
    suggestions: ["Quais tecidos vocês usam?", "Vocês fazem bordados?"],
  },
  pagamento: {
    keywords: { "pagar": 2, "pagamento": 2, "parcela": 2, "cartão": 2, "cartao": 2, "nota fiscal": 2, "nf": 2, "boleto": 2, "pix": 2, "condições": 1 },
    answer: "Temos condições flexíveis de pagamento combinadas caso a caso. Aceitamos as formas mais comuns e emitimos nota fiscal para todos os pedidos. Entre em contato para verificar as opções disponíveis para o seu pedido!",
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?"],
  },
  processo: {
    keywords: { "processo": 2, "como funciona": 3, "etapas": 2, "fabricação": 2, "fabricacao": 2, "produção": 2, "producao": 2, "fazem": 1 },
    answer: "Nosso processo garante qualidade em cada peça:\n\n1. Corte do tecido\n2. Bordado ou estampa\n3. Costura e montagem\n4. Acabamento e conferência\n5. Entrega no prazo combinado\n\nCada etapa é feita com cuidado aqui na zona leste de SP!",
    suggestions: ["Quais são os prazos?", "Como faço um orçamento?"],
  },
  localizacao: {
    keywords: { "onde": 2, "localização": 3, "localizacao": 3, "endereço": 3, "endereco": 3, "zona leste": 2, "são paulo": 1, "sao paulo": 1, "bairro": 2, "fica": 1 },
    answer: "Estamos localizados na Zona Leste de São Paulo e atendemos instituições de toda a região. Para saber o endereço exato ou combinar uma visita, entre em contato pelo WhatsApp!",
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?"],
  },
  contato: {
    keywords: { "contato": 2, "falar": 1, "whatsapp": 2, "telefone": 2, "email": 2, "e-mail": 2, "ligar": 2, "chamar": 1 },
    answer: `Você pode nos contatar por:\n\n📱 WhatsApp: (11) 2035-0589\n📧 E-mail: detalhesunif@gmail.com\n\nOu clique aqui para abrir o WhatsApp: ${WHATSAPP_URL}`,
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?"],
  },
};

const WELCOME_MESSAGE = {
  text: "Olá! Sou o assistente virtual da Detalhes Uniformes. Estou aqui para tirar suas dúvidas. Como posso te ajudar?",
  suggestions: ["Como faço um orçamento?", "Quais são os prazos?", "Quais tecidos vocês usam?", "Vocês fazem bordados?"],
};

const FALLBACK = {
  text: "Não entendi completamente sua pergunta. Pode reformular? Posso te ajudar com:",
  suggestions: ["Orçamento e preços", "Prazos de entrega", "Tecidos e materiais", "Falar com atendente"],
};

export function getWelcomeMessage() {
  return WELCOME_MESSAGE;
}

export function getBotResponse(question) {
  if (!question || question.trim() === "") return WELCOME_MESSAGE;

  const q = question.toLowerCase();

  // Checar se quer falar com atendente humano
  if (q.includes("atendente") || q.includes("humano") || q.includes("pessoa") || q.includes("responsável")) {
    return {
      text: `Claro! Vou te conectar com nossa equipe agora mesmo. Clique aqui para abrir o WhatsApp: ${WHATSAPP_URL}`,
      suggestions: [],
    };
  }

  const scores = {};
  for (const key in knowledgeBase) {
    scores[key] = 0;
    for (const keyword in knowledgeBase[key].keywords) {
      if (q.includes(keyword)) {
        scores[key] += knowledgeBase[key].keywords[keyword];
      }
    }
  }

  let bestMatch = null;
  let maxScore = 0;
  for (const category in scores) {
    if (scores[category] > maxScore) {
      maxScore = scores[category];
      bestMatch = category;
    }
  }

  if (bestMatch && maxScore >= 2) {
    return {
      text: knowledgeBase[bestMatch].answer,
      suggestions: knowledgeBase[bestMatch].suggestions || [],
    };
  }

  return FALLBACK;
}
