const path = require(`path`);

module.exports = {
  pathPrefix: '/teufel-it-gatsby',
  siteMetadata: {
    title: 'teufel-it',
    siteUrl: `https://teufel-it.de`
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-70468785-1',
        sampleRate: 5,
        siteSpeedSampleRate: 10
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teufel IT, Software ist unser Handwerk`,
        short_name: `Teufel IT`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `ffffff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    }
  ]
};
