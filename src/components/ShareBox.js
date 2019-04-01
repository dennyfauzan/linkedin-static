import React, { Component } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FiCamera, FiVideo } from 'react-icons/fi';
import { TiDocument } from 'react-icons/ti';

class ShareBox extends Component {
  render() {
    return (
      <div className="c-share-box d-flex card-base mb-2">
        <div className="share-box start-post">
          <FaRegEdit className="icon-post"/>
          <span>Start Post</span>
        </div>
        <div className="share-box start-img">
          <FiCamera />
        </div>
        <div className="share-box start-video">
          <FiVideo />
        </div>
        <div className="share-box start-docs">
          <TiDocument />
        </div>
        <div className="share-box_cta col-12">
          <span className="fc-primary font-medium-bold fs-md">Write an article</span>
          <span className="fc-light-grey fs-md"> on Linkedin</span>
        </div>
      </div>
    )
  }
}

export default ShareBox;