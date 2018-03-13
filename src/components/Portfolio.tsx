import * as React from 'react';
import FlipCards from './Cards/FlipCards';
import SectionHeaderWithSubRow from './SectionHeaderWithSubRow';

interface Props {
  json: any;
}
export default (props: Props) => (
  <div className="row">
    <div className="col">
      <SectionHeaderWithSubRow title={props.json.title} text={props.json.text} />
      <FlipCards cards={props.json.cards} />
    </div>
  </div>
);
