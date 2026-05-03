# Sistema Manus: Cerebros e DLCs

---
**Autores:** Rafael Puglia & Luiza Purificacao  
**Programa:** FHT / Acervo Metodologico  
**Fonte:** Prompt para criacao dos cerebros + DLCs do Manus  
**Categoria:** IA & Automacao  
**Tags:** manus, cerebros-ia, agentes-especializados, dlc, lancamentos, fht, automacao  
---

## O que e o Sistema Manus

O Manus e uma plataforma/framework de agentes IA especializados ("cerebros") que operam em **modo cerebro** (nao executor). Cada cerebro e um agente treinado com materiais especificos para sintetizar, organizar e transformar conhecimento em playbooks operacionais, treinamentos e checklists acionaveis.

### Filosofia do Sistema

- O Manus **le e sintetiza** todos os arquivos anexados de um bloco de conhecimento
- Transforma em camadas de **lapidacao**, **playbooks anti-travamento** e **manuais de excelencia**
- Opera com **zero alucinacao**: se nao esta nos arquivos, marca como "nao encontrado"
- Nada de generico: so afirma recomendacoes explicitamente sustentadas pelos materiais
- Profundidade maxima: nivel "procedimento padrao" + "padrao faixa preta"

### Conceito Cerebro vs Executor

| Modo | O que faz |
|------|-----------|
| **Cerebro** | Le, sintetiza, organiza, cria frameworks, playbooks e treinamentos |
| **Executor** | Executa tarefas operacionais (criacao de conteudo, automacoes, etc.) |

Os cerebros do Manus operam primariamente em modo cerebro, gerando inteligencia que depois e aplicada operacionalmente.

---

## Como Criar um Cerebro

### Estrutura do Prompt de Criacao

O prompt para criacao de um cerebro segue uma estrutura rigorosa com etapas sequenciais:

#### Regras de Ouro (Sem Excecao)

1. **Zero Alucinacao** -- se nao estiver nos arquivos, escrever: "Nao encontrado nos materiais enviados"
2. **Nada de generico** -- so afirmar recomendacoes sustentadas explicitamente pelo material
3. **Profundidade maxima** -- nivel procedimento padrao + padrao faixa preta
4. **Linguagem** -- PT-BR, direta, pratica, operacional
5. **Separacao por contexto** -- nao misturar materiais de diferentes blocos/niveis
6. **Extracoes obrigatorias** -- exemplos, numeros, checklists, roteiros, frases, "o que fazem na pratica" e "o que NAO fazem"

### As 7 Etapas de Criacao do Cerebro

#### Etapa 0: Triagem dos Materiais

Antes de produzir qualquer coisa, o Manus deve:

1. **Listar todos os arquivos** anexados ao projeto
2. **Classificar cada arquivo:**
   - [RELEVANTE] = material que pertence ao bloco alvo
   - [NAO-RELEVANTE] = material de outro bloco/nivel
   - [INCERTO] = se nao tem certeza, explicar o motivo
3. **Declarar explicitamente** quais arquivos vai usar e quais ignora

#### Etapa 1: Extracao Comparativa

Criar uma matriz com 5 colunas:

| Coluna | Conteudo |
|--------|----------|
| A | O que a base diz / estrutura base |
| B | Como o material avancado executa / lapida / corrige |
| C | Por que isso muda o resultado |
| D | Sinais de que voce precisa disso |
| E | Trechos/arquivos que provam (evidencia) |

#### Etapa 2: Indexacao Profunda (Indice Faixa Preta)

Indice com 4 camadas:

1. **Camada Execucao Real** -- como realmente montam (eventos, paginas, sequencia, time, rotina)
2. **Camada Otimizacao** -- onde mexem primeiro quando nao bate meta, sequencia de prioridades
3. **Camada Troubleshooting** -- erros mais comuns, sintomas/causa/correcao
4. **Camada Escala e Performance** -- o que muda quando sai do basico para escala

Para cada item: definicao, aplicacao, checklist, erros comuns, evidencia.

#### Etapa 3: Treinamento Completo

Construir um treinamento modular que entra como **camada adicional** sobre o conhecimento base:

**Modulos obrigatorios (minimo 10):**
- Modulo 0: O que e a camada avancada na pratica
- Modulo 1: Preparacao e execucao (ritual antes do lancamento)
- Modulo 2: Construcao do evento/conteudo com padrao de conversao
- Modulo 3: Oferta e pitch (como melhorar conversao)
- Modulo 4: Paginas, funis e elementos criticos
- Modulo 5: Comunicacao e notificacoes (padroes, cadencias, momento certo)
- Modulo 6: Time, papeis e responsabilidades
- Modulo 7: Metricas e sala de guerra
- Modulo 8: Diagnostico e correcao de gargalos
- Modulo 9: Pos-lancamento e reuso
- Modulo 10: Padroes de escala

**Padrao obrigatorio dentro de cada modulo:**
1. O que e (definicao)
2. Por que importa (impacto direto)
3. Como fazem na pratica (passo a passo)
4. Checklist atomico (feito/nao-feito)
5. Criterios de qualidade ("como saber se esta bom")
6. Erros comuns + antidotos
7. Evidencia (arquivo + trecho)
8. Frases/ideias-chave (se existirem nos materiais)

#### Etapa 4: Sala de Guerra (KPIs e Decisoes)

Extrair dos materiais:
- KPIs citados, metas e benchmarks
- Sinais de alerta
- Ordem de prioridade de correcao

Transformar em "Painel Faixa Preta":
- KPI → meta → por que importa
- Quando medir (em que fase/dia)
- Como diagnosticar quando esta ruim
- O que fazer primeiro (ordem)
- Correcoes recomendadas
- Evidencia

#### Etapa 5: Catalogo de Provas, Cases e Padroes

Para cada ativo extraido:
- Tipo (case, prova social, prova logica, autoridade, bastidor, print, depoimento, script)
- Onde aplicar (pre, evento, pitch, carrinho, pos)
- Qual problema resolve
- Como replicar (passo a passo)
- Evidencia

#### Etapa 6: Mapas de Decisao (Se/Entao)

Criar arvores de decisao baseadas exclusivamente nos materiais:
- Se taxa X esta baixa → causas provaveis → correcao em ordem
- Se evento perde retencao → onde mexer primeiro
- Se pico de vendas fraco → correcoes de pitch/oferta/comunicacao
- Se volume bom mas conversao baixa → possiveis causas e acoes

**Regra:** somente criar Se/Entao com base explicita nos materiais.

#### Etapa 7: Checklistzao Final

Para cada fase (pre, evento, carrinho, pos), gerar tarefas atomicas separadas por:
- Estrategia
- Copy e Conteudo
- Paginas e Tech
- Trafego e Criativos
- Comunidade/Atendimento/Comercial
- Operacao e gestao do time
- Pos e otimizacao

Incluir tarefas de checagem, revisao, sala de guerra e correcao de gargalo.

### Entrega Final do Cerebro

O cerebro deve entregar 7 pecas, nesta ordem:

1. Triagem final (arquivos usados e ignorados)
2. Matriz comparativa (base vs execucao avancada)
3. Indice Faixa Preta (com subitens)
4. Treinamento completo modular (ultra detalhado)
5. Painel Faixa Preta (KPIs, metas, diagnostico, prioridade)
6. Catalogo de provas/cases/ativos/scripts
7. Checklistzao final

Mais: "Lacunas e Proximos Arquivos Ideais" -- o que faltou e quais materiais preencheriam as lacunas.

---

## DLCs (Conteudo Adicional / Expansoes)

### O que sao DLCs

DLCs (Downloadable Content / Conteudo Adicional) sao modulos especializados que expandem a capacidade do cerebro principal. Cada DLC foca em um processo ou estrategia especifica e deve ser auto-contida, mas conectada ao cerebro principal.

### Como Montar uma DLC

1. **Organizar arquivos** em .txt ou .md (preferivel)
2. **Pedir ao GPT** para dizer como deve ser a organizacao e quais arquivos faltam
3. **Explicar o que a DLC deve "buscar"** em cada pasta/arquivo
4. **Separar em modulos** (ex: Pre-SHT → SHT → Pos-SHT)
5. **Prompt extremamente completo** -- explicar como usar cada coisa, revisar para nao dar problemas

### Exemplo: DLC de Semente High Ticket (SHT)

**Objetivo:** O Manus cria e executa todas as etapas do lancamento de Semente High Ticket conforme a metodologia FHT.

**Estrutura da DLC SHT:**

1. **Preparacao Inicial**
   - Acessar arquivos de referencia (engenharia de oferta, transcricao de aula, exemplos de oferta)
   - Entender a estrutura da oferta e organizacao dos entregaveis

2. **Desenvolvimento de Notificacoes e Criativos**
   - Notificacoes de lancamento (seeding de "acompanhamento" e "acelerador")
   - Notificacoes de provas sociais
   - Notificacoes de ultima chance (urgencia e escassez)
   - Criativos baseados em padroes validados em outros nichos

3. **Pesquisa de Leads**
   - Pesquisa pre-evento para coletar dados sobre interesse
   - Perguntas sobre nivel de interesse, disposicao para investir, status atual

4. **Captacao de Leads e Trafego**
   - Pagina de captura otimizada para conversao
   - Campanhas de trafego pago com segmentacao ideal
   - Metricas de performance e ajustes

5. **Execucao do Evento**
   - Formato "Heroi Relutante"
   - Provas sociais durante a live
   - Oferta com ancoragem de preco (ex: R$100.000)
   - Aplicacao para selecionar leads comprometidos

6. **Pos-Lancamento**
   - Analise de dados (taxas de conversao, CPL, engajamento)
   - Pesquisa pos-venda (compradores e nao-compradores)
   - Ajustes baseados em dados para proximo ciclo

### Exemplo: DLC de Funil Perpetuo de Desafio em 5 Dias

**Papel do Manus nesta DLC:** agente especialista em perpetuos baseados em desafio em 5 dias.

**Aviso importante:** Esta DLC NAO substitui o super prompt de Imersao/Mentoria. Ela prepara, aquece e educa o lead para que o super prompt funcione com mais eficacia.

**Modulos da DLC:**

| Modulo | Conteudo |
|--------|----------|
| 00 | Configuracao rapida do perpetuo (perguntas estrategicas) |
| 01 | Mapa de Valores Perpetuo (dores, desejos, crencas, medos, objecoes, linguagem) |
| 02 | Arquitetura do funil perpetuo (paginas, emails, WhatsApp, formato de entrega) |
| 03 | Roteiro e intencao dos 5 dias (framework emocional, objecoes-alvo, provas, seeding) |
| 04 | Story Bank e provas perpetuas (banco reutilizavel de provas e historias) |

**Modulo 00 -- Perguntas Obrigatorias:**
1. Qual e a Roma do desafio? (resultado tangivel em 5 dias)
2. Quem e o publico-alvo imediato? (nicho, nivel de consciencia, situacao atual)
3. Qual e o produto/oferta final premium?
4. Qual e o produto de entrada / investimento do desafio?
5. Quais dados ja existem? (pesquisas, provas sociais, metricas)

**Modulo 03 -- Framework por Dia:**

Para cada dia (D1 a D5):
- Objetivo principal (emocional + pratico)
- Framework emocional dominante (Acao Segredo / Ajustes / Acao Direta)
- Objecoes-alvo (maximo 3)
- Valor gerado (transformacao cognitiva/emocional)
- Tarefa pratica do dia (1 acao simples com impacto real)
- Provas usadas (N1 autoridade, N2 cliente, N3 processo, N4 emocional)
- Seeding do proximo passo (inicio/meio/final)

**Dia 5 -- Logica do Perfect Webinar Simplificado:**
Recapitulacao → Prova → Apresentacao da oferta → Objecoes → Urgencia → Fechamento

---

## Aplicacoes Praticas do Sistema Manus

### 1. Lancamento de Semente High Ticket
- Criar todo o processo de lancamento do zero
- Notificacoes, criativos, pesquisa de leads, execucao do evento, pos-lancamento
- Gestao de metricas e ajustes em tempo real

### 2. Funil Perpetuo de Desafio
- Desafio em 5 dias rodando automaticamente
- Atrai, engaja, converte e prepara para mentoria/imersao
- Sequencias de email e WhatsApp automatizadas

### 3. Treinamento de Time
- Gerar manuais de entregaveis para mentores
- Criar checklists operacionais para cada entregavel
- Avaliar entregas via IA com base no manual

### 4. Diagnostico e Correcao
- Identificar gargalos em lancamentos
- Mapas de decisao Se/Entao para correcao rapida
- Sala de guerra com KPIs e prioridades

### 5. Pesquisa e Inteligencia de Mercado
- Analisar pesquisas de leads, compradores e nao-compradores
- Gerar mapas de valores, dores e objecoes
- Criar avatares baseados em dados reais

---

## Boas Praticas para Uso do Manus

1. **Organizar materiais antes** -- separar em .txt ou .md por bloco tematico
2. **Prompt completo e detalhado** -- quanto mais especifico, melhor o resultado
3. **Separar DLCs por contexto** -- nao misturar processos diferentes no mesmo cerebro
4. **Revisar cuidadosamente** -- o prompt deve ser revisado para evitar erros
5. **Marcar lacunas** -- sempre pedir ao Manus que sinalize o que faltou
6. **Iterar progressivamente** -- usar "continue" para processar conteudo extenso
7. **Manter atualizado** -- atualizar cerebros e DLCs conforme o negocio evolui
