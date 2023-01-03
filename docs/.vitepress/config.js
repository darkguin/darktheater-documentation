module.exports = {
  title: 'darktheater',
  themeConfig: {
    logo: '/assets/img/logo.svg',
    siteTitle: 'darktheater',
    components: './components/',
    nav: [
//       { text: 'Introduction', link: '/introduction' },
      {
        text: 'Docs',
        items: [
//           { text: 'Frontend', link: '/frontend/' },
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
        // {
        //   text: 'Api',
        //   items: [
        //     { text: 'Getting Started', link: '/backend/api/' },
        //   ]
        // },
        {
          text: 'Auth API',
          items: [
            { text: 'API', link: '/backend/api/auth-api/' },
            { text: 'OpenAPI. Swagger', link: '/backend/api/auth-api/open-api' },
          ]
        },
        {
          text: 'Content API',
          items: [
            { text: 'API', link: '/backend/api/content-api/' },
            { text: 'Content types', link: '/backend/api/content-api/content-types' },
            { text: 'Filtering and selecting content', link: '/backend/api/content-api/content-filtering-and-selecting' },
            { text: 'Movie', link: '/backend/api/content-api/movie' },
            { text: 'Serial', link: '/backend/api/content-api/serial' },
            { text: 'OpenAPI. Swagger', link: '/backend/api/content-api/open-api' },
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
