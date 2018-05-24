const path = require('path');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const router = [
    { path: '/', name: 'Development' },
    { path: '/Consulting', name: 'Consulting' },
    { path: '/Github', name: 'Github' },
    { path: '/SendToKodi', name: 'SendToKodi' },
    { path: '/404', name: '404' },
    { path: '/Privacy', name: 'Privacy' }
  ];

  const locales = ['de', 'en'];

  router.forEach(route => {
    locales.forEach(locale => {
      createPage({
        path: `/${locale}${route.path}`,
        component: path.resolve(`src/templates/${route.name}.tsx`),
        layout: locale,
        context: { locale }
      });
    });
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.plugin(`WepApp`, WebappWebpackPlugin, [
      {
        logo: './src/assets/favicon.png',
        prefix: 'assets/'
      }
    ]);
  }
};
