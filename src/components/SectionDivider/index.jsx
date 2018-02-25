import React, { Component } from 'react';
import { Divider, withStyles } from 'material-ui';
@withStyles({
  sizes: {
    display: 'block',
    width: '87%',
    margin: '0 auto 2px',

  }
})
export default class SectionDivider extends Component {
  render() {
    const {classes}= this.props;
    return (
      <Divider className={classes.sizes}/>
    )
  }
}
