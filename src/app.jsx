import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import Toolbar from './components/Toolbar';
import Container from './layout/Container';
import Page from './layout/Page';
import Progress from './layout/Progress';


require('typeface-roboto');
import 'normalize-scss/sass/normalize/_import-now.scss';
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
          <Container>
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
