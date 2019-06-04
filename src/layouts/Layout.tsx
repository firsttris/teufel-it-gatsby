import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import './../assets/fontawesome/css/all.css';

export class Layout extends React.Component<{ location?: Location; locale?: string }, {}> {
  render() {
    return (
      <div>
        <Navigation location={this.props.location} locale={this.props.locale} />
        {this.props.children}
      </div>
    );
  }
}
