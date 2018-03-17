import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parallax from './../components/Parallax';

const MuchCode = require('./../assets/images/much_code.jpg');
const OldComputer = require('./../assets/images/oldComputer2.jpg');
const DevelopmentJson = require('./../pages/development.json');

export default () => (
  <div className="page">
    <Parallax firstImage={OldComputer} middleImage={MuchCode} lastImage={OldComputer} json={DevelopmentJson} />
  </div>
);
