import * as React from 'react';
import './FullImage.css';

interface Props {
  image: any;
  height: string;
}

export default (props: Props) => (
  <div className="row">
    <div className="col" style={{ padding: 0 }}>
      <div
        className="full-image"
        style={{
          backgroundImage: `url(${props.image})`,
          height: props.height
        }}
      />
    </div>
  </div>
);
