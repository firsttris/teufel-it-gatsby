import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';
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
      {props.text ? getTranslatedLabel(props.text) : null}
    </div>
  </div>
);
