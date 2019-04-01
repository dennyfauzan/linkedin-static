import React, { Component } from 'react';
import { BaseLayout } from '../components/BaseLayout';
import { IdentityCard } from '../components/IdentityCard';

class HomePage extends Component {
  render() {
    return (
      <BaseLayout>
        <div id="homepage" className="row">
          <aside className="left-col col p-0">
            <IdentityCard />
          </aside>
          <div className="feed col pl-0"></div>
          <aside className="right-col col pl-0"></aside>
        </div>
      </BaseLayout>
    )
  }
}

export default HomePage;