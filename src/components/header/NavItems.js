import React from 'react';
import { Link } from 'react-router-dom';
import BaseIcon from '../BaseIcon';
import CircleImg from '../CircleImg';
import { MdArrowDropDown } from 'react-icons/md';
import { MdGridOn } from 'react-icons/md';

const NavItems = ({ items }) => {
  const listItems = items.map((item, i) => {
    return (
      <li className="nav-item" key={`${i}-${item.url}`}>
        <Link
          className="nav-link d-flex flex-column align-items-center justify-content-center"
          to={`${item.url}`}>
          <BaseIcon className="nav-icon">
            {item.icon}
          </BaseIcon>
          <span className="nav-title">{ item.title }</span>
        </Link>
      </li>
    )
  });

  return (
    <ul className="nav nav-items fs-sm">
      { listItems }
      <li className="nav-item me">
        <div className="nav-link d-flex flex-column align-items-center justify-content-center">
          <CircleImg
            src="http://i.pravatar.cc/48"
            alt="avatar"
            border={true}/>
            <div className="d-flex align-items-center justify-content-center">
              <span className="nav-title ml-1">Me</span>
              <MdArrowDropDown className="icon-dropdown" />
            </div>
        </div>
      </li>
      <li className="nav-item work">
        <div className="nav-link d-flex flex-column align-items-center justify-content-center">
          <BaseIcon className="nav-icon">
            <MdGridOn />
          </BaseIcon>
          <div className="d-flex align-items-center justify-content-center">
            <span className="nav-title ml-1">Work</span>
            <MdArrowDropDown className="icon-dropdown" />
          </div>
        </div>
      </li>
      <li className="nav-item spotlight">
        <Link className="fc-spotlight" to="/">
          Free Upgrade to Premium
        </Link>
      </li>
    </ul>
  )
}

export default NavItems;