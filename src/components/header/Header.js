import React, { Component } from 'react';

import SearchBar from './SearchBar';
import NavItems from './NavItems';
import BaseIcon from '../BaseIcon';

import { FaLinkedinIn } from 'react-icons/fa';
import { TiHome, TiMessages } from 'react-icons/ti';
import { FaUserFriends, FaBriefcase } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';

class Header extends Component {
  state = {
    navItems: [],
  }

  componentDidMount = () => {
    this.setState({
      navItems: [
        {
          title: 'Home',
          url: '/',
          icon: <TiHome />,
        },
        {
          title: 'My Network',
          url: '/',
          icon: <FaUserFriends />,
        },
        {
          title: 'Jobs',
          url: '/',
          icon: <FaBriefcase />,
        },
        {
          title: 'Messaging',
          url: '/',
          icon: <TiMessages />,
        },
        {
          title: 'Notifications',
          url: '/',
          icon: <MdNotificationsNone />,
        }
      ]
    })
  }
  render() {
    return (
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center flex-nowrap">
            <div id="logo" className="nav-brand">
              <BaseIcon color="#fff">
                <FaLinkedinIn className="logo-linkedin"/>
              </BaseIcon>
            </div>
            <div className="c-search-bar col pl-0">
              <SearchBar/>
            </div>
            <div className="col pr-0">
              <NavItems items={this.state.navItems}/>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;