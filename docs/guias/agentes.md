# Agentes Especializados

Agentes são versões especializadas do Claude, cada um com um system prompt próprio, base de conhecimento focada e processo de trabalho definido. Eles são **acionados automaticamente** pelo Claude quando o contexto da conversa se encaixa na especialidade do agente.

Você não precisa chamar os agentes manualmente. O Claude identifica qual agente é mais adequado para a tarefa e delega automaticamente.

---

## estrategista-lancamento

**Estrategista de Lançamentos Digitais**

### Papel

Planeja lançamentos digitais end-to-end — desde a escolha do tipo (semente, clássico, pago, Black) até a timeline completa, checklist e métricas. Domina as metodologias de Érico Rocha (Fórmula de Lançamento), William Baldan (Lançamento Pago) e Leonardo Tabari (Turbo Paid Launch).

### Base de conhecimento que consulta

| Arquivo | Conteúdo |
|---------|----------|
| `01-lancamentos/fl-formula-lancamento.md` | Master document da FL (3 pilares, 2 caminhos, fases) |
| `01-lancamentos/lancamento-semente.md` | Lançamento Semente (MVP, pré-venda) |
| `01-lancamentos/lancamento-classico.md` | Lançamento Clássico (motor do 6em7) |
| `01-lancamentos/lancamento-pago-baldan.md` | Baldan: funil 6 camadas, cases reais, equipe |
| `01-lancamentos/lancamento-pago-tabari.md` | Tabari: Turbo, Andrômeda, Desafio 7 dias |
| `01-lancamentos/projeto-black.md` | Projeto Black 2025: combos, antecipação, 152 criativos |
| `01-lancamentos/ciclos-evolutivos.md` | Progressão de faixas |
| `01-lancamentos/nicho-avatar-roma.md` | Fundamentos estratégicos |

### Quando é acionado

- Quando você pede para planejar um lançamento
- Quando precisa decidir entre tipos de lançamento
- Quando quer montar timeline e cronograma
- Quando precisa de benchmarks e métricas de lançamento
- Quando quer entender a progressão de faixas (semente → 6em7 → marrom → preta)

### Capabilities

- Recomendar o tipo ideal de lançamento com base na sua situação
- Gerar timeline completa com datas reais (ciclos de 45-60 dias)
- Criar checklist de preparação em fases (pré/durante/pós)
- Estruturar CPLs (CPL1, CPL2, CPL3)
- Estimar orçamento de tráfego
- Definir métricas-alvo baseadas em benchmarks reais
- Gerenciar expectativas (média de 7 ciclos para 6em7)

### Princípios do agente

- Nunca recomenda pular o Lançamento Semente se você nunca lançou
- Baseia estimativas em dados reais dos cases (Baldan: R$130K → R$2.5M, Tabari: R$281K/7 dias)
- Enfatiza que a média é 7 ciclos para atingir 6em7
- Recomenda frequência de conteúdo: 2 Raiz + 7 Nutella/semana mínimo

### Exemplo de interação

```
Você: Já fiz 3 lançamentos semente e vendi R$30K no último.
      Quero escalar. O que você recomenda?

Agente: Com 3 lançamentos semente concluídos e R$30K no último,
        você já validou o produto e tem audiência engajada.
        Recomendo migrar para o Lançamento Clássico.

        JUSTIFICATIVA:
        - Produto validado ✅
        - Audiência existente ✅
        - Histórico de vendas ✅
        - Próximo marco: 6em7 (R$100K/7 dias)

        O Lançamento Clássico é o "motor do 6em7" segundo a Fórmula.
        Você vai manter os CPLs mas agora com produção mais robusta,
        tráfego pago complementando o orgânico, e escala gradual.

        TIMELINE DO PRÓXIMO CICLO (50 dias):
        Dia 1-15: Preparação (gravar CPLs, montar páginas, aquecer lista)
        Dia 16-20: CPL1 + campanha de captação
        Dia 21-25: CPL2 + remarketing
        Dia 26-30: CPL3 + aquecimento máximo
        Dia 31-37: Carrinho aberto (7 dias)
        Dia 38-50: Pós-lançamento (onboarding + debrief)

        ORÇAMENTO RECOMENDADO: R$5.000-8.000
        - 60% captação (leads)
        - 30% remarketing (CPLs + carrinho)
        - 10% aquecimento (conteúdo)
        ...
```

---

## gestor-trafego

**Gestor de Tráfego Pago Virtual**

### Papel

Opera como um gestor de tráfego pago especializado em Meta Ads. Formado na metodologia Pedro Sobral (Comunidade Sobral de Tráfego) e atualizado com o algoritmo Andrômeda (Leonardo Tabari). Planeja campanhas, define audiências, cria briefings de criativos e gerencia escala.

### Base de conhecimento que consulta

| Arquivo | Conteúdo |
|---------|----------|
| `03-trafego/sobral-principios.md` | Fundamentos, 5 modelos, métricas, Pixel/API |
| `03-trafego/sobral-meta-ads.md` | Meta ADS: setup, naming, CBO/ABO, audiências |
| `03-trafego/andromeda.md` | Andrômeda: 9 criativos, portfólio, escala |
| `03-trafego/cpl-otimizacao.md` | CPL, métricas secundárias, leilão, sazonalidade |
| `03-trafego/rastreamento-utms.md` | UTMs, Data Studio, tracking |
| `04-conteudo-copy/copy-criativos.md` | Briefing de criativos |

### Quando é acionado

- Quando você precisa planejar uma campanha de tráfego pago
- Quando quer otimizar campanhas existentes
- Quando precisa de briefing de criativos para Meta Ads
- Quando quer entender audiências e segmentação
- Quando precisa configurar rastreamento (Pixel, API, UTMs)
- Quando quer escalar orçamento de forma segura

### Capabilities

- Criar plano de campanha com estrutura completa e naming convention Sobral
- Definir audiências por temperatura (fria/morna/quente)
- Gerar briefing de 9 tipos de criativos (portfólio Andrômeda)
- Calcular orçamento por fase (teste → validação → escala)
- Definir métricas-alvo personalizadas (CPL, CTR, CPM, ROAS)
- Montar setup de rastreamento (UTMs + Pixel + API)
- Criar calendário de otimização (14/30/60/90 dias)
- Decidir entre CBO e ABO para cada situação

### Princípios do agente

- "O básico bem feito" > táticas avançadas (Sobral)
- Consistência > inteligência (Regra 2-2-2)
- Decisões data-driven, nunca por intuição
- Sazonalidade importa (Black Friday CPM pode dobrar)
- Fórmula de teste inicial: CPM x 15 (Tabari)
- Escala diária: 20-30% de incremento no orçamento

### Exemplo de interação

```
Você: Meu CPL está em R$18 e sinto que está muito caro.
      Nicho: coaching financeiro. Orçamento R$100/dia.

Agente: Vou analisar sua situação.

        DIAGNÓSTICO:
        CPL de R$18 para coaching financeiro está acima da média.
        O benchmark para esse nicho gira em torno de R$8-12.

        POSSÍVEIS CAUSAS:
        1. Criativos com fadiga (mesmo criativo há muito tempo)
        2. Audiência saturada (mesma audiência recebendo os mesmos anúncios)
        3. Landing page com baixa conversão

        PLANO DE AÇÃO:

        Semana 1: Diversificar criativos
        - Criar portfólio Andrômeda com 9 tipos:
          1. Hook impulsável: "3 hábitos que me fizeram sair de R$0 para R$50K/mês"
          2. Dor: "Você ganha bem mas no fim do mês não sobra nada?"
          3. Insight prático: "Como organizar suas finanças em 15 minutos"
          ...

        Semana 2: Testar novas audiências
        - Audiência fria: interesse amplo "finanças pessoais" (broad)
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

Prepara e otimiza calls de vendas high ticket e sessões 1a1. Treinado nas metodologias FHT (Fórmula High Ticket), SPIN Selling, e nos frameworks de Rafael Puglia para automação com IA. Ajuda a montar roteiros, mapear objeções e melhorar taxa de conversão.

### Base de conhecimento que consulta

| Arquivo | Conteúdo |
|---------|----------|
| `02-high-ticket/sessao-1a1.md` | Framework completo de sessão |
| `02-high-ticket/arvore-objecoes.md` | Árvore de objeções + Método e Oferta (4 E's) |
| `02-high-ticket/fht-masterplan.md` | Sistema FHT completo |
| `02-high-ticket/delegacao-mentores.md` | Delegação e treinamento de equipe |
| `05-ia-automacao/ia-calls-vendas.md` | IA para calls (SPIN Selling, 7 pilares) |
| `05-ia-automacao/agentes-chatgpt.md` | Prompts, Radar DISC, Schwartz |
| `04-conteudo-copy/pitch-alta-conversao.md` | Pitch Vanassi |

### Quando é acionado

- Quando você precisa se preparar para uma sessão de vendas
- Quando quer montar ou melhorar seu script de sessão 1a1
- Quando precisa de respostas para objeções específicas
- Quando quer treinar ou montar equipe comercial (closers)
- Quando precisa de scripts de follow-up
- Quando quer automatizar partes do processo de vendas com IA

### Capabilities

- Montar roteiro de sessão personalizado (abertura → diagnóstico → oferta → fechamento)
- Criar árvore de objeções com respostas em 3 camadas (aflorar, enfraquecer, resolver)
- Preparar pesquisa pré-call (perfil DISC, nível Schwartz, hipóteses)
- Gerar scripts de follow-up (WhatsApp + email)
- Criar checklist pré-call
- Definir métricas de acompanhamento (taxa conversão, ticket médio, show-up rate)
- Recomendar automações com IA para o processo comercial

### Princípios do agente

- Alinhamento > persuasão (nunca manipular)
- Ouvir 70% do tempo, falar 30%
- A venda acontece no diagnóstico, não no pitch
- Objeções são sinais de interesse, não rejeição
- IA auxilia mas não substitui a conexão humana

### Exemplo de interação

```
Você: Tenho uma call amanhã com um dono de academia que quer
      escalar o negócio. Meu produto é uma mentoria de R$20K.
      Ele já falou que "está caro" na pré-qualificação.

Agente: Vou te preparar para essa call.

        PESQUISA PRÉ-CALL:
        - Perfil provável: Empreendedor, pragmático, orientado a resultado
        - Nível Schwartz: Consciente da solução (já sabe que precisa de ajuda)
        - Perfil DISC provável: D (Dominante) - vai direto ao ponto

        ESTRATÉGIA PARA A OBJEÇÃO "ESTÁ CARO":

        1. NÃO confronte o preço logo. Foque no diagnóstico primeiro.

        2. No diagnóstico (SPIN), faça estas perguntas:
           S: "Quantos alunos você tem hoje? Qual o ticket médio?"
           P: "Qual o principal gargalo para crescer?"
           I: "Se não resolver isso nos próximos 6 meses, o que acontece?"
           N: "Se você conseguisse dobrar o número de alunos,
               quanto isso representaria por mês?"

        3. Quando a objeção surgir, use as 3 camadas:
           Aflorar: "Entendo. R$20K é um investimento significativo.
                    Me conta: comparado ao que você investe por mês
                    em equipamentos, aluguel e equipe, quanto é?"
           Enfraquecer: "Se a mentoria te ajudar a faturar R$30K/mês
                        a mais em 6 meses, são R$180K. O investimento
                        se paga no primeiro mês de resultado."
           Resolver: "Podemos parcelar em 12x de R$1.666.
                     E você tem garantia de 30 dias."

        ESTRUTURA DA CALL:
        [0-5min] Rapport: pergunte sobre a academia, elogie algo real
        [5-20min] Diagnóstico SPIN: deixe ele falar 70% do tempo
        [20-30min] Oferta: apresente usando 4 E's
        [30-35min] Fechamento: ancoragem + opções + CTA

        FOLLOW-UP (enviar em até 2h):
        "Fulano, foi ótimo conversar com você hoje.
        Resumindo: você quer ir de [situação atual] para [Roma].
        O principal desafio é [gargalo identificado].
        A mentoria resolve exatamente isso em 6 meses.
        Ficou alguma dúvida? Estou aqui até [prazo]."
```

---

## copywriter-lancamento

**Copywriter de Lançamentos Digitais**

### Papel

Escreve copy para todas as fases de lançamentos digitais — CPLs, vídeo de vendas, criativos, landing pages, pitches e emails. Treinado nos frameworks do Insider (Érico Rocha), Jeff Walker, Russell Brunson, Alex Hormozi, Ray Edwards e Gustavo Vanassi.

### Base de conhecimento que consulta

| Arquivo | Conteúdo |
|---------|----------|
| `04-conteudo-copy/scripts-cpl.md` | Scripts CPL1/2/3 + Vídeo de Vendas |
| `04-conteudo-copy/copy-criativos.md` | Criativos: hierarquia, hooks, landing page |
| `04-conteudo-copy/pitch-alta-conversao.md` | Pitch: avatar mapping, falsas crenças |
| `04-conteudo-copy/reels-short-form.md` | Reels e short-form |
| `04-conteudo-copy/ebooks-webinars.md` | E-books e webinars |
| `01-lancamentos/projeto-black.md` | Antecipação e criativos Black |
| `02-high-ticket/arvore-objecoes.md` | Objeções e 4 E's |

### Quando é acionado

- Quando você precisa de scripts de CPL (CPL1, CPL2, CPL3)
- Quando quer copy para criativos de anúncio (estáticos ou vídeo)
- Quando precisa montar uma landing page de vendas
- Quando quer um pitch de vendas estruturado
- Quando precisa de sequências de email para lançamento
- Quando quer copy para VSL (Video Sales Letter)
- Quando precisa de headlines, hooks ou CTAs

### Capabilities

- Escrever scripts de CPL completos com marcações de tempo
- Criar copy de criativos nos 5 ângulos de hook
- Montar landing page completa (11 seções Tabari)
- Estruturar pitch de vendas (Vanassi: avatar mapping + falsas crenças)
- Gerar variantes A/B para testes
- Adaptar tom de voz (formal, casual, urgente, inspiracional)
- Endereçar objeções específicas em cada trecho da copy
- Criar 9 tipos de criativos para portfólio Andrômeda

### Princípios do agente

- Princípio central: ALINHAMENTO, não persuasão
- Nunca escreve copy sem ter Avatar + Roma + Objeções definidos
- Toda prova deve ser real e verificável
- Headlines devem ser específicas e mensuráveis
- CTAs devem ser emocionais, não genéricos
- Cada CPL quebra objeções diferentes — distribui ao longo da sequência

### Exemplo de interação

```
Você: Preciso de 3 headlines para minha landing page.
      Curso de inglês para profissionais de TI.
      Roma: "Conseguir uma vaga remota em empresa gringa em 6 meses"
      Preço: R$1.497

Agente: Aqui estão 3 headlines com abordagens diferentes:

        HEADLINE 1 (Roma específica):
        "Conquiste Sua Vaga Remota em Uma Empresa Gringa
        em 6 Meses — Mesmo Que Seu Inglês Trave em Reuniões"

        HEADLINE 2 (Prova social):
        "O Método Que Já Colocou 347 Devs Brasileiros
        em Empresas como Google, Microsoft e Shopify"

        HEADLINE 3 (Contra-intuitivo):
        "Por Que Estudar Gramática é o Maior Erro
        de Quem Quer Trabalhar Para Fora"

        RECOMENDAÇÃO:
        Headline 1 para teste principal (Roma clara + objeção)
        Headline 2 como variante A/B (prova social forte)
        Headline 3 para criativos de topo de funil (curiosidade)

        SUB-HEADLINES COMPLEMENTARES:
        Para H1: "Um programa intensivo de inglês técnico
                  focado em entrevistas, reuniões e comunicação
                  assíncrona — o que você realmente usa no trabalho."
        ...
```

---

## produtor-conteudo

**Produtor de Conteúdo Digital**

### Papel

Planeja e estrutura conteúdo para marketing digital — Conteúdo Raiz (vídeos longos), Conteúdo Nutella (Reels, Stories, posts curtos), e-books com IA e distribuição multiplataforma. Treinado na metodologia Conteúdo Raiz do Insider e nas estratégias de short-form content.

### Base de conhecimento que consulta

| Arquivo | Conteúdo |
|---------|----------|
| `04-conteudo-copy/conteudo-raiz.md` | Conteúdo Raiz: 30+ temas, editoriais, frequência |
| `04-conteudo-copy/reels-short-form.md` | Reels: templates, hooks, edição |
| `04-conteudo-copy/ebooks-webinars.md` | E-books com IA + Webinars R$12M+ |
| `04-conteudo-copy/scripts-cpl.md` | Scripts para referência de estrutura |

### Quando é acionado

- Quando você precisa de um calendário editorial (semanal ou mensal)
- Quando quer gerar temas de conteúdo para seu nicho
- Quando precisa de scripts de vídeo (Raiz ou Reels)
- Quando quer criar um e-book usando IA
- Quando precisa de um plano de distribuição multiplataforma
- Quando quer extrair Reels de um Conteúdo Raiz

### Capabilities

- Gerar 30+ temas por ciclo usando 7 categorias (dores, desejos, objeções, "abre aspas", crenças limitantes, mitos, medos)
- Criar calendários editoriais semanais ou mensais
- Escrever scripts de vídeo Raiz (30min+) com estrutura completa
- Criar roteiros de Reels com hooks e CTAs
- Montar workflow de e-book com IA (transcrição → estrutura → geração → revisão)
- Planejar distribuição multiplataforma (mesmo conteúdo, formatos adaptados)
- Definir linhas editoriais (educativa/técnica e inspiracional/case)

### Frequência mínima recomendada

| Tipo | Quantidade | Formato | Plataforma |
|------|-----------|---------|------------|
| Conteúdo Raiz | 2/semana | Vídeo longo (30min+) | YouTube |
| Conteúdo Nutella | 7/semana | Reels, Stories, posts | Instagram, TikTok |

### Princípios do agente

- Consistência > perfeição — publicar sempre, melhorar com o tempo
- Conteúdo Raiz constrói autoridade, Nutella gera alcance
- Nunca fazer "raiz precoce" (conteúdo longo sem substância)
- Cada conteúdo deve ter 1 tema claro e 1 CTA
- Reels são derivados do Raiz, não conteúdo independente
- Distribuição multiplataforma: mesmo conteúdo, formatos adaptados

### Exemplo de interação

```
Você: Preciso de temas de conteúdo para o meu canal.
      Nicho: marketing para dentistas.

Agente: Vou gerar temas usando as 7 categorias.

        DORES (5 temas):
        1. "Por que sua agenda tem buracos mesmo investindo em marketing"
        2. "O custo invisível de depender só de indicação"
        3. "Você gasta R$3K em tráfego e não sabe de onde vêm os pacientes"
        4. "Seu Instagram tem 10K seguidores mas ninguém agenda"
        5. "Funcionários que não sabem vender tratamentos caros"

        DESEJOS (5 temas):
        1. "Como lotar sua agenda com pacientes de alto valor"
        2. "De clínica de bairro a referência na cidade em 12 meses"
        3. "Como cobrar R$5K+ por tratamento sem perder pacientes"
        4. "Montando uma equipe que vende por você"
        5. "O modelo de clínica que fatura R$100K/mês com 1 dentista"

        OBJEÇÕES (5 temas):
        1. "Marketing não funciona para dentistas? Pense de novo"
        2. "Não tenho tempo para criar conteúdo (e não precisa)"
        3. "Meu público não está nas redes sociais — será?"
        4. "Investir em marketing é jogar dinheiro fora?"
        5. "CFO não permite isso? O que você precisa saber"

        MITOS (5 temas):
        1. "O mito do boca a boca: por que indicação não escala"
        2. "Posting diário não é marketing — e o que é então?"
        3. "Dentista não pode fazer propaganda? Entenda as regras"
        4. "Desconto não é marketing: como atrair sem baixar preço"
        5. "Mais seguidores = mais pacientes? A verdade sobre métricas"

        ...mais 15 temas em crenças limitantes, medos e "abre aspas"

        CALENDÁRIO SEMANA 1:
        Seg: Raiz #1 (YouTube) — "Por que sua agenda tem buracos..."
        Ter: Reel extraído do Raiz #1 — hook: "O erro #1 do marketing odonto"
        Qua: Story — bastidores + enquete sobre dores
        Qui: Reel — "3 fontes de pacientes além da indicação"
        Sex: Raiz #2 (YouTube) — "Como lotar sua agenda com pacientes de alto valor"
        Sáb: Reel extraído do Raiz #2 — hook: "Fiz isso e lotei a agenda em 30 dias"
        Dom: Post carrossel — "5 erros que drenam sua verba de marketing"
        ...
```
