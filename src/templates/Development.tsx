import * as React from 'react';
import Parallax from './../components/Parallax';
import Layout from './../layouts/Layout';
import { development } from './../translations/development';

const MuchCode = require('./../assets/images/much_code.jpg');
const code = require('./../assets/images/3dCode.jpg');

export default (props: {}) => (
  <Layout {...props}>
    <Parallax firstImage={code} middleImage={MuchCode} lastImage={code} json={development} />
  </Layout>
);
