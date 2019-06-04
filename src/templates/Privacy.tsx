import * as React from 'react';
import { Privacy } from './../components/Privacy';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  pageContext: { locale: string };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <Privacy locale={props.pageContext.locale} />
  </Layout>
);
