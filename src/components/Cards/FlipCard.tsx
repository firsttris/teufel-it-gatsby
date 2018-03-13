import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import './FlipCard.css';

interface Props {
  class: string;
  icon: string;
  title: string;
  text: string;
}

interface State {
  flipped: boolean;
}

class FlipCard extends React.Component<Props, State> {
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
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    const flipStyle = {
      width: '100%',
      transformStyle: 'preserve-3d',
      transition: 'transform 1s linear',
      transform: 'rotateY(0deg)'
    };
    flipStyle.transform = this.state.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    return (
      <div
        className={this.props.class}
        style={{ perspective: '800px', height: '250px' }}
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
        onClick={this.onClick}
      >
        <div style={flipStyle}>
          <div className="cards">
            <i className={this.props.icon} aria-hidden="true" style={{ fontSize: '10em', color: '#f00' }} />
            <div className="text-uppercase" style={{ fontSize: '1.5em' }}>
              <FormattedMessage id={this.props.title} />
            </div>
          </div>
          <div className="cards" style={{ transform: 'rotateY(180deg)' }}>
            <div
              className="p-2"
              style={{
                border: '1px solid #f00',
                borderRadius: '5px',
                width: '50%',
                margin: 'auto',
                height: '175px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <FormattedMessage id={this.props.text} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCard;
