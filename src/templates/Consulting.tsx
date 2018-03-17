import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parallax from './../components/Parallax';

const Meeting = require('./../assets/images/meeting2.jpg');
const Server = require('./../assets/images/server2.jpg');
const ConsultingJson = require('./../pages/consulting.json');

export default () => (
  <div className="page">
    <Parallax firstImage={Meeting} middleImage={Server} lastImage={Meeting} json={ConsultingJson} />
  </div>
);
