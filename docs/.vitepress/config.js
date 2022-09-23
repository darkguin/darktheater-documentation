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
            { text: 'Getting Started', link: '/frontend/getting-started' },
          ]
        },
      ],
      '/backend/': [
        {
          text: 'Docs',
          collapsible: true,
          items: [
            { text: 'Getting Started', link: '/backend/' },
          ]
        },
        {
          text: 'Api',
          items: [
            { text: 'Content API', link: '/backend/api/content' },
            { text: 'Auth API', link: '/backend/api/auth' },
          ]
        },
        {
          text: 'Database',
          items: [
            { text: 'Getting Started', link: '/backend/database/' },
            { text: 'Authorization', link: '/backend/database/auth' },
            { text: 'Content. Movies & Serials', link: '/backend/database/content' },
            { text: 'Comments', link: '/backend/database/comments' },
            { text: 'User lists (UCC - User content collections)', link: '/backend/database/user-lists' },
          ]
        },
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
