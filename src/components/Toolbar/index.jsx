import React, { Component, Fragment } from 'react';
import '@material/toolbar/mdc-toolbar.scss';
import { MDCToolbar } from '@material/toolbar';
import './style.scss';


class Toolbar extends Component {
  componentDidMount() {
    const toolbar = MDCToolbar.attachTo(this.tb);
    toolbar.fixedAdjustElement = this.adj;
  }

  /**
   * @todo в текщуем раскладе тайтл не по центру, тулбар до конца не сжимается, возможно, с контентом всё наладится
   * */
  render() {
    return (
      <Fragment>
        <header
          id={'my-flex'}
          className={
            `
            mdc-toolbar mdc-toolbar--fixed
            mdc-toolbar--waterfall
            mdc-toolbar--flexible
            `
          }
          ref={node => {this.tb = node;}}
        >
          <div className='mdc-toolbar__row'>
            <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
              <a href="#" className="material-icons mdc-toolbar__menu-icon">menu</a>
              <span className="mdc-toolbar__title">my CV</span>
            </section>
            <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
              <a href="#" className="material-icons mdc-toolbar__menu-icon">menu</a>
              <span className="mdc-toolbar__title">my CV</span>
            </section>
          </div>
        </header>

        <div className={'mdc-toolbar-fixed-adjust'} ref={node => {this.adj = node;}} />
      </Fragment>
    );
  }
}

Toolbar.propTypes = {};

export default Toolbar;
