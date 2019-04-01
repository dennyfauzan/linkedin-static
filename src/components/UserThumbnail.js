import React from 'react';
import CircleImg from './CircleImg';
import { Link } from 'react-router-dom';

export const UserThumbnail = ({ name, headline, time }) => (
  <div id="user-thumbnail" className="d-flex flex-nowrap">
    <div className="usr-img">
      <CircleImg
        width="48px"
        height="48px"
        src="http://i.pravatar.cc/144"
        alt="avatar"
        borderWidth="0"
      />
    </div>
    <div className="usr-info">
      <Link to="/" className="usr-name fs-md fc-black font-medium-bold">
        { name }
      </Link>
      <span className="fc-light-grey fs-sm d-block">{ headline }</span>
      <span className="fc-light-grey fs-sm d-block">{ time }</span>
    </div>
  </div>
)