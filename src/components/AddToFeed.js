import React from 'react';

import { UserThumbnail } from './UserThumbnail';
import BaseButton from './BaseButton';
import { GoPlus } from 'react-icons/go';

export const AddToFeed = () => {
  return (
    <div id="add-to-feed" className="card-base">
      <div className="with-padding mb-2">
        <div className="card-title">
          <p className="mb-none fs-lg fc-black">Add to your feed</p>
        </div>
        <div className="list-recomendation">
          <div className="each-feed d-flex w-100 mb-3 align-items-center">
            <UserThumbnail name="Max Levchin" headline="Co-Founder & CEO at Affirm, inc"/>
            <BaseButton
              to="/"
              text="Follow"
              className="btn-follow fs-md"
              iconPositionLeft={true}>
                <GoPlus />
            </BaseButton>
          </div>
          <div className="each-feed d-flex w-100 mb-3 align-items-center">
            <UserThumbnail name="Max Levchin" headline="Co-Founder & CEO at Affirm, inc"/>
            <BaseButton
              to="/"
              text="Follow"
              className="btn-follow fs-md"
              iconPositionLeft={true}>
                <GoPlus />
            </BaseButton>
          </div>
          <div className="each-feed d-flex w-100 mb-3 align-items-center">
            <UserThumbnail name="Max Levchin" headline="Co-Founder & CEO at Affirm, inc"/>
            <BaseButton
              to="/"
              text="Follow"
              className="btn-follow fs-md"
              iconPositionLeft={true}>
                <GoPlus />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  )
}