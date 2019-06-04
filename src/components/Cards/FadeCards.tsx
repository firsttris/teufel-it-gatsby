import * as React from 'react';
import { FadeCard } from './FadeCard';

interface Props {
  style: any;
  cards: any[];
  locale: string;
}

export const FadeCards = (props: Props) => (
  <div className="row py-3" style={props.style}>
    {props.cards.map((card, index) => {
      return <FadeCard key={index} icon={card.iconClass} title={card.title} text={card.text} locale={props.locale} />;
    })}
  </div>
);
