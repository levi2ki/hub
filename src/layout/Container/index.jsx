import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import styles from './style.scss';


export default class Container extends PureComponent {
  static propTypes = {
    fluid: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.shape(),
  };

  render() {
    const { fluid, children, className, style } = this.props;
    const Style = ClassNames({
      [styles['container-fluid']]: fluid,
      [styles.container]: !fluid,
      [className]: className,
    });

    return (
      <div className={Style} style={style}>
        {children}
      </div>
    )
  }
}
