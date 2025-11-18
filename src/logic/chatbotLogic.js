const knowledgeBase = {
  apresentacao: "Olá! Sou o assistente virtual da Detalhes Uniformes. Estou aqui para ajudar com dúvidas sobre nossos produtos e serviços. Como posso te ajudar hoje?",
  
  prazos: {
    keywords: { "prazo": 2, "entrega": 2, "demora": 2, "quando chega": 2, "tempo": 1 },
    answer: "Nossos prazos de entrega são planejados para te dar total previsibilidade. No início do ano letivo, o prazo é de 30 a 60 dias. Para reposições no meio do ano, o prazo é mais curto, de 15 a 30 dias. Pode confiar, não atrasamos!"
  },
  personalizacao: {
    keywords: { "personalizado": 2, "exclusivo": 2, "minha logo": 2, "criação": 2, "desenvolvem": 1, "meu modelo": 1, "modelagem": 1 },
    answer: "Nós oferecemos um catálogo com modelos prontos e testados, garantindo agilidade e um ótimo custo-benefício. Não criamos moldes exclusivos do zero, mas personalizamos as peças com bordados, estampas e uma vasta gama de cores para deixar o uniforme com a cara da sua instituição."
  },
  tamanhos: {
    keywords: { "tamanho": 2, "medida": 2, "grade": 2, "g3": 2, "g4": 1, "especial": 1 },
    answer: "Trabalhamos com uma grade de tamanhos padrão completa, do infantil ao adulto (PP, P, M, G, GG). Para necessidades especiais, como tamanhos maiores (a partir do G3), oferecemos soluções sob consulta. É só nos chamar!"
  },
  tecidos: {
    keywords: { "tecido": 2, "material": 2, "algodão": 1, "dry-fit": 1, "moletom": 1, "piquet": 1, "gabardine": 1 },
    answer: "Temos uma ampla variedade de tecidos de alta qualidade! Trabalhamos com 100% algodão, PV, PA, poliéster, suplex, helanca, piquet, gabardine, oxford, moletom e muito mais. A escolha ideal depende do conforto e da durabilidade que você busca para cada tipo de uniforme."
  },
  produtos: {
    keywords: { "produto": 2, "tipo de uniforme": 2, "aventais": 2, "kimonos": 2, "esportivo": 1, "natação": 1 },
    answer: "Nossa linha de produtos é bem completa! Fazemos uniformes escolares e profissionais, aventais para professores, roupas para equipes de limpeza, e uma linha esportiva que inclui camisetas dry-fit, kimonos para artes marciais e até roupas de natação (sunga, maiô e touca)."
  },
  pagamento: {
    keywords: { "pagar": 2, "pagamento": 2, "parcela": 2, "cartão": 1, "condições": 1 },
    answer: "As condições de pagamento são flexíveis e combinadas caso a caso para sua maior comodidade. Geralmente, o pagamento é realizado após a entrega dos produtos. E sim, emitimos nota fiscal para todos os pedidos."
  },
  orcamento: {
    keywords: { "orçamento": 2, "preço": 2, "valor": 2, "quanto custa": 2, "cotação": 1 },
    answer: "Para solicitar um orçamento, o ideal é entrar em contato conosco diretamente pelo WhatsApp ou telefone. Como cada pedido é único (tipo de tecido, bordado, quantidade), calculamos os custos na hora para garantir o melhor e mais justo preço para você. Nossos orçamentos são sem compromisso!"
  },
  processo: {
    keywords: { "processo": 2, "como funciona": 2, "etapas": 2, "fabricação": 1, "produção": 1 },
    answer: "Nosso processo de produção é muito bem definido para garantir a qualidade. Ele segue as etapas: Corte do tecido -> Estampa ou Bordado -> Costura e montagem -> Acabamento final (botões, limpeza e conferência). Tudo é feito com muito cuidado!"
  },
  contato: {
    keywords: { "contato": 2, "falar com": 2, "whatsapp": 2, "telefone": 1, "endereço": 1, "email": 1 },
    answer: "Será um prazer falar com você! Você pode nos contatar via WhatsApp, telefone ou e-mail. Todas as informações detalhadas estão na seção 'Contato' aqui no nosso site."
  }
};

// O "Cérebro" do Bot 
export function getBotResponse(question) {
  if (!question || question.trim() === '') {
    return knowledgeBase.apresentacao;
  }

  const q = question.toLowerCase();
  let scores = {};

  // Inicializa os scores
  for (const key in knowledgeBase) {
    if (knowledgeBase[key].keywords) {
      scores[key] = 0;
    }
  }

  // Calcula a pontuação para cada categoria com base nos pesos
  for (const category in scores) {
    const keywordsWithWeights = knowledgeBase[category].keywords;
    for (const keyword in keywordsWithWeights) {
      if (q.includes(keyword)) {
        // Adiciona o peso da palavra-chave ao score da categoria
        scores[category] += keywordsWithWeights[keyword];
      }
    }
  }

  // Encontra a categoria com a maior pontuação
  let bestMatch = null;
  let maxScore = 0;
  for (const category in scores) {
    if (scores[category] > maxScore) {
      maxScore = scores[category];
      bestMatch = category;
    }
  }

  const confidenceThreshold = 1;

  if (bestMatch && maxScore > confidenceThreshold) {
    return knowledgeBase[bestMatch].answer;
  }

  return "Hum, não tenho certeza se entendi completamente. Poderia reformular sua pergunta? Sou treinado para responder sobre: Prazos, Personalização, Tamanhos, Tecidos, Produtos, Pagamento, Orçamento e nosso Processo de produção.";
}
