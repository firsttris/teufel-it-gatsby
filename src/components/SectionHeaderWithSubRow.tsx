import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';
import { SectionHeader } from './SectionHeader';

interface Props {
  style?: any;
  title: string;
  text: string;
  locale: string;
}

export const SectionHeaderWithSubRow = (props: Props) => (
  <div className="row py-3" style={props.style}>
    <div className="col">
      <SectionHeader title={props.title} locale={props.locale} />
      {props.text ? getTranslatedLabel(props.text, props.locale) : null}
    </div>
  </div>
);
