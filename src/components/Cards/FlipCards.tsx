import * as React from 'react';
import { FlipCard } from './FlipCard';

interface Props {
  cards: any;
  locale: string;
}

export const FlipCards = (props: Props) => (
  <div className="row py-3">
    {props.cards.map((card: any, index: number) => {
      return (
        <FlipCard
          key={index}
          class={card.gridClass}
          icon={card.iconClass}
          title={card.title}
          text={card.text}
          locale={props.locale}
        />
      );
    })}
  </div>
);
