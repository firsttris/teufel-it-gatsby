import * as React from 'react';
import { Parallax } from './../components/Parallax';
import { Layout } from './../layouts/Layout';

const Meeting = require('./../assets/images/meeting2.jpg');
const Server = require('./../assets/images/server2.jpg');

interface Props {
  location: Location;
  pageContext: { locale: string; data: any };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <Parallax
      firstImage={Meeting}
      middleImage={Server}
      lastImage={Meeting}
      json={props.pageContext.data}
      locale={props.pageContext.locale}
    />
  </Layout>
);
