import { toImage } from 'emojione';
import * as React from 'react';

const smallStyle: React.CSSProperties = { float: 'right', width: '100px', textAlign: 'right' };

interface Props {
  repo: any;
}

export const GithubItem = (props: Props) => (
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
      <div className="mb-1" dangerouslySetInnerHTML={{ __html: toImage(props.repo.description || '') }} />
      <small>{props.repo.language}</small>
    </a>
  </div>
);
