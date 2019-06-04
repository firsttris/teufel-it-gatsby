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
  match: MediaQueryList;
  ieHack: MediaQueryList;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.match = window.matchMedia('(max-width: 575px)');
    this.ieHack = window.matchMedia('all and (-ms-high-contrast: none), (-ms-high-contrast: active)');
    this.match.addListener(this.setToScroll);
    this.ieHack.addListener(this.setToScroll);
    fullImageStyle.backgroundAttachment = window.innerWidth < 575 ? 'scroll' : 'fixed';
  }

  componentWillUnmount() {
    this.match.removeListener(this.setToScroll);
    this.ieHack.removeListener(this.setToScroll);
  }

  setToScroll = (mql: MediaQueryList, ev: MediaQueryListEvent): any => {
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
              height: this.props.height,
              backgroundImage: `url(${this.props.image})`
            }}
          />
        </div>
      </div>
    );
  }
}
