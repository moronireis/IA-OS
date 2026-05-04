---
title: Arquitetura da Stack IA-OS
description: Visão geral completa da arquitetura do sistema IA-OS - Knowledge Base, Skills, Agentes e Orquestrador
---

# Arquitetura da Stack IA-OS

## Visão Geral

O **IA-OS** (Inteligência Artificial - Operating System) é um sistema operacional de marketing digital construído sobre o Claude Code. Ele transforma conhecimento especializado de cursos, frameworks e metodologias em uma base de conhecimento estruturada, acessível por meio de skills, agentes e um orquestrador central.

## Diagrama da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                      CLAUDE.md                              │
│                    (Orquestrador)                            │
│  Vocabulário · Benchmarks · Roteamento · Regras de Domínio  │
└──────────────────────┬──────────────────────────────────────┘
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
   ┌──────────┐  ┌──────────┐  ┌──────────┐
   │  Skills  │  │  Agentes │  │  Memory  │
   │ (6 cmds) │  │(5 espec.)│  │ (sistema)│
   └────┬─────┘  └────┬─────┘  └──────────┘
        │              │
        └──────┬───────┘
               │
               ▼
   ┌───────────────────────────────────────┐
   │         KNOWLEDGE BASE                │
   │         28 documentos MD              │
   │                                       │
   │  ┌─────────┐ ┌─────────┐ ┌─────────┐│
   │  │Lançament│ │High     │ │Tráfego  ││
   │  │os (FL,  │ │Ticket   │ │Pago     ││
   │  │SNA,BML) │ │(FHT)    │ │(Sobral) ││
   │  └─────────┘ └─────────┘ └─────────┘│
   │  ┌─────────┐ ┌─────────┐            │
   │  │Copy &   │ │IA &     │            │
   │  │Conteúdo │ │Automação│            │
   │  └─────────┘ └─────────┘            │
   └───────────────────────────────────────┘
```

## Como o Sistema Funciona

1. **O usuário faz uma pergunta** sobre marketing digital (lançamentos, tráfego, vendas, copy, etc.)
2. **Claude Code lê o CLAUDE.md** — o arquivo orquestrador que contém o vocabulário do mercado, benchmarks de referência e regras de roteamento
3. **O orquestrador identifica o domínio** da pergunta e direciona para a base de conhecimento correta
4. **A knowledge base fornece contexto** — frameworks, métricas, scripts e metodologias dos melhores cursos do mercado
5. **Skills executam workflows** — sequências de passos estruturados para tarefas específicas
6. **Agentes especializados** assumem quando a tarefa exige profundidade em um domínio

## Números da Stack

| Componente | Quantidade | Descrição |
|---|---|---|
| **Documentos de Conhecimento** | 28 | Arquivos MD com conteúdo estruturado |
| **Skills** | 6 | Comandos slash para workflows específicos |
| **Agentes** | 5 | Especialistas com domínio e base própria |
| **Total de Arquivos MD** | ~40 | Incluindo configs, agents e skills |
| **Conhecimento Estruturado** | ~365KB | Texto puro, otimizado para contexto |
| **Domínios Cobertos** | 5 | Lançamentos, High-Ticket, Tráfego, Copy, IA |

## Fluxo de Dados

```
Pergunta do Usuário
       │
       ▼
   CLAUDE.md analisa contexto
       │
       ├──► Domínio: Lançamento → Knowledge Base FL/SNA/BML
       ├──► Domínio: High-Ticket → Knowledge Base FHT
       ├──► Domínio: Tráfego → Knowledge Base Sobral
       ├──► Domínio: Copy/Conteúdo → Knowledge Base Copy
       └──► Domínio: IA/Automação → Knowledge Base IA
              │
              ▼
       Resposta contextualizada
       com frameworks + benchmarks
```

## Fontes de Conhecimento

O sistema foi construído a partir de materiais dos maiores nomes do marketing digital brasileiro:

- **Fórmula de Lançamento (Érico Rocha)** — Metodologia completa de lançamentos
- **Sobral de Tráfego** — Gestão de tráfego pago (Meta Ads, Google Ads)
- **Fator High Ticket (Puglia)** — Vendas de alto valor
- **SNA / BML** — Metodologias complementares de lançamento
- **Frameworks de Copy** — Estruturas de persuasão e conteúdo

## Princípios de Design

1. **Markdown-first** — Todo conhecimento em formato que Claude lê nativamente
2. **Domínio isolado** — Cada área tem seus documentos independentes
3. **Roteamento inteligente** — CLAUDE.md sabe quando acionar cada base
4. **Workflows executáveis** — Skills não são apenas instruções, são sequências de passos
5. **Benchmarks quantitativos** — Métricas reais para tomada de decisão
