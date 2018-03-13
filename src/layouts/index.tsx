import { withPrefix } from 'gatsby-link';
import * as React from 'react';

export default () => {
  if (typeof location !== 'undefined') {
    const homeUrl = withPrefix(`/de/`);
    location.replace(homeUrl);
  }
};
