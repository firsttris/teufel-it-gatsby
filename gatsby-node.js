const path = require('path');
const fetch = require('node-fetch');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

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

const consulting = {
  portfolio: {
    title: 'PORTFOLIO_TITLE',
    text: 'TEXT_GOOD_PARTNER',
    cards: [
      {
        title: 'PORTFOLIO_ANALYSIS_TITLE',
        iconClass: 'fas fa-5x fa-history',
        gridClass: 'col-xs-12 col-md-6 col-lg-4',
        text: 'PORTFOLIO_ANALYSIS_TEXT'
      },
      {
        title: 'PORTFOLIO_OPTIMIZE_TITLE',
        iconClass: 'fas fa-5x fa-cogs',
        gridClass: 'col-xs-12 col-md-6 col-lg-4',
        text: 'PORTFOLIO_OPTIMIZE_TEXT'
      },
      {
        title: 'PORTFOLIO_OPENSOURCE_TITLE',
        iconClass: 'fab fa-5x fa-github',
        gridClass: 'col-xs-12 col-md-6 col-lg-4',
        text: 'PORTFOLIO_OPENSOURCE_TEXT'
      }
    ]
  },
  principles: {
    title: 'PRINCIPLES_TITLE',
    text: 'TEXT_TESTED_CONCEPTS',
    cards: [
      {
        title: 'PRINCIPLES_SAVINGS_TITLE',
        iconClass: 'far fa-2x fa-money-bill-alt',
        gridClass: 'col-xs-12 col-md-6 col-lg-6',
        text: 'PRINCIPLES_SAVINGS_TEXT'
      },
      {
        title: 'PRINCIPLES_STANDARDS_TITLE',
        iconClass: 'fas fa-2x fa-sitemap',
        gridClass: 'col-xs-12 col-md-6 col-lg-6',
        text: 'PRINCIPLES_STANDARDS_TEXT'
      },
      {
        title: 'PRINCIPLES_EASY_TITLE',
        iconClass: 'fas fa-2x fa-puzzle-piece',
        gridClass: 'col-xs-12 col-md-6 col-lg-6',
        text: 'PRINCIPLES_EASY_TEXT'
      },
      {
        title: 'PRINCIPLES_BUSINESS_TITLE',
        iconClass: 'fas fa-2x fa-rocket',
        gridClass: 'col-xs-12 col-md-6 col-lg-6',
        text: 'PRINCIPLES_BUSINESS_TEXT'
      }
    ]
  }
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const reviews = await fetchReviews();
  reviews.forEach(review => {
    const reviewNode = {
      // Required fields.
      id: uuidv1(),
      parent: `null`,
      children: [],
      internal: {
        type: `review`,
      },
      ...review
  }
    const contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(reviewNode))
    .digest(`hex`);
    reviewNode.internal.contentDigest = contentDigest;

    createNode(reviewNode);
  });

  const repos = await fetchGithubData();
  repos.forEach(repo => {
    const repoNode = {
      // Required fields.
      id: uuidv1(),
      parent: `null`,
      children: [],
      internal: {
        type: `repo`,
      },
      ...repo
  }
    const contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(repoNode))
    .digest(`hex`);
    repoNode.internal.contentDigest = contentDigest;

    createNode(repoNode);
  })
}

exports.createPages = async ({ page, actions }) => {

  const { createPage } = actions;

  const router = [
    { path: '/', name: 'Development', data: development },
    { path: '/it-strategieberatung', name: 'Consulting', data: consulting },
    { path: '/projects', name: 'Github' },
    { path: '/sendtokodi', name: 'SendToKodi' },
    { path: '/404', name: '404' },
    { path: '/privacy', name: 'Privacy' }
  ];

  const locales = ['de', 'en'];

  router.forEach(route => {
    locales.forEach(locale => {
      createPage({
        path: `/${locale}${route.path}`,
        component: path.resolve(`src/templates/${route.name}.tsx`),
        context: { locale, data: route.data, slug: `${route.name}-${locale}` }
      });
    });
  });
};

async function fetchGithubData() {
  const data = await fetch('https://api.github.com/users/firsttris/repos');
  const result = await data.json();
  const repos = result.filter(repository => repository.fork === false);
  repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  const mappedRepos = [];
  repos.forEach(repo => {
    const mappedRepo = {
      name: repo.name,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      description: repo.description,
      language: repo.language
    }
    mappedRepos.push(mappedRepo);
  })
  return mappedRepos;
}

async function fetchReview(country) {
  const reviews = [];
  return fetch(
    'https://itunes.apple.com/' + country + '/rss/customerreviews/id=1113517603/sortBy=mostRecent/json'
  ).then(data =>
    data.json().then(result => {
      const entries = result.feed.entry;
      for (const index in entries) {
        if (entries[index].author && !entries[index]['im:artist']) {
          const review = {
            name: entries[index].author ? entries[index].author.name.label : '',
            text: entries[index].content ? entries[index].content.label : '',
            rating: entries[index]['im:rating'] ? entries[index]['im:rating'].label : '',
            title: entries[index].title ? entries[index].title.label : ''
          };
          reviews.push(review);
        }
      }
      return reviews;
    })
  );
}

async function fetchReviews() {
  let reviews = [];
  const countries = ['de', 'us', 'gb', 'nl', 'ro', 'fr'];
  for (const country of countries) {
    const fetchReviews = await fetchReview(country);
    reviews = reviews.concat(fetchReviews);
  }
  return reviews;
}
