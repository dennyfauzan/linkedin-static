import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = ({navItems}) => {
  const listItem = navItems.map((item, i) => {
    return (
      <div className="nav-item col-4 p-0" key={`${item}${i}`}>
        <Link to="/">{item}</Link>
      </div>
    )
  });
  return (
    <div className="nav-items row m-0">
      {listItem}
    </div>
  );
}

export default FooterNav;