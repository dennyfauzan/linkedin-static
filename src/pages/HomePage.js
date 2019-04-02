import React, { Component } from 'react';
import { BaseLayout } from '../components/BaseLayout';
import { IdentityCard } from '../components/IdentityCard';
import ShareBox from '../components/ShareBox';
import FeedCard from '../components/feed-card/FeedCard';
import { AddToFeed } from '../components/AddToFeed';

class HomePage extends Component {
  render() {
    return (
      <BaseLayout>
        <div id="homepage" className="row">
          <aside className="left-col col p-0">
            <IdentityCard />
          </aside>
          <div className="feed col pl-0 pr-0">
            <ShareBox />
            <div className="divider"></div>
            <FeedCard />
          </div>
          <aside className="right-col col pl-0">
            <AddToFeed />
          </aside>
        </div>
      </BaseLayout>
    )
  }
}

export default HomePage;