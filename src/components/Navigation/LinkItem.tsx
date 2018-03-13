import Link from 'gatsby-link';
import * as React from 'react';
import './LinkItem.css';

const linkStyle: React.CSSProperties = {
  display: 'block',
  color: 'white',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none'
};

interface Props {
  focus: boolean;
  path: string;
  name: string;
}

interface State {
  hover: boolean;
}

export default class LinkItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onMouseLeave = () => {
    this.setState({ hover: false });
  };

  onMouseEnter = () => {
    this.setState({ hover: true });
  };

  getLinkStyle() {
    if (this.props.focus) {
      return { ...linkStyle, ...{ backgroundColor: '#f00' } };
    }
    if (this.state.hover) {
      return { ...linkStyle, ...{ backgroundColor: 'white', color: 'black' } };
    }
    return linkStyle;
  }

  render() {
    return (
      <li className="link-item" onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
        <Link style={this.getLinkStyle()} to={this.props.path}>
          {this.props.name}
        </Link>
      </li>
    );
  }
}
