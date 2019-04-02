import React, { Component } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaUserFriends, FaBriefcase, FaRegNewspaper } from 'react-icons/fa';
import CircleImg from '../../components/CircleImg';

class SearchBar extends Component {
  state = {
    isSearchActive : false,
    recentSearch: ['Denny Fauzan', 'Budi Santoso', 'Dilan Rosada', 'Michael Roodwod', 'Jufi Latiad']
  }
  onSearch = () => {
    this.setState({
      isSearchActive: true,
    });
  }

  OnBlurSearch = () => {
    this.setState({
      isSearchActive: false,
    })
  }

  recentSearchPeople = () => {
    return (
      this.state.recentSearch.map((people, i) => (
        <div className="each-people px-3 py-2" key={`${people}${i}`}>
          <CircleImg
            width="40px"
            height="40px"
            src="http://i.pravatar.cc/144"
            alt="avatar"
            borderWidth="0"
          />
          <p className="fs-md font-medium-bold ml-3 mb-0">{people}</p>
        </div>
    ) 
    ))
  }

  seachResults = () => {
    if (this.state.isSearchActive) {
      return (
        <div className="search-results">
          <div className="search-category">
            <p className="fs-md font-medium-bold px-3 py-2">Search For</p>
            <div className="cat people px-3 py-2">
              <FaUserFriends />
              <p className="fs-md ml-3 mb-0">People</p>
            </div>
            <div className="cat jobs px-3 py-2">
              <FaBriefcase />
              <p className="fs-md ml-3 mb-0">Jobs</p>
            </div>
            <div className="cat content px-3 py-2">
              <FaRegNewspaper />
              <p className="fs-md ml-3 mb-0">Content</p>
            </div>
          </div>
          <div className="search-recent position-relative">
            <p className="fs-md font-medium-bold mb-2 px-3 py-2">Recent</p>
            <span className="fs-md font-medium-bold fc-light-grey clear-history">Clear</span>
            <div className="recent-peoples">
              { this.recentSearchPeople() }
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const activeClass = this.state.isSearchActive ? 'active' : '';
    return (
      <div className={['search-bar', activeClass].join(' ')}>
        <form>
          <div className="input-group" onClick={this.onSearch} onBlur={this.OnBlurSearch}>
            <span className="left-icon-search">
              <IoIosSearch className="icon-search"/>
            </span>
            <input type="text" className="form-control fs-md fc-black" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-search">
                <IoIosSearch className="icon-search"/>
              </button>
            </div>
          </div>
        </form>
        {this.seachResults()}
      </div>
    );
  }
}

export default SearchBar;