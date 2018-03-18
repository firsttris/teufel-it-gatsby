import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  icon: string;
  title: string;
  text: string;
}

interface State {
  flipped: boolean;
}

const verticalCenterStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center'
};

const spanStyle: React.CSSProperties = {
  marginLeft: '10px',
  fontSize: '20px'
};

export default class FadeCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      flipped: false
    };
  }

  onMouseLeave = () => {
    this.setState({ flipped: false });
  };

  onMouseEnter = () => {
    this.setState({ flipped: true });
  };

  onClick = () => {
    this.setState({ flipped: true });
  };

  render() {
    const colorTransitionStyle: React.CSSProperties = { transition: 'color 2s linear 1s' };
    colorTransitionStyle.color = this.state.flipped ? 'white' : '#f00';
    return (
      <div
        className="py-2 col-xs-12 col-md-6 col-lg-6"
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
        onClick={this.onClick}
      >
        <div style={verticalCenterStyle}>
          <span style={colorTransitionStyle}>
            <i className={this.props.icon} />
          </span>
          <span className="text-uppercase" style={spanStyle}>
            <FormattedMessage id={this.props.title} />
          </span>
        </div>
        <p>
          <FormattedMessage id={this.props.text} />
        </p>
      </div>
    );
  }
}
