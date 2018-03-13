import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  title: string;
}

export default (props: Props) => (
  <div className="text-uppercase" style={{ fontSize: '30px', letterSpacing: '10px' }}>
    <FormattedMessage id={props.title} />
  </div>
);
