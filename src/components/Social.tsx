import * as React from 'react';

interface Props {
  url: string;
  icon: string;
}

export default (props: Props) => (
  <a
    className="btn btn-outline-dark"
    style={{
      margin: '10px',
      color: '#f00',
      textDecoration: 'none'
    }}
    target="_blank"
    rel="noopener noreferrer"
    href={props.url}
  >
    <i className={'fa-2x ' + props.icon} aria-hidden="true" />
  </a>
);
