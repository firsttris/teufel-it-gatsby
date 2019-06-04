import * as React from 'react';
import SendToKodi from './../components/SendToKodi';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  pageContext: { locale: string };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <SendToKodi locale={props.pageContext.locale} />
  </Layout>
);
