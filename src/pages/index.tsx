import { navigate, withPrefix } from 'gatsby';
import * as React from 'react';

const navigateTo = (locale: string) => {
  navigate(withPrefix(`/${locale}/`));
};

export default (): any => {
  if (typeof location !== 'undefined') {
    let locale = 'en';
    if (navigator.language.includes('de')) {
      locale = 'de';
    }
    navigateTo(locale);
  }

  /*
  return null;
    */
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="fas fa-5x fa-spinner fa-spin" style={{ color: 'Red', margin: 'auto 0' }} />
    </div>
  );

  /* 
  const aStyle: React.CSSProperties = {
    margin: '10px',
    color: '#f00',
    textDecoration: 'none'
  };

  return (
    <div>
      <h1>choose your language</h1>
      <a className="btn btn-outline-dark" style={aStyle} onClick={() => navigateTo('de')}>
        German
      </a>
      |
      <a className="btn btn-outline-dark" style={aStyle} onClick={() => navigateTo('en')}>
        English
      </a>
    </div>
  );
  */
};
