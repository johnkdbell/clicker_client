import React, { Component } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './styles/search.scss';

class Search extends Component
{
  render() 
  {
    return (
      <>
      <div className="search">
        <label className="searchIcon" for="searchField"><SearchOutlined /></label>
      </div>
      <div className="searchBox">
        <Input className="searchInput" type="text" placeholder="Search for neatos..." id="searchField" />
      </div> 
      </>
    );
  }
}
export default Search;



