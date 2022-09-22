module.exports = {
  title: 'darktheater',
  themeConfig: {
    logo: '/assets/img/logo.svg',
    siteTitle: 'darktheater',
    nav: [
      { text: 'Introduction', link: '/introduction' },
      {
        text: 'Docs',
        items: [
          { text: 'Frontend', link: '/frontend/' },
          { text: 'Backend', link: '/backend/' },
        ]
      },
      { text: 'Team', link: '/team' },
    ],
    sidebar: {
      '/frontend/': [
        {
          text: 'Guide',
          collapsible: true,
          items: [
            { text: 'Getting Started fr', link: '/frontend/getting-started' },
          ]
        },
      ],
      '/backend/': [
        {
          text: 'Guide',
          collapsible: true,
          items: [
            { text: 'Getting Started', link: '/backend/getting-started' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/darkguin/darktheater-documentation' },
    ],
    editLink: {
      pattern: 'https://github.com/darkguin/darktheater-documentation/edit/main/docs/:path'
    },
    lastUpdatedText: 'Updated Date',
    footer: {
      message: 'Released under the Mozilla Public License Version 2.0.',
      copyright: 'Copyright © 2022'
    }
  },
};
