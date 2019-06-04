import * as React from 'react';
import { Contact } from './Contact';
import { FullImage } from './FullImage';
import { Header } from './Header';
import { Impressum } from './Impressum';
import { Portfolio } from './Portfolio';
import { Principle } from './Principle';

const Lines = require('./../assets/images/backgrounds/lines.png');

interface Props {
  json: any;
  firstImage: any;
  middleImage: any;
  lastImage: any;
  locale: string;
}

const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundImage: `url(${Lines})`
};

export const Parallax = (props: Props) => (
  <div className="container-fluid" style={containerStyle}>
    <FullImage image={props.firstImage} height="550px" />
    <Header locale={props.locale} />
    <Portfolio json={props.json.portfolio} locale={props.locale} />
    <FullImage image={props.middleImage} height="350px" />
    <Principle json={props.json.principles} locale={props.locale} />
    <FullImage image={props.lastImage} height="350px" />
    <Contact locale={props.locale} />
    <Impressum locale={props.locale} />
  </div>
);
