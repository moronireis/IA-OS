---
title: "03 - Tráfego Pago"
description: "Documentação do domínio de tráfego pago - Meta Ads, criativos, otimização de CPL e rastreamento"
---

# 03 - Tráfego Pago

Este domínio reúne **5 documentos** que cobrem desde os fundamentos de tráfego pago até estratégias avançadas de criativos, otimização e rastreamento.

---

## Visão Geral dos Arquivos

| Arquivo | Fonte / Autor | Foco Principal |
|---------|---------------|----------------|
| `sobral-principios.md` | Pedro Sobral | Fundamentos e princípios de tráfego pago |
| `sobral-meta-ads.md` | Pedro Sobral | Setup e operação no Meta Ads |
| `andromeda-criativos.md` | Andrômeda | Metodologia de criativos e escala |
| `cpl-otimizacao.md` | Interno | Otimização de custo por lead |
| `rastreamento-utms.md` | Interno | Rastreamento, UTMs e Data Studio |

---

## Sobral - Princípios de Tráfego

**Arquivo:** `sobral-principios.md`
**Fonte:** Pedro Sobral

### Tópicos Principais
- Fundamentos de tráfego pago para marketing digital
- 5 modelos de campanha para diferentes objetivos
- Métricas essenciais e como interpretá-las
- Mentalidade de gestor de tráfego
- Hierarquia de importância: oferta > público > criativo > plataforma
- Erros mais comuns e como evitá-los

### Os 5 Modelos de Campanha

| Modelo | Objetivo | Quando Usar |
|--------|----------|-------------|
| **Captação** | Gerar leads para lista | Pré-lançamento, construção de audiência |
| **Remarketing** | Reimpactar quem já interagiu | Durante lançamento, carrinho aberto |
| **Engajamento** | Gerar interação e prova social | Conteúdo, lives, aquecimento |
| **Conversão** | Venda direta | Perpétuo, e-commerce, low-ticket |
| **Alcance** | Maximizar visualizações | Branding, lançamento de marca |

### Métricas Essenciais

| Métrica | O que Mede | Benchmark |
|---------|------------|-----------|
| CPM | Custo por mil impressões | R$15 - R$40 |
| CTR | Taxa de clique | > 1.5% |
| CPC | Custo por clique | R$0.30 - R$1.50 |
| CPL | Custo por lead | ~R$1.00 (meta ideal) |
| CPA | Custo por aquisição | Depende do ticket |
| ROAS | Retorno sobre investimento em ads | > 1.0 (lançamento), > 3.0 (perpétuo) |
| Frequência | Vezes que a mesma pessoa viu o anúncio | < 3.0 (prospecção), < 8.0 (remarketing) |

### Relação com Outros Documentos
- Base teórica para `sobral-meta-ads.md`
- Criativos detalhados em `andromeda-criativos.md`
- Otimização de CPL em `cpl-otimizacao.md`

---

## Sobral - Meta Ads

**Arquivo:** `sobral-meta-ads.md`
**Fonte:** Pedro Sobral

### Tópicos Principais
- Setup completo de conta no Meta Ads (Business Manager)
- Convenção de nomenclatura (naming) para campanhas, conjuntos e anúncios
- Diferença entre CBO e ABO e quando usar cada um
- Estrutura de campanhas para lançamento
- Públicos: lookalike, interesses, custom audiences
- Otimização e regras automáticas

### CBO vs. ABO

| Aspecto | CBO | ABO |
|---------|-----|-----|
| **Significado** | Campaign Budget Optimization | Ad Set Budget Optimization |
| **Orçamento** | Definido na campanha | Definido por conjunto |
| **Controle** | Menos controle, mais automação | Mais controle manual |
| **Quando usar** | Escala, muitos conjuntos | Teste, poucos conjuntos |
| **Vantagem** | IA distribui melhor | Controle granular |

### Convenção de Naming
```
[OBJETIVO] - [PUBLICO] - [CRIATIVO] - [DATA]
Exemplo: CAPT - LAL1%-Compradores - VSL-Depoimento - 2024-03
```

### Setup de Campanha para Lançamento
1. **Fase PPL** (30 dias antes): Captação com CBO, 3-5 conjuntos, 5-10 criativos
2. **Fase PL** (15 dias antes): Remarketing + Captação, escala gradual 20-30%/dia
3. **Fase L** (carrinho): Remarketing agressivo, todas as listas, frequência alta
4. **Pós-lançamento**: Desligar captação, manter remarketing de compradores

### Frameworks e Números
- Escala diária máxima: 20-30% de aumento no budget
- Mínimo de dados para otimização: 50 conversões por semana por conjunto
- Lookalike recomendado: 1% (qualidade) a 3% (volume)
- Custom audience mínima: 1.000 pessoas
- Regra de morte de anúncio: CPL > 2x a meta por 3 dias consecutivos

### Relação com Outros Documentos
- Fundamentação em `sobral-principios.md`
- Criativos dos anúncios em `andromeda-criativos.md`
- CPL otimizado em `cpl-otimizacao.md`
- Rastreamento em `rastreamento-utms.md`
- Scripts de CPL em `scripts-cpl.md` (domínio 04)

---

## Andrômeda - Criativos

**Arquivo:** `andromeda-criativos.md`
**Fonte:** Andrômeda

### Tópicos Principais
- Metodologia Andrômeda para produção de criativos de alta performance
- 9 tipos de criativos com templates e exemplos
- Sistema de portfólio de criativos
- Regras de escala baseadas em performance
- Rotação e fadiga criativa
- Produção em escala

### Os 9 Tipos de Criativos

| # | Tipo | Descrição | Melhor Para |
|---|------|-----------|-------------|
| 1 | **VSL (Video Sales Letter)** | Vídeo longo de venda direta | Conversão, remarketing |
| 2 | **Depoimento** | Prova social em vídeo | Confiança, quebra de objeção |
| 3 | **Antes/Depois** | Transformação visual | Resultados tangíveis |
| 4 | **Bastidores** | Conteúdo behind-the-scenes | Humanização, conexão |
| 5 | **Estática educativa** | Imagem com dado/insight | Autoridade, engajamento |
| 6 | **Carrossel** | Múltiplas imagens com narrativa | Educação, storytelling |
| 7 | **UGC (User Generated Content)** | Conteúdo gerado pelo usuário | Autenticidade |
| 8 | **Meme/Trend** | Conteúdo viral adaptado | Alcance, CTR alto |
| 9 | **Comparativo** | Versus, com/sem o produto | Diferenciação |

### Sistema de Portfólio
- Manter **15-30 criativos ativos** simultaneamente
- **3-5 criativos novos** por semana
- Distribuição: 40% vídeo, 30% estática, 30% carrossel
- Regra 80/20: 80% do budget nos 20% melhores criativos
- Rotação: criativo com frequência > 3.0 entra em pausa

### Regras de Escala
- Criativo com CTR > 2% e CPL < meta: **escalar** (duplicar em novos conjuntos)
- Criativo com CTR > 2% mas CPL > meta: **otimizar** (ajustar público ou landing)
- Criativo com CTR < 1%: **pausar** após 1.000 impressões
- Criativo com 3 dias de CPL > 2x meta: **matar**
- Budget de teste por criativo: R$50 - R$100

### Relação com Outros Documentos
- Veiculados via `sobral-meta-ads.md`
- Copy dos criativos em `copy-criativos.md` (domínio 04)
- Hooks e scripts em `reels-short-form.md` (domínio 04)
- Escala conecta com `cpl-otimizacao.md`

---

## CPL - Otimização

**Arquivo:** `cpl-otimizacao.md`
**Fonte:** Interno

### Tópicos Principais
- Estratégias para reduzir e manter o Custo por Lead baixo
- Entendimento do leilão do Meta Ads
- Impacto da sazonalidade nos custos
- Métricas de diagnóstico quando o CPL sobe
- Otimização de landing page para conversão
- Relação entre qualidade do lead e custo

### Métricas de Diagnóstico

| Se o CPL Subiu | Verificar | Ação |
|---------------|-----------|------|
| CPM subiu | Leilão mais caro / sazonalidade | Ajustar budget ou pausar e retomar |
| CTR caiu | Criativo perdeu eficácia | Novos criativos, testar hooks |
| CVR caiu | Landing page com problema | Testar nova LP, verificar mobile |
| Frequência alta | Audiência saturada | Expandir público, novos LAL |

### Dinâmica do Leilão
- O Meta usa 3 fatores: **lance** x **taxa de ação estimada** x **qualidade do anúncio**
- Anúncio com alta qualidade pode vencer lances maiores
- Relevance Score / Quality Ranking impacta diretamente o CPM
- Conta nova ou com histórico ruim paga mais caro

### Sazonalidade
- **Janeiro**: CPM baixo, bom para captação
- **Junho/Julho**: CPM médio, período neutro
- **Novembro (Black Friday)**: CPM alto, evitar captação pura
- **Dezembro**: CPM altíssimo, focar em remarketing
- Lançamentos devem evitar competir com grandes varejistas

### Frameworks e Números
- CPL meta: R$1,00 (pode variar por nicho)
- Landing page boa: taxa de conversão > 30%
- Landing page excelente: taxa de conversão > 45%
- Tempo de carregamento máximo: 3 segundos
- Headline da LP deve ser idêntica ao hook do anúncio

### Relação com Outros Documentos
- Métricas contextualizadas em `sobral-principios.md`
- Criativos que impactam CPL em `andromeda-criativos.md`
- Landing page e copy em `copy-criativos.md` (domínio 04)
- Rastreamento de performance em `rastreamento-utms.md`

---

## Rastreamento e UTMs

**Arquivo:** `rastreamento-utms.md`
**Fonte:** Interno

### Tópicos Principais
- Configuração completa de UTMs para rastreamento
- Integração com Google Data Studio (Looker Studio)
- Atribuição de conversões multicanal
- Case de estudo: operação de R$500K com rastreamento completo
- Dashboards e relatórios automatizados
- Boas práticas de nomenclatura

### Estrutura de UTMs

| Parâmetro | Uso | Exemplo |
|-----------|-----|---------|
| `utm_source` | Plataforma de origem | `facebook`, `google`, `instagram` |
| `utm_medium` | Tipo de mídia | `cpc`, `social`, `email` |
| `utm_campaign` | Nome da campanha | `lancamento-maio-2024` |
| `utm_content` | Variação do criativo | `vsl-depoimento-v2` |
| `utm_term` | Palavra-chave ou público | `lal-1-compradores` |

### Configuração do Data Studio
1. Conectar Google Analytics como fonte de dados
2. Conectar planilha de investimento em ads
3. Criar campos calculados: ROAS, CPA, CPL por fonte
4. Dashboard com filtros: período, campanha, fonte, dispositivo
5. Alertas automáticos para métricas fora do padrão

### Case R$500K
- Operação de lançamento com R$500K de faturamento
- Rastreamento completo permitiu identificar:
  - 60% das vendas vieram de remarketing (mas só 20% do budget)
  - Instagram Stories teve CPL 40% menor que Feed
  - Mobile converteu 3x mais que desktop na LP
  - Email representou 25% das vendas com custo quase zero
- Decisões tomadas: realocar 40% do budget para remarketing, priorizar formato Stories

### Relação com Outros Documentos
- Campanhas rastreadas configuradas em `sobral-meta-ads.md`
- Métricas de referência em `sobral-principios.md`
- CPL otimizado em `cpl-otimizacao.md`
- Automação de relatórios em `manus-cerebros.md` (domínio 05)
