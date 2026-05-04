# Como Usar o IA-OS

O **IA-OS** e um sistema operacional de marketing digital que roda dentro do Claude Code. Ele combina uma base de conhecimento extraida de 10+ programas de referencia do mercado brasileiro com skills automatizadas e agentes especializados para te ajudar em todas as etapas do seu negocio digital.

## Quick Start

### 1. Abra o projeto no Claude Code

```bash
cd "PROJETO - SYSTEM OS"
claude
```

Ao abrir, o Claude Code le automaticamente o arquivo `CLAUDE.md` na raiz do projeto. Esse arquivo funciona como o "cerebro" do sistema — ele contem:

- A estrutura completa do projeto
- Os dominios de conhecimento disponiveis
- O vocabulario padrao (6em7, Roma, Avatar, CPL, etc.)
- Os benchmarks de referencia do mercado
- A lista de skills e agentes

**Voce nao precisa configurar nada.** Basta abrir o projeto e comecar a conversar.

### 2. Comece com uma pergunta ou tarefa

Apos abrir o projeto, simplesmente descreva o que voce precisa. Exemplos:

```
"Quero planejar meu primeiro lancamento digital"
"Me ajuda a montar uma oferta high ticket de R$15K"
"Preciso de copy para meus 3 CPLs"
```

O Claude vai automaticamente consultar a base de conhecimento relevante antes de responder.

---

## Como Consultar a Knowledge Base

A base de conhecimento esta organizada em 5 dominios:

| Dominio | Pasta | Quando usar |
|---------|-------|-------------|
| Lancamentos | `knowledge-base/01-lancamentos/` | Planejar lancamentos semente, classico, pago ou Black |
| High Ticket | `knowledge-base/02-high-ticket/` | Montar oferta HT, sessao 1a1, lidar com objecoes |
| Trafego Pago | `knowledge-base/03-trafego/` | Campanhas Meta Ads, audiencias, otimizacao de CPL |
| Conteudo e Copy | `knowledge-base/04-conteudo-copy/` | Scripts CPL, criativos, pitch, Reels, e-books |
| IA e Automacao | `knowledge-base/05-ia-automacao/` | Agentes ChatGPT, automacao de vendas, paginas com IA |

### Consultando arquivos especificos

Voce pode pedir ao Claude para consultar qualquer arquivo da base:

```
"Leia o arquivo knowledge-base/01-lancamentos/fl-formula-lancamento.md 
e me explique os 3 pilares da Formula de Lancamento"
```

```
"Consulte a arvore de objecoes em knowledge-base/02-high-ticket/arvore-objecoes.md 
e me ajude a preparar respostas para as objecoes do meu nicho"
```

```
"Leia knowledge-base/03-trafego/andromeda.md e me explique 
como funciona o portfolio de criativos pos-Andromeda"
```

::: tip Dica
O indice completo de toda a base de conhecimento esta em `knowledge-base/_index.md`. Peca ao Claude para le-lo se quiser uma visao geral de tudo que esta disponivel.
:::

---

## Como Usar Skills

Skills sao comandos pre-configurados que guiam o Claude por um processo estruturado. Para usar, basta digitar o comando no chat:

| Comando | O que faz |
|---------|-----------|
| `/lancamento` | Planejar lancamento completo com timeline e checklist |
| `/high-ticket` | Montar oferta HT, sessao 1a1, pricing e objecoes |
| `/trafego` | Planejar campanha com estrutura, audiencias e orcamento |
| `/copy` | Gerar scripts CPL, copy de criativos, headlines e pitches |
| `/funil` | Desenhar funil completo com metricas-alvo por etapa |
| `/escala` | Diagnosticar gargalos e planejar escala do negocio |

### Exemplo pratico

```
Voce: /lancamento

Claude: Vou te ajudar a planejar seu lancamento! Preciso de algumas informacoes:
1. Qual o nicho e subnicho?
2. Quem e o avatar (cliente ideal)?
3. Qual a Roma (promessa de transformacao)?
4. Ja fez algum lancamento antes?
...
```

O Claude vai fazer as perguntas necessarias, consultar a base de conhecimento automaticamente e gerar um plano completo e personalizado.

::: info Saiba mais
Veja a documentacao completa de cada skill em [Skills Disponiveis](./skills).
:::

---

## Como Usar Agentes

Agentes sao versoes especializadas do Claude com "personalidade" e conhecimento focado em uma area. **Eles sao acionados automaticamente** pelo Claude quando o contexto da conversa se encaixa.

| Agente | Especialidade |
|--------|---------------|
| `estrategista-lancamento` | Planeja lancamentos end-to-end |
| `gestor-trafego` | Opera como gestor de trafego virtual |
| `closer-high-ticket` | Prepara e otimiza calls de vendas |
| `copywriter-lancamento` | Escreve copy para todas as fases |
| `produtor-conteudo` | Planeja e estrutura conteudo |

Voce nao precisa chamar os agentes manualmente. O Claude identifica automaticamente qual agente e mais adequado para a tarefa e o aciona quando necessario.

::: info Saiba mais
Veja a documentacao completa de cada agente em [Agentes Especializados](./agentes).
:::

---

## Fluxos de Trabalho Comuns

### 1. Planejar um lancamento do zero

**Passo a passo:**

1. Digite `/lancamento` para iniciar o planejamento guiado
2. Responda as perguntas sobre seu nicho, avatar e Roma
3. Receba a recomendacao do tipo de lancamento ideal (semente, classico, pago)
4. O Claude gera timeline, checklist e metricas-alvo
5. Use `/copy` para gerar os scripts dos CPLs
6. Use `/trafego` para planejar a campanha de captacao

**Exemplo de conversa:**

```
Voce: Quero fazer meu primeiro lancamento. Sou nutricionista e nunca vendi online.

Claude: [Consulta a base de conhecimento]
         Recomendo comecar com um Lancamento Semente...
         [Gera plano completo com timeline de 45 dias]
```

### 2. Criar campanha de trafego

**Passo a passo:**

1. Digite `/trafego` para iniciar o planejamento
2. Informe plataforma, orcamento e objetivo
3. Receba o plano completo: setup, audiencias, criativos, orcamento por fase
4. Use o briefing de criativos (9 tipos Andromeda) para produzir as pecas
5. Siga o calendario de otimizacao (14/30/60/90 dias)

**Exemplo de conversa:**

```
Voce: /trafego
      Plataforma: Meta Ads
      Orcamento: R$3.000/mes
      Objetivo: captar leads para lancamento classico

Claude: [Consulta Sobral + Andromeda + CPL otimizacao]
         Aqui esta seu plano de campanha...
         [Estrutura CBO, 3 audiencias, 9 criativos, orcamento por fase]
```

### 3. Escrever copy para CPL

**Passo a passo:**

1. Digite `/copy` e informe que precisa de scripts CPL
2. Defina nicho, avatar, Roma e tom de voz
3. Receba os 3 scripts (CPL1, CPL2, CPL3) prontos para gravar
4. Cada script vem com variantes A/B e notas de producao

**Exemplo de conversa:**

```
Voce: /copy
      Tipo: CPL1, CPL2 e CPL3
      Nicho: fitness feminino
      Roma: "Perder 10kg em 90 dias sem dietas restritivas"

Claude: [Consulta scripts-cpl.md e pitch-alta-conversao.md]
         CPL1 - "O Caminho Errado vs O Caminho Certo"
         [Script completo com marcacoes de tempo e indicacoes visuais]
```

### 4. Montar oferta high ticket

**Passo a passo:**

1. Digite `/high-ticket` para iniciar
2. Defina o produto, faixa de preco e avatar
3. Receba a estrutura da oferta (DFY/DWY/DIY), arvore de objecoes e script de sessao 1a1
4. Use o plano de SLG para gerar leads pelo Instagram

**Exemplo de conversa:**

```
Voce: /high-ticket
      Produto: mentoria para dentistas
      Preco: R$12.000
      Objecao principal: "Ja fiz outros cursos e nao funcionou"

Claude: [Consulta FHT + sessao 1a1 + arvore de objecoes]
         Estrutura da oferta em 3 pacotes...
         Script de sessao com respostas para objecoes em 3 camadas...
```

### 5. Gerar calendario de conteudo

**Passo a passo:**

1. Peca ao Claude para gerar um calendario de conteudo
2. Informe nicho, plataformas e frequencia desejada
3. Receba 30+ temas organizados por categoria (dores, desejos, objecoes, mitos, medos)
4. Cada tema vem com tipo (Raiz ou Nutella), plataforma e estrutura de script

**Exemplo de conversa:**

```
Voce: Preciso de um calendario de conteudo para 30 dias.
      Nicho: marketing para coaches
      Plataformas: YouTube + Instagram

Claude: [Consulta conteudo-raiz.md e reels-short-form.md]
         Calendario com 8 Raiz (YouTube) + 30 Nutella (Instagram)
         [Temas organizados por semana com tipo e CTA]
```

---

## Dicas e Boas Praticas

### Seja especifico nas suas perguntas

::: tip Bom
"Me ajude a planejar um lancamento pago para um curso de ingles, orcamento de R$5K, audiencia de 10K seguidores no Instagram"
:::

::: warning Evite
"Me ajuda com marketing"
:::

### Use o vocabulario do sistema

O IA-OS entende termos especificos do mercado brasileiro. Use-os para respostas mais precisas:

- **6em7** em vez de "faturar R$100K em uma semana"
- **Roma** em vez de "promessa do produto"
- **Avatar** em vez de "publico-alvo"
- **CPL** em vez de "video de pre-lancamento"
- **Conteudo Raiz** em vez de "video longo"
- **Conteudo Nutella** em vez de "video curto"

### Combine skills para projetos complexos

Para um lancamento completo, use as skills em sequencia:

1. `/lancamento` → define estrategia e timeline
2. `/funil` → desenha o funil completo
3. `/copy` → gera toda a copy (CPLs, criativos, landing page)
4. `/trafego` → planeja as campanhas
5. `/escala` → apos o lancamento, diagnostica e planeja o proximo ciclo

### Peca ao Claude para citar fontes

O Claude tem acesso a metodologias de autores especificos. Peca para citar:

```
"Baseado na metodologia do Sobral, como devo estruturar minha campanha?"
"Segundo o FHT, qual a melhor estrutura de oferta para meu caso?"
"O que o Erico Rocha recomenda para quem esta no primeiro lancamento?"
```

### Use benchmarks para validar suas metricas

O sistema tem benchmarks reais do mercado. Compare seus resultados:

| Metrica | Benchmark |
|---------|-----------|
| ROAS lancamento pago | 1.0 (minimo) / 1.2 (alvo) |
| Unique views do evento | 70%+ |
| Conversao produto principal | 7-10%+ |
| Ciclos para 6em7 | ~7 em media |
| Frequencia de conteudo | 2 Raiz + 7 Nutella/semana |
| Escala de trafego | 20-30%/dia |
