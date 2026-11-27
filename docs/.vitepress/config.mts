import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vector Observatory',
  description:
    'Data for mosquito research, surveillance and control: Anopheles and Aedes genomic data, tools and training.',
  lang: 'en-GB',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    // Preview only: keep search engines from listing the site before launch.
    // Remove this line when the site goes live on its own domain (plan, step 6.6).
    ['meta', { name: 'robots', content: 'noindex, nofollow' }]
  ],

  themeConfig: {

    nav: [
      { text: 'Organism', link: '/organism' },
      { text: 'Interface', link: '/api/' },
      { text: 'Datasets', link: '/data/' },
      { text: 'Pipelines', link: '/pipelines' },
      { text: 'Training', link: '/training' },
      {
        text: 'Community',
        items: [
          { text: 'Collaborations', link: '/collaborations' },
          { text: 'Publications', link: '/research' },
          { text: 'Updates', link: '/updates' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Terms of use', link: '/terms' },
          { text: 'How to cite', link: '/cite' },
          { text: 'About', link: '/about' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    outline: { level: [2, 3], label: 'On this page' },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vector-observatory' }],

    search: { provider: 'local' },

    editLink: {
      pattern:
        'https://github.com/vector-observatory/vector-observatory.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'An independent platform, with MalariaGEN among its partners.',
      copyright: 'Vector Observatory contributors'
    }
  }
})
