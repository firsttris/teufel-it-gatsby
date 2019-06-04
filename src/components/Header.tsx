import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';

const rowStyle: React.CSSProperties = { position: 'absolute', top: '200px', width: '100%' };
const bannerStyle: React.CSSProperties = { backgroundColor: '#4B4B4B', display: 'inline-block' };
const headerStyle: React.CSSProperties = { fontSize: '35px', letterSpacing: '7px', color: '#f00' };
const subTitleStyle: React.CSSProperties = { fontSize: '15px', letterSpacing: '5px', color: 'white' };

export const Header = (props: { locale: string }): JSX.Element => (
  <div className="row" style={rowStyle}>
    <div className="col">
      <div className="p-3" style={bannerStyle}>
        <div style={headerStyle}>{getTranslatedLabel('HEADER_TITLE', props.locale)}</div>
        <div className="pt-3" style={subTitleStyle}>
          {getTranslatedLabel('HEADER_SUBTITLE', props.locale)}
        </div>
      </div>
    </div>
  </div>
);
