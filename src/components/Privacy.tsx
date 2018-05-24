import Link from 'gatsby-link';
import * as React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

const Lines = require('../assets/images/backgrounds/lines.png');
const Unicorn = require('../assets/images/NotFound/unicorn-small.png');

const containerStyle: React.CSSProperties = {
  backgroundImage: `url(${Lines})`,
  position: 'absolute',
  width: '100%',
  paddingTop: '100px'
};
const imageStyle: React.CSSProperties = { marginTop: '50px', marginBottom: '50px', height: '200px' };
const spacerStyle: React.CSSProperties = { height: '80px' };

const Privacy = (props: InjectedIntlProps) => (
  <div style={containerStyle}>
    <div className="container">
      <div className="row">
        <div className="w-100">
          <h3>Datenschutzerklärung</h3>
        </div>
        <div className="mt-4">
          <h4>Allgemeine Angaben</h4>
          <div>Tristan Teufel</div>
          <div>Werkstr.10</div>
          <div>D-77815 Bühl</div>
          <div>E-Mail: info@teufel-it.de</div>
        </div>
        <div className="mt-4">
          <h4>Grundlegendes</h4>
          <p>
            Diese Datenschutzerklärung soll die Nutzer dieser Website über die Art, den Umfang und den Zweck der
            Erhebung und Verwendung personenbezogener Daten durch den Webseitenbetreiber informieren.
          </p>
        </div>
        <div className="mt-4">
          <h4>Zugriffsdaten</h4>
          <p>Die Website selbst speichert keine Zugriffsdaten. </p>{' '}
          <p>
            Die Website ist bei <a href="https://pages.github.com/">Github-Pages</a> gehostet. Github-Pages erstellt
            keine Zugriffsdaten, die für den Seitenbereiber zugänglich sind.{' '}
          </p>
          <p>
            <a href="https://help.github.com/articles/github-privacy-statement/" target="_blank">
              Lesen Sie mehr über die Datenschutzerklärung von Github.
            </a>{' '}
          </p>
          <p>
            Der Quell-Code der Website ist frei auf Github einsehbar{' '}
            <a href="https://github.com/firsttris/teufel-it-gatsby" target="_blank">
              teufel-it-gatsby
            </a>
          </p>
          <p>Zur Optimierung und Analyse unseres Angebots setzen wir den Dienst „Google Analytics“ von Google ein.</p>
        </div>
        <div className="mt-4">
          <h4>Verwendung von Google Analytics</h4>
          <p>
            Diese Webseite benutzt Google Analytics, einen Webanalysedienst der Google Inc. (folgend: Google). Google
            Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine
            Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über
            Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort
            gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von
            Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des
            Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle
            IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
          </p>
          <p>
            Im Auftrag des Betreibers dieser Webseite wird Google diese Informationen benutzen, um Ihre Nutzung der
            Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der
            Webseitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu
            erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
            anderen Daten von Google zusammengeführt.
          </p>
          <p>
            <a href={'https://www.google.com/analytics/learn/privacy.html?hl=de'} target="_blank">
              Google Analytics Datenschutzerklärung
            </a>
          </p>
          <p>Sie haben die Möglichkeit, die Speicherung der Cookies auf Ihrem Gerät zu verhindern</p>
        </div>
        <div className="mt-4">
          <h4>Cookies</h4>
          <p>
            Wie beinahe alle Webseiten verwendet auch diese Website Cookies. Dazu werden kleine Textdateien in relation
            zu dieser Website auf ihrem Computer gespeichert.
          </p>
          <p>
            Falls Sie die Verwendung von Cookies unterbinden wollen, besteht dazu bei Ihrem Browser die Möglichkeit, die
            Annahme und Speicherung neuer Cookies zu verhindern. Gespeicherte Cookies können jederzeit wieder gelöscht
            werden.
          </p>
          <div>
            Folgende Cookies werden eingesetzt:
            <ul>
              <li>
                __cfduid = Cloudflare,{' '}
                <a
                  href="https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-"
                  target="_blank"
                >
                  mehr Informationen
                </a>
              </li>
              <li>
                ga, gat = Google Analytics,{' '}
                <a
                  href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                  target="_blank"
                >
                  mehr Informationen
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h4>Erhebung und Verarbeitung personenbezogener Daten</h4>
          <p>
            Die Website sammelt keine personenbezogenen Daten. Zur Anzeige werden Informationen von Github und Apple
            geladen. Dabei handelt es sich um Meta Daten zu meinen Github Account und Bewertungen aus dem AppStore von
            Apple.
          </p>
        </div>
        <div className="mt-4">
          <h4>Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und Widerspruch</h4>
          <p>Der Seitenbereiber speichert keine personenbezogenen Daten.</p>
        </div>
        <div className="mt-4">
          <h4>Änderung unserer Datenschutzbestimmungen</h4>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen
            rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung
            umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue
            Datenschutzerklärung.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default injectIntl<{}>(Privacy);
