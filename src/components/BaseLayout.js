import React from 'react';
import Header from './header/Header';

export const BaseLayout = (props) => (
  <div>
    <Header/>
    <div className="container with-header">
        { props.children }
    </div>
  </div>
)