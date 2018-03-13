import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import Helmet from 'react-helmet';
import { IntlProvider, Messages } from 'react-intl';
import Navigation from '../components/Navigation/Navigation';
require('./../assets/font-awesome_5.0.8.js');

interface LayoutProps {
  children: () => JSX.Element;
  locale: string;
  messages: Messages;
}

export default ({ children, locale, messages }: LayoutProps): JSX.Element => (
  <IntlProvider locale={locale} messages={messages}>
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
      />
      <Navigation />
      {children()}
    </div>
  </IntlProvider>
);
