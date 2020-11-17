export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb39dba65199a947258e918',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8upeofd4',
                  apiId: '147e7267-8277-4fcb-abb6-cc394ae2216f'
                },
                {
                  buildHookId: '5fb39dbb65199a8e2358eb0f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uyfwzwre',
                  apiId: 'd55c4743-c786-43ab-b7cf-a07c94447fe2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ericbaranowski/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uyfwzwre.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
