import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ showComponent, isDisable, content }) => {

  return (
    <button
      type="button"    
      onClick={() => showComponent()}
    >
      {content}
    </button>
  )
}

export default Button;

Button.propTypes = {
  content: PropTypes.string,
  isDisable: PropTypes.bool,
  showComponent: PropTypes.func,
  value: PropTypes.string,
}
