---
title: Agentes, MCPs, Skills e Tools Recomendados
description: Componentes sugeridos para expandir as capacidades do IA-OS
---

# Agentes, MCPs, Skills e Tools Recomendados

Guia completo de componentes que podem ser adicionados ao IA-OS para expandir suas capacidades. Inclui agentes adicionais, servidores MCP, novas skills e ferramentas complementares.

---

## Agentes Adicionais Sugeridos

Alem dos 5 agentes ja construidos, estes especialistas cobririam gaps importantes:

### 1. `analista-metricas`
- **Papel:** Analista de dados de performance de marketing
- **O que faz:** Interpreta dashboards, analisa ROAS/CPL/CTR, identifica tendencias e sugere otimizacoes baseadas em dados
- **Base de conhecimento:** Benchmarks de trafego, metricas de lancamento, metricas high-ticket
- **Caso de uso:** "Meu CPL subiu 40% na ultima semana. O que pode estar acontecendo?"

### 2. `designer-criativos`
- **Papel:** Diretor de arte especializado em performance
- **O que faz:** Gera briefings visuais detalhados para designers humanos ou ferramentas de IA generativa, seguindo o framework Andromeda (9 tipos de criativo)
- **Base de conhecimento:** Framework Andromeda, melhores praticas de criativos, especificacoes por plataforma
- **Caso de uso:** "Preciso de 5 variacoes de criativo para uma campanha de captacao no Instagram"

### 3. `email-marketer`
- **Papel:** Especialista em email marketing e automacoes
- **O que faz:** Cria sequencias completas de email para diferentes momentos (nurturing, lancamento, carrinho aberto, follow-up, pos-venda)
- **Base de conhecimento:** Frameworks de copy, sequencias de email, benchmarks de email marketing
- **Caso de uso:** "Crie a sequencia de 7 dias de abertura de carrinho para meu lancamento"

### 4. `social-media-manager`
- **Papel:** Gestor de presenca organica em redes sociais
- **O que faz:** Planeja calendarios editoriais, define pilares de conteudo, sugere formatos (stories, lives, reels, posts) e cria roteiros
- **Base de conhecimento:** Conteudo organico, hooks, headlines, frameworks de engajamento
- **Caso de uso:** "Monte meu calendario de conteudo para os 15 dias de pre-lancamento"

### 5. `financial-planner`
- **Papel:** Planejador financeiro de lancamentos e operacoes
- **O que faz:** Projeta cenarios financeiros, calcula break-even, analisa LTV:CAC, modela escalabilidade e margem de lucro
- **Base de conhecimento:** Benchmarks financeiros, metricas de lancamento, dados de mercado
- **Caso de uso:** "Com R$50k de investimento em trafego e ticket de R$997, qual o cenario realista?"

---

## MCP Servers Recomendados

Servidores MCP que conectam o Claude Code a ferramentas externas:

### Produtividade e Gestao

| MCP Server | Funcao | Prioridade |
|---|---|---|
| **Google Sheets MCP** | Ler e escrever planilhas de metricas e tracking | Alta |
| **Notion MCP** | Gestao de projetos, calendarios editoriais e wikis | Alta |
| **Calendar MCP** | Agendar fases de lancamento e eventos | Media |
| **Slack/Discord MCP** | Comunicacao com equipe e notificacoes | Media |

### Marketing e Vendas

| MCP Server | Funcao | Prioridade |
|---|---|---|
| **WhatsApp MCP** | Automacao de mensagens comerciais e follow-up | Alta |
| **Canva MCP** | Criar criativos diretamente pelo Claude (ja disponivel) | Media |
| **Gmail MCP** | Sequencias de email e comunicacao (ja disponivel) | Media |

### Dados e Monitoramento

| MCP Server | Funcao | Prioridade |
|---|---|---|
| **Browser/Puppeteer MCP** | Capturar dados de plataformas de ads e landing pages | Alta |
| **Supabase/Database MCP** | Armazenar metricas historicas e dados de performance | Media |

### Como Configurar

Os MCP servers sao configurados no arquivo `settings.json` do Claude Code:

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

Novas skills sugeridas para expandir os workflows disponiveis:

### `/diagnostico`
**Objetivo:** Avaliar a situacao atual do negocio e recomendar o proximo passo estrategico.
- Coleta informacoes sobre estagio, audiencia, produto e metricas
- Compara com benchmarks da knowledge base
- Gera recomendacao priorizada de acoes

### `/calendario`
**Objetivo:** Gerar calendario editorial ou de lancamento automaticamente.
- Define pilares de conteudo por dominio
- Distribui formatos ao longo da semana
- Para lancamentos: mapeia todas as fases com datas e marcos

### `/simulador`
**Objetivo:** Simular resultado financeiro de um lancamento.
- Recebe: tamanho da lista, budget de trafego, ticket, tipo de lancamento
- Aplica benchmarks reais da knowledge base
- Retorna cenarios com ROI projetado

### `/criativos`
**Objetivo:** Gerar briefing completo de criativos seguindo o framework Andromeda.
- Identifica os 9 tipos de criativo aplicaveis
- Gera briefing detalhado para cada variacao
- Inclui copy, CTA e especificacoes tecnicas por plataforma

### `/email-sequence`
**Objetivo:** Criar sequencia completa de emails para lancamento.
- Define tipo: pre-lancamento, carrinho aberto, follow-up, pos-venda
- Gera todos os emails com subject line, corpo e CTA
- Inclui timing recomendado entre envios

### `/report`
**Objetivo:** Gerar relatorio de performance de campanha.
- Recebe metricas brutas (impressoes, cliques, leads, vendas, investimento)
- Calcula KPIs derivados (CTR, CPL, CPA, ROAS)
- Compara com benchmarks e gera diagnostico

### `/objecao`
**Objetivo:** Gerar resposta estruturada para objecao especifica.
- Recebe a objecao do prospecto
- Consulta banco de objecoes da knowledge base (FHT)
- Gera contra-argumento usando framework de vendas

### `/avatar`
**Objetivo:** Criar perfil completo de avatar/persona.
- Coleta informacoes sobre nicho e produto
- Gera perfil com: dados demograficos, dores, desejos, objecoes, linguagem
- Produz avatar utilizavel em todos os outros workflows

---

## Tools Recomendadas

Ferramentas e extensoes que potencializam o sistema:

### Processamento de Conteudo

| Ferramenta | Funcao | Status |
|---|---|---|
| **Claude Vision** | Processar slides/PDFs visuais que ficaram faltando na knowledge base | Disponivel nativamente |

### Criacao de Conteudo

| Ferramenta | Funcao | Status |
|---|---|---|
| **Remotion Superpowers** | Criar videos de CPL/VSL automaticamente com IA | Ja disponivel como skill |
| **Impeccable** | Criar landing pages seguindo o framework de 11 secoes | Ja disponivel como skill |

### Publicidade

| Ferramenta | Funcao | Status |
|---|---|---|
| **Claude Ads** | Auditar campanhas de ads usando os benchmarks da knowledge base | Ja disponivel como skill |

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

## Ordem de Implementacao Sugerida

**Fase 1 — Fundacao (Semana 1)**
1. Skill `/diagnostico` — Valor imediato para qualquer usuario
2. Skill `/avatar` — Base para todos os outros workflows
3. Configurar Google Sheets MCP

**Fase 2 — Producao (Semana 2-3)**
4. Skill `/calendario` — Planejamento automatico
5. Skill `/criativos` — Briefings de anuncios
6. Skill `/email-sequence` — Sequencias prontas
7. Agente `email-marketer`

**Fase 3 — Inteligencia (Semana 4+)**
8. Skill `/simulador` — Projecoes financeiras
9. Skill `/report` — Analise de performance
10. Agente `analista-metricas`
11. Agente `financial-planner`
