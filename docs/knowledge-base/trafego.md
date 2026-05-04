---
title: "03 - Trafego Pago"
description: "Documentacao do dominio de trafego pago - Meta Ads, criativos, otimizacao de CPL e rastreamento"
---

# 03 - Trafego Pago

Este dominio reune **5 documentos** que cobrem desde os fundamentos de trafego pago ate estrategias avancadas de criativos, otimizacao e rastreamento.

---

## Visao Geral dos Arquivos

| Arquivo | Fonte / Autor | Foco Principal |
|---------|---------------|----------------|
| `sobral-principios.md` | Pedro Sobral | Fundamentos e principios de trafego pago |
| `sobral-meta-ads.md` | Pedro Sobral | Setup e operacao no Meta Ads |
| `andromeda-criativos.md` | Andromeda | Metodologia de criativos e escala |
| `cpl-otimizacao.md` | Interno | Otimizacao de custo por lead |
| `rastreamento-utms.md` | Interno | Rastreamento, UTMs e Data Studio |

---

## Sobral - Principios de Trafego

**Arquivo:** `sobral-principios.md`
**Fonte:** Pedro Sobral

### Topicos Principais
- Fundamentos de trafego pago para marketing digital
- 5 modelos de campanha para diferentes objetivos
- Metricas essenciais e como interpreta-las
- Mentalidade de gestor de trafego
- Hierarquia de importancia: oferta > publico > criativo > plataforma
- Erros mais comuns e como evita-los

### Os 5 Modelos de Campanha

| Modelo | Objetivo | Quando Usar |
|--------|----------|-------------|
| **Captacao** | Gerar leads para lista | Pre-lancamento, construcao de audiencia |
| **Remarketing** | Reimpactar quem ja interagiu | Durante lancamento, carrinho aberto |
| **Engajamento** | Gerar interacao e prova social | Conteudo, lives, aquecimento |
| **Conversao** | Venda direta | Perpetuo, e-commerce, low-ticket |
| **Alcance** | Maximizar visualizacoes | Branding, lancamento de marca |

### Metricas Essenciais

| Metrica | O que Mede | Benchmark |
|---------|------------|-----------|
| CPM | Custo por mil impressoes | R$15 - R$40 |
| CTR | Taxa de clique | > 1.5% |
| CPC | Custo por clique | R$0.30 - R$1.50 |
| CPL | Custo por lead | ~R$1.00 (meta ideal) |
| CPA | Custo por aquisicao | Depende do ticket |
| ROAS | Retorno sobre investimento em ads | > 1.0 (lancamento), > 3.0 (perpetuo) |
| Frequencia | Vezes que a mesma pessoa viu o anuncio | < 3.0 (prospeccao), < 8.0 (remarketing) |

### Relacao com Outros Documentos
- Base teorica para `sobral-meta-ads.md`
- Criativos detalhados em `andromeda-criativos.md`
- Otimizacao de CPL em `cpl-otimizacao.md`

---

## Sobral - Meta Ads

**Arquivo:** `sobral-meta-ads.md`
**Fonte:** Pedro Sobral

### Topicos Principais
- Setup completo de conta no Meta Ads (Business Manager)
- Convencao de nomenclatura (naming) para campanhas, conjuntos e anuncios
- Diferenca entre CBO e ABO e quando usar cada um
- Estrutura de campanhas para lancamento
- Publicos: lookalike, interesses, custom audiences
- Otimizacao e regras automaticas

### CBO vs. ABO

| Aspecto | CBO | ABO |
|---------|-----|-----|
| **Significado** | Campaign Budget Optimization | Ad Set Budget Optimization |
| **Orcamento** | Definido na campanha | Definido por conjunto |
| **Controle** | Menos controle, mais automacao | Mais controle manual |
| **Quando usar** | Escala, muitos conjuntos | Teste, poucos conjuntos |
| **Vantagem** | IA distribui melhor | Controle granular |

### Convencao de Naming
```
[OBJETIVO] - [PUBLICO] - [CRIATIVO] - [DATA]
Exemplo: CAPT - LAL1%-Compradores - VSL-Depoimento - 2024-03
```

### Setup de Campanha para Lancamento
1. **Fase PPL** (30 dias antes): Captacao com CBO, 3-5 conjuntos, 5-10 criativos
2. **Fase PL** (15 dias antes): Remarketing + Captacao, escala gradual 20-30%/dia
3. **Fase L** (carrinho): Remarketing agressivo, todas as listas, frequencia alta
4. **Pos-lancamento**: Desligar captacao, manter remarketing de compradores

### Frameworks e Numeros
- Escala diaria maxima: 20-30% de aumento no budget
- Minimo de dados para otimizacao: 50 conversoes por semana por conjunto
- Lookalike recomendado: 1% (qualidade) a 3% (volume)
- Custom audience minima: 1.000 pessoas
- Regra de morte de anuncio: CPL > 2x a meta por 3 dias consecutivos

### Relacao com Outros Documentos
- Fundamentacao em `sobral-principios.md`
- Criativos dos anuncios em `andromeda-criativos.md`
- CPL otimizado em `cpl-otimizacao.md`
- Rastreamento em `rastreamento-utms.md`
- Scripts de CPL em `scripts-cpl.md` (dominio 04)

---

## Andromeda - Criativos

**Arquivo:** `andromeda-criativos.md`
**Fonte:** Andromeda

### Topicos Principais
- Metodologia Andromeda para producao de criativos de alta performance
- 9 tipos de criativos com templates e exemplos
- Sistema de portfolio de criativos
- Regras de escala baseadas em performance
- Rotacao e fadiga criativa
- Producao em escala

### Os 9 Tipos de Criativos

| # | Tipo | Descricao | Melhor Para |
|---|------|-----------|-------------|
| 1 | **VSL (Video Sales Letter)** | Video longo de venda direta | Conversao, remarketing |
| 2 | **Depoimento** | Prova social em video | Confianca, quebra de objecao |
| 3 | **Antes/Depois** | Transformacao visual | Resultados tangiceis |
| 4 | **Bastidores** | Conteudo behind-the-scenes | Humanizacao, conexao |
| 5 | **Estatica educativa** | Imagem com dado/insight | Autoridade, engajamento |
| 6 | **Carrossel** | Multiplas imagens com narrativa | Educacao, storytelling |
| 7 | **UGC (User Generated Content)** | Conteudo gerado pelo usuario | Autenticidade |
| 8 | **Meme/Trend** | Conteudo viral adaptado | Alcance, CTR alto |
| 9 | **Comparativo** | Versus, com/sem o produto | Diferenciacao |

### Sistema de Portfolio
- Manter **15-30 criativos ativos** simultaneamente
- **3-5 criativos novos** por semana
- Distribuicao: 40% video, 30% estatica, 30% carrossel
- Regra 80/20: 80% do budget nos 20% melhores criativos
- Rotacao: criativo com frequencia > 3.0 entra em pausa

### Regras de Escala
- Criativo com CTR > 2% e CPL < meta: **escalar** (duplicar em novos conjuntos)
- Criativo com CTR > 2% mas CPL > meta: **otimizar** (ajustar publico ou landing)
- Criativo com CTR < 1%: **pausar** apos 1.000 impressoes
- Criativo com 3 dias de CPL > 2x meta: **matar**
- Budget de teste por criativo: R$50 - R$100

### Relacao com Outros Documentos
- Veiculados via `sobral-meta-ads.md`
- Copy dos criativos em `copy-criativos.md` (dominio 04)
- Hooks e scripts em `reels-short-form.md` (dominio 04)
- Escala conecta com `cpl-otimizacao.md`

---

## CPL - Otimizacao

**Arquivo:** `cpl-otimizacao.md`
**Fonte:** Interno

### Topicos Principais
- Estrategias para reduzir e manter o Custo por Lead baixo
- Entendimento do leilao do Meta Ads
- Impacto da sazonalidade nos custos
- Metricas de diagnostico quando o CPL sobe
- Otimizacao de landing page para conversao
- Relacao entre qualidade do lead e custo

### Metricas de Diagnostico

| Se o CPL Subiu | Verificar | Acao |
|---------------|-----------|------|
| CPM subiu | Leilao mais caro / sazonalidade | Ajustar budget ou pausar e retomar |
| CTR caiu | Criativo perdeu eficacia | Novos criativos, testar hooks |
| CVR caiu | Landing page com problema | Testar nova LP, verificar mobile |
| Frequencia alta | Audiencia saturada | Expandir publico, novos LAL |

### Dinamica do Leilao
- O Meta usa 3 fatores: **lance** x **taxa de acao estimada** x **qualidade do anuncio**
- Anuncio com alta qualidade pode vencer lances maiores
- Relevance Score / Quality Ranking impacta diretamente o CPM
- Conta nova ou com historico ruim paga mais caro

### Sazonalidade
- **Janeiro**: CPM baixo, bom para captacao
- **Junho/Julho**: CPM medio, periodo neutro
- **Novembro (Black Friday)**: CPM alto, evitar captacao pura
- **Dezembro**: CPM altissimo, focar em remarketing
- Lancamentos devem evitar competir com grandes varejistas

### Frameworks e Numeros
- CPL meta: R$1,00 (pode variar por nicho)
- Landing page boa: taxa de conversao > 30%
- Landing page excelente: taxa de conversao > 45%
- Tempo de carregamento maximo: 3 segundos
- Headline da LP deve ser identica ao hook do anuncio

### Relacao com Outros Documentos
- Metricas contextualizadas em `sobral-principios.md`
- Criativos que impactam CPL em `andromeda-criativos.md`
- Landing page e copy em `copy-criativos.md` (dominio 04)
- Rastreamento de performance em `rastreamento-utms.md`

---

## Rastreamento e UTMs

**Arquivo:** `rastreamento-utms.md`
**Fonte:** Interno

### Topicos Principais
- Configuracao completa de UTMs para rastreamento
- Integracao com Google Data Studio (Looker Studio)
- Atribuicao de conversoes multicanal
- Case de estudo: operacao de R$500K com rastreamento completo
- Dashboards e relatorios automatizados
- Boas praticas de nomenclatura

### Estrutura de UTMs

| Parametro | Uso | Exemplo |
|-----------|-----|---------|
| `utm_source` | Plataforma de origem | `facebook`, `google`, `instagram` |
| `utm_medium` | Tipo de midia | `cpc`, `social`, `email` |
| `utm_campaign` | Nome da campanha | `lancamento-maio-2024` |
| `utm_content` | Variacao do criativo | `vsl-depoimento-v2` |
| `utm_term` | Palavra-chave ou publico | `lal-1-compradores` |

### Configuracao do Data Studio
1. Conectar Google Analytics como fonte de dados
2. Conectar planilha de investimento em ads
3. Criar campos calculados: ROAS, CPA, CPL por fonte
4. Dashboard com filtros: periodo, campanha, fonte, dispositivo
5. Alertas automaticos para metricas fora do padrao

### Case R$500K
- Operacao de lancamento com R$500K de faturamento
- Rastreamento completo permitiu identificar:
  - 60% das vendas vieram de remarketing (mas so 20% do budget)
  - Instagram Stories teve CPL 40% menor que Feed
  - Mobile converteu 3x mais que desktop na LP
  - Email representou 25% das vendas com custo quase zero
- Decisoes tomadas: realocar 40% do budget para remarketing, priorizar formato Stories

### Relacao com Outros Documentos
- Campanhas rastreadas configuradas em `sobral-meta-ads.md`
- Metricas de referencia em `sobral-principios.md`
- CPL otimizado em `cpl-otimizacao.md`
- Automacao de relatorios em `manus-cerebros.md` (dominio 05)
