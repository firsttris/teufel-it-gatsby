import * as React from 'react';
import { Helmet } from 'react-helmet';
import Parallax from './../components/Parallax';
const Meeting = require('./../assets/images/meeting2.jpg');
const Server = require('./../assets/images/server2.jpg');
const ConsultingJson = require('./../pages/consulting.json');

export default () => (
  <div>
    <Helmet>
      <title>Teufel IT, IT-Strategieberatung, Geschäftsanwendungen, Geschäftsprozesse</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Teufel IT, Softwareentwicklung, Integration, IT-Beratung, IT-Strategieberatung, Geschäftsanwendungen, Geschäftsprozesse"
      />
      <link rel="canonical" href="http://teufel-it.de/it-strategieberatung" />
    </Helmet>
    <Parallax image1={Meeting} image2={Server} image3={Meeting} json={ConsultingJson} />
  </div>
);
