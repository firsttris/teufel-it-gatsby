import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';
import { Contact } from './Contact';
import { Impressum } from './Impressum';

const Lines = require('./../assets/images/backgrounds/lines.png');
const SendToKodiScreen1 = require('./../assets/images/SendToKodi/1.jpg');
const SendToKodiScreen2 = require('./../assets/images/SendToKodi/2.jpg');
const SendToKodiScreen3 = require('./../assets/images/SendToKodi/3.jpg');
const SendToKodiScreen4 = require('./../assets/images/SendToKodi/4.jpg');
const Logo = require('./../assets/images/SendToKodi/logo.jpg');

const imgStyle: React.CSSProperties = {
  borderRadius: '25px',
  border: '1px solid black',
  height: 'auto',
  width: '250px'
};

const containerStyle: React.CSSProperties = { backgroundImage: `url(${Lines})` };

interface Props {
  locale: string;
  reviews: any[];
}

interface State {}

export class SendToKodi extends React.Component<Props, State> {
  render() {
    return (
      <div className="container-fluid" style={containerStyle}>
        <div style={{ height: '75px' }} />
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>SendToKodi</h2>
              <p>
                <i>von Tristan Teufel</i>
              </p>
              <img style={imgStyle} src={Logo} />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <h3>{getTranslatedLabel('SENDTOKODI_DESCRIPTION_LABEL', this.props.locale)}</h3>
              <div className="row py-3">
                <div className="col-xs-12 col-md-12 col-lg-6">
                  {getTranslatedLabel('SENDTOKODI_DESCRIPTION', this.props.locale)}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a
                href={'https://itunes.apple.com/' + this.props.locale + '/app/sendtokodi/id1113517603'}
                className="btn btn-primary mt-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-apple" aria-hidden="true" /> Appstore
              </a>{' '}
              <a
                href="https://chrome.google.com/webstore/detail/sendtokodi/gbcpfpcacakaadapjcdchbdmdnfbnbaf"
                className="btn btn-success mt-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-chrome" aria-hidden="true" /> Webstore
              </a>{' '}
              <a
                href="https://github.com/firsttris/repository.sendtokodi/raw/master/repository.sendtokodi/repository.sendtokodi-0.0.1.zip"
                className="btn btn-dark mt-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download" aria-hidden="true" /> Repository
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <h5>{getTranslatedLabel('SENDTOKODI_SUPPORTED_ADDONS_LABEL', this.props.locale)}</h5>
              <ul className="py-3">
                <li>Youtube</li>
                <li>Soundcloud</li>
                <li>Vimeo</li>
                <li>Twitch</li>
                <li>Mixcloud</li>
              </ul>
              <h5>{getTranslatedLabel('SENDTOKODI_SCREENSHOTS_LABEL', this.props.locale)}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-3 py-4">
              <img style={imgStyle} src={SendToKodiScreen1} />
            </div>
            <div className="col-xs-12 col-md-12 col-lg-3 py-4">
              <img style={imgStyle} src={SendToKodiScreen2} />
            </div>
            <div className="col-xs-12 col-md-12 col-lg-3 py-4">
              <img style={imgStyle} src={SendToKodiScreen3} />
            </div>
            <div className="col-xs-12 col-md-12 col-lg-3 py-4">
              <img style={imgStyle} src={SendToKodiScreen4} />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <h5 className="py-3">{getTranslatedLabel('SENDTOKODI_REVIEWS', this.props.locale)}</h5>
              {this.props.reviews.map((review, ri) => (
                <div key={ri}>
                  <div>
                    <b>{review.title}</b>
                  </div>
                  <span>
                    <i>{review.name} </i>
                  </span>
                  {[1, 2, 3, 4, 5].map((x, xi) => (
                    <i className="fas fa-star" style={{ color: 'gold' }} key={xi} aria-hidden="true" />
                  ))}
                  <p>{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Contact locale={this.props.locale} />
        <Impressum locale={this.props.locale} />
      </div>
    );
  }
}