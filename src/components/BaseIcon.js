import React from 'react';
import { IconContext } from 'react-icons';

const BaseIcon = (props) => (
  <IconContext.Provider value={{...props}}>
    <div className="d-flex justify-content-center align-items-center">
      {props.children}
    </div>
  </IconContext.Provider>
)

export default BaseIcon;