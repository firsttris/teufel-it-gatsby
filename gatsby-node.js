const path = require('path');

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const router = [
    { path: '/', name: 'Development' },
    { path: '/Consulting', name: 'Consulting' },
    { path: '/Github', name: 'Github' },
    { path: '/SendToKodi', name: 'SendToKodi' },
    { path: '/404', name: '404' }
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
