import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css';
const CustomButton = ({text, warnMessage, hint, indent}) => {
  const buttonClasses = `custom-button ${warnMessage?'warn':''} ${indent ? 'indented':''}`;

const handleClick = () => {
    if (warnMessage) {
      alert(warnMessage);}};

 const handleTouch = () => {
    if (hint) {
     alert(hint);
    } };

return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      onTouchStart={handleTouch} >
    {text}</button>
  );
};

CustomButton.propTypes = {
text: PropTypes.string.isRequired,
warnMessage: PropTypes.string,
hint: PropTypes.string,
indent: PropTypes.bool,
};

export default CustomButton;
