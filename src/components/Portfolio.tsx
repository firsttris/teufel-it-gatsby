import * as React from 'react';
import { FlipCards } from './Cards/FlipCards';
import { SectionHeaderWithSubRow } from './SectionHeaderWithSubRow';

interface Props {
  json: any;
  locale: string;
}

export const Portfolio = (props: Props) => (
  <div className="row">
    <div className="col">
      <SectionHeaderWithSubRow title={props.json.title} text={props.json.text} locale={props.locale} />
      <FlipCards cards={props.json.cards} locale={props.locale} />
    </div>
  </div>
);
