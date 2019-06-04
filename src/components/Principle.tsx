import * as React from 'react';
import { FadeCards } from './Cards/FadeCards';
import { SectionHeaderWithSubRow } from './SectionHeaderWithSubRow';

const Paper = require('./../assets/images/backgrounds/paper.png');

const blackBackgroundStyle: React.CSSProperties = { backgroundImage: `url(${Paper})`, color: 'white' };

interface Props {
  json: any;
  locale: string;
}
export const Principle = (props: Props) => (
  <div className="row">
    <div className="col">
      <SectionHeaderWithSubRow
        title={props.json.title}
        text={props.json.text}
        style={blackBackgroundStyle}
        locale={props.locale}
      />
      <FadeCards cards={props.json.cards} style={blackBackgroundStyle} locale={props.locale} />
    </div>
  </div>
);
