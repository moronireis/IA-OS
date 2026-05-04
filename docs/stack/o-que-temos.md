---
title: O que Temos Hoje
description: Inventário completo de todos os componentes construídos no sistema IA-OS
---

# O que Temos Hoje

Inventário completo de tudo que foi construído na stack IA-OS, organizado por tipo de componente.

## Knowledge Base — 28 Documentos

### Domínio: Lançamentos

| # | Documento | Conteúdo |
|---|---|---|
| 1 | Fórmula de Lançamento — Visão Geral | Metodologia completa da FL, fases, tipos de lançamento |
| 2 | Lançamento Semente | Estratégia para validar oferta com audiência mínima |
| 3 | Lançamento Clássico | Estrutura completa do lançamento com CPLs e abertura de carrinho |
| 4 | Lançamento Relâmpago | Lançamento rápido para base existente |
| 5 | Lançamento Passariano | Modelo de lançamento perpétuo/escalado |
| 6 | Estrutura de CPLs | Conteúdo Pré-Lançamento — scripts e frameworks |
| 7 | Funis de Lançamento | Arquitetura de páginas, emails e automações |
| 8 | SNA — Metodologia | Sistema de lançamento complementar |
| 9 | BML — Metodologia | Big Money Launch — metodologia de lançamentos grandes |
| 10 | Métricas de Lançamento | KPIs, benchmarks e indicadores de sucesso |

### Domínio: High-Ticket (FHT)

| # | Documento | Conteúdo |
|---|---|---|
| 11 | FHT — Fundamentos | Filosofia e princípios de vendas high-ticket |
| 12 | Processo Comercial | Pipeline de vendas: qualificação → aplicação → call → fechamento |
| 13 | Script de Vendas | Roteiro completo para calls de vendas high-ticket |
| 14 | Objeções e Respostas | Banco de objeções com contra-argumentos estruturados |
| 15 | Qualificação de Leads | Critérios e frameworks para qualificar aplicações |
| 16 | Métricas High-Ticket | CAC, LTV, taxa de comparecimento, taxa de fechamento |

### Domínio: Tráfego Pago (Sobral)

| # | Documento | Conteúdo |
|---|---|---|
| 17 | Fundamentos de Tráfego | Conceitos base, plataformas, tipos de campanha |
| 18 | Meta Ads — Estrutura | Campanhas, conjuntos, anúncios no ecossistema Meta |
| 19 | Audiências e Segmentação | Lookalike, custom audiences, interesses, exclusões |
| 20 | Criativos para Ads | Framework Andromeda — 9 tipos de criativo |
| 21 | Otimização e Escala | Regras de otimização, quando escalar, quando pausar |
| 22 | Métricas de Tráfego | CPM, CPC, CTR, CPL, CPA, ROAS — benchmarks por nicho |

### Domínio: Copy e Conteúdo

| # | Documento | Conteúdo |
|---|---|---|
| 23 | Frameworks de Copy | AIDA, PAS, 4Ps, FAB e outros frameworks de persuasão |
| 24 | Headlines e Hooks | Estruturas de títulos e ganchos que convertem |
| 25 | Sequências de Email | Templates de sequências para lançamento e nurturing |
| 26 | Landing Pages | Framework de 11 seções para páginas de alta conversão |

### Domínio: IA e Automação

| # | Documento | Conteúdo |
|---|---|---|
| 27 | Stack de Ferramentas | Ferramentas de IA para marketing (Lovable, Make, GHL) |
| 28 | Automações de Marketing | Fluxos automatizados com IA para funis e lançamentos |

---

## Skills — 6 Comandos

Cada skill é um workflow estruturado acionado por comando slash:

### `/lancamento`
**Domínio:** Lançamentos
**Função:** Guia passo a passo para planejar e executar um lançamento completo. Pergunta tipo de lançamento, produto, audiência e gera plano com timeline, CPLs, emails e métricas-alvo.

### `/high-ticket`
**Domínio:** Vendas High-Ticket
**Função:** Estrutura processo comercial completo — da geração de leads até o fechamento. Gera scripts de vendas, qualificação de aplicações e sequências de follow-up.

### `/trafego`
**Domínio:** Tráfego Pago
**Função:** Cria estratégia de tráfego com base no objetivo (lançamento, perpétuo, captação). Define estrutura de campanhas, orçamento, segmentação e criativos.

### `/copy`
**Domínio:** Copy e Conteúdo
**Função:** Gera copy para qualquer peça — emails, anúncios, landing pages, scripts de vídeo. Usa frameworks da knowledge base e adapta ao avatar informado.

### `/funil`
**Domínio:** Transversal
**Função:** Desenha funil completo de marketing — da captação ao pós-venda. Integra tráfego, copy, automações e métricas esperadas por etapa.

### `/escala`
**Domínio:** Transversal
**Função:** Analisa operação atual e cria plano de escala. Avalia gargalos, sugere otimizações e projeta cenários de crescimento com base nos benchmarks.

---

## Agentes — 5 Especialistas

Cada agente tem domínio definido, base de conhecimento própria e personalidade:

### `estrategista-lancamento`
- **Papel:** Estrategista sênior de lançamentos digitais
- **Base:** Documentos FL, SNA, BML, métricas de lançamento
- **Quando acionar:** Planejamento estratégico de lançamentos, decisões de tipo de lançamento, cronogramas

### `gestor-trafego`
- **Papel:** Gestor de tráfego especializado em performance
- **Base:** Documentos Sobral, métricas de tráfego, criativos
- **Quando acionar:** Estratégia de campanhas, otimização de ads, análise de métricas de tráfego

### `closer-high-ticket`
- **Papel:** Closer de vendas de alto valor
- **Base:** Documentos FHT, scripts de vendas, objeções
- **Quando acionar:** Estruturação de calls de vendas, tratamento de objeções, processo comercial

### `copywriter-lancamento`
- **Papel:** Copywriter especializado em lançamentos e vendas
- **Base:** Documentos de copy, frameworks de persuasão, sequências de email
- **Quando acionar:** Criação de textos persuasivos, emails de lançamento, scripts de CPL

### `produtor-conteudo`
- **Papel:** Produtor de conteúdo estratégico
- **Base:** Documentos de conteúdo, headlines, hooks, IA
- **Quando acionar:** Calendário editorial, estratégia de conteúdo, produção de materiais

---

## Orquestrador — CLAUDE.md

O arquivo `CLAUDE.md` na raiz do projeto funciona como o "cérebro" do sistema:

- **Vocabulário do mercado** — Glossário com termos de marketing digital brasileiro
- **Benchmarks de referência** — Métricas-alvo por tipo de campanha e nicho
- **Regras de roteamento** — Lógica de qual knowledge base consultar por tipo de pergunta
- **Instruções de comportamento** — Tom, estilo e formato das respostas
- **Mapa de arquivos** — Índice de todos os documentos da knowledge base

---

## Sistema de Memória

O sistema de memória está configurado para:

- Armazenar preferências do usuário (nicho, produto, avatar)
- Registrar decisões tomadas em sessões anteriores
- Manter histórico de métricas informadas pelo usuário
- Criar feedback loops para melhorar recomendações ao longo do tempo
