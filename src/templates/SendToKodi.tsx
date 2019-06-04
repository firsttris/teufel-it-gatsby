import * as React from 'react';
import { Helmet } from 'react-helmet';
import SendToKodi from './../components/SendToKodi';

interface SendToKodiProps {
  pageContext: { locale: string };
}

export default ({ pageContext }: SendToKodiProps) => (
  <div className="page">
    <SendToKodi />
    <h1>{pageContext.locale}</h1>
  </div>
);
