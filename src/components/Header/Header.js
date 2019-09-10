import React from 'react';
import './Header.css';

const header = props => {
  return (
    <div className="Header">
      {props.title}
    </div>
  );
};

export default header;