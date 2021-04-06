import React from 'react';

const SearchBar = (props) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem", marginTop:"30%"};
  return (
    <input 
     style={BarStyling}
     value={props.searchValue}
     placeholder={"search for events..."}
     onChange={props.handleSearch}
    />
  );
}

export default SearchBar