# CPL - Custo por Lead e Otimizacao

> **Fonte:** Insider Implementation Day - Custo por Lead
> **Autores:** Beto Moreno (Faixa Preta - Foto de Comida / Medicina) e Lucas Avelino (Gestor Senior IGD/Erico Rocha)
> **Aplicacao:** Lancamento Semente e Lancamento Classico

---

## 1. Principio Fundamental

### CPL Nao e a Unica Metrica

> "Captacao nao e so sobre olhar o custo por lead. Nao e so olhar custo por lead. Nao adianta so olhar custo por lead. Voce tem que olhar a qualidade e voce tem que olhar outras metricas tambem." - Beto Moreno

### Objetivo Triplo da Otimizacao

1. **Baixar custo por lead**
2. **Aumentar a qualidade dos leads**
3. **Aumentar a escala**

### Framework de Trafego

Tudo no trafego serve para duas coisas:
1. **Gerar dados** (volume, inteligencia)
2. **Tomar decisao** (escalar, reduzir, otimizar, pausar)

---

## 2. Sistema de Leilao do Meta

### Como Funciona

Trafego pago e um **leilao monitorado por inteligencia artificial**:

- **Demanda baixa + muita oferta** = CPM sobe (caro para aparecer)
- **Muita gente + pouca oferta** = CPM desce (barato para aparecer)

### Fatores que Influenciam o Leilao

| Fator | Impacto |
|-------|---------|
| **Tamanho do publico** | Publico menor = mais caro (menos leilao disponivel) |
| **Qualidade do anuncio** | Anuncio bom = Meta bonifica com custo menor |
| **Sazonalidade** | Periodos de alto investimento = leilao mais caro |
| **Concorrencia no nicho** | Mais anunciantes no mesmo publico = mais caro |
| **Volume de investimento** | Escalar muito = CPM tende a subir |

### Qualidade e Bonificacao

O Meta **bonifica** anunciantes que mantam os usuarios na plataforma:
- Anuncios que geram engajamento positivo = custo menor
- Anuncios chatos que fazem pessoas sairem = custo maior, entrega menor
- O Meta quer que a rede social seja um ambiente agradavel

---

## 3. Metricas Secundarias - O Caminho Completo

### Hierarquia de Metricas

```
CPL (Metrica Primaria)
├── CPM (Custo por Mil Impressoes)
├── CTR (Taxa de Cliques no Link)
├── Connect Rate (Carregamento de Pagina)
├── Taxa de Conversao da Pagina
└── Taxa de Conversao do WhatsApp
```

### 3.1 CPM - Custo por Mil Impressoes

**O que e:** Quanto custa para seu anuncio aparecer 1.000 vezes

**Caracteristicas:**
- **NAO existe padrao de mercado** para CPM - depende 100% do seu nicho, publico e momento
- CPM de R$17 (IGD/Erico com R$2M de investimento) vs R$46 (medicina estetica com R$100K) = ambos normais
- CPM de R$85-90 no periodo de Natal e normal

**Como interpretar:**
- CPM subiu muito? Verificar se e sazonalidade (nao e problema seu)
- CPM subiu fora de epoca? Verificar se publico ficou saturado
- CPM muito alto em publico pequeno? Abrir publico (lookalike maior, mais interesses)

**Relacao com tamanho de publico:**

```
Evento AEMBI (pino 1km) → CPM R$30 → Pouca gente, muito qualificado
Cidade de Sao Paulo → CPM R$8 → Muita gente, menos qualificado
```

> **Alerta:** "Voce pode gravar 800 criativos que nao vai baixar o custo por lead se o que esta caro e o CPM." - Beto Moreno

### 3.2 CTR - Taxa de Cliques no Link

**O que e:** De cada 100 pessoas que veem o anuncio, quantas clicam no link

**Benchmark:** Acima de **1%** (cliques no link, NAO cliques todos)

| CTR | Avaliacao |
|-----|-----------|
| < 1% | Abaixo do esperado - anuncio nao esta chamando atencao |
| 1-2% | Bom - dentro do padrao de mercado |
| 2-4% | Muito bom - criativo eficiente |
| > 4% | Excelente - raro de acontecer |

**CTR Todos vs CTR Clique no Link:**
- **Sempre olhar CTR de CLIQUE NO LINK** (nao CTR Todos)
- CTR Todos inclui curtidas, compartilhamentos, comentarios - infla o numero
- Para comparar lancamentos, use sempre a mesma metrica

**Nota de corte:**
- CPL caro + CTR abaixo de 1% = **pausar criativo** (nota de corte)
- CPL caro + CTR acima de 1% = investigar outras causas (pagina, publico)

**Excecao:**
- Se voce tem traqueamento e sabe que um criativo com CTR < 1% traz leads que COMPRAM, mantenha-o

### 3.3 Connect Rate - Taxa de Carregamento de Pagina

**O que e:** Percentual de pessoas que clicaram e realmente viram a pagina carregar

**Benchmark:** 70-80%

**Formula no gerenciador (metrica personalizada):**
```
Visualizacoes da pagina de destino / Cliques no link
Formato: Percentual
```

**Se Connect Rate < 70%:**

| Problema | Solucao |
|----------|---------|
| **Servidor lento** | Trocar/melhorar servidor |
| **Design pesado** | Otimizar imagens e elementos |
| **Imagens erradas** | Converter PNG/JPEG para SVG ou WebP |
| **Muitos scripts** | Limpar codigos desnecessarios |

**Como converter imagens:**
1. Buscar no Google: "converter PNG em SVG" ou "converter JPEG em WebP"
2. Usar conversor online
3. Substituir imagens na pagina

> "Nao e tanto sobre ficar o mais bonito possivel, mas ela precisa ficar o mais funcional possivel." - Beto Moreno

### 3.4 Taxa de Conversao da Pagina

**O que e:** Percentual de pessoas que chegaram na pagina e se cadastraram

**Benchmark:** 50-75% (varia muito por nicho e escala)

**Formula no gerenciador (metrica personalizada):**
```
[Seu evento de conversao] / Visualizacoes da pagina de destino
Formato: Percentual
```

> **Atencao:** O evento de conversao pode ser "Lead" ou "Registro Concluido" - verifique qual esta usando antes de criar a formula. Se usar o errado, a metrica nao funciona.

**Se taxa de conversao baixa:**

| Causa | Solucao |
|-------|---------|
| **Desalinhamento anuncio-pagina** | Criativo deve refletir a promessa da pagina |
| **Copy/Promessa fraca** | Ser mais especifico. Ex: "Curso basico de foto de comida com celular" > "Transforme comida em sonhos" |
| **Formulario longo** | Usar so e-mail (ou e-mail + telefone se tiver estrategia para o telefone) |
| **Primeira dobra ruim** | Na primeira tela do celular: nome do evento + formulario + botao (tudo visivel sem rolar) |
| **Design confuso** | Simplificar pagina, botao grande e visivel |

**Regra da Primeira Dobra:**
- No menor celular possivel, a pessoa deve ver:
  1. Nome/promessa do evento
  2. Campos do formulario
  3. Botao de inscricao
- Testar: Clicar com botao direito → Inspecionar → Ver em formato mobile

**Campos do formulario:**
- So e-mail = maior conversao
- E-mail + telefone = valido se voce TEM estrategia de WhatsApp/ligacao
- Nome + e-mail + telefone = valido se voce TEM equipe de vendas
- **Se nao vai usar o dado, nao peca** (ex: pedir nome mas nunca chamar pelo nome)

### 3.5 Taxa de Conversao do WhatsApp

**O que e:** Percentual de leads que entram no grupo de WhatsApp

**Benchmark:**

| Taxa | Avaliacao |
|------|-----------|
| 70% | Razoavel |
| 80% | Bom |
| 90%+ | Excelente |

**Quando medir:** ANTES do CPL1 ou Webinario Semente (nao no final do lancamento, quando gente ja saiu do grupo)

**Formula:** Pessoas no grupo / Total de leads

**Como melhorar:**

| Acao | Detalhamento |
|------|-------------|
| **Tirar "Obrigado por se inscrever"** | Substituir por "Quase la! Falta mais um passo" |
| **Icone de atencao** | Usar simbolo de alerta ao inves de joinha |
| **Botao grande e colorido** | Destaque visual para o link do WhatsApp |
| **Redirecionamento automatico** | Script que redireciona para WhatsApp apos 5 segundos |
| **Barra de progresso** | "80% concluido" gera senso de incompletude |
| **Botao extra de suporte** | "Nao conseguiu entrar? Clique aqui" - WhatsApp Business com mensagem automatica |

---

## 4. Impacto da Sazonalidade

### Periodos de CPM Elevado

| Periodo | Impacto | Motivo |
|---------|---------|--------|
| **Black Friday** | CPM dispara | Grandes marcas investem milhoes (Magazine Luiza, Casas Bahia) |
| **Natal** | CPM muito alto | Continuacao do efeito Black Friday + presentes |
| **Ano Novo** | CPM começa a baixar | Empresas reestruturando orcamento |
| **Janeiro** | CPM estabiliza | Menos anunciantes, galera reorganizando |

> **Alerta:** "Nao tem que ficar desesperado porque no final do ano o custo por lead estourou. Nao estourou so para voces. Estourou para o mercado inteiro. Estourou pro Beto, pro Lucas, pro Erico, estoura pra todo mundo." - Beto Moreno

### Como Lidar

- **Nao pare de investir** so porque o CPM subiu na temporada
- Entenda que e o mercado, nao e culpa do seu criativo
- Foque em metricas que voce pode controlar (CTR, copy, pagina)
- Ajuste expectativas de CPL para o periodo

---

## 5. Targeting Geografico

### Quando Usar Geo-Targeting

| Cenario | Recomendacao |
|---------|-------------|
| **Primeiro lancamento** | Brasil inteiro (sem dados para filtrar) |
| **Com historico de ROAS por estado** | Focar nos melhores estados |
| **ROAS negativo em regiao** | Negativar regiao especifica |
| **Evento presencial** | Pino geografico no local |

> Para eventos online, nao ha problema em colocar Brasil inteiro. Usar geo-targeting so com dados que justifiquem.

---

## 6. Equilibrio Qualidade vs Custo

### O Dilema

- **Abrir publico demais** = CPM barato, mas leads desqualificados
- **Fechar publico demais** = leads qualificados, mas CPM muito caro

### Estrategia de Equilibrio

1. Comecar com publico moderado
2. Se CPM muito alto → abrir um pouco (lookalike maior, mais interesses)
3. Se lead desqualificado → fechar um pouco (interesses mais especificos)
4. Monitorar qualidade via traqueamento (quando disponivel)

### Case Real - Medicina Estetica (Beto Moreno)

- CPM R$46,88 (parece caro)
- Mas: nicho com apenas 500 mil medicos no Brasil
- Publico pequeno e qualificado = CPM naturalmente alto
- ROAS positivo = nao importa o CPM

### Case Real - IGD/Erico Rocha (Lucas Avelino)

- CPM R$40-45 (periodo normal)
- CPM R$85-90 (Natal)
- Investimento: R$1.5-2 milhoes por lancamento
- Connect Rate: 65% (abaixo do ideal, mas escala gigante)
- CTR: 2.04% (excelente)

---

## 7. Processo de Medicao

### O Que Nao e Medido Nao Pode Ser Melhorado

Acompanhar **diariamente** durante a captacao:

| Metrica | Frequencia | Onde |
|---------|------------|------|
| CPL | Diario | Gerenciador de anuncios |
| CPM | Diario | Gerenciador |
| CTR (clique no link) | Diario | Gerenciador |
| Connect Rate | Diario | Metrica personalizada |
| Taxa conversao pagina | Diario | Metrica personalizada |
| Taxa WhatsApp | Diario (antes CPL1) | Planilha manual ou ferramenta |

### Quando Otimizar

- **Nao otimizar imediatamente** - gerar dados primeiro
- Esperar volume minimo de dados para cada criativo
- Comparar sempre no mesmo periodo (dia, semana)
- Olhar tendencia, nao numero isolado

---

## 8. Estrategias de Lance

### Tipos de Otimizacao

| Tipo | Quando Usar |
|------|-------------|
| **Conversao (Lead/Registro)** | Padrao para captacao |
| **Clique no link** | Quando publico e muito frio e voce quer volume |
| **Alcance** | Para distribuicao de conteudo |
| **Video Views** | Para aquecer audiencia |

### Testes de Otimizacao

Possibilidades de teste durante captacao:

1. **Criativos** - Trocar hook, testar formatos (video, imagem, carrossel)
2. **Publicos** - Abrir/fechar, testar novos interesses
3. **Pagina** - Copy, design, formulario, primeira dobra
4. **Orcamento** - Escalar o que funciona, cortar o que nao funciona
5. **Posicionamento** - Feed vs Stories vs Reels

---

## 9. ROAS e ROI

### Definicoes

| Metrica | Formula | O Que Considera |
|---------|---------|-----------------|
| **ROAS** | Faturamento / Investimento em trafego | Apenas custo de anuncios |
| **ROI/ROE** | (Faturamento - Custos totais) / Custos totais | Todos os custos (equipe, impostos, ferramentas) |

### Exemplo

```
Investiu em trafego: R$100.000
Faturou: R$300.000
ROAS = 300.000 / 100.000 = 3x

Custos totais (trafego + equipe + impostos + ferramentas): R$180.000
ROI = (300.000 - 180.000) / 180.000 = 0.66 (66%)
```

> **Lembrete:** A metrica final que importa e o ROI. ROAS e indicador intermediario. CPL e metrica secundaria do ROAS.

---

## 10. Colunas Recomendadas no Gerenciador

### Metricas para Configurar

1. **Resultados** (Lead ou Registro Concluido)
2. **Custo por resultado** (CPL)
3. **CPM** (Custo por mil impressoes)
4. **CTR clique no link** (taxa de cliques)
5. **CPC** (Custo por clique no link)
6. **Cliques no link**
7. **Impressoes**
8. **Alcance**
9. **Frequencia**
10. **Visualizacoes de pagina de destino**
11. **Connect Rate** (metrica personalizada)
12. **Taxa de conversao pagina** (metrica personalizada)
13. **Valor gasto**

---

## Referencias Cruzadas

- Principios gerais: `03-trafego/sobral-principios.md`
- Meta Ads: `03-trafego/sobral-meta-ads.md`
- Andromeda: `03-trafego/andromeda.md`
- Rastreamento: `03-trafego/rastreamento-utms.md`
