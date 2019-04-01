import React, { Component } from 'react';
import { FeedHeader } from './FeedHeader';
import FeedBody from './FeedBody';
import {FeedFooter} from './FeedFooter';

class FeedCard extends Component {
  state = {
    post: null
  }

  render() {
    return (
      <div id="feed-card" className="card-base d-flex flex-column">
        <FeedHeader/>
        <FeedBody />
        <FeedFooter />
      </div>
    )
  }
}

export default FeedCard;
