import React from "react";

import "./Search.css";
const SearchBox = ({ updateSearch, getSearch, search }) => {
  return (
    <div className="container">
      <div className="row text-center">
        <form className="form m-auto" onSubmit={getSearch}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Blog"
              className="form-control mr-sm-2"
              value={search}
              onChange={updateSearch}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
