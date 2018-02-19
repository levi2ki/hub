import React, { Component } from 'react';
import styles from './style.scss';

export default class Page extends Component {
  render() {
    const { page } = styles;
    return (
      <React.Fragment>
        <div className={page}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
