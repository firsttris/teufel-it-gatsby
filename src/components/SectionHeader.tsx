import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';

interface Props {
  title: string;
  locale: string;
}

const containerStyle: React.CSSProperties = { fontSize: '30px', letterSpacing: '10px' };

export const SectionHeader = (props: Props) => (
  <div className="text-uppercase" style={containerStyle}>
    {getTranslatedLabel(props.title, props.locale)}
  </div>
);
