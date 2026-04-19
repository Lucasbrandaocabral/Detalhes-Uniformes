const WHATSAPP_URL = `https://wa.me/551120350589?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

const knowledgeBase = {
  saudacao: {
    keywords: { "oi": 3, "olá": 3, "ola": 3, "bom dia": 3, "boa tarde": 3, "boa noite": 3, "hey": 2, "hello": 2, "tudo bem": 2, "boa": 1, "salve": 2, "eae": 2 },
    answer: "Olá! Sou o assistente virtual da Detalhes Uniformes. Estou aqui para tirar suas dúvidas sobre nossos uniformes escolares. Como posso te ajudar?",
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?", "Quais tecidos vocês usam?", "Onde vocês atendem?"],
  },

  orcamento: {
    keywords: { "orçamento": 3, "orcamento": 3, "preço": 2, "preco": 2, "valor": 2, "quanto custa": 3, "cotação": 2, "cotacao": 2, "comprar": 1, "pedir": 1, "custo": 2, "tabela": 1, "lista de preço": 2 },
    answer: `Para solicitar um orçamento é simples! Como cada pedido é único (tecido, bordado, quantidade), calculamos na hora para garantir o melhor preço.\n\n📱 Clique aqui para falar no WhatsApp: ${WHATSAPP_URL}\n\nTenha em mãos: tipo de peça, quantidade e se precisa de bordado.`,
    suggestions: ["Quais são os prazos?", "Qual o pedido mínimo?", "Vocês emitem nota fiscal?"],
  },

  prazos: {
    keywords: { "prazo": 2, "entrega": 2, "demora": 2, "quando": 1, "tempo": 1, "dias": 1, "semana": 1, "rápido": 1, "rapido": 1, "urgente": 2, "demorar": 2, "quanto tempo": 3 },
    answer: "Nossos prazos são planejados para você se organizar com antecedência:\n\n• Início do ano letivo: 30 a 60 dias\n• Reposições no meio do ano: 15 a 30 dias\n• Pedidos urgentes: consulte disponibilidade\n\nRecomendamos entrar em contato com antecedência para garantir seu prazo!",
    suggestions: ["Como faço um orçamento?", "Qual o pedido mínimo?", "Como funciona o processo?"],
  },

  pedidoMinimo: {
    keywords: { "mínimo": 3, "minimo": 3, "quantidade mínima": 3, "pouco": 2, "poucos": 2, "pequeno pedido": 2, "poucas peças": 2, "1 peça": 2, "uma peça": 2, "poucas unidades": 2 },
    answer: "Trabalhamos com pedidos a partir de pequenas quantidades! O pedido mínimo varia conforme o tipo de peça e personalização.\n\nPara bordados personalizados geralmente exigimos um mínimo de peças para viabilizar a produção. Entre em contato para verificarmos a viabilidade do seu pedido.",
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?", "Vocês fazem bordados?"],
  },

  tamanhos: {
    keywords: { "tamanho": 2, "medida": 2, "grade": 2, "g3": 2, "g4": 2, "plus size": 2, "especial": 1, "infantil": 1, "adulto": 1, "criança": 1, "número": 1, "numero": 1, "numeração": 1 },
    answer: "Atendemos todos os públicos com grade completa:\n\n👶 Infantil: 2 ao 16\n🧑 Adulto: PP, P, M, G, GG\n➕ Tamanhos especiais (G3 em diante): sob consulta\n\nNinguém fica de fora! Trabalhamos também com tamanhos sob medida.",
    suggestions: ["Quais tecidos vocês usam?", "Como faço um orçamento?", "Vocês fazem bordados?"],
  },

  tecidos: {
    keywords: { "tecido": 2, "material": 2, "algodão": 2, "algodao": 2, "dry-fit": 2, "dryfit": 2, "piquet": 2, "gabardine": 2, "oxford": 2, "moletom": 2, "qualidade": 1, "malha": 2, "poliéster": 1 },
    answer: "Trabalhamos com uma variedade completa de tecidos de alta qualidade:\n\n🌿 Algodão 100% — natural e confortável\n⚡ Dry-Fit — esportivo, secagem rápida\n👔 Piquet — elegante para camisas polo\n🧥 Gabardine — resistente e encorpado\n💼 Oxford Light — leve e social\n🧶 Moletom — ideal para agasalhos\n\nCada material é selecionado para durabilidade e conforto!",
    suggestions: ["Vocês fazem bordados?", "Como faço um orçamento?", "Quais produtos vocês têm?"],
  },

  bordado: {
    keywords: { "bordado": 3, "estampa": 2, "logo": 2, "logotipo": 2, "personalizar": 2, "personalização": 2, "personalizacao": 2, "identidade": 1, "marca": 1, "silk": 2, "sublimação": 2, "sublimacao": 2, "customizar": 2 },
    answer: "Sim! Fazemos bordados e estampas com a identidade visual da sua escola:\n\n🪡 Bordados computadorizados de alta precisão\n🖨️ Estampas em silk ou sublimação\n🎨 Cores fiéis ao padrão da instituição\n📐 Posicionamento exato conforme solicitado\n\nEnvie o arquivo do logo (vetorizado, se possível) pelo WhatsApp e já conseguimos fazer uma análise!",
    suggestions: ["Quais tecidos vocês usam?", "Como faço um orçamento?", "Como funciona o processo?"],
  },

  produtos: {
    keywords: { "produto": 2, "uniforme": 1, "camiseta": 2, "calça": 1, "bermuda": 1, "agasalho": 2, "moletom": 1, "esportivo": 2, "aventura": 1, "camisa": 1, "polo": 2, "jaqueta": 2, "colete": 2, "tênis": 1 },
    answer: "Nossa linha de produtos é completa:\n\n👕 Camisetas (algodão e dry-fit)\n👔 Camisas polo em piquet\n👖 Calças e bermudas\n🧥 Agasalhos e moletons\n🏃 Uniformes de Educação Física\n🎽 Uniformes esportivos\n\nTudo com bordado ou estampa personalizada para sua escola!",
    suggestions: ["Quais tecidos vocês usam?", "Vocês fazem bordados?", "Como faço um orçamento?"],
  },

  pagamento: {
    keywords: { "pagar": 2, "pagamento": 2, "parcela": 2, "cartão": 2, "cartao": 2, "nota fiscal": 2, "nf": 2, "boleto": 2, "pix": 2, "condições": 1, "parcelar": 2, "crédito": 2, "debito": 1 },
    answer: "Temos condições flexíveis de pagamento:\n\n💳 Cartão de crédito\n📲 PIX\n🏦 Boleto bancário\n📄 Nota fiscal para todos os pedidos\n\nAs condições de parcelamento são combinadas conforme o volume do pedido. Entre em contato para mais detalhes!",
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?", "Qual o pedido mínimo?"],
  },

  processo: {
    keywords: { "processo": 2, "como funciona": 3, "etapas": 2, "fabricação": 2, "fabricacao": 2, "produção": 2, "producao": 2, "fazem": 1, "como é feito": 3, "como e feito": 3 },
    answer: "Nosso processo garante qualidade em cada peça:\n\n1️⃣ Briefing — entendemos suas necessidades\n2️⃣ Aprovação de arte — logo e cores\n3️⃣ Corte do tecido com precisão\n4️⃣ Bordado ou estampa\n5️⃣ Costura e montagem\n6️⃣ Acabamento e conferência final\n7️⃣ Entrega no prazo combinado\n\nAcompanhe cada etapa com nossa equipe!",
    suggestions: ["Quais são os prazos?", "Como faço um orçamento?", "Vocês fazem bordados?"],
  },

  localizacao: {
    keywords: { "onde": 2, "localização": 3, "localizacao": 3, "endereço": 3, "endereco": 3, "são paulo": 2, "sao paulo": 2, "bairro": 2, "fica": 1, "região": 2, "regiao": 2, "atende": 1, "entrega": 1 },
    answer: "Estamos em São Paulo e atendemos instituições em toda a cidade e Grande SP! Fazemos entrega para qualquer região de São Paulo.\n\nPara saber mais sobre logística de entrega ou combinar uma visita, entre em contato pelo WhatsApp!",
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?", "Como funciona a entrega?"],
  },

  entrega: {
    keywords: { "frete": 2, "enviar": 2, "envio": 2, "entregar": 2, "retirar": 2, "retirada": 2, "logística": 2, "logistica": 2, "transportadora": 2, "buscar": 1 },
    answer: "Realizamos entregas em toda São Paulo e Grande SP!\n\n🚚 Entrega via transportadora para demais regiões\n🏢 Retirada na nossa unidade também disponível\n📦 Produtos embalados com cuidado e segurança\n\nConsulte condições de frete no momento do orçamento.",
    suggestions: ["Quais são os prazos?", "Como faço um orçamento?"],
  },

  contato: {
    keywords: { "contato": 2, "falar": 1, "whatsapp": 2, "telefone": 2, "email": 2, "e-mail": 2, "ligar": 2, "chamar": 1, "número": 1, "numero": 1 },
    answer: `Você pode nos contatar por:\n\n📱 WhatsApp: (11) 2035-0589\n📧 E-mail: detalhesunif@gmail.com\n📸 Instagram: @detalhesuniformes\n\nOu clique aqui para abrir o WhatsApp: ${WHATSAPP_URL}`,
    suggestions: ["Como faço um orçamento?", "Quais são os prazos?"],
  },

  visita: {
    keywords: { "visitar": 2, "visita": 2, "ver pessoalmente": 3, "conhecer": 1, "showroom": 2, "amostra": 2, "ver de perto": 2, "mostruário": 2, "mostruario": 2 },
    answer: "Sim! Você pode agendar uma visita para conhecer nossos materiais de perto e ver amostras dos tecidos e bordados.\n\nEntre em contato pelo WhatsApp para combinarmos o melhor horário para sua visita!",
    suggestions: ["Como faço um orçamento?", "Quais tecidos vocês usam?"],
  },

  cuidados: {
    keywords: { "lavar": 2, "lavagem": 2, "cuidado": 2, "manutenção": 2, "manutencao": 2, "durabilidade": 2, "durar": 1, "conservar": 2, "higienizar": 2 },
    answer: "Para garantir a durabilidade dos uniformes:\n\n👕 Lavar à máquina em ciclo suave ou à mão\n🌡️ Temperatura máx. 30°C\n🚫 Não usar alvejante com cloro nas peças coloridas\n🔄 Virar a peça ao avesso antes de lavar\n✂️ Não secar na secadora em temperatura alta\n\nSeguindo esses cuidados, o uniforme mantém qualidade por muito mais tempo!",
    suggestions: ["Quais tecidos vocês usam?", "Como faço um orçamento?"],
  },

  qualidadeGarantia: {
    keywords: { "qualidade": 2, "garantia": 3, "defeito": 2, "problema": 1, "troca": 2, "devolução": 2, "devolucao": 2, "rasgou": 2, "desbotou": 2, "certificado": 2 },
    answer: "Trabalhamos com controle rigoroso de qualidade em todas as etapas da produção!\n\n✅ Cada peça é conferida antes da entrega\n🔍 Tecidos com certificação de qualidade\n🤝 Em caso de defeito de fabricação, fazemos a troca\n\nNossa reputação é construída peça a peça há mais de 15 anos!",
    suggestions: ["Como funciona o processo?", "Como faço um orçamento?"],
  },

  desconto: {
    keywords: { "desconto": 3, "promoção": 2, "promocao": 2, "oferta": 2, "barato": 2, "mais barato": 2, "economia": 1, "atacado": 2, "volume": 2, "grande quantidade": 2 },
    answer: "Oferecemos condições especiais para pedidos em maior volume!\n\n📦 Quanto maior o pedido, melhor o preço por peça\n🤝 Condições especiais para contratos anuais com escolas\n💡 Consulte nossos pacotes para início de ano letivo\n\nFale com nossa equipe pelo WhatsApp para uma proposta personalizada!",
    suggestions: ["Como faço um orçamento?", "Qual o pedido mínimo?"],
  },

  escola: {
    keywords: { "escola": 2, "creche": 2, "ensino fundamental": 2, "ensino médio": 2, "faculdade": 2, "curso": 1, "colégio": 2, "colegio": 2, "berçário": 2, "bercario": 2, "maternal": 2, "pré-escola": 2 },
    answer: "Atendemos todo tipo de instituição de ensino:\n\n🏫 Creches e Berçários\n📚 Educação Infantil e Fundamental\n🎓 Ensino Médio e Técnico\n🏛️ Faculdades e Cursos profissionalizantes\n\nCada instituição tem suas necessidades específicas — nos conte sobre a sua para darmos a melhor solução!",
    suggestions: ["Como faço um orçamento?", "Vocês fazem bordados?", "Quais produtos vocês têm?"],
  },

  cores: {
    keywords: { "cor": 2, "cores": 2, "colorido": 2, "azul": 2, "vermelho": 2, "verde": 2, "amarelo": 2, "branco": 2, "preto": 2, "cinza": 2, "coloração": 2, "coloracao": 2, "pantone": 2, "tom": 1, "tonalidade": 2 },
    answer: "Trabalhamos com uma vasta gama de cores para alinhar à identidade visual da sua escola!\n\n🎨 Cores padrão disponíveis em estoque\n🖌️ Cores personalizadas sob encomenda (Pantone ou amostra)\n✅ Combinamos a cor exata da sua logo/uniforme\n\nEnvie a referência da cor (Pantone, código hex ou amostra física) pelo WhatsApp para garantirmos a combinação perfeita!",
    suggestions: ["Vocês fazem bordados?", "Quais tecidos vocês usam?", "Como faço um orçamento?"],
  },

  nomeNumero: {
    keywords: { "nome": 2, "número": 2, "numero": 2, "nome do aluno": 3, "numeração": 2, "numeracao": 2, "identificação": 2, "identificacao": 2, "personalizado por aluno": 3, "individual": 2, "turma": 1 },
    answer: "Sim! Fazemos personalização individual nas peças:\n\n✏️ Nome do aluno bordado ou estampado\n🔢 Número de matrícula ou turma\n📛 Nome na etiqueta interna personalizada\n\nEsse tipo de personalização é feito geralmente em lotes. Envie a lista de nomes/números pelo WhatsApp e passamos o orçamento!",
    suggestions: ["Vocês fazem bordados?", "Qual o pedido mínimo?", "Como faço um orçamento?"],
  },

  reposicao: {
    keywords: { "reposição": 3, "reposicao": 3, "avulso": 3, "peça avulsa": 3, "peca avulsa": 3, "aluno novo": 2, "perdeu": 2, "rasgou": 2, "meio do ano": 2, "fora do pedido": 2, "adicional": 2 },
    answer: "Sim, fazemos reposições de peças avulsas!\n\n📦 Pedidos de reposição durante o ano letivo\n👤 Ideal para alunos novos ou peças danificadas\n⚠️ Sujeito ao prazo de 15 a 30 dias e ao mínimo por modelo\n\nEntre em contato pelo WhatsApp informando a escola, o modelo e o tamanho necessário!",
    suggestions: ["Quais são os prazos?", "Qual o pedido mínimo?", "Como faço um orçamento?"],
  },

  catalogo: {
    keywords: { "catálogo": 3, "catalogo": 3, "foto": 2, "fotos": 2, "modelo": 2, "modelos": 2, "exemplo": 2, "exemplos": 2, "ver": 1, "instagram": 2, "portfólio": 2, "portfolio": 2, "referência": 2, "referencia": 2 },
    answer: "Você pode ver nossos modelos e trabalhos realizados:\n\n📸 Instagram: @detalhesuniformes — fotos de uniformes prontos\n💬 Pelo WhatsApp enviamos catálogo completo com modelos e tecidos\n\nSe quiser, acesse nosso Instagram para se inspirar e depois entre em contato para personalizarmos para a sua escola!",
    suggestions: ["Como faço um orçamento?", "Vocês fazem bordados?", "Quais produtos vocês têm?"],
  },
};

const WELCOME_MESSAGE = {
  text: "Olá! Sou o assistente virtual da Detalhes Uniformes. Estou aqui para tirar suas dúvidas sobre uniformes escolares. Como posso te ajudar?",
  suggestions: ["Como faço um orçamento?", "Quais são os prazos?", "Quais tecidos vocês usam?", "Onde vocês atendem?"],
};

const FALLBACK = {
  text: "Não entendi completamente sua pergunta. Pode reformular? Posso te ajudar com:",
  suggestions: ["Orçamento e preços", "Prazos de entrega", "Tecidos e materiais", "Bordados e estampas", "Falar com atendente"],
};

export function getWelcomeMessage() {
  return WELCOME_MESSAGE;
}

export function getBotResponse(question) {
  if (!question || question.trim() === "") return WELCOME_MESSAGE;

  const q = question.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (
    q.includes("atendente") || q.includes("humano") ||
    q.includes("pessoa") || q.includes("responsavel") ||
    q.includes("falar com alguem") || q.includes("suporte")
  ) {
    return {
      text: `Claro! Vou te conectar com nossa equipe agora mesmo.\n\n📱 Clique aqui para abrir o WhatsApp: ${WHATSAPP_URL}`,
      suggestions: [],
    };
  }

  const scores = {};
  for (const key in knowledgeBase) {
    scores[key] = 0;
    for (const keyword in knowledgeBase[key].keywords) {
      const normalizedKeyword = keyword
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (q.includes(normalizedKeyword)) {
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
