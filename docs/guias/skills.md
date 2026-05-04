# Skills Disponiveis

Skills sao comandos pre-configurados que guiam o Claude por um processo estruturado de coleta de informacoes, consulta a base de conhecimento e geracao de entregaveis. Para usar qualquer skill, basta digitar o comando no chat.

---

## /lancamento

**Planejamento de Lancamento Digital**

### O que faz

Planeja um lancamento digital completo — do zero ate a abertura de carrinho — com timeline, checklist, estrutura de CPLs, orcamento de trafego e metricas-alvo. Recomenda automaticamente o tipo de lancamento ideal (semente, classico, pago ou Black) com base na sua situacao.

### Perguntas que o skill vai fazer

1. Qual o nicho e subnicho?
2. Quem e o avatar (cliente ideal)?
3. Qual a Roma (promessa de transformacao)?
4. Ja fez algum lancamento antes? Qual tipo e resultados?
5. Tamanho da audiencia atual (seguidores, lista de email, WhatsApp)
6. Orcamento disponivel para trafego
7. Tem equipe? Quantas pessoas?
8. Qual o objetivo financeiro?

### Output esperado

- **Tipo de lancamento recomendado** com justificativa
- **Timeline completa** com datas reais (ciclos de 45-60 dias)
- **Checklist de preparacao** dividido em fases (pre/durante/pos-lancamento)
- **Estrutura de CPLs** (CPL1, CPL2, CPL3) se aplicavel
- **Orcamento estimado** de trafego
- **Metricas-alvo**: ROAS 1.0-1.2, unique views 70%+, conversao 7-10%+
- **Proximos 5 passos imediatos**

### Exemplo de uso

```
Voce: /lancamento

Claude: Vou te ajudar a planejar seu lancamento! Preciso de algumas informacoes:
        1. Qual o seu nicho?
        ...

Voce: Sou personal trainer. Nunca lancei. Tenho 3.000 seguidores no Instagram.
      Meu avatar sao mulheres 30-45 que querem emagrecer.
      Roma: "Perder 10kg em 90 dias com treinos de 30 minutos em casa"
      Orcamento: R$2.000 para trafego.

Claude: Com base no seu perfil, recomendo um Lancamento Semente.

        JUSTIFICATIVA:
        - Nunca lancou antes (precisa validar o produto)
        - Audiencia pequena (3K seguidores)
        - Orcamento limitado (R$2K)

        TIMELINE (45 dias):
        Semana 1-2: Preparacao (definir produto, criar pagina, aquecer audiencia)
        Semana 3-4: Pre-lancamento (CPL1, CPL2, CPL3)
        Semana 5: Lancamento (abertura + 7 dias de carrinho)
        Semana 6: Pos-lancamento (onboarding, debrief, planejamento do proximo ciclo)

        METRICAS-ALVO:
        - 200-300 leads na lista
        - 10-20 vendas no primeiro ciclo
        - Ticket: R$297-497
        ...
```

---

## /high-ticket

**Sistema de Vendas High Ticket**

### O que faz

Monta uma oferta high ticket completa com estrutura de pacotes (DFY/DWY/DIY), arvore de objecoes personalizada, script de sessao 1a1 e plano de geracao de leads via SLG (Social Lead Generation). Inclui tambem plano de delegacao para quem quer montar equipe comercial.

### Perguntas que o skill vai fazer

1. Qual o nicho e avatar?
2. Qual a Roma (transformacao prometida)?
3. Faixa de preco desejada (R$5K-100K+)?
4. Ja faz sessoes 1a1? Quantas? Taxa de conversao?
5. Tem equipe comercial? Quantos closers?
6. Como gera leads hoje? (SLG, trafego, indicacao)
7. Principais objecoes que escuta?

### Output esperado

- **Estrutura da oferta**: pacotes DFY/DWY/DIY com pricing e ancoragem
- **Arvore de objecoes personalizada**: top 5 objecoes do nicho com respostas em 3 camadas (aflorar, enfraquecer, resolver)
- **Script de sessao 1a1**: abertura → diagnostico (SPIN) → oferta (4 E's) → fechamento
- **Plano de SLG**: mensagens de desarme e conducao para Instagram
- **Funil de aula semanal**: estrutura de captacao + nurturing
- **Plano de delegacao** (se aplicavel): 5 fases com guia do mentor
- **Metricas-alvo**: taxa conversao, ticket medio, show-up rate, CAC

### Exemplo de uso

```
Voce: /high-ticket

Claude: Vou te ajudar a montar sua oferta high ticket! Preciso de algumas informacoes...

Voce: Sou consultor de marketing para e-commerces.
      Preco: R$15.000 a mentoria de 6 meses.
      Ja fiz 20 sessoes, converto 15%.
      Objecoes: "esta caro", "ja contratei agencia e nao funcionou"

Claude: ESTRUTURA DA OFERTA:

        Pacote Diamante (DFY) - R$30.000
        → Consultoria + execucao completa (ancoragem)

        Pacote Ouro (DWY) - R$15.000 ← PRINCIPAL
        → Mentoria + acompanhamento semanal + templates

        Pacote Prata (DIY) - R$5.000
        → Curso gravado + grupo de suporte

        ARVORE DE OBJECOES:

        "Esta caro"
        1. Aflorar: "Quanto voce fatura hoje por mes no e-commerce?"
        2. Enfraquecer: "Se a mentoria aumentar seu faturamento em 30%,
           quanto isso representa em 6 meses?"
        3. Resolver: "Parcelamos em 12x e voce pode pausar se nao
           tiver resultado em 60 dias"
        ...
```

---

## /trafego

**Planejamento de Campanha de Trafego Pago**

### O que faz

Planeja uma campanha de trafego pago completa com setup checklist, estrutura de campanhas (naming convention Sobral), audiencias por temperatura, briefing de criativos (9 tipos Andromeda), orcamento por fase e calendario de otimizacao.

### Perguntas que o skill vai fazer

1. Plataforma (Meta Ads, Google Ads, etc.)
2. Objetivo (leads, vendas, awareness, remarketing)
3. Orcamento diario/mensal
4. Nicho e produto
5. Pixel/API ja configurados?
6. Business Manager existe?
7. Audiencia atual e temperatura
8. Historico de campanhas

### Output esperado

- **Setup checklist**: Pixel, API de Conversoes, BM, UTMs
- **Estrutura de campanhas**: naming convention Sobral, CBO vs ABO, fases
- **Audiencias por temperatura**: fria/morna/quente com tamanhos estimados
- **Briefing de criativos**: 9 tipos Andromeda com descricao para cada
- **Orcamento por fase**: teste (CPM x 15) → validacao → escala (20-30%/dia)
- **Metricas-alvo**: CPL, CTR, CPM, ROAS por fase
- **Calendario de otimizacao**: intervalos de revisao (14/30/60/90 dias)
- **Plano de escala**: incremento diario, quando pausar, quando criar novos conjuntos

### Exemplo de uso

```
Voce: /trafego

Claude: Vou montar seu plano de campanha! Preciso saber...

Voce: Meta Ads. Orcamento R$5.000/mes. Objetivo: captar leads para lancamento.
      Nicho: coaching de carreira. Pixel instalado, BM configurada.
      Nunca rodei campanha antes.

Claude: SETUP CHECKLIST:
        ✅ Pixel instalado
        ✅ BM configurada
        ⬜ API de Conversoes (recomendo configurar)
        ⬜ UTMs definidas

        ESTRUTURA DE CAMPANHAS:

        Campanha 1: [LANCAMENTO-CARREIRA] [LEADS] [FEED+STORIES] [FRIA] [001]
        → ABO (fase de teste)
        → 3 conjuntos: interesse amplo, lookalike 1%, lookalike 3%
        → 9 criativos (portfolio Andromeda)

        ORCAMENTO POR FASE:
        Fase 1 - Teste (dias 1-14): R$50/dia = R$700
        Fase 2 - Validacao (dias 15-30): R$100/dia nos melhores conjuntos
        Fase 3 - Escala (dias 31+): +20-30%/dia nos validados

        BRIEFING DE CRIATIVOS (9 TIPOS):
        1. Hook impulsavel: video curto sobre erro comum em transicao de carreira
        2. Dor: "Voce trabalha 10h/dia e sente que nao avanca?"
        3. Insight pratico: "3 passos para negociar aumento ainda este mes"
        ...
```

---

## /copy

**Geracao de Copy para Lancamentos**

### O que faz

Gera copy completa e pronta para uso — scripts de CPL, criativos (estaticos e video), landing pages, pitches de venda, emails e VSLs. Cada entrega inclui variantes A/B, contagem de caracteres e notas de producao. Usa os frameworks do Insider, Jeff Walker e Gustavo Vanassi.

### Perguntas que o skill vai fazer

1. Tipo de copy: CPL1, CPL2, CPL3, criativo (estatico/video), landing page, pitch, email, VSL
2. Nicho e avatar
3. Roma (promessa de transformacao)
4. Produto/servico
5. Tom de voz (formal, casual, urgente, inspiracional)
6. Objecoes principais do avatar

### Output esperado

- **Copy completa** pronta para uso
- **2-3 variantes A/B** (headlines, hooks, CTAs alternativos)
- **Character counts** (para formatos com limite de caracteres)
- **Notas de producao** (indicacoes visuais se for video)
- **Objecoes enderecadas** por trecho

### Frameworks disponiveis por tipo

| Tipo | Framework |
|------|-----------|
| CPL1 | Apresentacao → Prova → Historia → Conteudo → Oferta → Fechamento |
| CPL2 | Roma → Prova → Review → Conteudo → Oferta → Fechamento |
| CPL3 | Q&A / Amostra / Indice-Mapa |
| VSL | Promessa → Prova → Historia → Oferta |
| Criativos | 5 angulos de hook (contra-intuitivo, paradoxal, direto, social proof, urgencia) |
| Landing Page | 11 secoes (headline, sub, prova, dor, oportunidade, para quem, FAQ, preco, autoridade, CTA, garantia) |
| Pitch | Avatar mapping (4 dimensoes) → falsas crencas → blocos do pitch |

### Exemplo de uso

```
Voce: /copy

Claude: O que voce precisa? Me conta os detalhes...

Voce: Preciso de um CPL1 para lancamento de curso de confeitaria.
      Avatar: mulheres 25-45 que querem renda extra.
      Roma: "Faturar R$5K/mes vendendo bolos em casa"
      Tom: inspiracional e pratico.
      Objecoes: "nao tenho dinheiro para investir", "ja esta saturado"

Claude: CPL1 - "O CAMINHO ERRADO VS O CAMINHO CERTO"

        [HOOK - 0:00 a 0:30]
        "Se voce acha que precisa de uma cozinha profissional
        e investir R$10 mil para comecar a vender bolos...
        eu tenho uma noticia que vai mudar tudo."

        [HISTORIA - 0:30 a 3:00]
        "Ha 3 anos eu estava exatamente onde voce esta.
        Trabalhando em emprego CLT, ganhando R$2.500/mes..."

        [CONTEUDO - 3:00 a 12:00]
        "Existem 2 caminhos para comecar na confeitaria..."

        VARIANTE A/B DO HOOK:
        A: "Se voce acha que precisa de uma cozinha profissional..."
        B: "1.200 alunas ja faturam mais de R$5K/mes com bolos caseiros.
           O que elas sabem que voce ainda nao sabe?"

        NOTAS DE PRODUCAO:
        - Gravar em cozinha residencial (reforça a Roma)
        - Mostrar fotos de bolos reais das alunas em [3:00]
        - Insert de depoimento em video em [7:30]
        ...
```

---

## /funil

**Design de Funil Completo**

### O que faz

Desenha o funil completo do seu negocio digital — da captacao ate a retencao — com diagrama visual, paginas necessarias, sequencia de emails/automacoes, metricas-alvo por etapa, tech stack recomendada e projecao de resultados baseada em benchmarks reais.

### Perguntas que o skill vai fazer

1. Tipo de funil desejado: lancamento (semente/classico/pago), perpetuo, webinar, e-book, high ticket, hibrido
2. Nicho e avatar
3. Produto/servico e faixa de preco
4. Orcamento de trafego
5. Tech stack atual (Hotmart? WordPress? Active Campaign? etc.)
6. Objetivo principal (leads, vendas, nurturing, upsell)

### Output esperado

- **Diagrama visual** (texto) do funil: awareness → consideracao → conversao → retencao
- **Paginas necessarias**: cada URL com proposito (/cadastro, /obrigado, /vendas, etc.)
- **Emails/automacoes**: sequencia completa com timing
- **Metricas-alvo por etapa**: taxa de conversao esperada em cada ponto
- **Tech stack recomendada**: ferramentas por funcao
- **Estimativa de resultados**: projecao baseada em benchmarks reais

### Benchmarks por tipo de funil

| Funil | CAC | Conversao | ROAS |
|-------|-----|-----------|------|
| E-book (R$9.90) | R$1/cliente | 18% order bump | Alto |
| Webinar (R$397-997) | Variavel | 10-15% | 1.7-2.0 |
| Lancamento Pago | CPM x 15 (teste) | 7-10%+ | 1.0-1.2 |
| High Ticket (SLG → 1a1) | Organico | Variavel | Alto |

### Exemplo de uso

```
Voce: /funil

Claude: Vou desenhar seu funil! Qual o modelo?

Voce: Funil perpetuo de e-book para captar leads e vender produto de R$497.
      Nicho: produtividade para empreendedores.
      Tech: Hotmart + Active Campaign.
      Orcamento: R$2.000/mes.

Claude: DIAGRAMA DO FUNIL:

        [Meta Ads] → [Landing Page E-book R$9.90]
              ↓
        [Obrigado + Order Bump R$47] ← 18% conversao
              ↓
        [Sequencia de 7 emails - 14 dias]
              ↓
        [Webinar Gravado]
              ↓
        [Pagina de Vendas R$497] ← 10-15% conversao
              ↓
        [Upsell Mentoria R$1.997]

        PAGINAS NECESSARIAS:
        /ebook → Landing page do e-book
        /obrigado → Confirmacao + order bump
        /webinar → Pagina do webinar gravado
        /vendas → Pagina de vendas do produto principal
        /checkout → Checkout Hotmart
        /upsell → Oferta pos-compra

        PROJECAO (R$2.000/mes de trafego):
        - 2.000 compradores do e-book (CAC R$1)
        - 360 order bumps (R$16.920)
        - 200-300 assistem webinar
        - 20-45 vendas do produto (R$9.940 - R$22.365)
        ...
```

---

## /escala

**Diagnostico e Plano de Escala**

### O que faz

Diagnostica os gargalos do seu negocio digital em 5 areas (trafego, conversao, produto, equipe, financeiro) e gera um plano de escala por fases (30/60/90 dias) com delegacao, automacoes recomendadas, projecao financeira e progressao de faixa.

### Perguntas que o skill vai fazer

1. Faturamento atual (mensal/anual)
2. Objetivo de faturamento
3. Modelo de negocio (lancamento, perpetuo, high ticket, hibrido)
4. Tamanho da equipe atual
5. Principais metricas: ROAS, CPL, taxa de conversao, ticket medio
6. Gargalos percebidos (trafego? conversao? entrega? equipe?)
7. Ferramentas/automacoes atuais

### Output esperado

- **Diagnostico** dos gargalos principais (top 3)
- **Plano de escala por fase** (30/60/90 dias)
- **Delegacao necessaria**: quais funcoes terceirizar/contratar (5 fases FHT)
- **Automacoes recomendadas**: IA para calls, agentes ChatGPT, tracking automatico
- **Projecao financeira**: baseada em benchmarks reais
- **Progressao de faixa**: onde voce esta e qual o proximo marco
- **KPIs para acompanhar**: metricas criticas com frequencia de revisao

### Marcos de progressao

| Faixa | Criterio |
|-------|----------|
| Semente | Primeiro lancamento realizado |
| 6em7 | R$100.000 em 7 dias |
| Faixa Marrom | R$300K+ por lancamento |
| Faixa Preta | R$2M+ por ano |

### Exemplo de uso

```
Voce: /escala

Claude: Vou fazer o diagnostico do seu negocio. Me conta...

Voce: Faturo R$50K/mes com lancamentos classicos (2 por trimestre).
      ROAS: 0.8. CPL: R$12. Conversao: 4%.
      Equipe: eu + 1 social media + 1 gestor de trafego.
      Gargalo: sinto que o trafego nao converte.

Claude: DIAGNOSTICO:

        🔴 Gargalo #1: CONVERSAO (critico)
        - Taxa de 4% esta abaixo do benchmark (7-10%)
        - Indica problema na copy dos CPLs ou na oferta
        - Acao: revisar scripts CPL e pitch de vendas

        🟡 Gargalo #2: TRAFEGO
        - ROAS 0.8 esta abaixo do minimo (1.0)
        - CPL R$12 pode estar alto para o nicho
        - Acao: diversificar criativos (portfolio Andromeda)

        🟢 Gargalo #3: EQUIPE
        - Equipe de 3 e suficiente para o faturamento atual
        - Proximo passo: adicionar closer quando chegar em R$100K/mes

        PLANO DE ESCALA:

        Fase 1 (30 dias): Corrigir conversao
        - Reescrever CPL1 e CPL2 com novos frameworks
        - Criar 9 criativos Andromeda
        - Meta: conversao de 4% → 7%

        Fase 2 (60 dias): Otimizar trafego
        - Testar novas audiencias (lookalike de compradores)
        - Escalar 20-30%/dia nos conjuntos validados
        - Meta: ROAS de 0.8 → 1.2

        Fase 3 (90 dias): Escalar
        - Adicionar lancamento pago ao mix
        - Contratar closer para high ticket
        - Meta: R$100K/mes (6em7)

        PROGRESSAO: Voce esta na fase pre-6em7.
        Proximo marco: 6em7 (R$100K em 7 dias)
        Ciclos estimados: mais 3-4 lancamentos
        ...
```
