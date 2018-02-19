import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Toolbar from './components/Toolbar';
import Container from './layout/Container';
import Page from './layout/Page/index';
import Progress from './layout/Progress';


require('typeface-roboto');
import './styles/global.scss';
import 'material-design-icons/iconfont/material-icons.css';
import './styles/theming.scss';


class Root extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    // setTimeout(() => {this.setState({ isLoading: false });}, 3000);
    window.removeEventListener('load', this.handleLoad);
  };

  render() {
    const { isLoading } = this.state;
    return (
      <Fragment>
        <Page>
          {isLoading && <Progress indeterminate style={{ position: 'fixed', zIndex: 500, bottom: 0 }} />}
          <Toolbar />
          <Container className={'mdc-toolbar-fixed-adjust'}>
            Hello here
          <div style={{ height: '1111px' }} />
          </Container>
        </Page>
      </Fragment>
    );
  }
}

render(
  <Root />,
  document.getElementById('app'),
);
