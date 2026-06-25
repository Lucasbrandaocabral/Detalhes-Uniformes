# Consultoria de Tecnologia — Detalhes Uniformes

**Responsável pela área de Tecnologia:** Lucas Brandão
**Projeto Integrador — Senac (Assistente Administrativo)**
**Empresa analisada:** Detalhes Uniformes (corte e costura de uniformes)

> Este documento tem duas partes:
> **Parte A —** revisão do material produzido pela equipe (Marketing, Atendimento, Estoque e o DDD).
> **Parte B —** minha contribuição: o que a **Tecnologia** pode melhorar na empresa e, em específico, **o que mudar no site**, com priorização e ligação direta às aulas do curso.

---

## Parte A — Revisão do material da equipe

A primeira coisa que salta aos olhos lendo os quatro materiais juntos é que **todos eles, no fundo, esbarram no mesmo gargalo: falta de estrutura digital e de registro de informação.** Marketing fala em "presença digital", Atendimento fala em "padronizar e registrar o cliente", Estoque fala em "usar um sistema", e o levantamento DDD mostra que "os orçamentos não são guardados" e "não há controle automatizado". Isso é ótimo para nós: significa que a **Tecnologia é o eixo que costura as três áreas** — não é mais um tema isolado, é a base que sustenta os outros.

Abaixo, o que cada parte trouxe de forte e onde dá para reforçar.

### 1. Marketing
**Pontos fortes:** o diagnóstico está certeiro — dependência de indicação, ausência de prospecção ativa e falta de presença digital. As propostas (site, catálogo, modelo de orçamento, programa de indicação, marketing digital) cobrem bem o funil.

**Onde reforçar:**
- O catálogo digital é citado, mas precisa de um **dono e um formato** (onde fica? como atualiza? quem tira as fotos?). Hoje isso não existe no site.
- "Anúncios segmentados" só funcionam se houver **medição** (pixel/analytics). Sem isso, não dá para saber se o anúncio deu retorno — vira gasto sem KPI.
- Falta amarrar Marketing ao **registro do lead**: de nada adianta atrair se o contato se perde no WhatsApp.

### 2. Atendimento ao Cliente
**Pontos fortes:** a ideia de transformar o atendimento em **experiência consultiva** (entrevista de necessidade, mostrar combinações prontas em vez de peças soltas) é excelente e muito alinhada ao CRM que estudamos.

**Onde reforçar:**
- O "roteiro de atendimento" e o "cadastro atualizado das escolas" pedem uma **ferramenta** para existir de verdade — nem que seja uma planilha ou um formulário padronizado. Senão fica no papel.
- O pós-venda proposto (acompanhamento, feedback, aviso de reposição) é a etapa de **acompanhamento pós-venda do CRM** — combina com o que registramos no DDD como ponto fraco ("não há processo formal de feedback").

### 3. Compras / Estoque / Sustentabilidade
**Pontos fortes:** trouxe conceitos certos do curso — estoque mínimo, ponto de reposição, registro de entrada/saída, inventário, curva ABC implícita ("tecidos mais utilizados"). A parte de **sustentabilidade** (reaproveitamento de retalhos, campanha de devolução, reciclagem têxtil, campanha do agasalho) é um diferencial e conversa direto com a aula de **ESG**.

**Onde reforçar:**
- "Utilização de sistema" precisa virar algo concreto e barato (planilha bem feita já resolve no começo — não precisa de software caro).
- A sustentabilidade é forte demais para ficar só interna: ela **vira marketing** se for divulgada no site (pilar Social e Ambiental do ESG = marca responsável vende mais).

### 4. Levantamento DDD (sua parte)
O DDD é a **espinha dorsal do trabalho**: mapeou a empresa inteira em 7 contextos (Comercial, Atendimento/Orçamentos, Pedidos/Contratos, Suprimentos, Produção, Financeiro, Pós-venda). Isso dá à equipe uma visão de processo que os outros materiais, sozinhos, não teriam. Cada contexto do DDD é, na prática, **um lugar onde a tecnologia pode entrar** — e é exatamente isso que a Parte B explora.

### Observação importante de alinhamento (achado no próprio site)
Ao analisar o código do site, encontrei dois pontos que a equipe precisa decidir **antes** de seguir:

1. **Inconsistência de marca:** o site foi construído com o nome **"MAIA Uniformes"** (título, README, logos), mas o chatbot e a página de contato usam **"Detalhes Uniformes"**. O cliente final vai estranhar. É preciso **escolher uma identidade só** e padronizar em todo lugar.
2. **O site só fala de uniforme escolar**, mas o DDD mostra que a empresa produz muito mais: uniformes profissionais, aventais, linha esportiva, roupas de natação, kimonos, dry-fit, roupas de limpeza. **O site está vendendo menos do que a empresa sabe fazer.**

---

## Parte B — Minha contribuição: Tecnologia

> **Premissa:** a Detalhes Uniformes é uma empresa pequena. Toda recomendação aqui prioriza ferramentas **gratuitas ou de baixo custo** e fáceis de operar, para que a dona consiga manter sozinha. Tecnologia boa aqui não é a mais cara — é a que a empresa **consegue usar todo dia**.

### Visão geral: a tecnologia conectando os contextos do DDD

| Contexto (DDD) | Problema atual | Solução de tecnologia proposta | Aula do Senac que sustenta |
|---|---|---|---|
| Comercial / Captação | Só indicação, sem prospecção | Site + Google Meu Negócio + redes + anúncios medidos | Marketing 4 Ps (Promoção/Praça) |
| Atendimento / Orçamentos | Manual, sem registro, sem padrão | Formulário de orçamento + roteiro + CRM (planilha) | CRM, Atendimento ao Cliente |
| Pedidos / Contratos | Orçamentos não são guardados | Histórico de orçamentos/pedidos no CRM | CRM, Gestão de Documentos |
| Suprimentos / Compras | Sem estoque, compra na hora | Planilha de estoque mínimo + ponto de pedido | Gestão de Estoque, Cadeia de Suprimentos |
| Produção | Fluxo não documentado | Fluxograma do processo + checklist digital | Fluxograma, PDCA |
| Financeiro | Recebimento manual | Planilha de fluxo de caixa + controle de recebíveis | Fluxo de Caixa, Excel Financeiro |
| Pós-venda | Sem feedback formal | Formulário de satisfação + lembrete de reposição | CRM, KPI |

A seguir, cada frente em detalhe.

### B.1 — Presença digital de verdade (não só o site solto)
Hoje existe um site, mas ele não é "encontrável". Prospecção passiva (o cliente te achar sozinho) depende de três coisas baratas:
- **Google Meu Negócio (Perfil da Empresa):** gratuito. Coloca a Detalhes no Google Maps e na busca local ("uniforme escolar em [bairro]"). É o canal nº 1 de captação local e hoje está faltando.
- **SEO básico no site:** título, descrição e palavras-chave certas ("uniforme escolar São Paulo", "uniforme profissional", "kimono", "avental"), para o Google entender o que a empresa vende.
- **Redes sociais com link para o site** (Instagram já existe — `@detalhesuniformes`).

> **Conexão Senac:** Marketing 4 Ps → "Praça" (onde o cliente te encontra) e "Promoção" (como ele fica sabendo).

### B.2 — Catálogo digital estruturado
Esse é o item mais pedido pelo Marketing e o que mais falta no site. O site mostra **tecidos**, mas não mostra **produtos por categoria**. Proposta:
- Catálogo dividido nas categorias reais da empresa: **Escolar, Profissional, Esportiva, Natação, Kimonos, Aventais, Linha Limpeza, Personalizados.**
- Cada item com **foto real, tecidos disponíveis, opções de personalização** (bordado/estampa) e tamanhos.
- Pode começar simples: um catálogo em PDF para baixar **e** uma seção visual no site. O **Catálogo do WhatsApp Business** (gratuito) também serve como vitrine rápida.

> **Conexão Senac:** Marketing 4 Ps → "Produto"; e Atendimento → mostrar "combinações completas em vez de peças soltas".

### B.3 — Formulário de orçamento com captura de lead (com LGPD)
Hoje o site só tem um botão que abre o WhatsApp. O problema: **o contato não fica registrado em lugar nenhum** — exatamente o que o DDD apontou ("os orçamentos não são guardados"). Proposta:
- Um **formulário de orçamento estruturado** no site (Google Forms já resolve no início, gratuito), com os campos que o Atendimento precisa para a entrevista consultiva: tipo de instituição, faixa etária, quantidade de alunos, peças desejadas, tecido, personalização, prazo e orçamento estimado.
- Cada envio **cai automaticamente numa planilha** = começo do CRM e do **histórico de orçamentos**.
- **Importante (LGPD):** como o formulário coleta dados pessoais (nome, telefone, e-mail), o site precisa de um **aviso de privacidade** e de uma **caixa de consentimento** explicando a finalidade. Isso não é detalhe — é lei (Lei 13.709/2018) e também é boa governança (o "G" do ESG).

> **Conexão Senac:** CRM (registro de solicitações), LGPD (consentimento e finalidade), Atendimento (entrevista de necessidade padronizada).

### B.4 — CRM simples (mesmo que seja em planilha)
Não precisa comprar sistema. Uma planilha bem estruturada (Google Sheets) já entrega o essencial do CRM que estudamos:
- Cadastro de cada escola/cliente (contato, histórico, o que já comprou).
- Registro de cada orçamento e pedido (vira o histórico que hoje não existe).
- Coluna de **follow-up**: data do próximo contato, status (em negociação, fechado, perdido).
- Marcação de **época de reposição** para o pós-venda proativo.

Isso ataca de uma vez três pontos fracos do DDD: orçamentos não guardados, pós-venda informal e recebimento sem controle.

> **Conexão Senac:** CRM (todos os pilares: perfil do cliente, registro de interações, acompanhamento pós-venda).

### B.5 — Padronização do atendimento via tecnologia
O Atendimento pediu um "roteiro" e "respostas rápidas". A tecnologia entrega isso:
- **WhatsApp Business** (gratuito): respostas rápidas para dúvidas frequentes (prazo, tecido, mínimo), mensagem de saudação automática, etiquetas para organizar conversas (novo, orçamento enviado, fechado) e catálogo embutido.
- O **chatbot do site já existe** e responde 26 tipos de dúvida — é um bom começo. Sugiro evoluí-lo para, ao final, **levar o cliente ao formulário de orçamento** (e não só ao WhatsApp), garantindo o registro do lead.
- **Modelo padronizado de orçamento** (template no Google Docs/Canva com a identidade visual) — atende ao pedido do Marketing e padroniza o que hoje é feito "caso a caso".

> **Conexão Senac:** Atendimento ao Cliente (padronização), CRM, Fluxograma (roteiro = processo desenhado).

### B.6 — Controle de estoque digital
A empresa não tem estoque fixo, mas isso gera risco de prazo nas épocas de pico (início do ano letivo). Proposta de baixo custo:
- Planilha de **estoque mínimo** dos tecidos e aviamentos mais usados, com **ponto de pedido** (quando chega no mínimo, dispara a compra).
- Aplicar **Curva ABC**: focar o controle nos poucos itens que representam a maior parte do custo (tecidos base mais usados).
- **Inventário** periódico (semanal/mensal) batendo o físico com a planilha.
- Análise dos pedidos dos últimos meses para **antecipar compra** antes da alta demanda.

> **Conexão Senac:** Gestão de Estoque (estoque mínimo, ponto de pedido, Curva ABC, PEPS), Cadeia de Suprimentos.

### B.7 — Indicadores (KPIs) e metas SMART
"O que não se mede, não se melhora." Para sair do achismo, sugiro um **mini-painel** (uma aba na própria planilha) acompanhando poucos indicadores:
- Nº de orçamentos recebidos / mês.
- Taxa de conversão (orçamentos que viraram pedido).
- Nº de novos clientes / mês.
- Prazo médio de entrega.
- Satisfação do cliente (do formulário de pós-venda).

E transformar as metas vagas em **metas SMART**. Exemplo: em vez de "vender mais", → *"aumentar em 20% o número de orçamentos recebidos pelo site nos próximos 6 meses"*.

> **Conexão Senac:** KPI (Indicadores de Desempenho), Metas SMART, PDCA (etapa Check).

### B.8 — Sustentabilidade como tecnologia + marketing (ESG)
A proposta da equipe sobre reaproveitamento e devolução de uniformes é ótima e pode ganhar uma camada digital:
- Uma **seção "Sustentabilidade" no site** explicando a reciclagem têxtil, o reaproveitamento de retalhos e a campanha de devolução de uniformes.
- Um **formulário simples de "Devolva seu uniforme"** (mesmo esquema do Google Forms).
- Isso fortalece a marca: o pilar **Social e Ambiental do ESG** mostra que "marca responsável vende mais" — e ainda gera conteúdo para as redes.

> **Conexão Senac:** ESG (os três pilares), Marketing 4 Ps (Promoção / marca responsável).

### B.9 — Segurança, conformidade e governança de dados
À medida que a empresa passa a guardar dados de clientes (CRM, formulários), entra a responsabilidade de cuidar deles:
- **LGPD:** finalidade clara, coletar só o necessário, consentimento e possibilidade de exclusão.
- **Backup:** usar Google Drive/Workspace garante que a planilha-CRM não se perca (nuvem + histórico de versões).
- **Acesso controlado:** só quem precisa enxerga os dados.

> **Conexão Senac:** LGPD, ESG (Governança), Gestão de Documentos e Arquivo.

---

## Parte C — O que mudar no site (concreto)

O site atual é bonito e bem construído tecnicamente (React, animações, chatbot, carrossel de tecidos, integração com WhatsApp). O problema não é a aparência — é que **ele funciona como um folder digital, não como uma ferramenta de captação que registra e mede.** As mudanças abaixo estão priorizadas.

| # | Mudança no site | Por que (problema que resolve) | Esforço |
|---|---|---|---|
| 1 | **Padronizar a marca** (decidir MAIA *ou* Detalhes e aplicar em todo o site) | Hoje o site mistura dois nomes — confunde o cliente | Baixo |
| 2 | **Catálogo de produtos por categoria** com fotos reais (escolar, profissional, esportiva, natação, kimono, avental, limpeza) | O site só mostra escolar e só tecidos; subvende o portfólio | Médio |
| 3 | **Formulário de orçamento estruturado** que cai numa planilha (não só botão de WhatsApp) | Captura e registra o lead — resolve "orçamentos não são guardados" | Médio |
| 4 | **Aviso de privacidade + consentimento (LGPD)** no formulário e no rodapé | Obrigação legal ao coletar dados pessoais | Baixo |
| 5 | **Google Analytics + Meta Pixel** instalados | Permite medir KPIs e rodar anúncios segmentados com retorno | Baixo |
| 6 | **Seção "Programa de Indicação"** (benefício para quem indica) | Atende à proposta do Marketing de fidelização | Baixo |
| 7 | **Seção "Sustentabilidade / ESG"** + formulário de devolução | Transforma a ação ambiental em marca e conteúdo | Baixo |
| 8 | **SEO + Google Meu Negócio** (ser achado na busca local) | Prospecção passiva — cliente encontra a empresa sozinho | Médio |
| 9 | **Otimizar imagens e desempenho** (carregamento rápido no celular) | A maioria dos clientes acessa pelo celular | Baixo |
| 10 | **Chatbot leva ao formulário** (não só ao WhatsApp) | Garante o registro do lead mesmo fora do horário comercial | Baixo |
| 11 | **Depoimentos e logos de escolas reais** (validar os atuais) | Prova social verdadeira aumenta confiança | Baixo |

---

## Parte D — Priorização (usando a Matriz GUT do curso)

Para decidir **por onde começar**, apliquei a Matriz GUT (Gravidade × Urgência × Tendência, nota 1–5) sobre as frentes de tecnologia:

| Ação | G | U | T | **G×U×T** | Ordem |
|---|---|---|---|---|---|
| Formulário de orçamento + CRM (planilha) | 5 | 5 | 4 | **100** | 1º |
| Catálogo digital por categoria | 4 | 4 | 4 | **64** | 2º |
| Padronizar a marca no site | 4 | 4 | 3 | **48** | 3º |
| Google Meu Negócio + SEO | 4 | 3 | 4 | **48** | 3º |
| LGPD (aviso + consentimento) | 4 | 4 | 2 | **32** | 5º |
| Analytics/Pixel + KPIs | 3 | 3 | 3 | **27** | 6º |
| Controle de estoque (planilha) | 3 | 3 | 3 | **27** | 6º |
| Programa de indicação | 3 | 2 | 2 | **12** | 8º |
| Seção sustentabilidade/ESG | 2 | 2 | 2 | **8** | 9º |

**Leitura:** o que mais dói e tende a piorar é a **perda de leads** (contato que chega e não é registrado). Por isso o **formulário + CRM** é o passo nº 1 — barato, rápido e ataca o coração do problema que aparece em todos os materiais da equipe.

> **Como rodar isso na prática:** aplicar o ciclo **PDCA** — começar pequeno (Plan/Do: formulário + planilha por 1 mês), medir (Check: quantos leads e quantos viraram pedido) e padronizar ou ajustar (Act). A cada volta, o processo melhora.

---

## Parte E — Resumo (a tecnologia em uma frase)

> A Detalhes Uniformes não precisa de tecnologia cara — precisa **parar de perder informação**. Um site que **registra e mede** (formulário + CRM em planilha + indicadores), um **catálogo que mostra tudo o que a empresa faz** e uma **presença digital que faz o cliente encontrar a empresa sozinho** resolvem, com ferramentas gratuitas, a maior parte dos problemas levantados por Marketing, Atendimento e Estoque — e dão vida aos 7 contextos mapeados no DDD.

### Próximos passos sugeridos
1. A equipe decide a identidade única (MAIA ou Detalhes).
2. Implementar o formulário de orçamento + planilha-CRM (passo nº 1 da GUT).
3. Montar o catálogo por categorias com fotos reais.
4. Ligar Google Meu Negócio e instalar Analytics.
5. Rodar o PDCA por 1 mês e medir os primeiros KPIs.
