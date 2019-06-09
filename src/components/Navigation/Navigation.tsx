import { navigate } from 'gatsby';
import * as React from 'react';
import { getTranslatedLabel } from './../../translations/provider';
import { LinkItem } from './LinkItem';
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
  location: any;
  locale: string;
}

interface State {
  hideNav: boolean;
}

export class Navigation extends React.Component<Props, State> {
  prevIndex: number = 0;
  constructor(props: Props) {
    super(props);
    this.state = {
      hideNav: true
    };
  }

  onClick = (index: number, path: string): void => {
    this.setState({ hideNav: true });
  };

  onLanguageClick = () => {
    const pathname: string = this.props.location.pathname.includes('/de/')
      ? this.props.location.pathname.replace('/de/', '/en/')
      : this.props.location.pathname.replace('/en/', '/de/');
    navigate(pathname);
  };

  toggleNavigation = (): void => {
    this.setState({ hideNav: !this.state.hideNav });
  };

  scrollToBottom = (): void => {
    window.scrollTo(0, document.body.scrollHeight - 850);
  };

  render(): JSX.Element {
    const navItems = [
      { path: `/${this.props.locale}/`, name: getTranslatedLabel('NAVIGATION_DEVELOPMENT', this.props.locale) },
      {
        path: `/${this.props.locale}/it-strategieberatung/`,
        name: getTranslatedLabel('NAVIGATION_CONSULTING', this.props.locale)
      },
      { path: `/${this.props.locale}/projects/`, name: getTranslatedLabel('NAVIGATION_PROJECTS', this.props.locale) },
      {
        path: `/${this.props.locale}/sendtokodi/`,
        name: getTranslatedLabel('NAVIGATION_SENDTOKODI', this.props.locale)
      }
    ];

    return (
      <div className="nav-bar">
        <ul style={ulStyle}>
          <div>
            <li className="nav-button" style={{ float: 'left' }}>
              <a className="btn btn-outline-dark pull-left" style={navButtonStyle} onClick={this.scrollToBottom}>
                Contact
              </a>
              <a className="btn btn-outline-dark pull-right" style={navButtonStyle} onClick={this.toggleNavigation}>
                <i className="fa fa-bars" aria-hidden="true" />
              </a>
              <div className="clearfix" />
            </li>
            <li
              className="btn btn-outline-dark m-md-1 m-2"
              style={{ color: '#f00', cursor: 'pointer', float: 'right' }}
              onClick={this.onLanguageClick}
            >
              {this.props.locale}
            </li>
            <div className="clearfix d-md-none" />
          </div>
          <div className={this.state.hideNav ? 'navigation' : ''}>
            {navItems.map((item, index) => {
              return (
                <LinkItem
                  key={index}
                  index={index}
                  focus={this.props.location.pathname.replace('/teufel-it-gatsby', '') === item.path}
                  path={item.path}
                  name={item.name}
                  onClick={this.onClick}
                />
              );
            })}
          </div>
        </ul>
      </div>
    );
  }
}
