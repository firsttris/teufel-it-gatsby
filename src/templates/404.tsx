import Link from 'gatsby-link';
import * as React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

const Lines = require('../assets/images/backgrounds/lines.png');
const Unicorn = require('../assets/images/NotFound/unicorn-small.png');

const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'monospace',
  backgroundImage: `url(${Lines})`,
  position: 'absolute',
  width: '100%',
  height: window.innerHeight,
  paddingTop: '100px'
};
const imageStyle: React.CSSProperties = { marginTop: '50px', marginBottom: '50px', height: '200px' };
const spacerStyle: React.CSSProperties = { height: '80px' };

const NotFound = (props: InjectedIntlProps) => (
  <div style={containerStyle}>
    <img src={Unicorn} alt="Not Found" style={imageStyle} />
    <h2>
      <FormattedMessage id="ERROR_TEXT" />
    </h2>
    <div>
      <FormattedMessage id="ERROR_NOT_FOUND" />
    </div>
    <div>
      <FormattedMessage id="ERROR_CONTACT_US" />
    </div>
    <div>
      <div className="spacer" style={spacerStyle} />
      <div>
        <b>
          <FormattedMessage id="CONTACT_TITLE" />
        </b>
      </div>
      <div>
        <a href="https://www.teufel-it.de">www.teufel-it.de</a>
      </div>
      <div>
        <a href="mailto:info@teufel-it.de">info@teufel-it.de</a>
      </div>
      <br />
      <Link to={`/${props.intl.locale}/`} className="btn btn-dark">
        <FormattedMessage id="ERROR_START" />
      </Link>
    </div>
  </div>
);

export default injectIntl<{}>(NotFound);
