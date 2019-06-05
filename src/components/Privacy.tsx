import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';

const Lines = require('../assets/images/backgrounds/lines.png');

const containerStyle: React.CSSProperties = {
  backgroundImage: `url(${Lines})`,
  position: 'absolute',
  width: '100%',
  paddingTop: '100px'
};

export const Privacy = (props: { locale: string }) => (
  <div style={containerStyle}>
    <div className="container">
      <div className="row">
        <div className="w-100">
          <h3>{getTranslatedLabel('PRIVACYPOLICY', props.locale)}</h3>
        </div>
        <div className="mt-4">
          <h4>{getTranslatedLabel('GENERAL_INFORMATION', props.locale)}</h4>
          <div>Tristan Teufel</div>
          <div>Werkstr.10</div>
          <div>D-77815 Bühl</div>
          <div>E-Mail: info@teufel-it.de</div>
        </div>
        <div className="mt-4">
          <h4>{getTranslatedLabel('PRIVACY_FUNDAMENTALS', props.locale)}</h4>
          <p>{getTranslatedLabel('PRIVACY_FUNDAMENTALS_TEXT', props.locale)}</p>
        </div>
        <div className="mt-4">
          <h4>{getTranslatedLabel('PRIVACY_ACCESS_DATA', props.locale)}</h4>
          <div>{getTranslatedLabel('PRIVACY_DOES_NOT_SAVE_ACCESS_DATA', props.locale)}</div>
          <div>
            <a href="https://github.com/firsttris/teufel-it-gatsby" target="_blank">
              {getTranslatedLabel('PRIVACY_CHECK_SOURCE_CODE_ON_GITHUB', props.locale)}
            </a>
          </div>
          <div>{getTranslatedLabel('PRIVACY_WEBSITE_HOSTED_ON_GITHUB', props.locale)}</div>
          <div>
            <a href="https://help.github.com/articles/github-privacy-statement/" target="_blank">
              {getTranslatedLabel('PRIVACY_READ_ABOUT_PRIVACY_OF_GITUHB', props.locale)}
            </a>
          </div>
          <div>{getTranslatedLabel('PRIVACY_WE_USE_GOOGLE_ANALYTICS', props.locale)}</div>
        </div>
        <div className="mt-4">
          <h4>{getTranslatedLabel('PRIVACY_USE_OF_ANALYTICS', props.locale)}</h4>
          <p>{getTranslatedLabel('PRIVACY_GOOGLE_ANALYTICS_TEXT1', props.locale)}</p>
          <p>{getTranslatedLabel('PRIVACY_GOOGLE_ANALYTICS_TEXT2', props.locale)}</p>
          <p>
            <a href={'https://www.google.com/analytics/learn/privacy.html?hl=de'} target="_blank">
              Google Analytics {getTranslatedLabel('PRIVACYPOLICY', props.locale)}
            </a>
          </p>
        </div>
        <div className="mt-4">
          <h4>Cookies</h4>
          <p>{getTranslatedLabel('PRIVACY_COOKIE_TEXT1', props.locale)}</p>
          <p>{getTranslatedLabel('PRIVACY_COOKIE_TEXT2', props.locale)}</p>
          <div>
            {getTranslatedLabel('PRIVACY_FOLLOWING_COOKIES_ARE_USED', props.locale)}
            <ul>
              <li>
                __cfduid = Cloudflare,{' '}
                <a
                  href="https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-"
                  target="_blank"
                >
                  {getTranslatedLabel('PRIVACY_MORE_INFO', props.locale)}
                </a>
              </li>
              <li>
                ga, gat = Google Analytics,{' '}
                <a
                  href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                  target="_blank"
                >
                  {getTranslatedLabel('PRIVACY_MORE_INFO', props.locale)}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h4>{getTranslatedLabel('PRIVACY_PROCESSING_OF_DATA', props.locale)}</h4>
          <p>{getTranslatedLabel('PRIVACY_PROCESSING_OF_DATA_TEXT', props.locale)}</p>
        </div>
        <div className="mt-4">
          <h4>{getTranslatedLabel('PRIVACY_RIGHTS', props.locale)}</h4>
          <p>
            {getTranslatedLabel('PRIVACY_CONTACT', props.locale)}{' '}
            <a href="mailto:info@teufel-it.de">info@teufel-it.de</a>{' '}
            {getTranslatedLabel('PRIVACY_CONCERN', props.locale)}
          </p>
        </div>
        <div className="mt-4">
          <h4>{getTranslatedLabel('PRIVACY_POLICY', props.locale)}</h4>
          <p>{getTranslatedLabel('PRIVACY_POLICY_TEXT', props.locale)}</p>
        </div>
      </div>
    </div>
  </div>
);
