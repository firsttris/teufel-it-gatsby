import * as React from 'react';
import { Parallax } from './../components/Parallax';
import { Layout } from './../layouts/Layout';
const MuchCode = require('./../assets/images/much_code.jpg');
const code = require('./../assets/images/3dCode.jpg');

interface Props {
  location: Location;
  pageContext: {
    data: any;
    locale: string;
  };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <Parallax
      firstImage={code}
      middleImage={MuchCode}
      lastImage={code}
      json={props.pageContext.data}
      locale={props.pageContext.locale}
    />
  </Layout>
);
