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
          <p>
            Kontaktieren Sie <a href="mailto:info@teufel-it.de">info@teufel-it.de</a> mit Ihrem Anliegen.
          </p>
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
