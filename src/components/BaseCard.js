import React, { Component } from 'react';
import { FaAngleDown } from 'react-icons/fa'

class BaseCard extends Component {
  cardFooter = () => {
    if (this.props.showMore) {
      return <button className="show-more">Show More <FaAngleDown /></button>
    } else if (this.props.seeAll) {
      return <button className="show-more">See all <FaAngleDown /></button>
    }
    return null;
  }
  withTitle = () => {
    if (this.props.title) {
      return (
        <h2 className="fs-xxl fc-black font-weight-normal">
          { this.props.title }
        </h2>
      )
    }
    return null;
  }
  render() {
    return (
      <div className={['base-card', this.props.className].join(' ')}>
        { this.withTitle() }
        { this.props.children }
        { this.cardFooter() }
      </div>
    )
  }
}

export default BaseCard;