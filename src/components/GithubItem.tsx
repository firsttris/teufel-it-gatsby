import * as React from 'react';
/// <reference path="./Emojify.d.ts" />
import Emojify = require('react-emojione');

const smallStyle: React.CSSProperties = { float: 'right', width: '100px', textAlign: 'right' };
const resolveEmojis = (text: string) => (text ? Emojify.emojify(text) : null);

interface Props {
  repo: any;
}

export default (props: Props) => (
  <div>
    <a
      href={props.repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.repo.name}</h5>
      </div>
      <small style={smallStyle}>
        <i className="fas fa-star mx-1" />
        <span className="pr-2">{props.repo.stargazers_count}</span>
        <i className="fas fa-code-branch mx-1" />
        <span>{props.repo.forks_count}</span>
      </small>
      <p className="mb-1">{resolveEmojis(props.repo.description)}</p>
      <small>{props.repo.language}</small>
    </a>
  </div>
);