export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ec1956c9a08505d97e50faf',
                  title: 'Sanity Studio',
                  name: 'cxc-study-guide-blog-studio',
                  apiId: '42c74f25-637d-4ac1-b414-21ddc4af29b0'
                },
                {
                  buildHookId: '5ec1956d496fb533e91e1cb0',
                  title: 'Blog Website',
                  name: 'cxc-study-guide-blog',
                  apiId: '8987e326-6e92-4439-9165-2dde2ec0c371'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamrxheem/cxc-study-guide-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://cxc-study-guide-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
