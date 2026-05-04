---
title: Arquitetura da Stack IA-OS
description: Visao geral completa da arquitetura do sistema IA-OS - Knowledge Base, Skills, Agentes e Orquestrador
---

# Arquitetura da Stack IA-OS

## Visao Geral

O **IA-OS** (Inteligencia Artificial - Operating System) e um sistema operacional de marketing digital construido sobre o Claude Code. Ele transforma conhecimento especializado de cursos, frameworks e metodologias em uma base de conhecimento estruturada, acessivel por meio de skills, agentes e um orquestrador central.

## Diagrama da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                      CLAUDE.md                              │
│                    (Orquestrador)                            │
│  Vocabulario · Benchmarks · Roteamento · Regras de Dominio  │
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
   │  │Lancament│ │High     │ │Trafego  ││
   │  │os (FL,  │ │Ticket   │ │Pago     ││
   │  │SNA,BML) │ │(FHT)    │ │(Sobral) ││
   │  └─────────┘ └─────────┘ └─────────┘│
   │  ┌─────────┐ ┌─────────┐            │
   │  │Copy &   │ │IA &     │            │
   │  │Conteudo │ │Automacao│            │
   │  └─────────┘ └─────────┘            │
   └───────────────────────────────────────┘
```

## Como o Sistema Funciona

1. **O usuario faz uma pergunta** sobre marketing digital (lancamentos, trafego, vendas, copy, etc.)
2. **Claude Code le o CLAUDE.md** — o arquivo orquestrador que contem o vocabulario do mercado, benchmarks de referencia e regras de roteamento
3. **O orquestrador identifica o dominio** da pergunta e direciona para a base de conhecimento correta
4. **A knowledge base fornece contexto** — frameworks, metricas, scripts e metodologias dos melhores cursos do mercado
5. **Skills executam workflows** — sequencias de passos estruturados para tarefas especificas
6. **Agentes especializados** assumem quando a tarefa exige profundidade em um dominio

## Numeros da Stack

| Componente | Quantidade | Descricao |
|---|---|---|
| **Documentos de Conhecimento** | 28 | Arquivos MD com conteudo estruturado |
| **Skills** | 6 | Comandos slash para workflows especificos |
| **Agentes** | 5 | Especialistas com dominio e base propria |
| **Total de Arquivos MD** | ~40 | Incluindo configs, agents e skills |
| **Conhecimento Estruturado** | ~365KB | Texto puro, otimizado para contexto |
| **Dominios Cobertos** | 5 | Lancamentos, High-Ticket, Trafego, Copy, IA |

## Fluxo de Dados

```
Pergunta do Usuario
       │
       ▼
   CLAUDE.md analisa contexto
       │
       ├──► Dominio: Lancamento → Knowledge Base FL/SNA/BML
       ├──► Dominio: High-Ticket → Knowledge Base FHT
       ├──► Dominio: Trafego → Knowledge Base Sobral
       ├──► Dominio: Copy/Conteudo → Knowledge Base Copy
       └──► Dominio: IA/Automacao → Knowledge Base IA
              │
              ▼
       Resposta contextualizada
       com frameworks + benchmarks
```

## Fontes de Conhecimento

O sistema foi construido a partir de materiais dos maiores nomes do marketing digital brasileiro:

- **Formula de Lancamento (Erico Rocha)** — Metodologia completa de lancamentos
- **Sobral de Trafego** — Gestao de trafego pago (Meta Ads, Google Ads)
- **Fator High Ticket (Puglia)** — Vendas de alto valor
- **SNA / BML** — Metodologias complementares de lancamento
- **Frameworks de Copy** — Estruturas de persuasao e conteudo

## Principios de Design

1. **Markdown-first** — Todo conhecimento em formato que Claude le nativamente
2. **Dominio isolado** — Cada area tem seus documentos independentes
3. **Roteamento inteligente** — CLAUDE.md sabe quando acionar cada base
4. **Workflows executaveis** — Skills nao sao apenas instrucoes, sao sequencias de passos
5. **Benchmarks quantitativos** — Metricas reais para tomada de decisao
