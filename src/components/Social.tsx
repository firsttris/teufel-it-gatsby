const classNames = require('classnames');
import * as React from 'react';

interface Props {
  url: string;
  icon: string;
}

const aStyle: React.CSSProperties = {
  margin: '10px',
  color: '#f00',
  textDecoration: 'none'
};

export default (props: Props) => (
  <a className="btn btn-outline-dark" style={aStyle} target="_blank" rel="noopener noreferrer" href={props.url}>
    <i className={classNames('fa-2x', props.icon)} aria-hidden="true" />
  </a>
);
