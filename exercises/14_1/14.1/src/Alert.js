import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent } = props;
  const {title, content, timeSeconds} = props.children
  setTimeout(() => hideComponent(), timeSeconds);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Alert;

Alert.propTypes = {
  content: PropTypes.string,
  contentTitle: PropTypes.string,
  hideComponent: PropTypes.func,
}