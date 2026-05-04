---
title: Agentes, MCPs, Skills e Tools Recomendados
description: Componentes sugeridos para expandir as capacidades do IA-OS
---

# Agentes, MCPs, Skills e Tools Recomendados

Guia completo de componentes que podem ser adicionados ao IA-OS para expandir suas capacidades. Inclui agentes adicionais, servidores MCP, novas skills e ferramentas complementares.

---

## Agentes Adicionais Sugeridos

Além dos 5 agentes já construídos, estes especialistas cobririam gaps importantes:

### 1. `analista-metricas`
- **Papel:** Analista de dados de performance de marketing
- **O que faz:** Interpreta dashboards, analisa ROAS/CPL/CTR, identifica tendências e sugere otimizações baseadas em dados
- **Base de conhecimento:** Benchmarks de tráfego, métricas de lançamento, métricas high-ticket
- **Caso de uso:** "Meu CPL subiu 40% na última semana. O que pode estar acontecendo?"

### 2. `designer-criativos`
- **Papel:** Diretor de arte especializado em performance
- **O que faz:** Gera briefings visuais detalhados para designers humanos ou ferramentas de IA generativa, seguindo o framework Andromeda (9 tipos de criativo)
- **Base de conhecimento:** Framework Andromeda, melhores práticas de criativos, especificações por plataforma
- **Caso de uso:** "Preciso de 5 variações de criativo para uma campanha de captação no Instagram"

### 3. `email-marketer`
- **Papel:** Especialista em email marketing e automações
- **O que faz:** Cria sequências completas de email para diferentes momentos (nurturing, lançamento, carrinho aberto, follow-up, pós-venda)
- **Base de conhecimento:** Frameworks de copy, sequências de email, benchmarks de email marketing
- **Caso de uso:** "Crie a sequência de 7 dias de abertura de carrinho para meu lançamento"

### 4. `social-media-manager`
- **Papel:** Gestor de presença orgânica em redes sociais
- **O que faz:** Planeja calendários editoriais, define pilares de conteúdo, sugere formatos (stories, lives, reels, posts) e cria roteiros
- **Base de conhecimento:** Conteúdo orgânico, hooks, headlines, frameworks de engajamento
- **Caso de uso:** "Monte meu calendário de conteúdo para os 15 dias de pré-lançamento"

### 5. `financial-planner`
- **Papel:** Planejador financeiro de lançamentos e operações
- **O que faz:** Projeta cenários financeiros, calcula break-even, analisa LTV:CAC, modela escalabilidade e margem de lucro
- **Base de conhecimento:** Benchmarks financeiros, métricas de lançamento, dados de mercado
- **Caso de uso:** "Com R$50k de investimento em tráfego e ticket de R$997, qual o cenário realista?"

---

## MCP Servers Recomendados

Servidores MCP que conectam o Claude Code a ferramentas externas:

### Produtividade e Gestão

| MCP Server | Função | Prioridade |
|---|---|---|
| **Google Sheets MCP** | Ler e escrever planilhas de métricas e tracking | Alta |
| **Notion MCP** | Gestão de projetos, calendários editoriais e wikis | Alta |
| **Calendar MCP** | Agendar fases de lançamento e eventos | Média |
| **Slack/Discord MCP** | Comunicação com equipe e notificações | Média |

### Marketing e Vendas

| MCP Server | Função | Prioridade |
|---|---|---|
| **WhatsApp MCP** | Automação de mensagens comerciais e follow-up | Alta |
| **Canva MCP** | Criar criativos diretamente pelo Claude (já disponível) | Média |
| **Gmail MCP** | Sequências de email e comunicação (já disponível) | Média |

### Dados e Monitoramento

| MCP Server | Função | Prioridade |
|---|---|---|
| **Browser/Puppeteer MCP** | Capturar dados de plataformas de ads e landing pages | Alta |
| **Supabase/Database MCP** | Armazenar métricas históricas e dados de performance | Média |

### Como Configurar

Os MCP servers são configurados no arquivo `settings.json` do Claude Code:

```json
{
  "mcpServers": {
    "google-sheets": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-google-sheets"]
    },
    "notion": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-notion"],
      "env": {
        "NOTION_API_KEY": "sua-chave-aqui"
      }
    }
  }
}
```

---

## Skills Adicionais

Novas skills sugeridas para expandir os workflows disponíveis:

### `/diagnostico`
**Objetivo:** Avaliar a situação atual do negócio e recomendar o próximo passo estratégico.
- Coleta informações sobre estágio, audiência, produto e métricas
- Compara com benchmarks da knowledge base
- Gera recomendação priorizada de ações

### `/calendario`
**Objetivo:** Gerar calendário editorial ou de lançamento automaticamente.
- Define pilares de conteúdo por domínio
- Distribui formatos ao longo da semana
- Para lançamentos: mapeia todas as fases com datas e marcos

### `/simulador`
**Objetivo:** Simular resultado financeiro de um lançamento.
- Recebe: tamanho da lista, budget de tráfego, ticket, tipo de lançamento
- Aplica benchmarks reais da knowledge base
- Retorna cenários com ROI projetado

### `/criativos`
**Objetivo:** Gerar briefing completo de criativos seguindo o framework Andromeda.
- Identifica os 9 tipos de criativo aplicáveis
- Gera briefing detalhado para cada variação
- Inclui copy, CTA e especificações técnicas por plataforma

### `/email-sequence`
**Objetivo:** Criar sequência completa de emails para lançamento.
- Define tipo: pré-lançamento, carrinho aberto, follow-up, pós-venda
- Gera todos os emails com subject line, corpo e CTA
- Inclui timing recomendado entre envios

### `/report`
**Objetivo:** Gerar relatório de performance de campanha.
- Recebe métricas brutas (impressões, cliques, leads, vendas, investimento)
- Calcula KPIs derivados (CTR, CPL, CPA, ROAS)
- Compara com benchmarks e gera diagnóstico

### `/objecao`
**Objetivo:** Gerar resposta estruturada para objeção específica.
- Recebe a objeção do prospecto
- Consulta banco de objeções da knowledge base (FHT)
- Gera contra-argumento usando framework de vendas

### `/avatar`
**Objetivo:** Criar perfil completo de avatar/persona.
- Coleta informações sobre nicho e produto
- Gera perfil com: dados demográficos, dores, desejos, objeções, linguagem
- Produz avatar utilizável em todos os outros workflows

---

## Tools Recomendadas

Ferramentas e extensões que potencializam o sistema:

### Processamento de Conteúdo

| Ferramenta | Função | Status |
|---|---|---|
| **Claude Vision** | Processar slides/PDFs visuais que ficaram faltando na knowledge base | Disponível nativamente |

### Criação de Conteúdo

| Ferramenta | Função | Status |
|---|---|---|
| **Remotion Superpowers** | Criar vídeos de CPL/VSL automaticamente com IA | Já disponível como skill |
| **Impeccable** | Criar landing pages seguindo o framework de 11 seções | Já disponível como skill |

### Publicidade

| Ferramenta | Função | Status |
|---|---|---|
| **Claude Ads** | Auditar campanhas de ads usando os benchmarks da knowledge base | Já disponível como skill |

### Como Estas Tools se Conectam ao IA-OS

```
┌─────────────────────────────────────────┐
│              IA-OS Stack                │
│                                         │
│  Knowledge Base ──► Skills ──► Agentes  │
│       │                │                │
│       ▼                ▼                │
│  ┌─────────┐    ┌──────────────┐       │
│  │ Claude  │    │   Tools      │       │
│  │ Vision  │    │ Disponíveis  │       │
│  │(processa│    │              │       │
│  │ PDFs)   │    │ · Remotion   │       │
│  └─────────┘    │ · Impeccable │       │
│                 │ · Claude Ads │       │
│                 │ · Canva MCP  │       │
│                 │ · Gmail MCP  │       │
│                 └──────────────┘       │
└─────────────────────────────────────────┘
```

---

## Ordem de Implementação Sugerida

**Fase 1 — Fundação (Semana 1)**
1. Skill `/diagnostico` — Valor imediato para qualquer usuário
2. Skill `/avatar` — Base para todos os outros workflows
3. Configurar Google Sheets MCP

**Fase 2 — Produção (Semana 2-3)**
4. Skill `/calendario` — Planejamento automático
5. Skill `/criativos` — Briefings de anúncios
6. Skill `/email-sequence` — Sequências prontas
7. Agente `email-marketer`

**Fase 3 — Inteligência (Semana 4+)**
8. Skill `/simulador` — Projeções financeiras
9. Skill `/report` — Análise de performance
10. Agente `analista-metricas`
11. Agente `financial-planner`
