import React from 'react';
import './Alert.css';

const alert = props => {

  const style = props.children ? {} : { display: 'none' };

  return (
    <div className="Alert" style={style}>
      <div className="Alert__message">
        {props.children}
      </div>
      <div onClick={() => props.setAlert(null)} className="Alert__dismiss">
        DISMISS
      </div>
    </div>
  );
};

export default alert;