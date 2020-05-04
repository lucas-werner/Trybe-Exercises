import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { handleClick } = props;
  const { list } = props.children  
  return (
    <div className='Alert'>
      {list.map(({item, id}) => <div key={id} onClick={e => handleClick(e.target.innerText)}>
        {item}
        </div>)}
    </div>
  )
}

export default Alert;

Alert.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.string,
    timeSeconds: PropTypes.number,
  }),
  hideComponent: PropTypes.func,
}