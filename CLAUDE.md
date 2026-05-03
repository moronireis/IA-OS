# SYSTEM OS - Base de Conhecimento de Marketing Digital

## Sobre este Projeto

Este projeto contem uma base de conhecimento estruturada sobre marketing digital, lancamentos e vendas high ticket, extraida de 10+ programas de referencia do mercado brasileiro. O objetivo e fornecer ao Claude Code acesso a todo esse conhecimento para auxiliar em decisoes estrategicas, criacao de conteudo, planejamento de lancamentos e operacoes de marketing.

## Estrutura do Projeto

```
knowledge-base/           # Base de conhecimento em Markdown
  01-lancamentos/          # Formula de Lancamento, lancamento pago, Projeto Black
  02-high-ticket/          # FHT, Full Sales System, sessao 1a1, objecoes
  03-trafego/              # Sobral, Meta Ads, Andromeda, CPL, UTMs
  04-conteudo-copy/        # Conteudo Raiz, scripts CPL, criativos, Reels, pitch
  05-ia-automacao/         # IA para vendas, agentes ChatGPT, Manus, Lovable
  _index.md                # Indice geral com mapa de todo o conhecimento

.claude/
  skills/                  # Custom skills para tarefas especificas
  agents/                  # Agentes especializados com system prompts
```

## Dominios de Conhecimento

### 1. Estrategia de Lancamento
**Quando consultar:** planejamento de lancamentos, definicao de tipo (semente/classico/pago), cronograma, progressao de faixas
**Arquivos-chave:** `01-lancamentos/fl-formula-lancamento.md`, `lancamento-pago-baldan.md`, `lancamento-pago-tabari.md`
**Autores de referencia:** Erico Rocha, William Baldan, Leonardo Tabari

### 2. Vendas High Ticket
**Quando consultar:** montar oferta HT, estruturar sessao 1a1, precificar, lidar com objecoes, delegar entrega
**Arquivos-chave:** `02-high-ticket/fht-masterplan.md`, `sessao-1a1.md`, `arvore-objecoes.md`
**Autores de referencia:** FHT Team, Full Sales System

### 3. Trafego Pago
**Quando consultar:** planejar campanhas Meta Ads, definir audiencias, otimizar CPL, configurar rastreamento
**Arquivos-chave:** `03-trafego/sobral-meta-ads.md`, `andromeda.md`, `cpl-otimizacao.md`
**Autores de referencia:** Pedro Sobral, Leonardo Tabari

### 4. Conteudo & Copy
**Quando consultar:** escrever scripts CPL, criar criativos, planejar conteudo, montar pitch de vendas
**Arquivos-chave:** `04-conteudo-copy/scripts-cpl.md`, `copy-criativos.md`, `pitch-alta-conversao.md`
**Autores de referencia:** Insider Team, Gustavo Vanassi

### 5. IA & Automacao
**Quando consultar:** automatizar vendas com IA, criar agentes ChatGPT, construir paginas com Lovable
**Arquivos-chave:** `05-ia-automacao/agentes-chatgpt.md`, `manus-cerebros.md`, `paginas-com-ia.md`
**Autores de referencia:** Rafael Puglia, Luiza Purificacao

## Vocabulario do Sistema

Estes termos sao usados consistentemente em toda a knowledge base:

- **6em7** = R$100.000 em 7 dias (marco principal da FL)
- **Roma** = Promessa de transformacao / destino do avatar
- **Avatar** = Cliente ideal / persona de compra
- **CPL** = Conteudo Pre-Lancamento (CPL1, CPL2, CPL3 = videos antes da abertura de carrinho)
- **Faixa Preta** = R$2M+/ano em lancamentos
- **Faixa Marrom** = R$300K+ por lancamento
- **SLG** = Social Lead Generation (leads via redes sociais organico)
- **1a1** = Sessao individual de vendas high ticket
- **4 E's** = Ensinar, Exemplificar, Exercitar, Examinar (metodologia de ensino)
- **Andromeda** = Algoritmo Meta (parceria Nvidia) que personaliza por usuario
- **ASC** = Advantage Shopping Campaigns / Advantage+
- **SHT** = Semente High Ticket (primeiro lancamento HT)
- **AR** = Acelerador de Resultados (programa de aceleracao)
- **Conteudo Raiz** = Video longo (30min+) de autoridade
- **Conteudo Nutella** = Conteudo curto/leve (Reels, Stories)

## Benchmarks de Referencia

Use estes numeros como referencia para recomendacoes:

| Metrica | Valor | Contexto |
|---------|-------|----------|
| ROAS minimo lancamento pago | 1.0 | Break-even no trafego |
| ROAS alvo lancamento pago | 1.2 | Meta saudavel |
| ROAS Baldan Black Friday | ~19x | R$130K investido |
| CPL e-book aquisicao | R$1/cliente | Funil perpetuo |
| Conversao webinar | 10-15% | Produto trampolim |
| Unique views evento | 70%+ | Desafio/semana |
| Conversao produto principal | 7-10%+ | Apos evento pago |
| Ciclos medios para 6em7 | 7 | Espacados 45-60 dias |
| Frequencia conteudo | 2 Raiz + 7 Nutella/sem | Minimo recomendado |
| Escala diaria Andromeda | 20-30% | Incremento no orcamento |
| Participacao comercial | 83-86% | Equipe de vendas |

## Skills Disponiveis

- `/lancamento` - Planejar lancamento completo com timeline e checklist
- `/high-ticket` - Montar oferta HT, sessao 1a1, pricing e objecoes
- `/trafego` - Planejar campanha com estrutura, audiencias e orcamento
- `/copy` - Gerar scripts CPL, copy de criativos, headlines e pitches
- `/funil` - Desenhar funil completo com metricas-alvo por etapa
- `/escala` - Diagnosticar gargalos e planejar escala

## Agentes Especializados

- **estrategista-lancamento** - Planeja lancamentos end-to-end
- **gestor-trafego** - Opera como gestor de trafego virtual
- **closer-high-ticket** - Prepara e otimiza calls de vendas
- **copywriter-lancamento** - Escreve copy para todas as fases
- **produtor-conteudo** - Planeja e estrutura conteudo

## Instrucoes de Uso

1. Quando o usuario perguntar sobre qualquer topico de marketing digital, SEMPRE consulte a knowledge base relevante antes de responder
2. Use o vocabulario padrao do sistema (termos acima)
3. Baseie recomendacoes nos benchmarks de referencia
4. Cite a fonte/autor quando referenciar um framework especifico
5. Para tarefas complexas, use as skills ou agentes especializados
6. O indice geral esta em `knowledge-base/_index.md`
