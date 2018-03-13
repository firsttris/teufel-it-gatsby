import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parallax from './../components/Parallax';
const MuchCode = require('./../assets/images/much_code.jpg');
const OldComputer = require('./../assets/images/oldComputer2.jpg');
const DevelopmentJson = require('./../pages/development.json');

export default () => (
  <div>
    <Helmet>
      <title>Teufel IT, Software ist unser Handwerk</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Teufel IT, Softwareentwicklung, JavaScript, NodeJs, Integration" />
      <link rel="canonical" href="http://teufel-it.de" />
    </Helmet>
    <Parallax image1={OldComputer} image2={MuchCode} image3={OldComputer} json={DevelopmentJson} />
  </div>
);
