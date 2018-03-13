import * as React from 'react';

interface Props {
  image: any;
  height: string;
}

interface State {}

const fullImageStyle: React.CSSProperties = {
  position: 'relative',
  opacity: 0.65,
  backgroundAttachment: window.innerWidth < 575 ? 'scroll' : 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '400px'
};

const match = window.matchMedia('(max-width: 575px)');
const ieHack = window.matchMedia('all and (-ms-high-contrast: none), (-ms-high-contrast: active)');

export default class FullImage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    ieHack.addListener(this.setToScroll);
    match.addListener(this.setToScroll);
  }

  componentWillUnmount() {
    ieHack.removeListener(this.setToScroll);
    match.removeListener(this.setToScroll);
  }

  setToScroll = (mql: MediaQueryList) => {
    fullImageStyle.backgroundAttachment = mql.matches ? 'scroll' : 'fixed';
    this.forceUpdate();
  };

  render() {
    return (
      <div className="row">
        <div className="col" style={{ padding: 0 }}>
          <div
            style={{
              ...fullImageStyle,
              backgroundImage: `url(${this.props.image})`,
              height: this.props.height
            }}
          />
        </div>
      </div>
    );
  }
}
