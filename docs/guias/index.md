# Como Usar o IA-OS

O **IA-OS** é um sistema operacional de marketing digital que roda dentro do Claude Code. Ele combina uma base de conhecimento extraída de 10+ programas de referência do mercado brasileiro com skills automatizadas e agentes especializados para te ajudar em todas as etapas do seu negócio digital.

## Quick Start

### 1. Abra o projeto no Claude Code

```bash
cd "PROJETO - SYSTEM OS"
claude
```

Ao abrir, o Claude Code lê automaticamente o arquivo `CLAUDE.md` na raiz do projeto. Esse arquivo funciona como o "cérebro" do sistema — ele contém:

- A estrutura completa do projeto
- Os domínios de conhecimento disponíveis
- O vocabulário padrão (6em7, Roma, Avatar, CPL, etc.)
- Os benchmarks de referência do mercado
- A lista de skills e agentes

**Você não precisa configurar nada.** Basta abrir o projeto e começar a conversar.

### 2. Comece com uma pergunta ou tarefa

Após abrir o projeto, simplesmente descreva o que você precisa. Exemplos:

```
"Quero planejar meu primeiro lançamento digital"
"Me ajuda a montar uma oferta high ticket de R$15K"
"Preciso de copy para meus 3 CPLs"
```

O Claude vai automaticamente consultar a base de conhecimento relevante antes de responder.

---

## Como Consultar a Knowledge Base

A base de conhecimento está organizada em 5 domínios:

| Domínio | Pasta | Quando usar |
|---------|-------|-------------|
| Lançamentos | `knowledge-base/01-lancamentos/` | Planejar lançamentos semente, clássico, pago ou Black |
| High Ticket | `knowledge-base/02-high-ticket/` | Montar oferta HT, sessão 1a1, lidar com objeções |
| Tráfego Pago | `knowledge-base/03-trafego/` | Campanhas Meta Ads, audiências, otimização de CPL |
| Conteúdo e Copy | `knowledge-base/04-conteudo-copy/` | Scripts CPL, criativos, pitch, Reels, e-books |
| IA e Automação | `knowledge-base/05-ia-automacao/` | Agentes ChatGPT, automação de vendas, páginas com IA |

### Consultando arquivos específicos

Você pode pedir ao Claude para consultar qualquer arquivo da base:

```
"Leia o arquivo knowledge-base/01-lancamentos/fl-formula-lancamento.md 
e me explique os 3 pilares da Fórmula de Lançamento"
```

```
"Consulte a árvore de objeções em knowledge-base/02-high-ticket/arvore-objecoes.md 
e me ajude a preparar respostas para as objeções do meu nicho"
```

```
"Leia knowledge-base/03-trafego/andromeda.md e me explique 
como funciona o portfólio de criativos pós-Andrômeda"
```

::: tip Dica
O índice completo de toda a base de conhecimento está em `knowledge-base/_index.md`. Peça ao Claude para lê-lo se quiser uma visão geral de tudo que está disponível.
:::

---

## Como Usar Skills

Skills são comandos pré-configurados que guiam o Claude por um processo estruturado. Para usar, basta digitar o comando no chat:

| Comando | O que faz |
|---------|-----------|
| `/lancamento` | Planejar lançamento completo com timeline e checklist |
| `/high-ticket` | Montar oferta HT, sessão 1a1, pricing e objeções |
| `/trafego` | Planejar campanha com estrutura, audiências e orçamento |
| `/copy` | Gerar scripts CPL, copy de criativos, headlines e pitches |
| `/funil` | Desenhar funil completo com métricas-alvo por etapa |
| `/escala` | Diagnosticar gargalos e planejar escala do negócio |

### Exemplo prático

```
Você: /lancamento

Claude: Vou te ajudar a planejar seu lançamento! Preciso de algumas informações:
1. Qual o nicho e subnicho?
2. Quem é o avatar (cliente ideal)?
3. Qual a Roma (promessa de transformação)?
4. Já fez algum lançamento antes?
...
```

O Claude vai fazer as perguntas necessárias, consultar a base de conhecimento automaticamente e gerar um plano completo e personalizado.

::: info Saiba mais
Veja a documentação completa de cada skill em [Skills Disponíveis](./skills).
:::

---

## Como Usar Agentes

Agentes são versões especializadas do Claude com "personalidade" e conhecimento focado em uma área. **Eles são acionados automaticamente** pelo Claude quando o contexto da conversa se encaixa.

| Agente | Especialidade |
|--------|---------------|
| `estrategista-lancamento` | Planeja lançamentos end-to-end |
| `gestor-trafego` | Opera como gestor de tráfego virtual |
| `closer-high-ticket` | Prepara e otimiza calls de vendas |
| `copywriter-lancamento` | Escreve copy para todas as fases |
| `produtor-conteudo` | Planeja e estrutura conteúdo |

Você não precisa chamar os agentes manualmente. O Claude identifica automaticamente qual agente é mais adequado para a tarefa e o aciona quando necessário.

::: info Saiba mais
Veja a documentação completa de cada agente em [Agentes Especializados](./agentes).
:::

---

## Fluxos de Trabalho Comuns

### 1. Planejar um lançamento do zero

**Passo a passo:**

1. Digite `/lancamento` para iniciar o planejamento guiado
2. Responda as perguntas sobre seu nicho, avatar e Roma
3. Receba a recomendação do tipo de lançamento ideal (semente, clássico, pago)
4. O Claude gera timeline, checklist e métricas-alvo
5. Use `/copy` para gerar os scripts dos CPLs
6. Use `/trafego` para planejar a campanha de captação

**Exemplo de conversa:**

```
Você: Quero fazer meu primeiro lançamento. Sou nutricionista e nunca vendi online.

Claude: [Consulta a base de conhecimento]
         Recomendo começar com um Lançamento Semente...
         [Gera plano completo com timeline de 45 dias]
```

### 2. Criar campanha de tráfego

**Passo a passo:**

1. Digite `/trafego` para iniciar o planejamento
2. Informe plataforma, orçamento e objetivo
3. Receba o plano completo: setup, audiências, criativos, orçamento por fase
4. Use o briefing de criativos (9 tipos Andrômeda) para produzir as peças
5. Siga o calendário de otimização (14/30/60/90 dias)

**Exemplo de conversa:**

```
Você: /trafego
      Plataforma: Meta Ads
      Orçamento: R$3.000/mês
      Objetivo: captar leads para lançamento clássico

Claude: [Consulta Sobral + Andrômeda + CPL otimização]
         Aqui está seu plano de campanha...
         [Estrutura CBO, 3 audiências, 9 criativos, orçamento por fase]
```

### 3. Escrever copy para CPL

**Passo a passo:**

1. Digite `/copy` e informe que precisa de scripts CPL
2. Defina nicho, avatar, Roma e tom de voz
3. Receba os 3 scripts (CPL1, CPL2, CPL3) prontos para gravar
4. Cada script vem com variantes A/B e notas de produção

**Exemplo de conversa:**

```
Você: /copy
      Tipo: CPL1, CPL2 e CPL3
      Nicho: fitness feminino
      Roma: "Perder 10kg em 90 dias sem dietas restritivas"

Claude: [Consulta scripts-cpl.md e pitch-alta-conversao.md]
         CPL1 - "O Caminho Errado vs O Caminho Certo"
         [Script completo com marcações de tempo e indicações visuais]
```

### 4. Montar oferta high ticket

**Passo a passo:**

1. Digite `/high-ticket` para iniciar
2. Defina o produto, faixa de preço e avatar
3. Receba a estrutura da oferta (DFY/DWY/DIY), árvore de objeções e script de sessão 1a1
4. Use o plano de SLG para gerar leads pelo Instagram

**Exemplo de conversa:**

```
Você: /high-ticket
      Produto: mentoria para dentistas
      Preço: R$12.000
      Objeção principal: "Já fiz outros cursos e não funcionou"

Claude: [Consulta FHT + sessão 1a1 + árvore de objeções]
         Estrutura da oferta em 3 pacotes...
         Script de sessão com respostas para objeções em 3 camadas...
```

### 5. Gerar calendário de conteúdo

**Passo a passo:**

1. Peça ao Claude para gerar um calendário de conteúdo
2. Informe nicho, plataformas e frequência desejada
3. Receba 30+ temas organizados por categoria (dores, desejos, objeções, mitos, medos)
4. Cada tema vem com tipo (Raiz ou Nutella), plataforma e estrutura de script

**Exemplo de conversa:**

```
Você: Preciso de um calendário de conteúdo para 30 dias.
      Nicho: marketing para coaches
      Plataformas: YouTube + Instagram

Claude: [Consulta conteudo-raiz.md e reels-short-form.md]
         Calendário com 8 Raiz (YouTube) + 30 Nutella (Instagram)
         [Temas organizados por semana com tipo e CTA]
```

---

## Dicas e Boas Práticas

### Seja específico nas suas perguntas

::: tip Bom
"Me ajude a planejar um lançamento pago para um curso de inglês, orçamento de R$5K, audiência de 10K seguidores no Instagram"
:::

::: warning Evite
"Me ajuda com marketing"
:::

### Use o vocabulário do sistema

O IA-OS entende termos específicos do mercado brasileiro. Use-os para respostas mais precisas:

- **6em7** em vez de "faturar R$100K em uma semana"
- **Roma** em vez de "promessa do produto"
- **Avatar** em vez de "público-alvo"
- **CPL** em vez de "vídeo de pré-lançamento"
- **Conteúdo Raiz** em vez de "vídeo longo"
- **Conteúdo Nutella** em vez de "vídeo curto"

### Combine skills para projetos complexos

Para um lançamento completo, use as skills em sequência:

1. `/lancamento` → define estratégia e timeline
2. `/funil` → desenha o funil completo
3. `/copy` → gera toda a copy (CPLs, criativos, landing page)
4. `/trafego` → planeja as campanhas
5. `/escala` → após o lançamento, diagnostica e planeja o próximo ciclo

### Peça ao Claude para citar fontes

O Claude tem acesso a metodologias de autores específicos. Peça para citar:

```
"Baseado na metodologia do Sobral, como devo estruturar minha campanha?"
"Segundo o FHT, qual a melhor estrutura de oferta para meu caso?"
"O que o Érico Rocha recomenda para quem está no primeiro lançamento?"
```

### Use benchmarks para validar suas métricas

O sistema tem benchmarks reais do mercado. Compare seus resultados:

| Métrica | Benchmark |
|---------|-----------|
| ROAS lançamento pago | 1.0 (mínimo) / 1.2 (alvo) |
| Unique views do evento | 70%+ |
| Conversão produto principal | 7-10%+ |
| Ciclos para 6em7 | ~7 em média |
| Frequência de conteúdo | 2 Raiz + 7 Nutella/semana |
| Escala de tráfego | 20-30%/dia |
