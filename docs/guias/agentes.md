# Agentes Especializados

Agentes sao versoes especializadas do Claude, cada um com um system prompt proprio, base de conhecimento focada e processo de trabalho definido. Eles sao **acionados automaticamente** pelo Claude quando o contexto da conversa se encaixa na especialidade do agente.

Voce nao precisa chamar os agentes manualmente. O Claude identifica qual agente e mais adequado para a tarefa e delega automaticamente.

---

## estrategista-lancamento

**Estrategista de Lancamentos Digitais**

### Papel

Planeja lancamentos digitais end-to-end — desde a escolha do tipo (semente, classico, pago, Black) ate a timeline completa, checklist e metricas. Domina as metodologias de Erico Rocha (Formula de Lancamento), William Baldan (Lancamento Pago) e Leonardo Tabari (Turbo Paid Launch).

### Base de conhecimento que consulta

| Arquivo | Conteudo |
|---------|----------|
| `01-lancamentos/fl-formula-lancamento.md` | Master document da FL (3 pilares, 2 caminhos, fases) |
| `01-lancamentos/lancamento-semente.md` | Lancamento Semente (MVP, pre-venda) |
| `01-lancamentos/lancamento-classico.md` | Lancamento Classico (motor do 6em7) |
| `01-lancamentos/lancamento-pago-baldan.md` | Baldan: funil 6 camadas, cases reais, equipe |
| `01-lancamentos/lancamento-pago-tabari.md` | Tabari: Turbo, Andromeda, Desafio 7 dias |
| `01-lancamentos/projeto-black.md` | Projeto Black 2025: combos, antecipacao, 152 criativos |
| `01-lancamentos/ciclos-evolutivos.md` | Progressao de faixas |
| `01-lancamentos/nicho-avatar-roma.md` | Fundamentos estrategicos |

### Quando e acionado

- Quando voce pede para planejar um lancamento
- Quando precisa decidir entre tipos de lancamento
- Quando quer montar timeline e cronograma
- Quando precisa de benchmarks e metricas de lancamento
- Quando quer entender a progressao de faixas (semente → 6em7 → marrom → preta)

### Capabilities

- Recomendar o tipo ideal de lancamento com base na sua situacao
- Gerar timeline completa com datas reais (ciclos de 45-60 dias)
- Criar checklist de preparacao em fases (pre/durante/pos)
- Estruturar CPLs (CPL1, CPL2, CPL3)
- Estimar orcamento de trafego
- Definir metricas-alvo baseadas em benchmarks reais
- Gerenciar expectativas (media de 7 ciclos para 6em7)

### Principios do agente

- Nunca recomenda pular o Lancamento Semente se voce nunca lancou
- Baseia estimativas em dados reais dos cases (Baldan: R$130K → R$2.5M, Tabari: R$281K/7 dias)
- Enfatiza que a media e 7 ciclos para atingir 6em7
- Recomenda frequencia de conteudo: 2 Raiz + 7 Nutella/semana minimo

### Exemplo de interacao

```
Voce: Ja fiz 3 lancamentos semente e vendi R$30K no ultimo.
      Quero escalar. O que voce recomenda?

Agente: Com 3 lancamentos semente concluidos e R$30K no ultimo,
        voce ja validou o produto e tem audiencia engajada.
        Recomendo migrar para o Lancamento Classico.

        JUSTIFICATIVA:
        - Produto validado ✅
        - Audiencia existente ✅
        - Historico de vendas ✅
        - Proximo marco: 6em7 (R$100K/7 dias)

        O Lancamento Classico e o "motor do 6em7" segundo a Formula.
        Voce vai manter os CPLs mas agora com producao mais robusta,
        trafego pago complementando o organico, e escala gradual.

        TIMELINE DO PROXIMO CICLO (50 dias):
        Dia 1-15: Preparacao (gravar CPLs, montar paginas, aquecer lista)
        Dia 16-20: CPL1 + campanha de captacao
        Dia 21-25: CPL2 + remarketing
        Dia 26-30: CPL3 + aquecimento maximo
        Dia 31-37: Carrinho aberto (7 dias)
        Dia 38-50: Pos-lancamento (onboarding + debrief)

        ORCAMENTO RECOMENDADO: R$5.000-8.000
        - 60% captacao (leads)
        - 30% remarketing (CPLs + carrinho)
        - 10% aquecimento (conteudo)
        ...
```

---

## gestor-trafego

**Gestor de Trafego Pago Virtual**

### Papel

Opera como um gestor de trafego pago especializado em Meta Ads. Formado na metodologia Pedro Sobral (Comunidade Sobral de Trafego) e atualizado com o algoritmo Andromeda (Leonardo Tabari). Planeja campanhas, define audiencias, cria briefings de criativos e gerencia escala.

### Base de conhecimento que consulta

| Arquivo | Conteudo |
|---------|----------|
| `03-trafego/sobral-principios.md` | Fundamentos, 5 modelos, metricas, Pixel/API |
| `03-trafego/sobral-meta-ads.md` | Meta ADS: setup, naming, CBO/ABO, audiencias |
| `03-trafego/andromeda.md` | Andromeda: 9 criativos, portfolio, escala |
| `03-trafego/cpl-otimizacao.md` | CPL, metricas secundarias, leilao, sazonalidade |
| `03-trafego/rastreamento-utms.md` | UTMs, Data Studio, tracking |
| `04-conteudo-copy/copy-criativos.md` | Briefing de criativos |

### Quando e acionado

- Quando voce precisa planejar uma campanha de trafego pago
- Quando quer otimizar campanhas existentes
- Quando precisa de briefing de criativos para Meta Ads
- Quando quer entender audiencias e segmentacao
- Quando precisa configurar rastreamento (Pixel, API, UTMs)
- Quando quer escalar orcamento de forma segura

### Capabilities

- Criar plano de campanha com estrutura completa e naming convention Sobral
- Definir audiencias por temperatura (fria/morna/quente)
- Gerar briefing de 9 tipos de criativos (portfolio Andromeda)
- Calcular orcamento por fase (teste → validacao → escala)
- Definir metricas-alvo personalizadas (CPL, CTR, CPM, ROAS)
- Montar setup de rastreamento (UTMs + Pixel + API)
- Criar calendario de otimizacao (14/30/60/90 dias)
- Decidir entre CBO e ABO para cada situacao

### Principios do agente

- "O basico bem feito" > taticas avancadas (Sobral)
- Consistencia > inteligencia (Regra 2-2-2)
- Decisoes data-driven, nunca por intuicao
- Sazonalidade importa (Black Friday CPM pode dobrar)
- Formula de teste inicial: CPM x 15 (Tabari)
- Escala diaria: 20-30% de incremento no orcamento

### Exemplo de interacao

```
Voce: Meu CPL esta em R$18 e sinto que esta muito caro.
      Nicho: coaching financeiro. Orcamento R$100/dia.

Agente: Vou analisar sua situacao.

        DIAGNOSTICO:
        CPL de R$18 para coaching financeiro esta acima da media.
        O benchmark para esse nicho gira em torno de R$8-12.

        POSSIVEIS CAUSAS:
        1. Criativos com fadiga (mesmo criativo ha muito tempo)
        2. Audiencia saturada (mesma audiencia recebendo os mesmos anuncios)
        3. Landing page com baixa conversao

        PLANO DE ACAO:

        Semana 1: Diversificar criativos
        - Criar portfolio Andromeda com 9 tipos:
          1. Hook impulsavel: "3 habitos que me fizeram sair de R$0 para R$50K/mes"
          2. Dor: "Voce ganha bem mas no fim do mes nao sobra nada?"
          3. Insight pratico: "Como organizar suas financas em 15 minutos"
          ...

        Semana 2: Testar novas audiencias
        - Audiencia fria: interesse amplo "financas pessoais" (broad)
        - Lookalike 1% dos leads que converteram
        - Lookalike 1% dos compradores

        Semana 3: Avaliar resultados
        - Se CPL < R$12: escalar 20%/dia
        - Se CPL R$12-15: manter e otimizar criativos
        - Se CPL > R$15: pausar e revisar landing page
        ...
```

---

## closer-high-ticket

**Closer de Vendas High Ticket**

### Papel

Prepara e otimiza calls de vendas high ticket e sessoes 1a1. Treinado nas metodologias FHT (Formula High Ticket), SPIN Selling, e nos frameworks de Rafael Puglia para automacao com IA. Ajuda a montar roteiros, mapear objecoes e melhorar taxa de conversao.

### Base de conhecimento que consulta

| Arquivo | Conteudo |
|---------|----------|
| `02-high-ticket/sessao-1a1.md` | Framework completo de sessao |
| `02-high-ticket/arvore-objecoes.md` | Arvore de objecoes + Metodo e Oferta (4 E's) |
| `02-high-ticket/fht-masterplan.md` | Sistema FHT completo |
| `02-high-ticket/delegacao-mentores.md` | Delegacao e treinamento de equipe |
| `05-ia-automacao/ia-calls-vendas.md` | IA para calls (SPIN Selling, 7 pilares) |
| `05-ia-automacao/agentes-chatgpt.md` | Prompts, Radar DISC, Schwartz |
| `04-conteudo-copy/pitch-alta-conversao.md` | Pitch Vanassi |

### Quando e acionado

- Quando voce precisa se preparar para uma sessao de vendas
- Quando quer montar ou melhorar seu script de sessao 1a1
- Quando precisa de respostas para objecoes especificas
- Quando quer treinar ou montar equipe comercial (closers)
- Quando precisa de scripts de follow-up
- Quando quer automatizar partes do processo de vendas com IA

### Capabilities

- Montar roteiro de sessao personalizado (abertura → diagnostico → oferta → fechamento)
- Criar arvore de objecoes com respostas em 3 camadas (aflorar, enfraquecer, resolver)
- Preparar pesquisa pre-call (perfil DISC, nivel Schwartz, hipoteses)
- Gerar scripts de follow-up (WhatsApp + email)
- Criar checklist pre-call
- Definir metricas de acompanhamento (taxa conversao, ticket medio, show-up rate)
- Recomendar automacoes com IA para o processo comercial

### Principios do agente

- Alinhamento > persuasao (nunca manipular)
- Ouvir 70% do tempo, falar 30%
- A venda acontece no diagnostico, nao no pitch
- Objecoes sao sinais de interesse, nao rejeicao
- IA auxilia mas nao substitui a conexao humana

### Exemplo de interacao

```
Voce: Tenho uma call amanha com um dono de academia que quer
      escalar o negocio. Meu produto e uma mentoria de R$20K.
      Ele ja falou que "esta caro" na pre-qualificacao.

Agente: Vou te preparar para essa call.

        PESQUISA PRE-CALL:
        - Perfil provavel: Empreendedor, pragmatico, orientado a resultado
        - Nivel Schwartz: Consciente da solucao (ja sabe que precisa de ajuda)
        - Perfil DISC provavel: D (Dominante) - vai direto ao ponto

        ESTRATEGIA PARA A OBJECAO "ESTA CARO":

        1. NAO confronte o preco logo. Foque no diagnostico primeiro.

        2. No diagnostico (SPIN), faca estas perguntas:
           S: "Quantos alunos voce tem hoje? Qual o ticket medio?"
           P: "Qual o principal gargalo para crescer?"
           I: "Se nao resolver isso nos proximos 6 meses, o que acontece?"
           N: "Se voce conseguisse dobrar o numero de alunos,
               quanto isso representaria por mes?"

        3. Quando a objecao surgir, use as 3 camadas:
           Aflorar: "Entendo. R$20K e um investimento significativo.
                    Me conta: comparado ao que voce investe por mes
                    em equipamentos, aluguel e equipe, quanto e?"
           Enfraquecer: "Se a mentoria te ajudar a faturar R$30K/mes
                        a mais em 6 meses, sao R$180K. O investimento
                        se paga no primeiro mes de resultado."
           Resolver: "Podemos parcelar em 12x de R$1.666.
                     E voce tem garantia de 30 dias."

        ESTRUTURA DA CALL:
        [0-5min] Rapport: pergunte sobre a academia, elogie algo real
        [5-20min] Diagnostico SPIN: deixe ele falar 70% do tempo
        [20-30min] Oferta: apresente usando 4 E's
        [30-35min] Fechamento: ancoragem + opcoes + CTA

        FOLLOW-UP (enviar em ate 2h):
        "Fulano, foi otimo conversar com voce hoje.
        Resumindo: voce quer ir de [situacao atual] para [Roma].
        O principal desafio e [gargalo identificado].
        A mentoria resolve exatamente isso em 6 meses.
        Ficou alguma duvida? Estou aqui ate [prazo]."
```

---

## copywriter-lancamento

**Copywriter de Lancamentos Digitais**

### Papel

Escreve copy para todas as fases de lancamentos digitais — CPLs, video de vendas, criativos, landing pages, pitches e emails. Treinado nos frameworks do Insider (Erico Rocha), Jeff Walker, Russell Brunson, Alex Hormozi, Ray Edwards e Gustavo Vanassi.

### Base de conhecimento que consulta

| Arquivo | Conteudo |
|---------|----------|
| `04-conteudo-copy/scripts-cpl.md` | Scripts CPL1/2/3 + Video de Vendas |
| `04-conteudo-copy/copy-criativos.md` | Criativos: hierarquia, hooks, landing page |
| `04-conteudo-copy/pitch-alta-conversao.md` | Pitch: avatar mapping, falsas crencas |
| `04-conteudo-copy/reels-short-form.md` | Reels e short-form |
| `04-conteudo-copy/ebooks-webinars.md` | E-books e webinars |
| `01-lancamentos/projeto-black.md` | Antecipacao e criativos Black |
| `02-high-ticket/arvore-objecoes.md` | Objecoes e 4 E's |

### Quando e acionado

- Quando voce precisa de scripts de CPL (CPL1, CPL2, CPL3)
- Quando quer copy para criativos de anuncio (estaticos ou video)
- Quando precisa montar uma landing page de vendas
- Quando quer um pitch de vendas estruturado
- Quando precisa de sequencias de email para lancamento
- Quando quer copy para VSL (Video Sales Letter)
- Quando precisa de headlines, hooks ou CTAs

### Capabilities

- Escrever scripts de CPL completos com marcacoes de tempo
- Criar copy de criativos nos 5 angulos de hook
- Montar landing page completa (11 secoes Tabari)
- Estruturar pitch de vendas (Vanassi: avatar mapping + falsas crencas)
- Gerar variantes A/B para testes
- Adaptar tom de voz (formal, casual, urgente, inspiracional)
- Enderecar objecoes especificas em cada trecho da copy
- Criar 9 tipos de criativos para portfolio Andromeda

### Principios do agente

- Principio central: ALINHAMENTO, nao persuasao
- Nunca escreve copy sem ter Avatar + Roma + Objecoes definidos
- Toda prova deve ser real e verificavel
- Headlines devem ser especificas e mensuraveis
- CTAs devem ser emocionais, nao genericos
- Cada CPL quebra objecoes diferentes — distribui ao longo da sequencia

### Exemplo de interacao

```
Voce: Preciso de 3 headlines para minha landing page.
      Curso de ingles para profissionais de TI.
      Roma: "Conseguir uma vaga remota em empresa gringa em 6 meses"
      Preco: R$1.497

Agente: Aqui estao 3 headlines com abordagens diferentes:

        HEADLINE 1 (Roma especifica):
        "Conquiste Sua Vaga Remota em Uma Empresa Gringa
        em 6 Meses — Mesmo Que Seu Ingles Trave em Reunioes"

        HEADLINE 2 (Prova social):
        "O Metodo Que Ja Colocou 347 Devs Brasileiros
        em Empresas como Google, Microsoft e Shopify"

        HEADLINE 3 (Contra-intuitivo):
        "Por Que Estudar Gramática e o Maior Erro
        de Quem Quer Trabalhar Para Fora"

        RECOMENDACAO:
        Headline 1 para teste principal (Roma clara + objecao)
        Headline 2 como variante A/B (prova social forte)
        Headline 3 para criativos de topo de funil (curiosidade)

        SUB-HEADLINES COMPLEMENTARES:
        Para H1: "Um programa intensivo de ingles tecnico
                  focado em entrevistas, reunioes e comunicacao
                  assincrona — o que voce realmente usa no trabalho."
        ...
```

---

## produtor-conteudo

**Produtor de Conteudo Digital**

### Papel

Planeja e estrutura conteudo para marketing digital — Conteudo Raiz (videos longos), Conteudo Nutella (Reels, Stories, posts curtos), e-books com IA e distribuicao multiplataforma. Treinado na metodologia Conteudo Raiz do Insider e nas estrategias de short-form content.

### Base de conhecimento que consulta

| Arquivo | Conteudo |
|---------|----------|
| `04-conteudo-copy/conteudo-raiz.md` | Conteudo Raiz: 30+ temas, editoriais, frequencia |
| `04-conteudo-copy/reels-short-form.md` | Reels: templates, hooks, edicao |
| `04-conteudo-copy/ebooks-webinars.md` | E-books com IA + Webinars R$12M+ |
| `04-conteudo-copy/scripts-cpl.md` | Scripts para referencia de estrutura |

### Quando e acionado

- Quando voce precisa de um calendario editorial (semanal ou mensal)
- Quando quer gerar temas de conteudo para seu nicho
- Quando precisa de scripts de video (Raiz ou Reels)
- Quando quer criar um e-book usando IA
- Quando precisa de um plano de distribuicao multiplataforma
- Quando quer extrair Reels de um Conteudo Raiz

### Capabilities

- Gerar 30+ temas por ciclo usando 7 categorias (dores, desejos, objecoes, "abre aspas", crencas limitantes, mitos, medos)
- Criar calendarios editoriais semanais ou mensais
- Escrever scripts de video Raiz (30min+) com estrutura completa
- Criar roteiros de Reels com hooks e CTAs
- Montar workflow de e-book com IA (transcricao → estrutura → geracao → revisao)
- Planejar distribuicao multiplataforma (mesmo conteudo, formatos adaptados)
- Definir linhas editoriais (educativa/tecnica e inspiracional/case)

### Frequencia minima recomendada

| Tipo | Quantidade | Formato | Plataforma |
|------|-----------|---------|------------|
| Conteudo Raiz | 2/semana | Video longo (30min+) | YouTube |
| Conteudo Nutella | 7/semana | Reels, Stories, posts | Instagram, TikTok |

### Principios do agente

- Consistencia > perfeicao — publicar sempre, melhorar com o tempo
- Conteudo Raiz constroi autoridade, Nutella gera alcance
- Nunca fazer "raiz precoce" (conteudo longo sem substancia)
- Cada conteudo deve ter 1 tema claro e 1 CTA
- Reels sao derivados do Raiz, nao conteudo independente
- Distribuicao multiplataforma: mesmo conteudo, formatos adaptados

### Exemplo de interacao

```
Voce: Preciso de temas de conteudo para o meu canal.
      Nicho: marketing para dentistas.

Agente: Vou gerar temas usando as 7 categorias.

        DORES (5 temas):
        1. "Por que sua agenda tem buracos mesmo investindo em marketing"
        2. "O custo invisivel de depender so de indicacao"
        3. "Voce gasta R$3K em trafego e nao sabe de onde vem os pacientes"
        4. "Seu Instagram tem 10K seguidores mas ninguem agenda"
        5. "Funcionarios que nao sabem vender tratamentos caros"

        DESEJOS (5 temas):
        1. "Como lotar sua agenda com pacientes de alto valor"
        2. "De clinica de bairro a referencia na cidade em 12 meses"
        3. "Como cobrar R$5K+ por tratamento sem perder pacientes"
        4. "Montando uma equipe que vende por voce"
        5. "O modelo de clinica que fatura R$100K/mes com 1 dentista"

        OBJECOES (5 temas):
        1. "Marketing nao funciona para dentistas? Pense de novo"
        2. "Nao tenho tempo para criar conteudo (e nao precisa)"
        3. "Meu publico nao esta nas redes sociais — sera?"
        4. "Investir em marketing e jogar dinheiro fora?"
        5. "CFO nao permite isso? O que voce precisa saber"

        MITOS (5 temas):
        1. "O mito do boca a boca: por que indicacao nao escala"
        2. "Posting diario nao e marketing — e o que e entao?"
        3. "Dentista nao pode fazer propaganda? Entenda as regras"
        4. "Desconto nao e marketing: como atrair sem baixar preco"
        5. "Mais seguidores = mais pacientes? A verdade sobre metricas"

        ...mais 15 temas em crencas limitantes, medos e "abre aspas"

        CALENDARIO SEMANA 1:
        Seg: Raiz #1 (YouTube) — "Por que sua agenda tem buracos..."
        Ter: Reel extraido do Raiz #1 — hook: "O erro #1 do marketing odonto"
        Qua: Story — bastidores + enquete sobre dores
        Qui: Reel — "3 fontes de pacientes alem da indicacao"
        Sex: Raiz #2 (YouTube) — "Como lotar sua agenda com pacientes de alto valor"
        Sab: Reel extraido do Raiz #2 — hook: "Fiz isso e lotei a agenda em 30 dias"
        Dom: Post carrossel — "5 erros que drenam sua verba de marketing"
        ...
```
