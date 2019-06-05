module.exports = {
  pathPrefix: '/teufel-it-gatsby',
  siteMetadata: {
    title: 'teufel-it'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
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
