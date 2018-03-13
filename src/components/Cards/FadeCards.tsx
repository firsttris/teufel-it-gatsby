import * as React from 'react';
import FadeCard from './FadeCard';

interface Props {
  style: any;
  cards: any[];
}

export default (props: Props) => (
  <div className="row py-3" style={props.style}>
    {props.cards.map((card, index) => {
      return <FadeCard key={index} icon={card.iconClass} title={card.title} text={card.text} />;
    })}
  </div>
);
