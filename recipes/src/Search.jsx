import { useState } from "react";
import "./App.css"
import logo from "./chefs-hat.svg";
import { FaSearch } from "react-icons/fa";

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

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
      fetch /*("https://jsonplaceholder.typicode.com/users")*/
          .then((response) => response.json())
          .then((json) => {
              const results = json.filter((user) => {
              return (
                  value &&
                  user &&
                  user.name &&
                  user.name.toLowerCase().includes(value)
              );
          });
          setResults(results);
  });
};
  const handleChange = (value) => {
      setInput(value);
      fetchData(value);
  };
  return (
      <div className="input-wrapper">
          <input
              placeholder="What are you in the mood for?"
              value={input}
              onChange={(e) => handleChange(e.target.value)} />
          <FaSearch id="search-icon" />
      </div>
  );
};

const SearchResult = ({ result }) => {
  return (
      <div className="search-result"
      onclick={(e) => alert(`You selected #{result}!`)}>
      {result}
      </div>
  );
};

const SearchResultsList = ({ results }) => {
  return (
      <div className="results-list">
          {results.map((result, id) => {
              return <SearchResult result={result.name} key={id} />
          })}
      </div>
  );
};

export default Search