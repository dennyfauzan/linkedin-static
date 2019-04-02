import React, { Component } from 'react';
import FooterNav from './FooterNav';
import BaseButton from '../BaseButton';
import { FaLinkedin, FaRegQuestionCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

class Footer extends Component {
  state = {
    navItems: ['About', 'Talent Solutions', 'Community Guideline', 'Careers', 'Marketing Solutions', 'Privacy & Terms', 'Advertising', 'Sales Solutions', 'Send feedback', 'Mobile', 'Small Business', 'Safety Center'],
  }
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="d-flex font-weight-bold">
                Linked<FaLinkedin className="icon-linkedin" />
              </h5>
            </div>
            <div className="col footer-nav">
              <FooterNav navItems={this.state.navItems} />
            </div>

            <div className="col-4 d-flex flex-column pr-0">
              <div className="actions-list-item d-flex">
                <FaRegQuestionCircle className="icon-question" />
                <div className="c-questions d-flex flex-column">
                  <h6 className="ml-2 fs-md mb-1">
                    <Link to="/">Questions ?</Link>
                  </h6>
                  <p className="fs-sm info">Visit our Help Center.</p>
                </div>
              </div>
              <div className="actions-list-item d-flex mt-2">
                <FiSettings className="icon-settings" />
                <div className="c-account-privacy d-flex flex-column">
                  <h6 className="ml-2 fs-md mb-1">
                    <Link to="/">Manage your account and privacy</Link>
                  </h6>
                  <p className="fs-sm info">Go to your Settings.</p>
                </div>
              </div>
            </div>
            <div className="select-language col">
              <p className="fs-sm info mb-1">Select Language</p>
              <BaseButton
                to="/"
                text="English (English)"
                className="btn-follow fs-sm drop-down-lang"
                iconPositionRight={true}>
                <MdArrowDropDown className="icon-dropdown" />
              </BaseButton>
            </div>
            <div className="col-12 pt-3">
              <p className="fs-sm info mb-0 fc-light-grey">LinkedIn Corporations &copy; 2019</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;