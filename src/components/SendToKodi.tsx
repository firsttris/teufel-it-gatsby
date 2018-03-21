import * as React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import Contact from './Contact';
import Impressum from './Impressum';

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

interface Props extends InjectedIntlProps {}

interface State {
  reviews: any[];
}

class SendToKodi extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    setTimeout(() => this.callService(), 1000);
  }

  callService() {
    const countries = ['de', 'us', 'gb', 'nl', 'ro', 'fr'];
    for (const index in countries) {
      if (countries[index]) {
        this.requestReview(countries[index]);
      }
    }
  }

  requestReview(country: string) {
    fetch('https://itunes.apple.com/' + country + '/rss/customerreviews/id=1113517603/sortBy=mostRecent/json')
      .then(data =>
        data.json().then((result: any) => {
          const entries = result.feed.entry;
          for (const index in entries) {
            if (!entries[index]['im:artist']) {
              const review = {
                name: entries[index].author.name.label,
                text: entries[index].content.label,
                rating: entries[index]['im:rating'].label,
                title: entries[index].title.label
              };
              const reviews = this.state.reviews.slice();
              reviews.push(review);
              this.setState({ reviews });
            }
          }
        })
      )
      .catch(error => {
        console.error(error); // tslint:disable-line
      });
  }

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
              <h3>
                <FormattedMessage id="SENDTOKODI_DESCRIPTION_LABEL" />
              </h3>
              <div className="row py-3">
                <div className="col-xs-12 col-md-12 col-lg-6">
                  <FormattedMessage id="SENDTOKODI_DESCRIPTION" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a
                href={'https://itunes.apple.com/' + this.props.intl.locale + '/app/sendtokodi/id1113517603'}
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
              <h5>
                <FormattedMessage id="SENDTOKODI_SUPPORTED_ADDONS_LABEL" />
              </h5>
              <ul className="py-3">
                <li>Youtube</li>
                <li>Soundcloud</li>
                <li>Vimeo</li>
                <li>Twitch</li>
                <li>Mixcloud</li>
              </ul>
              <h5>
                <FormattedMessage id="SENDTOKODI_SCREENSHOTS_LABEL" />
              </h5>
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
              <h5 className="py-3">
                <FormattedMessage id="SENDTOKODI_REVIEWS" />
              </h5>
              {this.state.reviews.map((review, ri) => (
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
        <Contact />
        <Impressum />
      </div>
    );
  }
}

export default injectIntl<{}>(SendToKodi);
