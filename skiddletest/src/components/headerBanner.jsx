import React from 'react';
import { Card } from 'react-bootstrap';
import SearchBar from './searchBar'

const HeaderBanner = (props) => {
  return (
      <div>
        <Card style={{ width: '100%' }}>
        <Card.Img   src="https://s3-eu-west-1.amazonaws.com/skiddlecdn-general/assets/logo/png/skiddle-logo-black-landscape.png" /> 
        <Card.ImgOverlay> 
           <SearchBar handleSearch = {props.handleSearch} searchValue = {props.searchQuery}/> 
        </Card.ImgOverlay>
        </Card>
      </div>
 
  );
}

export default HeaderBanner