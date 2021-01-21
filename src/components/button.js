import React from 'react';
import PropTypes from 'prop-types';

const Button = ( props ) => {
  return (
    <a href={ props.path ? props.path : props.email ? `mailto:${props.email}` : null } target={ props.target === true ? "_blank" : null } rel="noopener noreferrer">
      <p className={`${props.className ? props.className : "text-center py-2 px-8" } inline-block bg-lt-blue-500 text-white font-medium rounded-md hover:bg-lt-blue-600 transform transition-all ease-in-out duration-200 hover:-translate-y-1 shadow-none hover:shadow-lg`}>
        {props.text}
      </p>
    </a>
  )
}

export default Button

Button.propTypes = {
  path: PropTypes.any,
  email: PropTypes.string,
  target: PropTypes.bool,
  text: PropTypes.string.isRequired
}