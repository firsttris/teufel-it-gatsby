import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import SectionHeader from './SectionHeader';

interface Props {
  style?: any;
  title: string;
  text: string;
}

export default (props: Props) => (
  <div className="row py-3" style={props.style}>
    <div className="col">
      <SectionHeader title={props.title} />
      {props.text ? <FormattedMessage id={props.text} /> : null}
    </div>
  </div>
);
