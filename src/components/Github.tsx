import { FixedObject } from 'gatsby-image';
import * as React from 'react';
import { Contact } from './Contact';
import { FullImage } from './FullImage';
import { GithubItem } from './GithubItem';
import { Header } from './Header';
import { Impressum } from './Impressum';
import { SectionHeaderWithSubRow } from './SectionHeaderWithSubRow';

interface Props {
  locale: string;
  repos: any;
  background: FixedObject;
  code: FixedObject;
}

interface State {
  searchInput: string;
  filteredRepositories: any[];
}

export class Github extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchInput: '',
      filteredRepositories: this.props.repos
    };
  }

  onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      document.activeElement.blur();
    }
  };

  search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const repos = this.props.repos.filter((repo: any) =>
      repo.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({ filteredRepositories: repos, searchInput: event.target.value });
  };

  reset = () => {
    this.setState({ searchInput: '', filteredRepositories: this.props.repos });
  };

  render() {
    return (
      <div className="container-fluid" style={{ backgroundImage: `url(${this.props.background})` }}>
        <div className="text-center">
          <FullImage image={this.props.code} height="550px" />
          <Header locale={this.props.locale} />
        </div>
        <div className="container">
          <SectionHeaderWithSubRow title="NAVIGATION_PROJECTS" text="GITHUB_SUBTITLE" locale={this.props.locale} />
          <div className="form-group pt-3">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                id="Search"
                placeholder="Search"
                value={this.state.searchInput}
                onChange={this.search}
                onKeyPress={this.onEnter}
              />
              <div className="input-group-prepend" onClick={this.reset} style={{ cursor: 'pointer' }}>
                <div className="input-group-text">
                  <i className="fas fa-trash-alt" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="list-group pb-3">
            {this.state.filteredRepositories.map((repository, index) => (
              <GithubItem key={index} repo={repository} />
            ))}
          </div>
        </div>
        <Contact locale={this.props.locale} />
        <Impressum locale={this.props.locale} />
      </div>
    );
  }
}
