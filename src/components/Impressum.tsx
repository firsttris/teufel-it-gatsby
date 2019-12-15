import { Link } from 'gatsby';
import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';

const Paper = require('./../assets/images/backgrounds/paper.png');

const blackBackgroundStyle: React.CSSProperties = {
  backgroundImage: `url(${Paper})`,
  color: 'white',
  textAlign: 'left',
  fontSize: 'small'
};
const textStyle: React.CSSProperties = { color: 'white' };
const fontSizeMedium: React.CSSProperties = { fontSize: 'medium' };

export const Impressum = (props: { locale: string }) => (
  <div className="row" style={blackBackgroundStyle}>
    <div className="container py-3">
      <div>© 2019 Teufel-IT</div>

      <div className="row">
        <div className="col-xs-12 col-md-3 col-lg-3 py-3">
          <div style={fontSizeMedium}>{getTranslatedLabel('OWNER', props.locale)}</div>
          <br />
          <div>Tristan Teufel</div>
          <div>Werkstr.10a</div>
          <div>D-77815 Bühl</div>
        </div>
        <div className="col-xs-12 col-md-3 col-lg-3 py-3">
          <div style={fontSizeMedium}>{getTranslatedLabel('SOURCE_CODE', props.locale)}</div>
          <br />
          <div>
            <a
              style={textStyle}
              href="https://github.com/firsttris/teufel-it-gatsby"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              <i className="fab fa-github" aria-hidden="true" /> {getTranslatedLabel('GITHUB_PAGE_LINK', props.locale)}
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-md-3 col-lg-3 py-3">
          <div style={fontSizeMedium}>{getTranslatedLabel('SOURCE_FOR_IMAGES', props.locale)}</div>
          <br />
          <div>
            <a href="http://unsplash.com" style={textStyle} target="_blank" rel="noopener noreferrer">
              www.unsplash.com{' '}
            </a>
          </div>
          <div>
            <a href="http://shutterstock.com" style={textStyle} target="_blank" rel="noopener noreferrer">
              www.shutterstock.com{' '}
            </a>
          </div>
          <div>
            <a href="http://fontawesome.io" style={textStyle} target="_blank" rel="noopener noreferrer">
              www.fontawesome.io
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-md-3 col-lg-3 py-3">
          <div style={fontSizeMedium}>{getTranslatedLabel('CONTACT_TITLE', props.locale)}</div>
          <br />
          <div>
            <a href="tel:+4917645744166" style={textStyle}>
              +49 (0) 176 457 44 1 66
            </a>
          </div>
          <div>
            <a href="mailto:info@teufel-it.de" style={textStyle}>
              info@teufel-it.de
            </a>
          </div>
          <div>UST-ID DE304672147</div>
          <Link to={`/${props.locale}/privacy/`} style={blackBackgroundStyle}>
            {getTranslatedLabel('PRIVACYPOLICY', props.locale)}
          </Link>
        </div>
      </div>
    </div>
  </div>
);
