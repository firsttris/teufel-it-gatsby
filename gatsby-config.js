module.exports = {
  pathPrefix: "/teufel-it-gatsby",
  siteMetadata: {
    title: 'teufel-it',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-typescript', 
    'gatsby-plugin-react-helmet'
  ],
};
