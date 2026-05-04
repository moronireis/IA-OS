---
title: O que Temos Hoje
description: Inventario completo de todos os componentes construidos no sistema IA-OS
---

# O que Temos Hoje

Inventario completo de tudo que foi construido na stack IA-OS, organizado por tipo de componente.

## Knowledge Base — 28 Documentos

### Dominio: Lancamentos

| # | Documento | Conteudo |
|---|---|---|
| 1 | Formula de Lancamento — Visao Geral | Metodologia completa da FL, fases, tipos de lancamento |
| 2 | Lancamento Semente | Estrategia para validar oferta com audiencia minima |
| 3 | Lancamento Classico | Estrutura completa do lancamento com CPLs e abertura de carrinho |
| 4 | Lancamento Relampago | Lancamento rapido para base existente |
| 5 | Lancamento Passariano | Modelo de lancamento perpétuo/escalado |
| 6 | Estrutura de CPLs | Conteudo Pre-Lancamento — scripts e frameworks |
| 7 | Funis de Lancamento | Arquitetura de paginas, emails e automacoes |
| 8 | SNA — Metodologia | Sistema de lancamento complementar |
| 9 | BML — Metodologia | Big Money Launch — metodologia de lancamentos grandes |
| 10 | Metricas de Lancamento | KPIs, benchmarks e indicadores de sucesso |

### Dominio: High-Ticket (FHT)

| # | Documento | Conteudo |
|---|---|---|
| 11 | FHT — Fundamentos | Filosofia e principios de vendas high-ticket |
| 12 | Processo Comercial | Pipeline de vendas: qualificacao → aplicacao → call → fechamento |
| 13 | Script de Vendas | Roteiro completo para calls de vendas high-ticket |
| 14 | Objecoes e Respostas | Banco de objecoes com contra-argumentos estruturados |
| 15 | Qualificacao de Leads | Criterios e frameworks para qualificar aplicacoes |
| 16 | Metricas High-Ticket | CAC, LTV, taxa de comparecimento, taxa de fechamento |

### Dominio: Trafego Pago (Sobral)

| # | Documento | Conteudo |
|---|---|---|
| 17 | Fundamentos de Trafego | Conceitos base, plataformas, tipos de campanha |
| 18 | Meta Ads — Estrutura | Campanhas, conjuntos, anuncios no ecossistema Meta |
| 19 | Audiencias e Segmentacao | Lookalike, custom audiences, interesses, exclusoes |
| 20 | Criativos para Ads | Framework Andromeda — 9 tipos de criativo |
| 21 | Otimizacao e Escala | Regras de otimizacao, quando escalar, quando pausar |
| 22 | Metricas de Trafego | CPM, CPC, CTR, CPL, CPA, ROAS — benchmarks por nicho |

### Dominio: Copy e Conteudo

| # | Documento | Conteudo |
|---|---|---|
| 23 | Frameworks de Copy | AIDA, PAS, 4Ps, FAB e outros frameworks de persuasao |
| 24 | Headlines e Hooks | Estruturas de titulos e ganchos que convertem |
| 25 | Sequencias de Email | Templates de sequencias para lancamento e nurturing |
| 26 | Landing Pages | Framework de 11 secoes para paginas de alta conversao |

### Dominio: IA e Automacao

| # | Documento | Conteudo |
|---|---|---|
| 27 | Stack de Ferramentas | Ferramentas de IA para marketing (Lovable, Make, GHL) |
| 28 | Automacoes de Marketing | Fluxos automatizados com IA para funis e lancamentos |

---

## Skills — 6 Comandos

Cada skill e um workflow estruturado acionado por comando slash:

### `/lancamento`
**Dominio:** Lancamentos
**Funcao:** Guia passo a passo para planejar e executar um lancamento completo. Pergunta tipo de lancamento, produto, audiencia e gera plano com timeline, CPLs, emails e metricas-alvo.

### `/high-ticket`
**Dominio:** Vendas High-Ticket
**Funcao:** Estrutura processo comercial completo — da geracao de leads ate o fechamento. Gera scripts de vendas, qualificacao de aplicacoes e sequencias de follow-up.

### `/trafego`
**Dominio:** Trafego Pago
**Funcao:** Cria estrategia de trafego com base no objetivo (lancamento, perpetuo, captacao). Define estrutura de campanhas, orcamento, segmentacao e criativos.

### `/copy`
**Dominio:** Copy e Conteudo
**Funcao:** Gera copy para qualquer peca — emails, anuncios, landing pages, scripts de video. Usa frameworks da knowledge base e adapta ao avatar informado.

### `/funil`
**Dominio:** Transversal
**Funcao:** Desenha funil completo de marketing — da captacao ao pos-venda. Integra trafego, copy, automacoes e metricas esperadas por etapa.

### `/escala`
**Dominio:** Transversal
**Funcao:** Analisa operacao atual e cria plano de escala. Avalia gargalos, sugere otimizacoes e projeta cenarios de crescimento com base nos benchmarks.

---

## Agentes — 5 Especialistas

Cada agente tem dominio definido, base de conhecimento propria e personalidade:

### `estrategista-lancamento`
- **Papel:** Estrategista senior de lancamentos digitais
- **Base:** Documentos FL, SNA, BML, metricas de lancamento
- **Quando acionar:** Planejamento estrategico de lancamentos, decisoes de tipo de lancamento, cronogramas

### `gestor-trafego`
- **Papel:** Gestor de trafego especializado em performance
- **Base:** Documentos Sobral, metricas de trafego, criativos
- **Quando acionar:** Estrategia de campanhas, otimizacao de ads, analise de metricas de trafego

### `closer-high-ticket`
- **Papel:** Closer de vendas de alto valor
- **Base:** Documentos FHT, scripts de vendas, objecoes
- **Quando acionar:** Estruturacao de calls de vendas, tratamento de objecoes, processo comercial

### `copywriter-lancamento`
- **Papel:** Copywriter especializado em lancamentos e vendas
- **Base:** Documentos de copy, frameworks de persuasao, sequencias de email
- **Quando acionar:** Criacao de textos persuasivos, emails de lancamento, scripts de CPL

### `produtor-conteudo`
- **Papel:** Produtor de conteudo estrategico
- **Base:** Documentos de conteudo, headlines, hooks, IA
- **Quando acionar:** Calendario editorial, estrategia de conteudo, producao de materiais

---

## Orquestrador — CLAUDE.md

O arquivo `CLAUDE.md` na raiz do projeto funciona como o "cerebro" do sistema:

- **Vocabulario do mercado** — Glossario com termos de marketing digital brasileiro
- **Benchmarks de referencia** — Metricas-alvo por tipo de campanha e nicho
- **Regras de roteamento** — Logica de qual knowledge base consultar por tipo de pergunta
- **Instrucoes de comportamento** — Tom, estilo e formato das respostas
- **Mapa de arquivos** — Indice de todos os documentos da knowledge base

---

## Sistema de Memoria

O sistema de memoria esta configurado para:

- Armazenar preferencias do usuario (nicho, produto, avatar)
- Registrar decisoes tomadas em sessoes anteriores
- Manter historico de metricas informadas pelo usuario
- Criar feedback loops para melhorar recomendacoes ao longo do tempo
