import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const rowStyle: React.CSSProperties = { position: 'absolute', top: '200px', width: '100%' };
const bannerStyle: React.CSSProperties = { backgroundColor: '#4B4B4B', display: 'inline-block' };
const headerStyle: React.CSSProperties = { fontSize: '35px', letterSpacing: '7px', color: '#f00' };
const subTitleStyle: React.CSSProperties = { fontSize: '15px', letterSpacing: '5px', color: 'white' };

export default (): JSX.Element => (
  <div className="row" style={rowStyle}>
    <div className="col">
      <div className="p-3" style={bannerStyle}>
        <div style={headerStyle}>
          <FormattedMessage id="HEADER_TITLE" />
        </div>
        <div className="pt-3" style={subTitleStyle}>
          <FormattedMessage id="HEADER_SUBTITLE" />
        </div>
      </div>
    </div>
  </div>
);
