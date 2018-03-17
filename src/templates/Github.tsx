import * as React from 'react';
import Contact from './../components/Contact';
import FullImage from './../components/FullImage';
import GithubItem from './../components/GithubItem';
import Header from './../components/Header';
import Impressum from './../components/Impressum';
import SectionHeaderWithSubRow from './../components/SectionHeaderWithSubRow';

const Lines = require('./../assets/images/backgrounds/lines.png');
const OldComputer = require('./../assets/images/code.jpg');

const containerStyle: React.CSSProperties = { backgroundImage: `url(${Lines})` };

interface Props {}

interface State {
  searchInput: string;
  filteredRepositories: any[];
  repositories: any[];
}

class Github extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchInput: '',
      filteredRepositories: [],
      repositories: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/firsttris/repos').then(data =>
      data.json().then(result => {
        const repos = result.filter((repository: any) => repository.fork === false);
        repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
        this.setState({ repositories: repos, filteredRepositories: repos });
      })
    );
  }

  onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      document.activeElement.blur();
    }
  };

  search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const repos = this.state.repositories.filter(repository =>
      repository.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({ filteredRepositories: repos, searchInput: event.target.value });
  };

  reset = () => {
    this.setState({ searchInput: '', filteredRepositories: this.state.repositories });
  };

  render() {
    return (
      <div className="container-fluid page" style={containerStyle}>
        <div className="text-center">
          <FullImage image={OldComputer} height="550px" />
          <Header />
        </div>
        <div className="container">
          <SectionHeaderWithSubRow title="NAVIGATION_PROJECTS" text="GITHUB_SUBTITLE" />
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
            {this.state.filteredRepositories.map((repository, index) => <GithubItem key={index} repo={repository} />)}
          </div>
        </div>
        <Contact />
        <Impressum />
      </div>
    );
  }
}

export default Github;
