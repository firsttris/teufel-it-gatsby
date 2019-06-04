import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';

interface Props {
  title: string;
}

const containerStyle: React.CSSProperties = { fontSize: '30px', letterSpacing: '10px' };

export default (props: Props) => (
  <div className="text-uppercase" style={containerStyle}>
    {getTranslatedLabel(props.title)}
  </div>
);
