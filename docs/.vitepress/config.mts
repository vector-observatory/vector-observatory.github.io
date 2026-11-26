import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vector Observatory',
  description:
    'Data for mosquito research, surveillance and control: Anopheles and Aedes genomic data, tools and training.',
  lang: 'en-GB',
  cleanUrls: true,
  lastUpdated: false,

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    // Preview only: keep search engines from listing the site before launch.
    // Remove this line when the site goes live on its own domain (plan, step 6.6).
    ['meta', { name: 'robots', content: 'noindex, nofollow' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Vector Observatory',

    nav: [
      { text: 'Data', link: '/data/' },
      { text: 'API', link: '/api/' },
      { text: 'Pipelines', link: '/pipelines' },
      { text: 'Training', link: '/training' },
      { text: 'Collaborations', link: '/collaborations' },
      { text: 'Research', link: '/research' },
      { text: 'Updates', link: '/updates' }
    ],

    sidebar: {
      '/data/': [
        {
          text: 'In this section',
          items: [
            { text: 'Overview', link: '/data/' },
            { text: 'Anopheles gambiae complex', link: '/data/#anopheles-gambiae-complex' },
            { text: 'Anopheles funestus subgroup', link: '/data/#anopheles-funestus-subgroup' },
            { text: 'Anopheles stephensi', link: '/data/#anopheles-stephensi' },
            { text: 'Anopheles minimus', link: '/data/#anopheles-minimus' },
            { text: 'Anopheles dirus', link: '/data/#anopheles-dirus' },
            { text: 'Aedes (in preparation)', link: '/data/#aedes' },
            { text: 'Terms of use', link: '/terms' },
            { text: 'Data user guide', link: '/data/#how-to-access-the-data' }
          ]
        }
      ]
    },

    editLink: {
      pattern:
        'https://github.com/vector-observatory/vector-observatory.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    outline: false,
    docFooter: { prev: false, next: false }
  }
})
