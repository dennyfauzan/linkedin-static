import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaShareSquare } from 'react-icons/fa';

export const FeedFooter = (props) => {
  return (
    <div className="feed-footer d-flex mr-4 ml-4">
      <div className="footer-like">
        <FaRegThumbsUp className="fc-light-grey"/>
        <span className="font-medium-bold fc-light-grey fs-md ml-2">Likes</span>
      </div>
      <div className="footer-comment pl-3 pr-3">
        <FaRegCommentAlt className="fc-light-grey"/>
        <span className="font-medium-bold fc-light-grey fs-md ml-2">Comment</span>
      </div>
      <div className="footer-share">
        <FaShareSquare className="fc-light-grey"/>
        <span className="font-medium-bold fc-light-grey fs-md ml-2">Share</span>
      </div>
    </div>
  )
}