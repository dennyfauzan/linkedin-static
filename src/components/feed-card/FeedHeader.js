import React from 'react';

import { MdMoreHoriz } from 'react-icons/md';
import { UserThumbnail } from '../UserThumbnail';


export const FeedHeader = (props) => (
  <div className="feed-header d-flex position-relative">
    <span className="feed-ddown">
      <MdMoreHoriz className="icon-menu"/>
    </span>
    <UserThumbnail name={'Denny Fauzan'} headline={'Front End Developer'} time={'3d'}/>
  </div>
)