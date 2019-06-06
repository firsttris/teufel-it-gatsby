import * as React from 'react';
import { SendToKodi } from './../components/SendToKodi';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  data: any;
  pageContext: { locale: string; data: any };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <SendToKodi locale={props.pageContext.locale} reviews={props.pageContext.data} />
  </Layout>
);
