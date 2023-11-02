import { useState } from "react";
import "./App.css"
import logo from "./chefs-hat.svg";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function Search() {
  const [results, setResults] = useState([]);

  return (
      <div className="Search">
        <div className="script">
          <div className="search-bar-container">
            <img src={logo} alt="Chef's Hat logo" />
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && <SearchResultsList results={results} />}
          </div>
          <h1>Recipes is an app for collecting and organizing your recipes</h1>
        </div>
      </div>
  );
}

export default Search