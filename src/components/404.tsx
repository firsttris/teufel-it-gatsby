import Link from 'gatsby-link';
import * as React from 'react';
import { getTranslatedLabel, getCurrentLanguage } from './../translations/provider'

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

const NotFound = (props: {}) => (
  <div style={containerStyle}>
    <img src={Unicorn} alt="Not Found" style={imageStyle} />
    <h2>{getTranslatedLabel("ERROR_TEXT")}</h2>
    <div>{getTranslatedLabel("ERROR_NOT_FOUND")}</div>
    <div>{getTranslatedLabel("ERROR_CONTACT_US")}</div>
    <div>
      <div className="spacer" style={spacerStyle} />
      <div>
        <b>{getTranslatedLabel("CONTACT_TITLE")}
        </b>
      </div>
      <div>
        <a href="https://www.teufel-it.de">www.teufel-it.de</a>
      </div>
      <div>
        <a href="mailto:info@teufel-it.de">info@teufel-it.de</a>
      </div>
      <br />
      <Link to={`/${getCurrentLanguage()}/`} className="btn btn-dark">
        {getTranslatedLabel("ERROR_START")}
      </Link>
    </div>
  </div>
);

export default NotFound;
