import React from "react";
import "./index.scss";
const SearchMovie = (props) => {
  const { HandleSearch, search, setSearch } = props;
  return (
    <div className="BuscadorContent">
      <form className="search-box" onSubmit={HandleSearch}>
        <input
          type="search"
          placeholder="Busque una pelicula..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchMovie;
