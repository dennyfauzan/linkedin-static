import React, { Component } from 'react';
import { IoIosSearch } from 'react-icons/io';

class SearchBar extends Component {
  state = {
    isSearchActive : false,
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
      </div>
    );
  }
}

export default SearchBar;