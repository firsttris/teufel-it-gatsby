import Img from 'gatsby-image';
import * as React from 'react';

interface Props {
  image: any;
  height: string;
}

interface State {}

export class FullImage extends React.Component<Props, State> {
  render() {
    return (
      <div className="row">
        <div className="col" style={{ padding: 0 }}>
          <Img
            fluid={this.props.image}
            style={{
              position: 'relative',
              opacity: 0.65,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              minHeight: '400px',
              height: this.props.height
            }}
          />
        </div>
      </div>
    );
  }
}
