# Criacao de Paginas com Inteligencia Artificial (Lovable)

---
**Autor:** Leonardo Tabari (aula ministrada por Marcos Tulio)  
**Programa:** Lancamento Pago  
**Fonte:** Aula 4.2 - Criacao de Paginas utilizando Inteligencia Artificial  
**Categoria:** IA & Automacao  
**Tags:** lovable, landing-page, ia, paginas, formulario, hotmart, pixel, gtm, dominio  
---

## Visao Geral

O Lovable e uma ferramenta de inteligencia artificial que permite criar landing pages completas a partir de comandos de texto (prompts). O workflow principal e: preparar a copy com instrucoes estruturadas → colar no Lovable → ajustar via comandos ou edicao manual → instalar scripts → publicar com dominio personalizado.

### Vantagens Principais

- Cria paginas completas a partir de copy estruturada
- Ja otimiza automaticamente para celular (mobile-first)
- Integra formularios de plataformas externas (Hotmart, etc.)
- Instala scripts (Pixel, GTM, etc.) via comando simples
- Cria estrutura de URLs organizada (/cadastro, /obrigado, /vendas)
- Conecta dominios personalizados de forma nativa

---

## Workflow Completo

### Passo 1: Preparar a Copy com Instrucoes

Antes de usar o Lovable, prepare a copy no Google Docs com **instrucoes embutidas** para a IA. Isso economiza creditos e gera resultados mais precisos na primeira geracao.

**Elementos que devem estar na copy com instrucoes:**

| Elemento | Instrucao para a IA | Exemplo |
|----------|---------------------|---------|
| **Logo** | Indicar onde posicionar | "Coloque a logo acima da headline" |
| **Headline** | Marcar como headline | Texto da promessa principal |
| **Sub-headline** | Marcar como sub-headline | Complemento da headline |
| **Imagem do especialista** | Comando para reservar espaco | "Coloque um espaco para a imagem do especialista" |
| **Fotos ilustrativas** | Pedir que crie ou reserve espaco | "Coloque tres fotos do assunto para ilustrar" |
| **Bonus** | Pedir imagens ilustrativas | "Crie imagens ilustrativas para os bonus" |
| **Selo de garantia** | Pedir que crie | "Coloque um selo de garantia" |
| **Depoimentos** | Incluir com nome e texto | Texto dos depoimentos |
| **CTA** | Especificar texto e destino | "Inscreva-se agora" |
| **Perguntas frequentes** | Incluir na copy | FAQ completo |
| **Escassez** | Incluir elementos de urgencia | Vagas limitadas, data limite |

### Passo 2: Criar a Pagina no Lovable

**Comando de criacao:**
```
Crie uma landing page com tema [TEMA], cores [CORES] com a copy abaixo:
[COLAR COPY COMPLETA COM INSTRUCOES]
```

**Dicas para o comando inicial:**
- Definir tema/estetica (ex: "natureza e animais", "Black Friday", "Natal")
- Especificar paleta de cores se necessario
- Copiar e colar a copy diretamente (ou usar link do Google Docs)
- Usar Shift+Enter para quebrar linha sem enviar o comando

**Tempo de geracao:** depende da complexidade; paginas simples levam poucos minutos.

### Passo 3: Editar a Pagina

O Lovable oferece dois modos de edicao:

#### Modo Edit (Edicao Visual)

Clicar no botao **Edit** para selecionar elementos na pagina e editar diretamente:

- **Texto**: editar diretamente no campo, alterar tamanho, fonte, estilo, margem
- **Destaque de palavras**: selecionar texto e dar comando (ex: "quero que a palavra X fique em vermelho")
- **Botoes**: selecionar e alterar link, texto, comportamento
- **Imagens**: selecionar e trocar, redimensionar

**Vantagem:** edicoes visuais diretas NAO gastam creditos.

#### Modo Comando (Prompt)

Usar a caixa de texto a esquerda para comandos mais complexos:

- Trocar cores de blocos inteiros
- Adicionar/remover secoes
- Alterar layout
- Instalar scripts

**Cada comando gasta creditos** (ex: ~0,60 creditos por alteracao simples).

### Quando Usar Cada Modo

| Acao | Modo Recomendado | Gasta Credito? |
|------|-----------------|----------------|
| Editar texto | Edit (visual) | Nao |
| Trocar link de botao | Edit (visual) | Nao |
| Redimensionar imagem | Edit (visual) | Nao |
| Trocar cores de um bloco | Comando | Sim |
| Adicionar/remover secao | Comando | Sim |
| Instalar script | Comando | Sim |
| Trocar imagem por upload | Comando (com anexo) | Sim |
| Criar nova pagina | Comando | Sim |

---

## Trocar Imagens

### Foto do Especialista

1. Clicar no botao **+** (anexar)
2. Selecionar a foto real do especialista no computador
3. Dar o comando: "Troque pela imagem em anexo"
4. O Lovable substitui a imagem gerada pela foto real

### Logo do Evento

1. Anexar a logo
2. Dar o comando: "Adicione esta logo abaixo da data na primeira dobra"
3. Ajustar tamanho: "Aumente 80% do tamanho da imagem"

### Ajuste de Fundo para Logo Clara

Se a logo tem fonte clara e o fundo tambem:
```
Troque as cores do primeiro bloco para cores escuras.
E ajuste as cores das letras para se adaptar ao novo fundo.
```

**Dica:** fazer por etapas -- primeiro trocar o fundo, depois ajustar as letras. Isso evita que a IA esqueca de adaptar as fontes.

---

## Configuracao de Botoes e Links

### Link para Checkout (Evento Pago)

1. Selecionar o botao via Edit
2. Comando: "Coloque o link [URL DO CHECKOUT] neste botao"
3. O Lovable pode configurar para abrir em nova aba automaticamente

### Link para Ancora na Pagina

1. Selecionar o botao via Edit
2. Comando: "Quando clicar neste botao, ele vai para o bloco de investimento"
3. O botao passa a rolar a pagina ate a secao de investimento

### Remover Botoes Desnecessarios

- Selecionar o botao via Edit → opcao "remover o botao"

---

## Instalacao de Scripts

### Pixel da Meta (Facebook)

```
Adicione o script do Pixel na pagina:
[COLAR CODIGO DO PIXEL]
```

**Notas:**
- O Lovable reconhece codigos conhecidos (Pixel, GTM) e instala automaticamente no lugar correto
- Ele pode lembrar de substituir o "YourPixelID" pelo ID real
- Para verificar a instalacao: abrir o HTML da pagina e buscar por "Pixel Code"

### Google Tag Manager

O processo e identico ao do Pixel: colar o codigo e pedir para adicionar.

### Verificacao de Instalacao

1. Abrir preview da pagina (setinha no canto superior)
2. Inspecionar HTML (F12 ou Ctrl+U)
3. Buscar pelo nome do script (ex: "fbq", "gtm")
4. Ou usar extensoes de navegador (Meta Pixel Helper, Tag Assistant)

---

## Formularios (Integracao com Hotmart)

### Trocar Formulario Nativo pelo da Hotmart

1. Copiar o codigo do formulario na Hotmart
2. Comando: "Troque o formulario pelo codigo abaixo: [COLAR CODIGO]"
3. O Lovable adapta o layout do formulario ao estilo da pagina

### Resolucao de Bugs

O Lovable pode gerar bugs durante a implementacao de formularios (ex: camada invisivel impedindo cliques). A solucao e:

1. Descrever o problema para a IA: "Nao estou conseguindo clicar no formulario"
2. A IA investiga e tenta corrigir
3. Se persistir, insistir com mais detalhes
4. Testar apos cada correcao

**Importante:** bugs acontecem e sao normais. A IA consegue resolver na maioria dos casos via conversa iterativa.

### Testar o Formulario

Apos implementacao, preencher o formulario com dados de teste para confirmar que esta enviando corretamente para a Hotmart.

---

## Estrutura de URLs (Paginas Internas)

### Criar Pagina de Obrigado (/obrigado)

```
Crie uma pagina com a copy abaixo, com o link /obrigado:
[COLAR COPY DA PAGINA DE OBRIGADO]
```

### Criar Pagina de Cadastro (/cadastro)

A pagina raiz pode ser transformada em /cadastro:
- O Lovable cria a estrutura automaticamente
- A hierarquia de paginas aparece no painel central

### Visualizar Hierarquia de Paginas

No painel central do Lovable, a hierarquia mostra:
- `/` (raiz)
- `/cadastro`
- `/obrigado`
- `/vendas`

### Beneficios da Estrutura de URLs

- **Segmentacao de UTMs**: cada pagina tem seu proprio link para rastreamento
- **Teste A/B**: criar /cadastro-v1, /cadastro-v2 para testar variacoes
- **Organizacao**: separar paginas por funcao (captura, obrigado, vendas)
- O proprio Lovable sugere adicionar rastreamento UTM e testes A/B

---

## Publicacao e Dominio

### Publicar a Pagina

1. Clicar em **Publicar** (botao superior direito)
2. O Lovable gera um link provisorio: `[nome-do-projeto].lovable.app`
3. Este link ja funciona e pode ser compartilhado

### Dominio Personalizado (Somente Planos Pagos)

**Recomendacao:** criar um subdominio para nao interferir com o site principal.

**Exemplo de estrutura recomendada:**
```
lp.seudominio.com.br/cadastro
lp.seudominio.com.br/obrigado
lp.seudominio.com.br/vendas
```

**Processo de conexao:**
1. Em Publicar → Custom Domain
2. Inserir o subdominio desejado (ex: lp.seudominio.com.br)
3. O Lovable identifica automaticamente onde o dominio esta hospedado (Registro.br, Cloudflare, Hostgator, etc.)
4. Autenticar com os dados do registrador
5. O Lovable faz a configuracao automaticamente
6. Aguardar propagacao (algumas horas; pode levar ate 48h no maximo)

**Integracoes nativas:** Registro.br, Cloudflare, Hostgator, Hosting e outras.

**NAO recomendado:** usar o link gratuito do Lovable (lovable.app) em campanhas de trafego pago.

---

## Gestao de Creditos

### Planos do Lovable

| Plano | Creditos | Preco |
|-------|----------|-------|
| Gratuito | 5 creditos/dia | Gratis |
| Pago | Creditos expandidos | US$ 25/mes |

### Como Economizar Creditos

1. **Copy bem estruturada** -- quanto mais instrucoes na copy, menos ajustes depois
2. **Edicao visual (Edit)** -- edicoes diretas nao gastam creditos
3. **Comandos objetivos** -- ser direto e especifico nos prompts
4. **Evitar iteracoes desnecessarias** -- pensar antes de enviar o comando
5. **Fazer edicoes em lote** -- agrupar mudancas similares em um unico comando

### Custo Medio por Acao

- Alteracao simples de texto/cor: ~0,60 creditos
- Criacao de pagina nova: varia conforme complexidade
- Instalacao de script: ~0,60 creditos

---

## Recomendacoes Tecnicas

### Fundos de Pagina

- **Nao recomendado** usar fundos decorativos em paginas
- Motivo: fundos somem na versao mobile
- Alternativa: focar em diagramacao, copy e imagens

### Mobile-First

- O Lovable ja otimiza automaticamente para celular
- Sempre verificar o preview mobile antes de publicar
- Evitar elementos que dependem de fundo para funcionar

### Evento Pago vs Evento Gratuito

| Tipo | Complexidade | Formulario | Botoes |
|------|-------------|------------|--------|
| Pago | Mais simples | Nao precisa | Link para checkout |
| Gratuito | Requer formulario | Hotmart/ActiveCampaign/etc. | Formulario de captura |

---

## Checklist de Criacao de Pagina

### Preparacao
- [ ] Copy pronta com instrucoes embutidas (logo, headlines, imagens, CTAs)
- [ ] Fotos reais do especialista e logo prontas no computador
- [ ] Codigo do Pixel/GTM copiado
- [ ] Codigo do formulario copiado (se pagina de captura)
- [ ] Definir estrutura de URLs (/cadastro, /obrigado, /vendas)

### Criacao
- [ ] Colar copy no Lovable com comando de criacao
- [ ] Verificar layout gerado (desktop e mobile)
- [ ] Trocar imagens geradas por fotos reais
- [ ] Posicionar e redimensionar logo
- [ ] Ajustar textos, cores e fontes

### Integracao
- [ ] Instalar Pixel da Meta
- [ ] Instalar Google Tag Manager (se aplicavel)
- [ ] Implementar formulario externo (se pagina de captura)
- [ ] Testar formulario com dados de teste
- [ ] Configurar links dos botoes (checkout ou ancora)

### URLs e Publicacao
- [ ] Criar pagina /obrigado
- [ ] Criar pagina /cadastro (se aplicavel)
- [ ] Criar pagina /vendas (se aplicavel)
- [ ] Verificar hierarquia de URLs no painel
- [ ] Publicar a pagina
- [ ] Conectar dominio personalizado (subdominio recomendado)
- [ ] Aguardar propagacao do dominio
- [ ] Testar todos os links e formularios no dominio final
