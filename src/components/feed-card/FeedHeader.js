import React from 'react';
import { Link } from 'react-router-dom';

import CircleImg from '../CircleImg';
import { MdMoreHoriz } from 'react-icons/md';


export const FeedHeader = (props) => (
  <div className="feed-header d-flex position-relative">
    <span className="feed-ddown">
      <MdMoreHoriz className="icon-menu"/>
    </span>
    <div className="usr-img">
      <CircleImg
        width="48px"
        height="48px"
        src="http://i.pravatar.cc/144"
        alt="avatar"
        borderWidth="0"
      />
    </div>
    <div className="usr-info ml-2">
      <Link to="/" className="usr-name fs-md fc-black font-medium-bold">
        Denny Fauzan
      </Link>
      <span className="fc-light-grey fs-sm d-block">Front End Developer</span>
      <span className="fc-light-grey fs-sm d-block">3d</span>
    </div>
  </div>
)