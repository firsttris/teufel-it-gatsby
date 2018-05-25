import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parallax from './../components/Parallax';
import { development } from './../pages/development';

const MuchCode = require('./../assets/images/much_code.jpg');
const code = require('./../assets/images/3dCode.jpg');

export default () => (
  <div className="page">
    <Parallax firstImage={code} middleImage={MuchCode} lastImage={code} json={development} />
  </div>
);
