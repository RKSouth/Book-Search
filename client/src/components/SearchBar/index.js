import React from "react";

// Searchbar component for our search page where the user can type in the input field
export function SearchBar(props) {
  return (
<div className="container ">
<div className="row mt-0 my-0">
        <input type="text" className="bar form-control text-center" 
        placeholder="What are you looking for?" onChange={props.handleSearchChange} />
      <button className="btn" id="searchBtn" onClick={props.searchBooks}>Search</button>
    </div>
    </div>
  );
};

export default SearchBar;