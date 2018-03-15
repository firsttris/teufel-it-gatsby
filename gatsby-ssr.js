import React from 'react';

const metas = [
  {
    name: 'apple-mobile-web-app-capable',
    content: 'yes'
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black-translucent'
  },
  {
    name: 'apple-mobile-web-app-title',
    content: 'webapp-webpack-plugin'
  },
  {
    name: 'mobile-web-app-capable',
    content: 'yes'
  },
  {
    name: 'theme-color',
    content: '#fff'
  },
  {
    name: 'application-name',
    content: 'webapp-webpack-plugin'
  },
  {
    name: 'msapplication-TileColor',
    content: '#fff'
  },
  {
    name: 'msapplication-TileImage',
    content: '/assets/mstile-144x144.png'
  },
  {
    name: 'msapplication-config',
    content: '/assets/browserconfig.xml'
  }
];

const links = [
  {
    rel: 'apple-touch-icon',
    type: '',
    href: '/assets/apple-touch-icon-57x57.png',
    sizes: '57x57',
    media: ''
  },
  {
    rel: 'apple-touch-icon',
    type: '',
    href: '/assets/apple-touch-icon-60x60.png',
    sizes: '60x60',
    media: ''
  },
  {
    rel: 'apple-touch-icon',
    type: '',
    href: '/assets/apple-touch-icon-72x72.png',
    sizes: '72x72',
    media: ''
  },
  {
    rel: 'apple-touch-icon',
    type: '',
    href: '/assets/apple-touch-icon-76x76.png',
    sizes: '76x76',
    media: ''
  },
  {
    rel: 'apple-touch-icon',
    type: '',
    href: '/assets/apple-touch-icon-114x114.png',
    sizes: '114x114',
    media: ''
  },
  {
    rel: 'apple-touch-icon',
    type: '',
    href: '/assets/apple-touch-icon-120x120.png',
    sizes: '120x120',
    media: ''
  },
  {
    rel: 'apple-touch-icon',
    type: '',
    href: '/assets/apple-touch-icon-144x144.png',
    sizes: '144x144',
    media: ''
  },
  {
    rel: 'apple-touch-icon',
    type: '',
    href: '/assets/apple-touch-icon-152x152.png',
    sizes: '152x152',
    media: ''
  },
  {
    rel: 'apple-touch-icon',
    type: '',
    href: '/assets/apple-touch-icon-180x180.png',
    sizes: '180x180',
    media: ''
  },
  {
    rel: 'manifest',
    type: '',
    href: '/assets/manifest.json',
    sizes: '',
    media: ''
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/assets/coast-228x228.png',
    sizes: '228x228',
    media: ''
  },
  {
    rel: 'yandex-tableau-widget',
    type: '',
    href: '/assets/yandex-browser-manifest.json',
    sizes: '',
    media: ''
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-320x460.png',
    sizes: '',
    media: '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)'
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-640x920.png',
    sizes: '',
    media: '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)'
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-640x1096.png',
    sizes: '',
    media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-750x1294.png',
    sizes: '',
    media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-1182x2208.png',
    sizes: '',
    media:
      '(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)'
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-1242x2148.png',
    sizes: '',
    media:
      '(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)'
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-748x1024.png',
    sizes: '',
    media:
      '(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)'
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-768x1004.png',
    sizes: '',
    media:
      '(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)'
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-1496x2048.png',
    sizes: '',
    media:
      '(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)'
  },
  {
    rel: 'apple-touch-startup-image',
    type: '',
    href: '/assets/apple-touch-startup-image-1536x2008.png',
    sizes: '',
    media:
      '(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)'
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/assets/favicon-32x32.png',
    sizes: '32x32',
    media: ''
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/assets/favicon-16x16.png',
    sizes: '16x16',
    media: ''
  },
  {
    rel: 'shortcut icon',
    type: '',
    href: '/assets/favicon.ico',
    sizes: '',
    media: ''
  }
];

exports.onRenderBody = ({ setHeadComponents }) => {
  const HeadComponents = [];

  for (const link of links) {
    HeadComponents.push(
      <link rel={link.rel} type={link.type} href={link.href} key={link.href} size={link.size} media={link.media} />
    );
  }

  for(const meta of metas) {
    HeadComponents.push(
        <meta name={meta.name} content={meta.content} key={meta.name} />
      );
  }

  setHeadComponents(HeadComponents);
};
