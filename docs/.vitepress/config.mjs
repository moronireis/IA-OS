import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IA-OS',
  description: 'Sistema Operacional de Marketing Digital com IA',
  lang: 'pt-BR',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Knowledge Base', link: '/knowledge-base/' },
      { text: 'Stack', link: '/stack/' },
      { text: 'Guias', link: '/guias/' }
    ],
    sidebar: {
      '/knowledge-base/': [
        {
          text: 'Knowledge Base',
          items: [
            { text: 'Visao Geral', link: '/knowledge-base/' },
            { text: '01 - Lancamentos', link: '/knowledge-base/lancamentos' },
            { text: '02 - High Ticket', link: '/knowledge-base/high-ticket' },
            { text: '03 - Trafego Pago', link: '/knowledge-base/trafego' },
            { text: '04 - Conteudo & Copy', link: '/knowledge-base/conteudo-copy' },
            { text: '05 - IA & Automacao', link: '/knowledge-base/ia-automacao' }
          ]
        }
      ],
      '/stack/': [
        {
          text: 'Stack & Arquitetura',
          items: [
            { text: 'Visao Geral', link: '/stack/' },
            { text: 'O que Temos', link: '/stack/o-que-temos' },
            { text: 'O que Faltou', link: '/stack/o-que-faltou' },
            { text: 'Recomendacoes', link: '/stack/recomendacoes' },
            { text: 'Agentes & MCPs', link: '/stack/agentes-mcps' },
            { text: 'Comunidade & Repos', link: '/stack/comunidade' }
          ]
        }
      ],
      '/guias/': [
        {
          text: 'Guias de Uso',
          items: [
            { text: 'Como Usar', link: '/guias/' },
            { text: 'Skills', link: '/guias/skills' },
            { text: 'Agentes', link: '/guias/agentes' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moronireis/IA-OS' }
    ],
    footer: {
      message: 'Sistema Operacional de Marketing Digital com IA',
      copyright: 'Moroni Reis - 2026'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'Nesta pagina'
    }
  }
})
