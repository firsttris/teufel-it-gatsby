import * as React from 'react';
import Contact from './Contact';
import FullImage from './FullImage';
import Header from './Header';
import Impressum from './Impressum';
import Portfolio from './Portfolio';
import Principle from './Principle';

const Lines = require('./../assets/images/backgrounds/lines.png');

interface Props {
  json: any;
  firstImage: any;
  middleImage: any;
  lastImage: any;
}

const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundImage: `url(${Lines})`
};

export default (props: Props) => (
  <div className="container-fluid" style={containerStyle}>
    <FullImage image={props.firstImage} height="550px" />
    <Header />
    <Portfolio json={props.json.portfolio} />
    <FullImage image={props.middleImage} height="350px" />
    <Principle json={props.json.principles} />
    <FullImage image={props.lastImage} height="350px" />
    <Contact />
    <Impressum />
  </div>
);
