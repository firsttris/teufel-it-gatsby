import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import Helmet from 'react-helmet';
import { IntlProvider, Messages } from 'react-intl';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

require('./../assets/font-awesome_5.0.8.js');

interface LayoutProps extends RouteComponentProps<{}> {
  children: () => JSX.Element;
  locale: string;
  messages: Messages;
}

const Layout = ({ children, locale, messages, location }: LayoutProps): JSX.Element => (
  <IntlProvider locale={locale} messages={messages}>
    <div>
      <Helmet
        title="Teufel IT, IT-Strategieberatung, Geschäftsanwendungen, Geschäftsprozesse"
        meta={[
          { name: 'description', content: 'Teufel IT, Softwareentwicklung, JavaScript, NodeJs, Integration' },
          { name: 'keywords', content: 'Softwareentwicklung, JavaScript, NodeJs, React' }
        ]}
      />
      <Navigation />
      {children()}
    </div>
  </IntlProvider>
);

export default withRouter(Layout);
