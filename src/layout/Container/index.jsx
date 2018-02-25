import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export class UnstyledContainer extends PureComponent {
  static propTypes = {
    fluid: PropTypes.bool,
  };

  render() {
    const { children, className, style } = this.props;

    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }
}

export const Container = styled(UnstyledContainer)`
  display: block;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #fafafa;
  ${ props => props.fluid ? '': 'max-width: 1280px;'}
`;

