# Trafego para Meta Ads - Pedro Sobral

> **Autor:** Pedro Sobral
> **Programa:** Comunidade Sobral de Trafego (CST) - Modulo 002
> **Tipo:** Guia completo de campanhas no Meta Ads (Facebook + Instagram)
> **Fonte:** CST Modulo 002 - Trafego para Meta ADS (488 paginas)

---

## 1. Setup Inicial - Estruturas Obrigatorias

### Checklist de Configuracao

| Ordem | Estrutura | Descricao |
|-------|-----------|-----------|
| 1 | **Perfil Pessoal** | Conta pessoal do Facebook (base de tudo) |
| 2 | **Pagina do Facebook** | Perfil comercial para rodar anuncios |
| 3 | **Instagram Business** | Conta comercial vinculada a pagina |
| 4 | **Business Manager (BM)** | Gerenciador de negocios - caixa organizadora |
| 5 | **Conta de Anuncios** | Dentro da BM, local onde campanhas sao criadas |
| 6 | **Pixel** | Codigo de rastreamento instalado no site |
| 7 | **API de Conversoes** | Linha de comunicacao melhorada pixel-plataforma |
| 8 | **Dominio Verificado** | Verificacao do dominio do site na BM |

### Hierarquia da Estrutura

```
Business Manager (BM)
├── Pagina do Facebook
├── Instagram Business
├── Conta de Anuncios
│   ├── Campanha 1
│   │   ├── Conjunto de Anuncios 1
│   │   │   ├── Anuncio A
│   │   │   ├── Anuncio B
│   │   │   └── Anuncio C
│   │   └── Conjunto de Anuncios 2
│   │       ├── Anuncio D
│   │       └── Anuncio E
│   └── Campanha 2
│       └── ...
├── Pixel
├── API de Conversoes
├── Publicos Salvos
└── Catalogos (E-commerce)
```

### Configuracao de Publicidade (Configuracoes da Conta)

Acessar **Configuracoes de Publicidade** dentro da conta e definir:

1. **Segmento de Publico - Engajados:** Lista de leads (pessoas que nao compraram ainda). Isso mostra ao Meta quem voce busca, e ele encontra semelhantes
2. **Cliente Existente:** Lista de compradores. O Meta entende quem ja comprou (para nao ofertar novamente) e busca semelhantes

> **Importante:** Essa configuracao da inteligencia para a conta inteira, nao so para campanhas individuais. Quanto maior a lista, melhor a inteligencia.

---

## 2. Nomenclatura e Organizacao

### Padrao de Nomenclatura

```
[TAG_LANCAMENTO] [TIPO] [TEMPERATURA] [NOME_CAMPANHA]
```

**Exemplos:**

| Nivel | Padrao | Exemplo |
|-------|--------|---------|
| **Campanha** | [LC/MC] [CAPTURA/VENDA] [QUENTE/FRIO] [NOME] | MC08_CAPTURA_FRIO_PRINCIPAL |
| **Conjunto** | [NUMERO] [NOME_PUBLICO] | 01_LOOKALIKE_COMPRADORES |
| **Anuncio** | [ADXX] [TIPO_CRIATIVO] | AD12_BASH_VIDEO |

### Regras de Nomenclatura para UTMs

- Usar underline `_` no lugar de espacos
- Nao usar caracteres especiais (acentos, cedilha)
- Manter padrao consistente entre todos os lancamentos
- Organizar para que as UTMs sejam automaticas no Meta

---

## 3. Estrutura de Campanhas

### Niveis da Campanha

```
CAMPANHA (Objetivo + Orcamento CBO)
└── CONJUNTO DE ANUNCIOS (Publico + Posicionamento + Programacao)
    └── ANUNCIOS (Criativo + Texto + CTA + Link)
```

### CBO vs ABO

| Aspecto | CBO (Campaign Budget Optimization) | ABO (Ad Set Budget Optimization) |
|---------|-------------------------------------|----------------------------------|
| **Orcamento** | Definido na campanha | Definido em cada conjunto |
| **Distribuicao** | Meta distribui automaticamente | Voce controla cada conjunto |
| **Quando usar** | Escala, Andromeda, publico aberto | Testes, controle fino de gastos |
| **Nome atual** | Advantage Campaign Budget | Orcamento do conjunto |

> **Pos-Andromeda:** CBO (agora chamado Advantage) e o padrao recomendado. Deixar o Meta distribuir orcamento entre os conjuntos.

### 3 Fases de Aprendizado de Campanha

| Fase | Descricao | Duracao | Acao |
|------|-----------|---------|------|
| **1. Aprendizado** | Meta esta testando publicos e criativos | 3-7 dias | Nao mexer, deixar aprender |
| **2. Crescimento** | Algoritmo encontrou padroes, comeca a otimizar | 7-14 dias | Monitorar metricas |
| **3. Ativo/Escala** | Campanha madura, resultados consistentes | Continuo | Escalar orcamento gradualmente |

> **Regra de ouro:** Nao fazer alteracoes significativas durante a fase de aprendizado. Cada mudanca reinicia o processo.

---

## 4. Organizacao por Orcamento

### Estrategia por Faixa de Investimento

| Faixa | Investimento/Dia | Estrategia |
|-------|-------------------|-----------|
| **Muito Pequeno** | R$20-50/dia | 1 campanha, 1-2 conjuntos, 3-5 criativos. Publico aberto ou interesses amplos |
| **Pequeno** | R$50-200/dia | 1-2 campanhas, 2-3 conjuntos por campanha. Testar publicos diferentes |
| **Medio** | R$200-1000/dia | 2-4 campanhas (separar quente e frio). Testar criativos em campanha separada |
| **Grande** | R$1000+/dia | Multiplas campanhas. Campanha de teste separada da campanha de escala. Escala diaria de 20-30% |

### Escala de Orcamento

**Escala Vertical (aumentar orcamento da mesma campanha):**
- Aumentar **20-30% por dia** no maximo
- Nao dobrar orcamento de uma vez (reinicia aprendizado)
- Monitorar ROAS apos cada aumento

**Escala Horizontal (novas campanhas/conjuntos):**
- Duplicar conjuntos que estao performando
- Criar novos publicos semelhantes
- Testar novos criativos em campanha separada

---

## 5. Modelos de Temperatura de Audiencia

### Modelo 3 Estagios (Basico)

| Estagio | Publico | Exemplo de Segmentacao |
|---------|---------|----------------------|
| **Quente** | Ja te conhece bem | Lista de clientes, engajamento IG 30d |
| **Morno** | Teve algum contato | Visitantes do site, video views 50%+ |
| **Frio** | Nunca ouviu falar | Interesses, lookalike, publico aberto |

### Modelo 5 Estagios (Intermediario)

| Estagio | Temperatura | Segmentacao |
|---------|-------------|-------------|
| 1 | Compradores | Lista de clientes (excluir de campanhas de aquisicao) |
| 2 | Leads quentes | Lista de leads, engajamento IG 7-15d |
| 3 | Leads mornos | Video views 50%+, visitantes site 30d |
| 4 | Lookalike | Semelhante a compradores e leads quentes |
| 5 | Frio | Interesses amplos, publico aberto |

### Modelo 7 Estagios (Avancado)

| Estagio | Descricao | Intervalo |
|---------|-----------|-----------|
| 1 | Compradores recentes | 0-30 dias |
| 2 | Compradores antigos | 31-180 dias |
| 3 | Leads engajados | 0-14 dias |
| 4 | Leads antigos | 15-60 dias |
| 5 | Engajamento social | 0-30 dias |
| 6 | Lookalike 1-3% | Baseado em compradores |
| 7 | Frio total | Interesses + publico aberto |

---

## 6. Estrategias de Audiencia

### Separacao vs Combinacao

**Separar audiencias quando:**
- Orcamento medio/grande
- Quer controlar investimento por temperatura
- Precisa de dados granulares por publico
- Quer mensagens diferentes por nivel de consciencia

**Combinar audiencias quando:**
- Orcamento pequeno
- Usando Advantage+ / Andromeda
- Deixando o algoritmo decidir distribuicao
- Publico aberto com CBO

### Exclusoes Obrigatorias

- Excluir compradores de campanhas de aquisicao
- Excluir publicos quentes de campanhas de prospecao fria
- Excluir leads ja convertidos de campanhas de captacao

---

## 7. Posicionamento

### Opcoes de Posicionamento

| Posicionamento | Quando Usar |
|----------------|-------------|
| **AUTO (Advantage+)** | Padrao recomendado pos-Andromeda. Deixar Meta decidir |
| **FEED** | Quando criativo e especifico para feed (imagem quadrada/horizontal) |
| **REELS** | Video vertical 9:16, alta retencao |
| **STORIES** | Video vertical 9:16, formato efemero, boa para awareness |
| **AUDIENCE NETWORK** | Rede de parceiros (geralmente menor qualidade) |

### Recomendacao Pos-Andromeda

Usar **posicionamento automatico (Advantage+)** e deixar o algoritmo decidir onde mostrar cada criativo. O Meta identifica qual posicionamento funciona melhor para cada usuario individualmente.

---

## 8. Intervalos de Otimizacao

### Janelas de Analise

| Intervalo | O Que Analisar | Acao |
|-----------|----------------|------|
| **Diario** | Gasto, CPL, CTR dos criativos | Pausar criativos com gasto alto e zero resultado |
| **14 dias** | Tendencias de CPL, ROAS | Primeira avaliacao solida de campanha |
| **30 dias** | Performance consolidada | Decidir escala ou pausa |
| **60 dias** | Sazonalidade, fadiga | Renovar criativos, testar novos publicos |
| **90 dias** | Ciclo completo | Revisao estrategica profunda |
| **180 dias** | Historico semestral | Comparar periodos, identificar sazonalidade |
| **365 dias** | Anual | Planejamento estrategico, benchmark proprio |

### Regras de Otimizacao

1. **Nao otimizar antes de gastar pelo menos 2-3x o CPA desejado** no conjunto
2. **Esperar a fase de aprendizado acabar** antes de fazer mudancas
3. **Pausar criativos** que nao recebem verba (Meta ja decidiu que nao sao bons)
4. **Nao pausar criativos com gasto alto mas ROAS baixo** se eles estiverem alimentando o funil (pos-Andromeda)

---

## 9. Decisoes Data-Driven vs Intuicao

### Framework de Decisao

| Situacao | Abordagem | Exemplo |
|----------|-----------|---------|
| **Dados suficientes** | Data-driven | CTR < 1% apos 5000 impressoes = trocar criativo |
| **Dados insuficientes** | Aguardar | Campanha com 500 impressoes = cedo para decidir |
| **Contradicao de dados** | Investigar metricas secundarias | CPL bom mas ROAS ruim = verificar qualidade do lead |
| **Sem historico** | Intuicao + teste estruturado | Primeiro lancamento = testar e coletar dados |

### Metricas de Corte (Quando Pausar)

| Metrica | Nota de Corte | Acao |
|---------|---------------|------|
| **CTR clique no link** | < 1% | Trocar criativo ou headline |
| **Connect Rate** | < 70% | Otimizar velocidade da pagina |
| **Taxa conversao pagina** | < 30% | Revisar copy, design, formulario |
| **CPL** | > 2x meta | Verificar CPM, CTR, publico |

### Armadilhas Comuns

1. **Otimizar cedo demais** - Nao ter dados suficientes para decisao
2. **Olhar so CPL** - Ignorar qualidade do lead e ROAS final
3. **Comparar com outros nichos** - Cada nicho tem suas proprias metricas
4. **Ignorar sazonalidade** - CPM sobe na Black Friday, Natal, Ano Novo
5. **Pausar tudo que nao converte direto** - Pos-Andromeda, criativos de topo alimentam o funil

---

## 10. Tipos de Campanha por Objetivo

### Campanhas de Captacao (Lead)

- Objetivo: Gerar leads para lancamento ou perpetuo
- Evento de conversao: Lead ou Registro Concluido
- Otimizacao: Conversoes na pagina de destino
- Metricas chave: CPL, CTR, Connect Rate, Taxa de conversao

### Campanhas de Venda (Conversao)

- Objetivo: Vendas diretas
- Evento de conversao: Compra
- Otimizacao: Conversoes de compra
- Metricas chave: ROAS, CPA, Ticket Medio

### Campanhas de Distribuicao (Engajamento/Alcance)

- Objetivo: Distribuir conteudo do expert
- Formato: Video views, alcance
- Uso: Aquecer audiencia antes de abrir carrinho
- Metricas chave: CPV, Taxa de retencao, Alcance

### Campanhas de Remarketing

- Objetivo: Reimpactar quem ja teve contato
- Publicos: Visitantes do site, video views, engajamento
- Criativos: Quebra de objecoes, depoimentos, urgencia

---

## Referencias Cruzadas

- Principios gerais: `03-trafego/sobral-principios.md`
- Andromeda (novo algoritmo): `03-trafego/andromeda.md`
- CPL e otimizacao: `03-trafego/cpl-otimizacao.md`
- Rastreamento: `03-trafego/rastreamento-utms.md`
