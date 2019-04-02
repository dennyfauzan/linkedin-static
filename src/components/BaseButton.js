import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BaseButton extends Component {
  iconPosition = () => {
    if (this.props.iconPositionRight) {
      return (
        <>
          { this.props.text }
          <span className="d-inline-flex pr-1">{this.props.children}</span>
        </>
      );
    } else if (this.props.iconPositionLeft) {
      return (
        <>
          <span className="d-inline-flex pr-1">{this.props.children}</span>
          <span className="d-inline-flex">{ this.props.text }</span>
          
        </>
      );
    }
    return this.props.text
  }
  handleOnClick = () => {
    if (this.props.to) {
     return  this.props.history.push(this.props.to)
    } else if (this.props.clickMethod) {
      this.props.clickMethod()
    }
    return null;
  }
  render() {
    return (
      <button
      className={this.props.className}
      onClick={this.handleOnClick}>
        {this.iconPosition()}
      </button>
    )
  }
}

export default withRouter(BaseButton);

