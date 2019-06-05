const path = require(`path`);

module.exports = {
  pathPrefix: '/teufel-it-gatsby',
  siteMetadata: {
    title: 'teufel-it'
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
    }
  ]
};
