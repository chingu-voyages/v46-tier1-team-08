import { useState } from "react";
import "./App.css";
import logo from "./chefs-hat.svg";
import data from "./data.json";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [results, setResults] = useState([]);

  return (
      <div className="Search">
        <div className="script">
          <div className="search-bar-container">
            <img src={logo} alt="Chef's Hat logo" />
            <SearchBar setResults={setResults} data={data} />
            {results && results.length > 0 && <SearchResultsList 
            results={results} />}
          </div>
          <h1>Recipes is an app for collecting and organizing your recipes</h1>
        </div>
      </div>
  );
}
/* Search Bar */
const SearchBar = ({ setResults, data }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
      /*fetch ("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => {*/
      const results = data.filter((recipe) => {
        return value && recipe && recipe.name &&
        recipe.name.toLowerCase().includes(value);
        });
        setResults(results);
        console.log("Filtered Results", results);
      };
  const handleSearchIconClick = () => {
    fetchData(input);
  };
  const handleChange = (value) => {
    setInput(value);
  }

return (
      <div className="input-wrapper">
          <input
              placeholder="What are you in the mood for?"
              value={input}
              onChange={(e) => handleChange(e.target.value)} />
          <FaSearch id="search-icon" onClick={handleSearchIconClick} />
      </div>
  );
};
/* Search Bar end */

const SearchResult = ({ result }) => {
  return (
      <div className="search-result"
      onClick={() => alert(`You selected ${result}!`)}>
      {result}
      </div>
  );
};

const SearchResultsList = ({ results }) => {
  return (
      <div className="results-list">
          {results.map((result, id) => {
              return <SearchResult result={result.name} key={id} />;
          })}
      </div>
  );
};

export default Search