import * as React from 'react';
const Lines = require('./../assets/images/backgrounds/lines.png');
import Contact from './Contact';
import FullImage from './FullImage';
import Header from './Header';
import Impressum from './Impressum';
import Portfolio from './Portfolio';
import Principle from './Principle';

interface Props {
  json: any;
  image1: any;
  image2: any;
  image3: any;
}

export default (props: Props) => (
  <div
    className="container-fluid"
    style={{
      textAlign: 'center',
      backgroundImage: `url(${Lines})`
    }}
  >
    <FullImage image={props.image1} height="550px" />
    <Header />
    <Portfolio json={props.json.portfolio} />
    <FullImage image={props.image2} height="350px" />
    <Principle json={props.json.principles} />
    <FullImage image={props.image3} height="350px" />
    <Contact />
    <Impressum />
  </div>
);
