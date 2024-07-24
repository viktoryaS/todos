import React from "react";
import './search-paner.css';


const SearchPaner = () => {

    const searchText = 'Type here to search'
    const searchStyle = {
      fontSize: '20px'
    };
    return (
      <>
    <input
    style={searchStyle} 
    placeholder={searchText} />
    </>
    )
  };
  export default SearchPaner;