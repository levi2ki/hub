import React, { Component } from 'react';
import { Avatar, Typography, withStyles } from 'material-ui';
import ClassNames from 'classnames';
import styled from 'styled-components';
import { SectionDivider, Accent } from '../../components';


const sizes = 240;
const avatarStyles = {
  bigAvatar: {
    width: `${sizes}px`,
    height: `${sizes}px`,
  },
  floating: {
    position: 'absolute',
    top: `-${sizes / 2}px`,
    boxShadow: '0 -2px 3px 1px #fff, 0 4px 13px -3px #777',
  },
  headerStyle: {
    fontSize: '3rem',
    fontWeight: 600,
    lineHeight: '1.04245em',
  },
};

const StyledHeader = styled.header`
      position: relative; 
      justify-content: center;
      display: flex;
      padding-top: ${sizes / 1.85}px;
      flex-direction: column;
      align-items: center;
      margin-bottom: 25px;
`;

@withStyles(avatarStyles)
class StyledAvatar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Avatar src={require('../../assets/images/avatar.jpg')}
              alt={'avatar'}
              className={ClassNames(classes.bigAvatar, classes.floating)}
              imgProps={{ style: { filter: 'contrast(77%) brightness(115%)' } }}
      />

    );
  }
}

@withStyles(avatarStyles)
class StyledTypo extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <Typography
        variant="display1"
        component='h1'
        align='center'
        className={classes.headerStyle}
        paragraph
      >
        {children}
      </Typography>

    );
  }
}

const Header = () => (
  <StyledHeader>
    <StyledAvatar />
    <StyledTypo>
      Hello!
      <br />
      I'm <Accent>Andrew</Accent> and here's my CV
    </StyledTypo>
    <SectionDivider />
    <SectionDivider />
  </StyledHeader>
);

export default Header;
