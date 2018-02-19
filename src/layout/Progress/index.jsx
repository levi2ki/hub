import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { LinearProgress } from 'react-md';


class Progress extends PureComponent {
  static propTypes = {
    indeterminate: PropTypes.bool,
    style: PropTypes.shape(),
  };

  render() {

    return (
      <LinearProgress id={'dfsodfj234234'} />
    );
  }
}

export default Progress;
