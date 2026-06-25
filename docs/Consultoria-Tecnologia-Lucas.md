# Consultoria de Tecnologia — Maia Uniformes

Lucas Brandão — Projeto Integrador · Senac (Assistente Administrativo)

Fiquei responsável pela área de tecnologia da nossa consultoria para a Maia Uniformes. Depois de ler o que cada colega levantou e de montar o levantamento DDD da empresa, reuni neste documento três coisas: um comentário honesto sobre o material que a equipe produziu, a minha proposta de como a tecnologia pode ajudar a resolver os problemas da empresa e uma análise do site, que é onde dá para mostrar resultado mais rápido e mais barato.

Tentei deixar tudo o mais prático possível, porque a Maia é uma empresa pequena. Não adianta sugerir sistema caro que ninguém vai conseguir manter no dia a dia. Quase tudo que proponho aqui usa ferramenta gratuita.

## 1. Lendo o material da equipe

Quando coloquei os quatro materiais lado a lado, percebi que eles contam a mesma história por ângulos diferentes. O Marketing fala em falta de presença digital; o Atendimento fala em registrar melhor o cliente; o pessoal de Estoque fala em passar a usar um sistema; e o meu levantamento mostrou que os orçamentos não são guardados e que o controle de recebimento é todo manual. No fundo, o problema é um só: a empresa perde informação o tempo todo. É aí que a tecnologia entra — não como um assunto à parte, mas como a base que dá sustentação às outras três áreas.

Sobre cada parte, rapidamente:

O **Marketing** acertou no diagnóstico, e as propostas (site, catálogo, modelo de orçamento, programa de indicação) cobrem bem o caminho do cliente. O que faltou amarrar foi o "depois": atrair gente para um WhatsApp que não registra nada não resolve a dependência de indicação. E anúncio segmentado só vale a pena se a empresa medir o retorno, senão é dinheiro gasto no escuro.

O **Atendimento** teve a melhor sacada, na minha opinião: transformar o atendimento numa conversa consultiva, entendendo a necessidade da escola antes de mostrar modelo e apresentando combinações prontas em vez de peça solta. É exatamente a lógica do CRM que vimos em aula. Só falta o roteiro de atendimento e o cadastro das escolas ganharem uma ferramenta para sair do papel, nem que seja uma planilha bem-feita.

O **Estoque** trouxe os conceitos certos da gestão de estoque — estoque mínimo, ponto de reposição, inventário, foco nos itens mais usados. E a parte de sustentabilidade (reaproveitar retalho, campanha de devolução de uniforme, reciclagem têxtil) é um diferencial de verdade. Para mim ela é boa demais para ficar só dentro da produção: bem divulgada, vira marca e vira conteúdo para as redes.

O **DDD** foi a parte que eu fiz, então vou ser breve: ele funciona como um mapa. Dividir a empresa em sete contextos, do comercial ao pós-venda, deixa claro onde cada problema mora — e, para mim, cada contexto desses é um ponto onde a tecnologia pode entrar. É esse mapa que uso na proposta a seguir.

## 2. O que encontrei olhando o site

Antes de propor qualquer coisa nova, fui analisar o site que já está no ar. Ele é bem-feito: tem boa aparência, animações, um carrossel de tecidos e até um chatbot que responde as dúvidas mais comuns. O problema não está na aparência — é que ele funciona como um folder digital bonito, e não como uma ferramenta que capta e organiza cliente. Três pontos me chamaram atenção.

O primeiro é que o site só fala de uniforme escolar. Mas, pelo que levantei, a Maia produz bem mais do que isso: uniforme profissional, avental, linha esportiva, roupa de natação, kimono, dry-fit e roupa para equipe de limpeza. Ou seja, o site mostra uma fatia pequena do que a empresa sabe fazer e acaba deixando venda na mesa.

O segundo é que ele mostra os tecidos, mas não tem um catálogo de produtos organizado por categoria, com foto. Quem entra descobre de que material a roupa é feita, mas não consegue navegar pelos tipos de uniforme. E foi justamente esse catálogo digital que o Marketing pediu.

O terceiro é o mais importante: o botão de "Solicitar Orçamento" só abre o WhatsApp com uma mensagem pronta. Não existe um formulário que pergunte o que a escola precisa, nem que registre o contato em algum lugar. Na prática, todo cliente que chega depende de alguém responder na hora, e nada fica guardado — o mesmo problema que aparece no DDD.

Vale um ajuste a mais: como a marca agora é Maia Uniformes, é bom revisar os pontos que ainda carregam o nome antigo (o texto do chatbot, o e-mail de contato e o usuário do Instagram), para que todos os canais falem a mesma língua.

## 3. Minha proposta para a tecnologia

A ideia central é simples: fazer a Maia parar de perder informação e passar a ser encontrada. Separei a proposta em frentes, da mais urgente para a menos.

**Registrar quem pede orçamento.** É o passo mais importante. Hoje o contato chega e se perde. A solução não precisa ser cara: um formulário de orçamento no site, feito com o Google Forms, já resolve o começo. Nele a gente coloca as mesmas perguntas que o Atendimento faria numa conversa consultiva — tipo de instituição, faixa etária, quantidade de alunos, peças, tecido, personalização, prazo e uma ideia de orçamento. Cada resposta cai automaticamente numa planilha, e essa planilha já é o início de duas coisas que faltam hoje: o histórico de orçamentos e um CRM simples. Como o formulário coleta dado pessoal (nome, telefone, e-mail), ele precisa de um aviso de privacidade e de uma caixa de consentimento explicando para que aquilo será usado. Isso é exigência da LGPD e, ao mesmo tempo, é boa governança — o "G" do ESG.

**Montar um CRM, mesmo que seja em planilha.** Não precisa comprar sistema. Uma planilha bem organizada no Google Sheets já entrega o essencial do CRM que estudamos: o cadastro de cada escola, o histórico do que ela já comprou, o registro de cada orçamento, uma coluna de acompanhamento (próximo contato e status — em negociação, fechado ou perdido) e a marcação da época de reposição, para a empresa procurar o cliente antes de ele lembrar. Só isso já ataca de uma vez três pontos fracos do levantamento: o orçamento que não era guardado, o pós-venda informal e o recebimento sem controle.

**Padronizar o atendimento com as ferramentas certas.** O WhatsApp Business, que é gratuito, resolve boa parte do que o Atendimento pediu: respostas rápidas para as dúvidas mais comuns, mensagem de saudação automática, etiquetas para organizar as conversas e um catálogo embutido. O chatbot do site, que já existe, pode evoluir para terminar levando a pessoa ao formulário de orçamento, e não só ao WhatsApp — assim o contato fica registrado mesmo fora do horário comercial. Junto disso, vale criar um modelo padrão de orçamento com a identidade da Maia, para acabar com o "cada hora sai de um jeito".

**Fazer a empresa ser encontrada.** Prospecção não é só correr atrás do cliente; é também deixar que ele ache a empresa sozinho. Para isso, duas coisas baratas fazem muita diferença: cadastrar a Maia no Google Meu Negócio (gratuito, que coloca a empresa no Maps e na busca local do tipo "uniforme escolar perto de mim") e ajustar o site para o Google entender o que ela vende, usando os termos certos no título e na descrição das páginas. Somando a isso o Instagram, que já existe, com link para o site.

**Organizar o estoque sem complicar.** A empresa não trabalha com estoque fixo, e tudo bem — mas, nas épocas de pico, como o início do ano letivo, isso vira risco de prazo. Uma planilha de estoque mínimo dos tecidos e aviamentos mais usados, com um ponto de reposição (quando chega no mínimo, dispara a compra), já dá visibilidade. Dá para concentrar o controle nos poucos itens que mais pesam no custo, que é a ideia da curva ABC, e usar o histórico dos últimos meses para comprar antes da alta demanda.

**Medir para poder melhorar.** Para sair do achismo, proponho acompanhar poucos indicadores numa aba da própria planilha: quantos orçamentos chegaram no mês, quantos viraram pedido (a taxa de conversão), quantos clientes novos entraram, o prazo médio de entrega e a satisfação no pós-venda. E transformar as metas vagas em metas SMART. Em vez de "vender mais", algo como "aumentar em 20% os orçamentos recebidos pelo site nos próximos seis meses" — específica, mensurável e com prazo.

**Usar a sustentabilidade também como marca.** A campanha de devolução de uniforme que a equipe propôs pode ganhar um espaço no site, explicando a reciclagem têxtil e o reaproveitamento, com um formulário simples de "quero devolver". Além de fazer bem, fortalece a imagem da empresa e ainda rende assunto para as redes sociais.

## 4. O que mudar no site

As mudanças do site, em ordem de prioridade. A lógica é a mesma: o site precisa deixar de ser um folder e virar uma ferramenta que mostra tudo, capta o cliente e permite medir.

| # | Mudança | Por que | Esforço |
|---|---------|---------|---------|
| 1 | Catálogo por categoria com foto real (escolar, profissional, esportiva, natação, kimono, avental, limpeza) | Hoje só aparece a linha escolar; o site mostra menos do que a empresa faz | Médio |
| 2 | Formulário de orçamento que cai numa planilha, no lugar de só abrir o WhatsApp | Capta e registra o lead; resolve o orçamento que se perde | Médio |
| 3 | Aviso de privacidade e consentimento (LGPD) no formulário e no rodapé | Obrigação legal ao coletar dado pessoal | Baixo |
| 4 | Alinhar a marca Maia em todos os pontos (chatbot, e-mail, Instagram) | Alguns canais ainda usam o nome antigo | Baixo |
| 5 | Google Analytics e Pixel instalados | Permite medir resultado e anunciar com retorno | Baixo |
| 6 | Google Meu Negócio e ajuste de SEO | Faz o cliente encontrar a empresa na busca | Médio |
| 7 | Seção de Programa de Indicação | Atende à proposta de fidelização do Marketing | Baixo |
| 8 | Seção de Sustentabilidade com formulário de devolução | Transforma a ação ambiental em marca | Baixo |
| 9 | Otimizar as imagens para abrir rápido no celular | A maioria dos clientes acessa pelo telefone | Baixo |
| 10 | Depoimentos e logos de escolas reais | Prova social verdadeira gera confiança | Baixo |

## 5. Por onde começar

Como é coisa demais para fazer de uma vez, usei a Matriz GUT — a mesma da aula — para decidir a ordem. Dei nota de 1 a 5 para a gravidade, a urgência e a tendência de piorar de cada ação, e multipliquei. O maior resultado é o que se resolve primeiro.

| Ação | G | U | T | Total | Ordem |
|------|---|---|---|-------|-------|
| Formulário de orçamento com planilha-CRM | 5 | 5 | 4 | 100 | 1º |
| Catálogo digital por categoria | 4 | 4 | 4 | 64 | 2º |
| Alinhar a marca Maia nos canais | 4 | 4 | 3 | 48 | 3º |
| Google Meu Negócio e SEO | 4 | 3 | 4 | 48 | 3º |
| LGPD no formulário | 4 | 4 | 2 | 32 | 5º |
| Analytics e indicadores (KPIs) | 3 | 3 | 3 | 27 | 6º |
| Controle de estoque em planilha | 3 | 3 | 3 | 27 | 6º |
| Programa de indicação | 3 | 2 | 2 | 12 | 8º |
| Seção de sustentabilidade | 2 | 2 | 2 | 8 | 9º |

O resultado confirma o que já dava para sentir: o que mais dói e tende a piorar é a perda de cliente — o contato que chega e não fica registrado. Por isso o primeiro passo é o formulário de orçamento ligado à planilha-CRM. É barato, é rápido de montar e ataca o ponto que aparece em todos os materiais da equipe.

Para colocar de pé sem susto, dá para usar o ciclo PDCA: começar pequeno (montar o formulário e a planilha e rodar por um mês), conferir o resultado (quantos contatos vieram e quantos fecharam) e então padronizar o que funcionou ou ajustar o que não deu certo. A cada volta, o processo fica um pouco melhor.

## 6. Fechamento

A maior parte dos problemas que a equipe levantou não se resolve com tecnologia cara, e sim com organização. Um site que mostra tudo o que a Maia faz, que registra quem pede orçamento e que ajuda a acompanhar o que está acontecendo já muda o jogo. Com ferramentas gratuitas — Google Forms, Sheets, WhatsApp Business e Google Meu Negócio — a empresa dá um salto grande e para de depender só de indicação.

Resumindo os próximos passos: a equipe confirma a marca Maia em todos os canais; montamos o formulário de orçamento com a planilha-CRM; organizamos o catálogo por categoria com foto; ligamos o Google Meu Negócio e o Analytics; e rodamos o primeiro mês medindo os indicadores. É um caminho realista e que cabe no orçamento de uma empresa pequena.

---

### Onde cada conteúdo do curso aparece nesta proposta

| Conteúdo do Senac | Onde apliquei |
|-------------------|---------------|
| CRM | Formulário e planilha de clientes, histórico e pós-venda |
| Gestão de Estoque | Estoque mínimo, ponto de reposição e curva ABC |
| KPI e Metas SMART | Indicadores na planilha e metas com prazo |
| Matriz GUT | Priorização das ações (seção 5) |
| PDCA | Implantação e melhoria do formulário e do CRM |
| Fluxograma | Desenho do roteiro de atendimento e do processo de produção |
| LGPD | Consentimento e finalidade no formulário |
| ESG | Sustentabilidade e governança dos dados |
| Marketing (4 Ps) | Catálogo (Produto) e site/Google (Praça e Promoção) |
