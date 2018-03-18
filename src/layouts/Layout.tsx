import 'bootstrap/dist/css/bootstrap.css';
import { Location } from 'history';
import * as React from 'react';
import Helmet from 'react-helmet';
import { InjectedIntl, InjectedIntlProps, injectIntl, IntlProvider, Messages } from 'react-intl';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navigation from '../components/Navigation/Navigation';
import './Layout.css';
require('./../assets/font-awesome_5.0.8.js');

interface TransitionHandlerState {}
interface TransitionHandlerProps {
  location: Location;
}
class TransitionHandler extends React.Component<TransitionHandlerProps, TransitionHandlerState> {
  shouldComponentUpdate(nextProps: TransitionHandlerProps, nextState: TransitionHandlerState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const { children } = this.props;
    return <div className="transition-container">{children}</div>;
  }
}

const getPathDepth = (location: Location) => {
  let pathArr = location.pathname.split('/');
  pathArr = pathArr.filter(n => n !== '');
  return pathArr.length;
};

interface LayoutProps extends RouteComponentProps<{}>, InjectedIntlProps {
  children: () => JSX.Element;
  locale: string;
  messages: Messages;
}

interface LayoutState {
  prevDepth: number;
  className: string;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      className: 'pageSliderRight',
      prevDepth: getPathDepth(props.location)
    };
  }

  onClassChange = (className: string) => {
    this.setState({ className });
  };

  render() {
    return (
      <IntlProvider locale={this.props.locale} messages={this.props.messages}>
        <div>
          <Helmet
            title="Teufel IT, IT-Strategieberatung, Geschäftsanwendungen, Geschäftsprozesse"
            meta={[
              { name: 'description', content: 'Teufel IT, Softwareentwicklung, JavaScript, NodeJs, Integration' },
              { name: 'keywords', content: 'Softwareentwicklung, JavaScript, NodeJs, React' }
            ]}
          />
          <Navigation onClick={this.onClassChange} intl={this.props.intl} />
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames={this.state.className}
              timeout={{ enter: 1000, exit: 1000 }}
              mountOnEnter={false}
              unmountOnExit={true}
            >
              <TransitionHandler location={this.props.location}>{this.props.children()}</TransitionHandler>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </IntlProvider>
    );
  }
}

export default withRouter(Layout);
