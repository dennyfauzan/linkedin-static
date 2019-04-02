import React from 'react';
import CircleImg from '../components/CircleImg';
import { FaSquare } from 'react-icons/fa';

export const IdentityCard = (props) => {
  return (
    <div id="identity-card" className="card-base flex-column justify-content-center">
      <div className="profile-card with-padding">
        <div className="profile-bg t-radius"></div>
          <CircleImg
            className="profile-photo mx-auto d-block"
            src="http://i.pravatar.cc/144"
            alt="avatar"
            width="72px"
            height="72px"
            borderWidth="2px"
            borderColor="#fff"
            border={true}
          />
          <p className="profile-name fs-lg text-center mb-0">
            Denny Fauzan
          </p>
          <div className="profile-headline text-center">
            <span>Tech Enthusiast</span>
          </div>
      </div>
      <div className="profile-widget with-padding">
        <div className="viewed-profile text-center">
          <span className="fc-primary fs-xxl font-weight-light d-block">80</span>
          <span className="fc-light-grey fs-sm d-block">Who's viewed your profile</span>
        </div>
      </div>
      <div className="profile-connections with-padding pt-0">
        <div className="total-connections text-center">
          <span className="fc-primary fs-xxl font-weight-light d-block">1,133</span>
          <span className="fc-light-grey fs-sm d-block">Connections</span>
          <span className="fc-light-grey fs-sm fc-black d-block font-medium-bold">Manage your network</span>
        </div>
      </div>
      <div className="premium-upsell with-padding text-center">
        <p className="fc-light-grey fs-sm mb-0">Access exclusive tools & insight</p>
        <p className="fs-sm fc-black font-medium-bold mb-0 d-flex align-items-center justify-content-center">
          <span className="d-inline-block mr-1">
            <FaSquare className="icon-premium"/>
          </span>
          Free Upgrade to Premium
        </p>
      </div>
    </div>
  )
};