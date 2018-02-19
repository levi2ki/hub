import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import '@material/button/mdc-button.scss';

class Button extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };
  render() {
    return (
      <button className='mdc-button mdc-button--raised'>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
