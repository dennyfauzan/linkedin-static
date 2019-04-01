import React, { Component } from 'react';

class FeedBody extends Component {
  state = {
    readMore: false,
    postContent: 'lorem lipsum this is just a dummy text to filled the card, please ignore this text. lorem lipsum this is just a dummy text to filled the card, please ignore this text, context filled brown box get light up',
    postFiltered: '',
  }

  componentDidMount = () => {
    this.controlWord()
  }

  controlWord = () => {
    const { postContent } = this.state;
    const wordsToArr = postContent.split(' ');
    
    if (wordsToArr.length > 35) {
      const filteredWord = wordsToArr.splice(0, 35).join(' ');
      this.setState({
        readMore: true,
        postFiltered: filteredWord,
      })
    }
  }

  seeMore = () => {
    if (this.state.readMore) {
      return (
        <span
          className="see-more fs-md fc-light-grey"
          onClick={this.expandContent}
        >...see more</span>
      )
    }
    return null;
  }

  expandContent = () => {
    this.setState({
      readMore: false,
    })
  }

  render() {
    return (
      <div className="feed-body mr-4 ml-4 mt-2">
        <p className="fs-md fc-black position-relative">
          { this.state.readMore ? this.state.postFiltered : this.state.postContent }
          { this.seeMore() }
        </p>
        <div className="feed-img mt-4">
          <img alt="img" src="https://picsum.photos/800/419/?random" className="img-fluid" />
        </div>
        <div className="likes-comments fs-sm fc-light-grey">
          <span className="d-inline-block mr-2">12 Likes</span>
          <span className="d-inline-block mr-2">3 Comment</span>
        </div>
      </div>
    )
  }
}

export default FeedBody;