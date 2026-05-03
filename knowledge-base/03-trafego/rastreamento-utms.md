# Rastreamento com UTMs - Traqueamento de Leads e Campanhas

> **Fonte:** Insider Implementation Day - Traqueamento
> **Autor:** Augusto Lobato (Gobato)
> **Nivel:** Avancado (Faixa Marrom / Preta)
> **Ferramentas:** Active Campaign, WordPress + Elementor Pro, Google Sheets, Data Studio

---

## 1. Por Que Traquear

### Case Vanassi/Fotologia - O Alerta de R$500K

> "Chegou um lancamento que a gente investiu 500 mil no lancamento. A gente tinha o maior numero de leads da historia dos nossos lancamentos, o maior numero de visualizacoes no CPL. E na hora de abrir o carrinho, foi um fiasco." - Augusto Gobato

**O que aconteceu:**
- Todas as metricas de captacao pareciam otimas (leads, views, CTR)
- Na abertura de carrinho, vendas foram muito abaixo do esperado
- Sem traqueamento, era impossivel saber POR QUE
- Ao analisar dados de pesquisa, descobriu-se: conforme escalou, entrou cada vez menos fotografos profissionais e mais pessoas que "gostavam de fotografia" mas nao ganhavam dinheiro com isso
- A qualidade do lead caiu drasticamente sem que ninguem percebesse

**Licao:** Sem traqueamento, voce pode escalar investimento atraindo publico errado e so descobrir no dia do carrinho aberto.

### O Que o Traqueamento Revela

Com traqueamento voce descobre:
- **Quais anuncios vendem** (nao so quais trazem leads)
- **Quais publicos vendem** (nao so quais trazem leads baratos)
- **Quais campanhas vendem**
- **Quais plataformas vendem** (Facebook vs Google vs YouTube)
- **Quais posicionamentos vendem** (Feed vs Stories vs Reels)
- **Os "ladroes de ROI"** - campanhas que gastam muito e nao convertem em venda

### Ladroes de ROI

> "Voce vai conseguir descobrir aonde que voce tem que investir o seu dinheiro para voce ter mais retorno e tambem descobrir os ladroes de ROI." - Gobato

Sao anuncios/publicos/campanhas que:
- Trazem muitos leads (CPL barato)
- Mas esses leads NAO COMPRAM
- Voce continua investindo neles achando que esta indo bem
- Sem traqueamento, voce nunca sabe quem sao

---

## 2. O Que Sao UTMs

### Definicao

**UTM = Urchin Tracking Module** (modulo de rastreamento Urchin)

> Pedro Sobral definiu UTM como "Um Texto Muito Louco" - definicao humoristica mas precisa

UTMs sao **parametros de texto** adicionados no final de uma URL que carregam informacoes sobre a origem do lead.

### Anatomia de uma URL com UTMs

```
https://seusite.com/pagina-captura/?utm_source=pago_frio&utm_medium=01_lookalike_compradores&utm_campaign=facebook&utm_term=MC08_captura_frio&utm_content=AD12_video_depoimento
```

**Decompondo:**

| Parametro | Valor | O Que Significa |
|-----------|-------|-----------------|
| `utm_source` | pago_frio | Fonte/origem (organico, pago quente, pago frio) |
| `utm_medium` | 01_lookalike_compradores | Medio/canal (nome do conjunto/grupo de anuncios) |
| `utm_campaign` | facebook | Campanha (plataforma de onde veio) |
| `utm_term` | MC08_captura_frio | Termo (nome da campanha de anuncios) |
| `utm_content` | AD12_video_depoimento | Conteudo (nome do anuncio especifico) |
| `utm_id` | MC08 | ID (tag do lancamento ou informacao extra) |

### Como o Gobato Organiza

| Parametro | No Organico | No Pago |
|-----------|-------------|---------|
| **Source** | organico | pago_quente / pago_frio / gg_quente / gg_frio / yt_quente / yt_frio |
| **Medium** | (vazio) | Nome do conjunto de anuncios (automatico no Facebook) |
| **Campaign** | insta_bio / insta_stories / direct / whatsapp / email / manychat | facebook (automatico) / google / youtube / tiktok |
| **Term** | (vazio) | Nome da campanha (automatico no Facebook) |
| **Content** | (vazio) | Nome do anuncio (automatico no Facebook) |
| **ID** | (vazio) | Tag do lancamento (MC08, etc.) |

---

## 3. Configuracao no Facebook Ads (Meta)

### Vantagem Principal

No Meta, as UTMs sao **automaticas** (exceto Source e ID que sao manuais).

### Passo a Passo

1. Abrir o anuncio em modo de edicao
2. Rolar ate embaixo, alem do link
3. Encontrar **"Parametros do URL"** (setor de rastreamento)
4. Colar o parametro:

```
utm_source=pago_frio&utm_medium={{adset.name}}&utm_campaign={{placement}}&utm_term={{campaign.name}}&utm_content={{ad.name}}&utm_id=MC08
```

### Partes Automaticas vs Manuais

| Parte | Tipo | O Que Faz |
|-------|------|-----------|
| `{{adset.name}}` | Automatico | Puxa o nome do conjunto de anuncios |
| `{{placement}}` | Automatico | Puxa o posicionamento (Feed, Stories, Reels) |
| `{{campaign.name}}` | Automatico | Puxa o nome da campanha |
| `{{ad.name}}` | Automatico | Puxa o nome do anuncio |
| `pago_frio` ou `pago_quente` | **Manual** | Voce define se e frio ou quente |
| `MC08` | **Manual** | Voce define a tag do lancamento |

### Fluxo Pratico

1. Criar anuncio de frio (source = pago_frio)
2. Duplicar para todos os anuncios frios
3. Quando criar anuncios quentes, mudar source para pago_quente
4. Duplicar para todos os anuncios quentes
5. **Unica mudanca manual:** trocar "cold" para "hot" no Source

> **Importante:** Por isso a organizacao da nomenclatura das campanhas, conjuntos e anuncios e ESSENCIAL. Se os nomes forem bagunçados, as UTMs serao bagunçadas.

---

## 4. Configuracao no Google Ads

### Diferenca do Facebook

No Google, as UTMs **nao sao automaticas**. Voce usa o sistema de **Modelo de Acompanhamento + Parametros Personalizados**.

### Passo a Passo

1. Editar anuncio no Google Ads
2. Rolar ate **"Opcoes de URL do anuncio"**
3. No campo **"Modelo de acompanhamento"**, colar o parametro:

```
{lpurl}?utm_source={_source}&utm_medium={_medium}&utm_campaign={_campaign}&utm_term={_term}&utm_content={_content}&utm_id={_id}
```

4. Criar **parametros personalizados** para cada caixinha:

| Parametro | Valor (exemplo) |
|-----------|-----------------|
| `{_campaign}` | youtube |
| `{_content}` | AD04 |
| `{_medium}` | nome_do_grupo_anuncios |
| `{_source}` | gg_pago_frio |
| `{_id}` | MC08 |

### Ordem de Criacao (Otimizada)

1. Criar primeiro anuncio com todos os parametros corretos
2. **Garantir que esta 100% correto** (verificar tudo)
3. Duplicar o anuncio para criar os proximos
4. Para cada novo anuncio: mudar apenas o parametro `content` (nome do anuncio)
5. Quando terminar os anuncios, duplicar o grupo de anuncios
6. Para cada novo grupo: usar **Localizar e Substituir** para trocar o nome do medium
7. Quando terminar os grupos, duplicar a campanha
8. Para cada nova campanha: Localizar e Substituir o nome da campaign

### Localizar e Substituir (Truque Chave)

1. Selecionar todos os anuncios do grupo duplicado
2. Editar → Alterar Parametros Personalizados
3. **Localizar:** nome_do_grupo_anterior
4. **Substituir por:** nome_do_novo_grupo
5. Aplicar em **Ambos**
6. Pronto - todos os anuncios atualizados de uma vez

> Usar o **Google Ads Editor** acelera o trabalho em pelo menos 2x.

---

## 5. Links Organicos

### Planilha de Organizacao de UTMs

Criar uma planilha Google Sheets com:

| Origem | Source | Medium | Campaign | Term | Content | ID | Link Final | Bitly |
|--------|--------|--------|----------|------|---------|-----|------------|-------|
| Bio Instagram | organico | | insta_bio | | | | (concatenado) | (encurtado) |
| Stories | organico | | insta_stories | | | | (concatenado) | (encurtado) |
| Direct | organico | | direct | | | | (concatenado) | (encurtado) |
| WhatsApp | organico | | whatsapp | | | | (concatenado) | (encurtado) |
| E-mail | organico | | email | | | | (concatenado) | (encurtado) |
| ManyChat | organico | | manychat | | | | (concatenado) | (encurtado) |
| Bill/Bio | organico | | insta_bill | | | | (concatenado) | (encurtado) |
| TikTok Bio | organico | | tiktok_bio | | | | (concatenado) | (encurtado) |
| YouTube | organico | | youtube_org | | | | (concatenado) | (encurtado) |
| QR Code | organico | | qrcode | | | | (concatenado) | (encurtado) |

### Regras para UTMs

- **Nao usar espaco** - usar underline `_`
- **Nao usar caractere especial** (acentos, cedilha)
- **Nao usar maiusculas** - tudo minusculo para consistencia

### Encurtar Links

Links com UTMs ficam longos e feios. Solucoes:

1. **Bitly** - Encurtar o link (funciona para tudo)
2. **Plugin Redirection (WordPress)** - Criar redirecionamento bonito (ex: seusite.com/bio → link com UTMs)

### Compartilhar com Equipe

> "Todos os links que foram usados na captacao devem ter UTMs. Compartilha essa planilha com o pessoal do conteudo, do trafego." - Gobato

**Perda mais comum:** Alguem da equipe posta um Stories com link SEM UTM por esquecimento.

---

## 6. Integracao com Formularios (WordPress + Elementor Pro)

### Como Funciona a Magia

O Elementor Pro tem uma funcao chamada **Get Parameters** que captura automaticamente os valores das UTMs da URL e preenche campos ocultos no formulario.

### Passo a Passo Completo

1. **No formulario do Elementor**, adicionar item
2. Mudar o tipo de **Texto** para **Oculto**
3. No rotulo, colocar: `utm_source`
4. Ir em **Avancado**
5. Em **Valor padrao**, clicar na tag dinamica (icone de moedas)
6. Selecionar **Parametro de consulta**
7. Clicar na engrenagem
8. Deixar como **Get**
9. No **nome do parametro**, colocar: `utm_source`
10. No campo **ID**, colocar: `utm_source`
11. Repetir para cada UTM (source, medium, campaign, term, content, id)

### Duplicando Campos

Apos criar o primeiro campo oculto corretamente:
1. Duplicar o campo
2. Mudar 3 coisas: **rotulo**, **get parameter** e **ID**
3. Repetir para todos os campos UTM

### Testando

1. Trocar temporariamente de "Oculto" para "Texto" (campo fica visivel)
2. Acessar a pagina com UTMs na URL
3. Verificar se os campos estao sendo preenchidos automaticamente
4. Se funcionar, voltar para "Oculto"

### Para Outras Ferramentas (ClickPages, GreatPages, RD Station)

Voce precisa de duas coisas:
1. **Campos ocultos** no formulario
2. **Script para preencher** esses campos com as UTMs da URL

**O que pedir para um freelancer:**
> "Preciso que os campos ocultos desse formulario sejam preenchidos com os parametros de UTM do link, usando Get Parameters."

O desenvolvedor vai criar um JavaScript que:
- Pega os parametros da URL (search parameters)
- Identifica cada campo oculto pelo ID
- Preenche automaticamente

---

## 7. Integracao com Active Campaign

### Campos Personalizados

Criar campos personalizados no Active Campaign para cada UTM:
- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content
- utm_id

### Automacao de Entrada de Lead

Quando o lead entra:
1. Formulario envia dados para Active Campaign (incluindo UTMs nos campos ocultos)
2. Automacao adiciona data de cadastro
3. Lead e enviado para planilha Google Sheets via integracao
4. Tags sao aplicadas automaticamente

### Vantagem do Active + UTM

As informacoes de UTM ficam **grudadas no contato** dentro do Active:
- Se o lead comprar 4 lancamentos depois, voce sabe por qual anuncio ele entrou originalmente
- Historico completo de cada lead
- Possibilidade de segmentar por origem

---

## 8. Google Sheets + Data Studio para Dashboards

### Planilha de Leads (Google Sheets)

Criar planilha com integracao do Active Campaign:
- Leads entram automaticamente
- Cada linha = 1 lead
- Colunas incluem: nome, e-mail, data, utm_source, utm_medium, utm_campaign, utm_term, utm_content

### Cruzamento de Dados com VLOOKUP (PROCV)

**Objetivo:** Cruzar informacoes de pesquisa com UTMs dos leads

**Formula:**
```
=IFERROR(VLOOKUP(B2,'Todos os leads Active'!A:Z,6,FALSE),"")
```

**Traduzindo:**
- `IFERROR`: Se der erro, deixa vazio
- `VLOOKUP`: Procura na vertical
- `B2`: E-mail da pesquisa (chave de busca)
- `'Todos os leads Active'!A:Z`: Procura na planilha de leads, colunas A ate Z
- `6`: Retorna o valor da coluna 6 (utm_term, por exemplo)
- `FALSE`: Correspondencia exata (SEMPRE colocar FALSE)

> **Alerta:** SEMPRE usar FALSE no final. Sem ele, o VLOOKUP pode retornar dados errados. "Ja deu uma merda gigantesca aqui por causa desse FALSE." - Gobato

### Truque do Import Range

**Problema:** Se a pesquisa cria novas linhas, as formulas de VLOOKUP quebram.

**Solucao:**
1. Criar segunda aba na planilha de leads
2. Usar `IMPORTRANGE` para importar dados da pesquisa
3. Aplicar VLOOKUP na aba importada (nao na aba original da pesquisa)

```
=IMPORTRANGE("link_da_planilha_pesquisa","nome_da_aba!A:E")
```

Assim, quando novas respostas entram na pesquisa, o IMPORTRANGE atualiza sem quebrar as formulas.

### Dashboard (Data Studio / Looker Studio)

Com os dados cruzados, criar dashboards que mostram:

- Leads por fonte (organico, pago quente, pago frio)
- Leads por dia e por origem
- Leads por plataforma (Facebook, Google, Instagram, YouTube)
- **Clientes por anuncio** (qual AD trouxe mais vendas)
- **Clientes por publico** (qual conjunto/grupo trouxe mais vendas)
- **Clientes por campanha**
- **ROAS por plataforma**
- Cruzamento: Renda dos leads por anuncio (ex: AD07 traz mais leads com renda alta)
- Cruzamento: Situacao empregaticia por anuncio

---

## 9. Vantagens vs Desvantagens do Metodo UTM

### Vantagens

| Vantagem | Detalhamento |
|----------|-------------|
| **Simplicidade pos-implementacao** | Depois de configurar, o trabalho e minimo |
| **Menos trabalho bracal** | Nao precisa duplicar paginas e formularios para cada anuncio |
| **Uma pagina so** | Todos os anuncios apontam para a mesma pagina |
| **Mais informacoes** | Pode carregar muitas UTMs (source, medium, campaign, term, content, id) |
| **Menos erro humano** | Sem risco de errar link entre multiplas paginas |
| **Facil de escalar** | Adicionar novo anuncio nao exige nova pagina |

### Desvantagens

| Desvantagem | Detalhamento |
|-------------|-------------|
| **Menos preciso inicialmente** | Nos primeiros lancamentos, taxa de traqueamento pode ser 50-60% |
| **Perda de UTMs** | Algumas UTMs se perdem (navegador, redirecionamentos) |
| **Requer ferramentas especificas** | Elementor Pro ou script personalizado |
| **Curva de aprendizado** | Setup inicial e tecnico e complexo |

### Precisao Esperada

| Fase | Taxa de Traqueamento |
|------|---------------------|
| Primeiros lancamentos | 50-60% |
| Lancamentos intermediarios | 70-80% |
| Lancamentos maduros | 80-90% |
| Meta ideal | 90%+ |

> Com pratica, Gobato atinge 80-90% de leads traqueados e 78% de clientes traqueados.

### Tags vs UTMs (Comparativo)

| Aspecto | Tags (Erico/Lorival) | UTMs (Gobato) |
|---------|---------------------|---------------|
| **Trabalho bracal** | Muito (duplicar paginas, formularios, automacoes) | Pouco (uma pagina, automatico) |
| **Precisao** | Mais precisa (difícil perder tag) | Pode perder algumas UTMs |
| **Erro humano** | Mais chance (errar link, ID, formulario) | Menos chance |
| **Informacoes** | Limitada por numero de paginas/formularios | Rica (muitos parametros) |
| **Complexidade setup** | Media | Alta (primeira vez) |
| **Para muitos lancamentos** | Trabalhoso (recriar tudo) | Facil (duplicar planilha) |

---

## 10. Analise Durante e Apos Lancamento

### Durante a Captacao

- De onde estao vindo os leads (organico vs pago)
- Qual anuncio esta trazendo mais leads
- Qual publico esta trazendo mais leads
- Cruzar com pesquisa: qual anuncio traz leads com melhor perfil

### Apos o Lancamento (Debriefing)

- **Quais anuncios VENDERAM** (nao so captaram)
- **Quais publicos VENDERAM**
- **Quais plataformas VENDERAM**
- **ROAS por plataforma** (Facebook vs Google vs YouTube)
- **ROAS por campanha** (quente vs frio)
- Cruzamento pesquisa + compra: perfil dos compradores vs perfil dos leads

### A Diferenca Brutal

> "Quais foram os criativos que mais trouxeram vendas? E ai eu crio os novos criativos em cima dos criativos que mais trouxeram vendas. Nao em cima dos criativos que mais trouxeram leads. Essa e uma diferenca brutal. Porque, as vezes, o que mais trouxe lead nao e o que mais trouxe venda." - Gobato

### Ciclo de Melhoria

```
1. Identificar problema (ex: leads com renda baixa demais)
   ↓
2. Descobrir origem (qual anuncio/publico traz esses leads)
   ↓
3. Criar hipoteses (intensificar anuncio X, reduzir publico Y)
   ↓
4. Testar hipoteses
   ↓
5. Verificar resultado
   ↓
6. Novo ciclo (sempre)
```

### Google Ads vs UTMs

O Google Analytics (GA4) tambem pode ler UTMs, mas a vantagem do Active Campaign e que a UTM fica **grudada no e-mail do lead**. Quando ele compra (mesmo lancamentos depois), voce consegue rastrear a origem original.

---

## Checklist de Implementacao

- [ ] Criar planilha de organizacao de UTMs (organico + pago)
- [ ] Definir padrao de nomenclatura (sem espaco, sem acento, sem caractere especial)
- [ ] Configurar UTMs no Facebook Ads (parametros de URL)
- [ ] Configurar UTMs no Google Ads (modelo de acompanhamento + parametros)
- [ ] Criar campos ocultos no formulario (Elementor ou script)
- [ ] Configurar Get Parameters no Elementor
- [ ] Criar campos personalizados no Active Campaign
- [ ] Configurar automacao (data de cadastro + envio para planilha)
- [ ] Testar fluxo completo (anuncio → pagina → formulario → Active → planilha)
- [ ] Compartilhar planilha de links com equipe de conteudo
- [ ] Encurtar links organicos (Bitly ou Redirection)
- [ ] Configurar VLOOKUP para cruzamento com pesquisa
- [ ] Montar dashboard basico no Google Sheets ou Data Studio

> **Recomendacao:** Nao implemente tudo no meio de um lancamento. Faca com calma, passo a passo, fora do periodo de lancamento. Teste antes de confiar nos dados.

---

## Referencias Cruzadas

- Principios gerais: `03-trafego/sobral-principios.md`
- Meta Ads: `03-trafego/sobral-meta-ads.md`
- Andromeda: `03-trafego/andromeda.md`
- CPL e otimizacao: `03-trafego/cpl-otimizacao.md`
