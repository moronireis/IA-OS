# Agentes ChatGPT e Prompts para Vendas

---
**Autores:** Rafael Puglia & Luiza Purificacao  
**Programa:** FHT / Palestra IA para Call de Vendas  
**Fonte:** Documentos de prompts, agente ChatGPT e planilha de acompanhamento  
**Categoria:** IA & Automacao  
**Tags:** agente-chatgpt, prompts, vendas, sessao-1a1, closer, acompanhamento  
---

## Visao Geral

Este documento detalha a configuracao e os prompts especificos do agente ChatGPT criado para potencializar calls de vendas 1a1 no contexto de High Ticket. O sistema inclui um agente personalizado, prompts para tres fases da sessao e uma planilha de acompanhamento para evolucao continua do closer.

---

## Agente ChatGPT: FHT Sessao 1a1

**Link do agente:** https://chatgpt.com/g/g-6778a400af108191bb61acb2de2ea89e-fht-sessao-1a1

### Proposito do Agente

O agente e um GPT customizado treinado com mais de 20 livros de psicologia comportamental, persuasao, vendas e leitura de pessoas. Ele funciona como um "segundo cerebro" para o closer, oferecendo:

- Analise estrategica de leads antes da call
- Suporte tatico em tempo real durante a sessao
- Treinamento pos-sessao com identificacao de acertos, erros e pontos cegos
- Deteccao de objecoes ocultas e padroes emocionais do lead

### Base de Conhecimento do Agente

O agente foi personificado com frameworks dos seguintes livros:

| Area | Livro | Autor |
|------|-------|-------|
| Psicologia Cognitiva | Rapido e Devagar | Daniel Kahneman |
| Economia Comportamental | Previsivelmente Irracional | Dan Ariely |
| Tomada de Decisao | Thinking in Bets | Annie Duke |
| Influencia e Persuasao | Influence | Robert Cialdini |
| Estrategia e Poder | 48 Leis do Poder | Robert Greene |
| Vendas | Os Segredos do Lobo | Jordan Belfort |
| + outros | Livros de leitura de pessoas, perfis DISC, neurociencia e vieses |

---

## Prompts Operacionais

### Prompt 1: Pre-Sessao (Relatorio Estrategico)

```
Minha closer vai entrar em uma call de vendas com essa aluna, para vender a 
Mentoria [NOME DA MENTORIA]. Gere um relatorio com as dores, sonhos do lead, 
o que ele quis dizer mas nao falou (objecoes ocultas) e faca um relatorio com 
tudo que for necessario para aumentar a conversao na call. Aqui esta a resposta 
dela na pesquisa de leads:

[COLAR RESPOSTAS DA PESQUISA]
```

**Saida esperada:**
- Dores explicitas e implicitas
- Sonhos e desejos profundos
- Objecoes ocultas (medos nao verbalizados)
- Gatilhos de conversao recomendados
- Estrategia de abordagem personalizada

---

### Prompt 2: Durante a Sessao (Versao Original)

```
Estou vendendo para a [NOME], analise a postura dela baseado nas 48 leis do 
poder e me auxilie para conduzir a venda.

Baseado na leitura corporal dela e na transcricao da nossa conversa (em anexo):
Quais dores, sonhos, objecoes ocultas eu uso na oferta para vender para ela?
A oferta ja esta estruturada, nao precisa estruturar ela pra mim.
Quero saber o que ela "nao me disse" que esta implicito na conversa.

Sua resposta deve ser curta, objetiva e pratica para eu ler sem ela perceber.
Me conduza baseado no livro "Os segredos do lobo - Jordan Belfort"
```

### Prompt 2: Durante a Sessao (Rev. 2 -- Atualizado da Mentoria)

```
Estou vendendo para a [NOME], analise a postura dela baseado nas 48 leis do 
poder e me auxilie para conduzir a venda.

Baseado na leitura corporal dela e na transcricao da nossa conversa (em anexo):
Quais dores, sonhos, objecoes ocultas eu uso na oferta para vender para ela?
A oferta ja esta estruturada, nao precisa estruturar ela pra mim.
Quero saber o que ela "nao me disse" que esta implicito na conversa.
Me mostre tambem o Radar DISC + Mapa das emocoes + Nivel de Consciencia 
(Eugene Schwartz)

Sua resposta deve ser curta, objetiva e pratica para eu ler sem ela perceber.
Me conduza baseado no livro "Os segredos do lobo - Jordan Belfort"
```

**Diferencas da Rev. 2:**
- Adiciona Radar DISC (perfil comportamental do lead)
- Adiciona Mapa das Emocoes (estado emocional identificado)
- Adiciona Nivel de Consciencia de Eugene Schwartz (5 niveis: inconsciente, consciente do problema, consciente da solucao, consciente do produto, mais consciente)

**Instrucoes de uso:**
1. Enviar 5-8 prints (screenshots) do lead durante a sessao
2. Arrastar o arquivo de transcricao do Zoom para o chat do GPT
3. Colar o prompt pre-copiado (usar atalho Win+V ou clipboard manager)
4. Fazer uma pergunta ao lead para ganhar 2 minutos de leitura
5. Ler resposta da IA enquanto o lead responde

---

### Prompt 3: Pos-Sessao (Treinamento do Closer)

```
Terminei a call de venda, entregue meus acertos, erros, pontos de melhoria e 
objecoes do lead, com o objetivo de me treinar para a proxima sessao.
Tambem mostre meus pontos cegos e objecoes ocultas do lead.
```

**Saida esperada:**
- Acertos (o que o closer fez bem)
- Erros (onde falhou na conducao)
- Pontos de melhoria (ajustes concretos)
- Pontos cegos (o que o closer nao percebeu)
- Objecoes ocultas do lead (o que ficou escondido)

---

### Protocolo Pos-Analise: Diario do Vendedor

Apos receber o feedback da IA, o closer envia um audio no grupo Telegram "Diario do Vendedor" com a seguinte estrutura:

```
Aluno(s): [Nome completo]
Programa: [Nome do programa]
Entregavel: Call de Vendas
Produto: [Nome do produto]
Comprou? Sim ou Nao
[audio]
```

---

## Planilha de Acompanhamento de Sessoes 1a1

### Estrutura da Planilha

A planilha e o instrumento de gestao do closer e do gestor comercial. Deve ser preenchida apos cada sessao.

| Coluna | Descricao |
|--------|-----------|
| **Data** | Data da sessao |
| **Quem fez a sessao?** | Nome do closer responsavel |
| **Nome do aluno** | Nome do lead/candidato |
| **Acertos** | Pontos positivos identificados pela IA |
| **Erros** | Falhas na conducao identificadas pela IA |
| **Pontos de melhoria** | Ajustes recomendados pela IA |
| **Objecoes** | Objecoes do lead (explicitas e ocultas) |
| **Link da Transcricao** | Link para o arquivo de transcricao da sessao |
| **Comprou? (Sim ou Nao)** | Resultado da sessao |

### Como Usar a Planilha

1. **Frequencia de revisao**: a cada 2-3 dias o gestor abre a planilha e analisa padroes
2. **Foco principal**: sessoes que NAO converteram -- entender o motivo
3. **Identificacao de padroes**: se o closer tem erro recorrente (ex: "nao tensiona objecoes"), trabalhar esse ponto especificamente
4. **Transcricoes organizadas**: separar em duas pastas -- "Comprou" e "Nao Comprou"
5. **Nao precisa assistir gravacoes**: a planilha + IA substitui a necessidade de assistir calls inteiras

### Gestao de Transcricoes

As transcricoes sao organizadas em duas pastas para uso estrategico:

**Pasta "Comprou":**
- Alimentar agente clone do comprador
- Perguntar: "Como eu posso atrair pessoas como voce?"
- Identificar padroes de quem converte

**Pasta "Nao Comprou":**
- Alimentar agente clone do nao-comprador
- Perguntar: "O que eu poderia fazer para voce comprar?"
- Ajustar oferta, conducao ou abordagem

**Cruzamento:**
- Jogar ambas as pastas na IA
- Pedir analise comparativa: padrao de comprador vs nao-comprador
- Criar perfil de avatar ideal baseado em dados reais

---

## Evolucoes entre Versao Original e Rev. 2

| Aspecto | Versao Original | Rev. 2 (Att. Mentoria) |
|---------|-----------------|------------------------|
| Leitura corporal | 48 Leis do Poder | 48 Leis do Poder |
| Conducao de venda | Os Segredos do Lobo | Os Segredos do Lobo |
| Perfil comportamental | Nao incluido | Radar DISC |
| Mapeamento emocional | Nao incluido | Mapa das Emocoes |
| Nivel de consciencia | Nao incluido | Eugene Schwartz (5 niveis) |
| Estrutura do audio | Basica | Detalhada com campos padronizados |

A Rev. 2 adiciona camadas de profundidade que permitem ao closer ajustar o tom, a abordagem e o timing da oferta com base no perfil DISC e no nivel de consciencia do lead.

---

## Boas Praticas

1. **Sempre usar o agente personalizado** (nao o ChatGPT generico) -- ele ja tem os livros internalizados
2. **Respostas curtas e praticas** -- configurar o agente para entregar respostas que podem ser lidas em 30 segundos
3. **Pre-copiar prompts** -- usar historico de clipboard para nao perder tempo digitando
4. **Dividir tela** -- metade Zoom, metade ChatGPT, olhando para a camera enquanto le
5. **Pergunta estrategica** -- sempre ter uma pergunta pronta para ganhar tempo de leitura
6. **Preencher planilha imediatamente** -- apos a sessao, nao deixar acumular
7. **Revisar a planilha regularmente** -- identificar padroes e trabalhar pontos fracos do closer
