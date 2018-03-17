import 'bootstrap/dist/css/bootstrap.css';
import { Location } from 'history';
import * as React from 'react';
import Helmet from 'react-helmet';
import { IntlProvider, Messages } from 'react-intl';
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

interface LayoutProps extends RouteComponentProps<{}> {
  children: () => JSX.Element;
  locale: string;
  messages: Messages;
}

interface LayoutState {
  prevDepth: number;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      prevDepth: getPathDepth(props.location)
    };
  }

  componentWillReceiveProps() {
    this.setState({ prevDepth: getPathDepth(this.props.location) });
  }

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
          <Navigation />
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames={
                getPathDepth(this.props.location) - this.state.prevDepth > 0 ? 'pageSliderLeft' : 'pageSliderRight'
              }
              timeout={{ enter: 500, exit: 500 }}
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
