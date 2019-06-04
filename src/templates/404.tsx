import * as React from 'react';
import { NotFound } from './../components/404';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  pageContext: { locale: string; data: any };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <NotFound locale={props.pageContext.locale} />
  </Layout>
);
