import React from 'react';
import Header from './header/Header';
import Footer from './Footer/Footer';

export const BaseLayout = (props) => (
  <div>
    <Header/>
    <div className="container with-header">
        { props.children }
    </div>
    <Footer />
  </div>
)