import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';
import styled from 'styled-components';

export class UnstyledPage extends Component {
  state = {
    isLoading: true,
    hasErrors: false,
  };

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    setTimeout(() => {this.setState({ isLoading: false, hasErrors: true });}, 3000);
    window.removeEventListener('load', this.handleLoad);
  };

  render() {
    const { className } = this.props;
    const { isLoading } = this.state;
    return (
      <React.Fragment>
        {isLoading &&
        <div style={{ position: 'fixed', zIndex: 1001, top: 0, left: 0, right: 0 }}>
          <LinearProgress variant="indeterminate" />
        </div>
        }
        <div className={className}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

const Page = styled(UnstyledPage)`
  padding-top: 180px;
  width: 100%;
  box-sizing: border-box;
  background-color: #EDEDED;
  min-height: 100vh;
`;

export default Page;
