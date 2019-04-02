import React, { Component } from 'react';
import { BaseLayout } from '../components/BaseLayout';
import BaseCard from '../components/BaseCard';
import BaseButton from '../components/BaseButton';
import BaseIcon from '../components/BaseIcon';
import CircleImg from '../components/CircleImg';
import { AddToFeed } from '../components/AddToFeed';
import { TiLockClosedOutline, TiContacts } from 'react-icons/ti';
import { FaUserFriends } from 'react-icons/fa';
import { IoIosChatboxes } from 'react-icons/io';

class Profile extends Component {
  render() {
    return (
      <BaseLayout>
        <div id="profile" className="row">
          <div className="col-main p-0 position-relative">
            <BaseCard showMore={true} className="p-0">
              <div className="profile-background"></div>
              <CircleImg
                className="profile-photo d-block"
                src="http://i.pravatar.cc/304"
                alt="avatar"
                width="152px"
                height="152px"
                borderWidth="3px"
                borderColor="#fff"
                border={true}
              />

              <div className="profile-section row ml-0 mr-0">
                {/* Left */}
                <div className="col-8 p-0">
                  <h1 className="h4 font-weight-normal">Hantze Sudarma
                    <span className="ml-2 fc-light-grey h5 font-weight-normal">&bull; 2nd</span>
                  </h1>
                  <h3 className="fs-xl font-weight-normal">Laboratory Cordinator</h3>
                  <h3 className="fs-lg font-weight-normal fc-light-grey mb-4">Indonesia</h3>
                  <BaseButton text="Connect" className="btn btn-c-primary fs-lg"/>
                  <BaseButton
                    text="Message"
                    className="btn btn-c-secondary fs-lg ml-3 mr-3"
                    iconPositionLeft={true}>
                    <TiLockClosedOutline/>
                  </BaseButton>
                  <BaseButton text="More..." className="btn btn-c-outline-black fs-lg"/>
                </div>

                {/* Right */}
                <div className="col-4 p-0">
                  <div className="exp-usr d-flex align-items-center">
                    <div className="c-img">
                      <img className="img-fluid" src="https://media.licdn.com/dms/image/C4E0BAQG46LuIrhnInA/company-logo_400_400/0?e=1562198400&v=beta&t=7vN8-URXL_MfqoV6WTXaBkh77sCwtS4XgLyfURIk_mc" alt="img"/>
                    </div>
                    <span className="fc-black fs-md d-block ml-3 font-medium-bold">Universitas Bina Nusantara (Binus)</span>
                  </div>

                  <div className="contact-see-more d-flex align-items-center mt-2">
                    <BaseIcon size="23px">
                      <TiContacts className="fc-light-grey"/>
                    </BaseIcon>
                    <span className="fc-black fs-md d-block ml-3 font-medium-bold">See Contact Info</span>
                  </div>

                  <div className="connection-see-more d-flex align-items-center mt-2">
                    <BaseIcon size="23px">
                      <FaUserFriends className="fc-light-grey"/>
                    </BaseIcon>
                    <span className="fc-black fs-md d-block ml-3 font-medium-bold">500 + Connections</span>
                  </div>
                </div>

                {/* Center */}
                <div className="summary-content mt-3 pt-3">
                  <p className="fs-lg fc-black mb-0">
                    Computer Science graduate from one of top reputable University in Indonesia on 2015 with great honor degree (GPA 3.8). I taught and coordinate several programming subject during my study as teaching assistant and subject coordinator. I Also did some website and mobile projects as freelance...
                  </p>
                </div>
              </div>
            </BaseCard>
            <BaseCard className="mt-4" title="Highlights" showMore={true}>
              <div className="highlight row m-0">
                <div className="col-6 p-0">
                  <div className="row m-0">
                    <div className="mutual-connection col-2 p-0">
                      <div className="img-stack d-flex">
                        <CircleImg
                          className="mt-connections d-block"
                          src="http://i.pravatar.cc/144"
                          alt="avatar"
                          width="36px"
                          height="36px"
                          borderWidth="1px"
                          borderColor="#fff"
                          border={true}
                        />

                        <CircleImg
                          className="mt-connections d-block"
                          src="http://i.pravatar.cc/144"
                          alt="avatar"
                          width="36px"
                          height="36px"
                          borderWidth="1px"
                          borderColor="#fff"
                          border={true}
                        />
                      </div>
                    </div>
                    <div className="mutual-title col-10">
                      <h4 className="fs-lg fc-black font-medium-bold mb-0">60 Mutual Connection</h4>
                      <p className="fc-light-grey fs-md mb-0">
                        You and Hantze Both Know Wenas, Agus Setiawan, Achmad Zacky, and 83 Others
                      </p>
                    </div>
                  </div>
                  
                </div>
                <div className="col-6 p-0">
                  <div className="row m-0">
                    <div className="icon-reach-out col-2 pr-0">
                      <BaseIcon style={{width: 36, height: 36}}>
                        <IoIosChatboxes className="fc-light-grey"/>
                      </BaseIcon>
                    </div>
                    <div className="col-10">
                      <h4 className="fs-lg fc-black font-medium-bold mb-0">Reach Out to Hantze</h4>
                      <p className="fc-light-grey fs-md mb-0">
                        Joining a Non Profit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
          <div className="col-right p-0">
            <AddToFeed />
          </div>
        </div>
      </BaseLayout>
    )
  }
}

export default Profile;