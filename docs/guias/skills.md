# Skills Disponíveis

Skills são comandos pré-configurados que guiam o Claude por um processo estruturado de coleta de informações, consulta à base de conhecimento e geração de entregáveis. Para usar qualquer skill, basta digitar o comando no chat.

---

## /lancamento

**Planejamento de Lançamento Digital**

### O que faz

Planeja um lançamento digital completo — do zero até a abertura de carrinho — com timeline, checklist, estrutura de CPLs, orçamento de tráfego e métricas-alvo. Recomenda automaticamente o tipo de lançamento ideal (semente, clássico, pago ou Black) com base na sua situação.

### Perguntas que o skill vai fazer

1. Qual o nicho e subnicho?
2. Quem é o avatar (cliente ideal)?
3. Qual a Roma (promessa de transformação)?
4. Já fez algum lançamento antes? Qual tipo e resultados?
5. Tamanho da audiência atual (seguidores, lista de email, WhatsApp)
6. Orçamento disponível para tráfego
7. Tem equipe? Quantas pessoas?
8. Qual o objetivo financeiro?

### Output esperado

- **Tipo de lançamento recomendado** com justificativa
- **Timeline completa** com datas reais (ciclos de 45-60 dias)
- **Checklist de preparação** dividido em fases (pré/durante/pós-lançamento)
- **Estrutura de CPLs** (CPL1, CPL2, CPL3) se aplicável
- **Orçamento estimado** de tráfego
- **Métricas-alvo**: ROAS 1.0-1.2, unique views 70%+, conversão 7-10%+
- **Próximos 5 passos imediatos**

### Exemplo de uso

```
Você: /lancamento

Claude: Vou te ajudar a planejar seu lançamento! Preciso de algumas informações:
        1. Qual o seu nicho?
        ...

Você: Sou personal trainer. Nunca lancei. Tenho 3.000 seguidores no Instagram.
      Meu avatar são mulheres 30-45 que querem emagrecer.
      Roma: "Perder 10kg em 90 dias com treinos de 30 minutos em casa"
      Orçamento: R$2.000 para tráfego.

Claude: Com base no seu perfil, recomendo um Lançamento Semente.

        JUSTIFICATIVA:
        - Nunca lançou antes (precisa validar o produto)
        - Audiência pequena (3K seguidores)
        - Orçamento limitado (R$2K)

        TIMELINE (45 dias):
        Semana 1-2: Preparação (definir produto, criar página, aquecer audiência)
        Semana 3-4: Pré-lançamento (CPL1, CPL2, CPL3)
        Semana 5: Lançamento (abertura + 7 dias de carrinho)
        Semana 6: Pós-lançamento (onboarding, debrief, planejamento do próximo ciclo)

        MÉTRICAS-ALVO:
        - 200-300 leads na lista
        - 10-20 vendas no primeiro ciclo
        - Ticket: R$297-497
        ...
```

---

## /high-ticket

**Sistema de Vendas High Ticket**

### O que faz

Monta uma oferta high ticket completa com estrutura de pacotes (DFY/DWY/DIY), árvore de objeções personalizada, script de sessão 1a1 e plano de geração de leads via SLG (Social Lead Generation). Inclui também plano de delegação para quem quer montar equipe comercial.

### Perguntas que o skill vai fazer

1. Qual o nicho e avatar?
2. Qual a Roma (transformação prometida)?
3. Faixa de preço desejada (R$5K-100K+)?
4. Já faz sessões 1a1? Quantas? Taxa de conversão?
5. Tem equipe comercial? Quantos closers?
6. Como gera leads hoje? (SLG, tráfego, indicação)
7. Principais objeções que escuta?

### Output esperado

- **Estrutura da oferta**: pacotes DFY/DWY/DIY com pricing e ancoragem
- **Árvore de objeções personalizada**: top 5 objeções do nicho com respostas em 3 camadas (aflorar, enfraquecer, resolver)
- **Script de sessão 1a1**: abertura → diagnóstico (SPIN) → oferta (4 E's) → fechamento
- **Plano de SLG**: mensagens de desarme e condução para Instagram
- **Funil de aula semanal**: estrutura de captação + nurturing
- **Plano de delegação** (se aplicável): 5 fases com guia do mentor
- **Métricas-alvo**: taxa conversão, ticket médio, show-up rate, CAC

### Exemplo de uso

```
Você: /high-ticket

Claude: Vou te ajudar a montar sua oferta high ticket! Preciso de algumas informações...

Você: Sou consultor de marketing para e-commerces.
      Preço: R$15.000 a mentoria de 6 meses.
      Já fiz 20 sessões, converto 15%.
      Objeções: "está caro", "já contratei agência e não funcionou"

Claude: ESTRUTURA DA OFERTA:

        Pacote Diamante (DFY) - R$30.000
        → Consultoria + execução completa (ancoragem)

        Pacote Ouro (DWY) - R$15.000 ← PRINCIPAL
        → Mentoria + acompanhamento semanal + templates

        Pacote Prata (DIY) - R$5.000
        → Curso gravado + grupo de suporte

        ÁRVORE DE OBJEÇÕES:

        "Está caro"
        1. Aflorar: "Quanto você fatura hoje por mês no e-commerce?"
        2. Enfraquecer: "Se a mentoria aumentar seu faturamento em 30%,
           quanto isso representa em 6 meses?"
        3. Resolver: "Parcelamos em 12x e você pode pausar se não
           tiver resultado em 60 dias"
        ...
```

---

## /trafego

**Planejamento de Campanha de Tráfego Pago**

### O que faz

Planeja uma campanha de tráfego pago completa com setup checklist, estrutura de campanhas (naming convention Sobral), audiências por temperatura, briefing de criativos (9 tipos Andrômeda), orçamento por fase e calendário de otimização.

### Perguntas que o skill vai fazer

1. Plataforma (Meta Ads, Google Ads, etc.)
2. Objetivo (leads, vendas, awareness, remarketing)
3. Orçamento diário/mensal
4. Nicho e produto
5. Pixel/API já configurados?
6. Business Manager existe?
7. Audiência atual e temperatura
8. Histórico de campanhas

### Output esperado

- **Setup checklist**: Pixel, API de Conversões, BM, UTMs
- **Estrutura de campanhas**: naming convention Sobral, CBO vs ABO, fases
- **Audiências por temperatura**: fria/morna/quente com tamanhos estimados
- **Briefing de criativos**: 9 tipos Andrômeda com descrição para cada
- **Orçamento por fase**: teste (CPM x 15) → validação → escala (20-30%/dia)
- **Métricas-alvo**: CPL, CTR, CPM, ROAS por fase
- **Calendário de otimização**: intervalos de revisão (14/30/60/90 dias)
- **Plano de escala**: incremento diário, quando pausar, quando criar novos conjuntos

### Exemplo de uso

```
Você: /trafego

Claude: Vou montar seu plano de campanha! Preciso saber...

Você: Meta Ads. Orçamento R$5.000/mês. Objetivo: captar leads para lançamento.
      Nicho: coaching de carreira. Pixel instalado, BM configurada.
      Nunca rodei campanha antes.

Claude: SETUP CHECKLIST:
        ✅ Pixel instalado
        ✅ BM configurada
        ⬜ API de Conversões (recomendo configurar)
        ⬜ UTMs definidas

        ESTRUTURA DE CAMPANHAS:

        Campanha 1: [LANCAMENTO-CARREIRA] [LEADS] [FEED+STORIES] [FRIA] [001]
        → ABO (fase de teste)
        → 3 conjuntos: interesse amplo, lookalike 1%, lookalike 3%
        → 9 criativos (portfólio Andrômeda)

        ORÇAMENTO POR FASE:
        Fase 1 - Teste (dias 1-14): R$50/dia = R$700
        Fase 2 - Validação (dias 15-30): R$100/dia nos melhores conjuntos
        Fase 3 - Escala (dias 31+): +20-30%/dia nos validados

        BRIEFING DE CRIATIVOS (9 TIPOS):
        1. Hook impulsável: vídeo curto sobre erro comum em transição de carreira
        2. Dor: "Você trabalha 10h/dia e sente que não avança?"
        3. Insight prático: "3 passos para negociar aumento ainda este mês"
        ...
```

---

## /copy

**Geração de Copy para Lançamentos**

### O que faz

Gera copy completa e pronta para uso — scripts de CPL, criativos (estáticos e vídeo), landing pages, pitches de venda, emails e VSLs. Cada entrega inclui variantes A/B, contagem de caracteres e notas de produção. Usa os frameworks do Insider, Jeff Walker e Gustavo Vanassi.

### Perguntas que o skill vai fazer

1. Tipo de copy: CPL1, CPL2, CPL3, criativo (estático/vídeo), landing page, pitch, email, VSL
2. Nicho e avatar
3. Roma (promessa de transformação)
4. Produto/serviço
5. Tom de voz (formal, casual, urgente, inspiracional)
6. Objeções principais do avatar

### Output esperado

- **Copy completa** pronta para uso
- **2-3 variantes A/B** (headlines, hooks, CTAs alternativos)
- **Character counts** (para formatos com limite de caracteres)
- **Notas de produção** (indicações visuais se for vídeo)
- **Objeções endereçadas** por trecho

### Frameworks disponíveis por tipo

| Tipo | Framework |
|------|-----------|
| CPL1 | Apresentação → Prova → História → Conteúdo → Oferta → Fechamento |
| CPL2 | Roma → Prova → Review → Conteúdo → Oferta → Fechamento |
| CPL3 | Q&A / Amostra / Índice-Mapa |
| VSL | Promessa → Prova → História → Oferta |
| Criativos | 5 ângulos de hook (contra-intuitivo, paradoxal, direto, social proof, urgência) |
| Landing Page | 11 seções (headline, sub, prova, dor, oportunidade, para quem, FAQ, preço, autoridade, CTA, garantia) |
| Pitch | Avatar mapping (4 dimensões) → falsas crenças → blocos do pitch |

### Exemplo de uso

```
Você: /copy

Claude: O que você precisa? Me conta os detalhes...

Você: Preciso de um CPL1 para lançamento de curso de confeitaria.
      Avatar: mulheres 25-45 que querem renda extra.
      Roma: "Faturar R$5K/mês vendendo bolos em casa"
      Tom: inspiracional e prático.
      Objeções: "não tenho dinheiro para investir", "já está saturado"

Claude: CPL1 - "O CAMINHO ERRADO VS O CAMINHO CERTO"

        [HOOK - 0:00 a 0:30]
        "Se você acha que precisa de uma cozinha profissional
        e investir R$10 mil para começar a vender bolos...
        eu tenho uma notícia que vai mudar tudo."

        [HISTÓRIA - 0:30 a 3:00]
        "Há 3 anos eu estava exatamente onde você está.
        Trabalhando em emprego CLT, ganhando R$2.500/mês..."

        [CONTEÚDO - 3:00 a 12:00]
        "Existem 2 caminhos para começar na confeitaria..."

        VARIANTE A/B DO HOOK:
        A: "Se você acha que precisa de uma cozinha profissional..."
        B: "1.200 alunas já faturam mais de R$5K/mês com bolos caseiros.
           O que elas sabem que você ainda não sabe?"

        NOTAS DE PRODUÇÃO:
        - Gravar em cozinha residencial (reforça a Roma)
        - Mostrar fotos de bolos reais das alunas em [3:00]
        - Insert de depoimento em vídeo em [7:30]
        ...
```

---

## /funil

**Design de Funil Completo**

### O que faz

Desenha o funil completo do seu negócio digital — da captação até a retenção — com diagrama visual, páginas necessárias, sequência de emails/automações, métricas-alvo por etapa, tech stack recomendada e projeção de resultados baseada em benchmarks reais.

### Perguntas que o skill vai fazer

1. Tipo de funil desejado: lançamento (semente/clássico/pago), perpétuo, webinar, e-book, high ticket, híbrido
2. Nicho e avatar
3. Produto/serviço e faixa de preço
4. Orçamento de tráfego
5. Tech stack atual (Hotmart? WordPress? Active Campaign? etc.)
6. Objetivo principal (leads, vendas, nurturing, upsell)

### Output esperado

- **Diagrama visual** (texto) do funil: awareness → consideração → conversão → retenção
- **Páginas necessárias**: cada URL com propósito (/cadastro, /obrigado, /vendas, etc.)
- **Emails/automações**: sequência completa com timing
- **Métricas-alvo por etapa**: taxa de conversão esperada em cada ponto
- **Tech stack recomendada**: ferramentas por função
- **Estimativa de resultados**: projeção baseada em benchmarks reais

### Benchmarks por tipo de funil

| Funil | CAC | Conversão | ROAS |
|-------|-----|-----------|------|
| E-book (R$9.90) | R$1/cliente | 18% order bump | Alto |
| Webinar (R$397-997) | Variável | 10-15% | 1.7-2.0 |
| Lançamento Pago | CPM x 15 (teste) | 7-10%+ | 1.0-1.2 |
| High Ticket (SLG → 1a1) | Orgânico | Variável | Alto |

### Exemplo de uso

```
Você: /funil

Claude: Vou desenhar seu funil! Qual o modelo?

Você: Funil perpétuo de e-book para captar leads e vender produto de R$497.
      Nicho: produtividade para empreendedores.
      Tech: Hotmart + Active Campaign.
      Orçamento: R$2.000/mês.

Claude: DIAGRAMA DO FUNIL:

        [Meta Ads] → [Landing Page E-book R$9.90]
              ↓
        [Obrigado + Order Bump R$47] ← 18% conversão
              ↓
        [Sequência de 7 emails - 14 dias]
              ↓
        [Webinar Gravado]
              ↓
        [Página de Vendas R$497] ← 10-15% conversão
              ↓
        [Upsell Mentoria R$1.997]

        PÁGINAS NECESSÁRIAS:
        /ebook → Landing page do e-book
        /obrigado → Confirmação + order bump
        /webinar → Página do webinar gravado
        /vendas → Página de vendas do produto principal
        /checkout → Checkout Hotmart
        /upsell → Oferta pós-compra

        PROJEÇÃO (R$2.000/mês de tráfego):
        - 2.000 compradores do e-book (CAC R$1)
        - 360 order bumps (R$16.920)
        - 200-300 assistem webinar
        - 20-45 vendas do produto (R$9.940 - R$22.365)
        ...
```

---

## /escala

**Diagnóstico e Plano de Escala**

### O que faz

Diagnostica os gargalos do seu negócio digital em 5 áreas (tráfego, conversão, produto, equipe, financeiro) e gera um plano de escala por fases (30/60/90 dias) com delegação, automações recomendadas, projeção financeira e progressão de faixa.

### Perguntas que o skill vai fazer

1. Faturamento atual (mensal/anual)
2. Objetivo de faturamento
3. Modelo de negócio (lançamento, perpétuo, high ticket, híbrido)
4. Tamanho da equipe atual
5. Principais métricas: ROAS, CPL, taxa de conversão, ticket médio
6. Gargalos percebidos (tráfego? conversão? entrega? equipe?)
7. Ferramentas/automações atuais

### Output esperado

- **Diagnóstico** dos gargalos principais (top 3)
- **Plano de escala por fase** (30/60/90 dias)
- **Delegação necessária**: quais funções terceirizar/contratar (5 fases FHT)
- **Automações recomendadas**: IA para calls, agentes ChatGPT, tracking automático
- **Projeção financeira**: baseada em benchmarks reais
- **Progressão de faixa**: onde você está e qual o próximo marco
- **KPIs para acompanhar**: métricas críticas com frequência de revisão

### Marcos de progressão

| Faixa | Critério |
|-------|----------|
| Semente | Primeiro lançamento realizado |
| 6em7 | R$100.000 em 7 dias |
| Faixa Marrom | R$300K+ por lançamento |
| Faixa Preta | R$2M+ por ano |

### Exemplo de uso

```
Você: /escala

Claude: Vou fazer o diagnóstico do seu negócio. Me conta...

Você: Faturo R$50K/mês com lançamentos clássicos (2 por trimestre).
      ROAS: 0.8. CPL: R$12. Conversão: 4%.
      Equipe: eu + 1 social media + 1 gestor de tráfego.
      Gargalo: sinto que o tráfego não converte.

Claude: DIAGNÓSTICO:

        🔴 Gargalo #1: CONVERSÃO (crítico)
        - Taxa de 4% está abaixo do benchmark (7-10%)
        - Indica problema na copy dos CPLs ou na oferta
        - Ação: revisar scripts CPL e pitch de vendas

        🟡 Gargalo #2: TRÁFEGO
        - ROAS 0.8 está abaixo do mínimo (1.0)
        - CPL R$12 pode estar alto para o nicho
        - Ação: diversificar criativos (portfólio Andrômeda)

        🟢 Gargalo #3: EQUIPE
        - Equipe de 3 é suficiente para o faturamento atual
        - Próximo passo: adicionar closer quando chegar em R$100K/mês

        PLANO DE ESCALA:

        Fase 1 (30 dias): Corrigir conversão
        - Reescrever CPL1 e CPL2 com novos frameworks
        - Criar 9 criativos Andrômeda
        - Meta: conversão de 4% → 7%

        Fase 2 (60 dias): Otimizar tráfego
        - Testar novas audiências (lookalike de compradores)
        - Escalar 20-30%/dia nos conjuntos validados
        - Meta: ROAS de 0.8 → 1.2

        Fase 3 (90 dias): Escalar
        - Adicionar lançamento pago ao mix
        - Contratar closer para high ticket
        - Meta: R$100K/mês (6em7)

        PROGRESSÃO: Você está na fase pré-6em7.
        Próximo marco: 6em7 (R$100K em 7 dias)
        Ciclos estimados: mais 3-4 lançamentos
        ...
```
