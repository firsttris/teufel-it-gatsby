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
    const verticalCenterStyle: any = {
      display: 'inline-flex',
      alignItems: 'center'
    };
    const colorTransitionStyle: any = { transition: 'color 2s linear 1s' };
    colorTransitionStyle.color = this.state.flipped ? 'white' : '#f00';
    return (
      <div
        className="py-2 col-xs-12 col-md-6 col-lg-6"
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
        onClick={this.onClick}
      >
        <div style={verticalCenterStyle}>
          <i className={this.props.icon} style={colorTransitionStyle} aria-hidden="true" />
          <span className="text-uppercase" style={{ marginLeft: '10px', fontSize: '20px' }}>
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
