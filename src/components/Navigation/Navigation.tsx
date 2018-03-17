import * as React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import LinkItem from './LinkItem';
import './Navigation.css';

const Paper = require('../../assets/images/backgrounds/paper.png');

const navButtonStyle: React.CSSProperties = {
  margin: '10px',
  color: '#f00',
  textDecoration: 'none'
};

const ulStyle: React.CSSProperties = {
  listStyleType: 'none',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  backgroundImage: `url(${Paper})`,
  borderBottom: '1px solid #f00'
};

interface Props {
  intl: InjectedIntl;
}

interface State {
  currentPath: string;
  hideNav: boolean;
}

class Navigation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentPath: '',
      hideNav: true
    };
  }

  componentWillMount(): void {
    this.setState({ currentPath: location.pathname });
  }

  onClick = (): void => {
    this.setState({ currentPath: location.pathname, hideNav: true });
  };

  toggleNavigation = (): void => {
    this.setState({ hideNav: !this.state.hideNav });
  };

  scrollToBottom = (): void => {
    window.scrollTo(0, document.body.scrollHeight - 850);
  };

  render(): JSX.Element {
    const navItems = [
      { path: `/${this.props.intl.locale}/`, name: this.props.intl.messages.NAVIGATION_DEVELOPMENT },
      { path: `/${this.props.intl.locale}/Consulting`, name: this.props.intl.messages.NAVIGATION_CONSULTING },
      { path: `/${this.props.intl.locale}/Github`, name: this.props.intl.messages.NAVIGATION_PROJECTS },
      { path: `/${this.props.intl.locale}/SendToKodi`, name: this.props.intl.messages.NAVIGATION_SENDTOKODI }
    ];

    return (
      <div className="nav-bar">
        <ul style={ulStyle}>
          <li className="nav-button">
            <a className="btn btn-outline-dark pull-left" style={navButtonStyle} onClick={this.scrollToBottom}>
              Contact
            </a>
            <a className="btn btn-outline-dark pull-right" style={navButtonStyle} onClick={this.toggleNavigation}>
              <i className="fa fa-bars" aria-hidden="true" />
            </a>
            <div className="clearfix" />
          </li>
          <div className={this.state.hideNav ? 'navigation' : ''}>
            {navItems.map((item, index) => {
              return (
                <div key={index} onClick={this.onClick}>
                  <LinkItem focus={this.state.currentPath === item.path} path={item.path} name={item.name} />
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    );
  }
}

export default injectIntl<{}>(Navigation);
