import * as React from 'react';
import Parallax from './../components/Parallax';
import Layout from './../layouts/Layout';
import { consulting } from './../translations/consulting';

const Meeting = require('./../assets/images/meeting2.jpg');
const Server = require('./../assets/images/server2.jpg');

export default (props: {}) => (
  <Layout {...props}>
    <Parallax firstImage={Meeting} middleImage={Server} lastImage={Meeting} json={consulting} />
  </Layout>
);
