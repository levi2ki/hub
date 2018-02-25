import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';


export class Progress extends PureComponent {
  static propTypes = {
    indeterminate: PropTypes.bool,
    style: Pr1opTypes.shape(),
  };

  render() {

    return (
      <CircularProgress />
    );
  }
}
