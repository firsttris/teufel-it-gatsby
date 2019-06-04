import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import './../assets/fontawesome/css/all.css';

class Layout extends React.Component<{ location: Location }, {}> {
  render() {
    return (
      <div>
        <Navigation location={this.props.location} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
