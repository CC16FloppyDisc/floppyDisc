import React from "react";

const SearchBar = () => {
  return (
    <div className="nes-field search-bar-wrapper">
      <label htmlFor="name_field">Search for your favourite game</label>
      <input type="text" id="name_field" className="nes-input is-dark" />
    </div>
  );
};

export default SearchBar;
