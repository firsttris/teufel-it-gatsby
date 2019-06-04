const path = require('path');

const development = {
  portfolio: {
    title: 'PORTFOLIO_TITLE',
    text: 'TEXT_GOOD_PARTNER',
    cards: [
      {
        title: 'PORTFOLIO_SOFTWARE_TITLE',
        iconClass: 'fab fa-5x fa-github',
        gridClass: 'col-xs-12 col-md-6 col-lg-4',
        text: 'PORTFOLIO_SOFTWARE_TEXT'
      },
      {
        title: 'PORTFOLIO_SERVICES_TITLE',
        iconClass: 'fas fa-5x fa-code-branch',
        gridClass: 'col-xs-12 col-md-6 col-lg-4',
        text: 'PORTFOLIO_SERVICES_TEXT'
      },
      {
        title: 'PORTFOLIO_TRAINING_TITLE',
        iconClass: 'fab fa-5x fa-leanpub',
        gridClass: 'col-xs-12 col-md-6 col-lg-4',
        text: 'PORTFOLIO_TRAINING_TEXT'
      }
    ]
  },
  principles: {
    title: 'PRINCIPLES_TITLE',
    text: 'TEXT_TESTED_CONCEPTS',
    cards: [
      {
        title: 'PRINCIPLES_TDD_TITLE',
        iconClass: 'fab fa-2x fa-free-code-camp',
        gridClass: 'col-xs-12 col-md-6 col-lg-6',
        text: 'PRINCIPLES_TDD_TEXT'
      },
      {
        title: 'PRINCIPLES_PP_TITLE',
        iconClass: 'fas fa-2x fa-users',
        gridClass: 'col-xs-12 col-md-6 col-lg-6',
        text: 'PRINCIPLES_PP_TEXT'
      },
      {
        title: 'PRINCIPLES_CC_TITLE',
        iconClass: 'fas fa-2x fa-code',
        gridClass: 'col-xs-12 col-md-6 col-lg-6',
        text: 'PRINCIPLES_CC_TEXT'
      },
      {
        title: 'PRINCIPLES_AGILE_TITLE',
        iconClass: 'fas fa-2x fa-sync',
        gridClass: 'col-xs-12 col-md-6 col-lg-6',
        text: 'PRINCIPLES_AIGLE_TEXT'
      }
    ]
  }
};

exports.createPages = async ({ page, actions }) => {
  const { createPage } = actions;

  const router = [
    { path: '/', name: 'Development', data: development },
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
        context: { locale, route: route.data }
      });
    });
  });
};
