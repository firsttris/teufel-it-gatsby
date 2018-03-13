import * as React from 'react';
import { addLocaleData, InjectedIntlProps } from 'react-intl';
import Layout from './Layout';
const localeData = require('react-intl/locale-data/de');
const messages = require('../translations/de.json');

addLocaleData(localeData);

interface Props extends InjectedIntlProps {
  children: () => JSX.Element;
}

export default (props: Props) => <Layout {...props} locale="de" messages={messages} />;
