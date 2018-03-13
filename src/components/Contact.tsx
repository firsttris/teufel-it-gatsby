import * as React from 'react';
import SectionHeader from './SectionHeader';
import Social from './Social';

const spanStyle: React.CSSProperties = { fontSize: '30px', letterSpacing: '10px' };

export default () => (
  <div className="row py-3 text-center">
    <div className="col">
      <span className="text-uppercase" style={spanStyle}>
        <SectionHeader title="CONTACT_TITLE" />
      </span>
      <div>
        <Social icon="fas fa-phone" url="tel:+49 176 45744166" />
        <Social icon="fas fa-envelope" url="mailto:info@teufel-it.de" />
        <Social icon="fab fa-xing-square" url="https://www.xing.com/profile/Tristan_Teufel" />
        <Social icon="fab fa-linkedin" url="https://de.linkedin.com/pub/tristan-teufel/8a/30a/b5" />
        <Social icon="fab fa-github" url="https://github.com/firsttris" />
      </div>
    </div>
  </div>
);
