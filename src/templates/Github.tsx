import * as React from 'react';
import { Github } from './../components/Github';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  pageContext: {
    data: any;
    locale: string;
  };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <Github locale={props.pageContext.locale} repos={props.pageContext.data} />
  </Layout>
);
