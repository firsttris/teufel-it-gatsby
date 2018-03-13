import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  title: string;
}

const containerStyle: React.CSSProperties = { fontSize: '30px', letterSpacing: '10px' };

export default (props: Props) => (
  <div className="text-uppercase" style={containerStyle}>
    <FormattedMessage id={props.title} />
  </div>
);
