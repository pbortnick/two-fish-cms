module.exports = {
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: 'https://api.vercel.com/v1/integrations/deploy/prj_HImwK8Ryg9P7KxzjYt7EgLsgAo1Y/ZauNyp1XsG',
      apiToken: 'JbUTDjhfRRe8qObtPOoYXsc4',
      appFilter:'two-fish',
      teamFilter: 'pbortnick',
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};