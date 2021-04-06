import React from 'react';
import { Card } from 'react-bootstrap';
import SearchBar from './searchBar'

const HeaderBanner = (props) => {
  return (
      <div>
        <Card style={{ width: '100%' }}>
            <Card.Img  variant="top" src="https://s3-eu-west-1.amazonaws.com/skiddlecdn-general/assets/buy-now/png/skiddle-buy-now-colour.png" />
            <Card.Body>
            <SearchBar handleSearch = {props.handleSearch} searchValue = {props.searchQuery}/>
            </Card.Body>
        </Card>
      </div>
 
  );
}

export default HeaderBanner