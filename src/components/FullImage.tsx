import * as React from 'react';

interface Props {
  image: any;
  height: string;
}

interface State {}

const fullImageStyle: React.CSSProperties = {
  position: 'relative',
  opacity: 0.65,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '400px'
};

export class FullImage extends React.Component<Props, State> {
  render() {
    return (
      <div className="row">
        <div className="col" style={{ padding: 0 }}>
          <div
            style={{
              ...fullImageStyle,
              height: this.props.height,
              backgroundImage: `url(${this.props.image})`
            }}
          />
        </div>
      </div>
    );
  }
}
