import React from 'react';
import styled from 'styled-components';


const Accent = styled.span`
  color: #870000;
  font-weight: 900;
  text-shadow: 1px 2px #c3b158, -2px -1px #52b652;
  opacity: 0.74;
  ${props => props.fontSize ? `font-size: ${props.fontSize};` : ''}
  ${props => props.textTransform ? `text-transform: ${props.textTransform};` : ''}
`;

export default Accent;
