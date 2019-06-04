import { Link } from 'gatsby';
import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';

const Lines = require('../assets/images/backgrounds/lines.png');
const Unicorn = require('../assets/images/NotFound/unicorn-small.png');

const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'monospace',
  backgroundImage: `url(${Lines})`,
  position: 'absolute',
  width: '100%',
  height: '100vh',
  paddingTop: '100px'
};
const imageStyle: React.CSSProperties = { marginTop: '50px', marginBottom: '50px', height: '200px' };
const spacerStyle: React.CSSProperties = { height: '80px' };

export const NotFound = (props: { locale: string }) => (
  <div style={containerStyle}>
    <img src={Unicorn} alt="Not Found" style={imageStyle} />
    <h2>{getTranslatedLabel('ERROR_TEXT', props.locale)}</h2>
    <div>{getTranslatedLabel('ERROR_NOT_FOUND', props.locale)}</div>
    <div>{getTranslatedLabel('ERROR_CONTACT_US', props.locale)}</div>
    <div>
      <div className="spacer" style={spacerStyle} />
      <div>
        <b>{getTranslatedLabel('CONTACT_TITLE', props.locale)}</b>
      </div>
      <div>
        <a href="https://www.teufel-it.de">www.teufel-it.de</a>
      </div>
      <div>
        <a href="mailto:info@teufel-it.de">info@teufel-it.de</a>
      </div>
      <br />
      <Link to={`/${props.locale}/`} className="btn btn-dark">
        {getTranslatedLabel('ERROR_START', props.locale)}
      </Link>
    </div>
  </div>
);
