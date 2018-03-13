const Paper = require('./../assets/images/backgrounds/paper.png');
import * as React from 'react';
import FadeCards from './Cards/FadeCards';
import SectionHeaderWithSubRow from './SectionHeaderWithSubRow';

const blackBackgroundStyle = { backgroundImage: `url(${Paper})`, color: 'white' };

interface Props {
  json: any;
}
export default (props: Props) => (
  <div className="row">
    <div className="col">
      <SectionHeaderWithSubRow title={props.json.title} text={props.json.text} style={blackBackgroundStyle} />
      <FadeCards cards={props.json.cards} style={blackBackgroundStyle} />
    </div>
  </div>
);
