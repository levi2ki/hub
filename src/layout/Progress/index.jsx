import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import '@material/linear-progress/mdc-linear-progress.scss';


class Progress extends PureComponent {
  static propTypes = {
    indeterminate: PropTypes.bool,
    style: PropTypes.shape(),
  };

  render() {
    const {indeterminate, style} = this.props;
    const rootStyles = ClassNames('mdc-linear-progress', {
      'mdc-linear-progress--indeterminate': indeterminate,
    });

    return (
      <div>
        <div role="progressbar"
             className={rootStyles}
             style={style}
        >
          <div className='mdc-linear-progress__buffering-dots' />
          <div className='mdc-linear-progress__buffer' />
          <div className='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
            <span className='mdc-linear-progress__bar-inner' />
          </div>
          <div className='mdc-linear-progress__bar mdc-linear-progress__secondary-bar'>
            <span className='mdc-linear-progress__bar-inner' />
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
