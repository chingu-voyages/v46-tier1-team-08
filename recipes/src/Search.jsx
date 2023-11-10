import { useState, useEffect } from "react";
import "./App.css";
import "./FlipCard.jsx";
import logo from "./chefs-hat.svg";
import data from "./data.json";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [input, setInput] = useState("");
  const filterResults = (value) => {
    const filteredResults = data.filter((recipe) => {
      return (
        value && recipe.ingredient.some((ingredient) => 
        ingredient.toLowerCase().includes(value.toLowerCase())
        )
      );
    });
    setFilteredResults(filteredResults);
  };

  useEffect(() => {
  filterResults(input);
}, [input]);

  return (
      <div className="Search">
        <div className="script">
          <div className="search-bar-container">
            <img src={logo} alt="Chef's Hat logo" />
            <div className="input-wrapper">
              <input 
                placeholder="Enter an ingredient"
                value={input} 
                onChange={(e) => setInput(e.target.value)} />
                <FaSearch id="search-icon" 
                onClick={() => filterResults(input)} />
                <label>Search</label>
            </div>
            {filteredResults && filteredResults.length > 0 && (
              <SearchResultsList results={filteredResults} />
            )}
            </div>
            <h1>Recipes is an app for collecting and organizing your recipes</h1>
        </div>
      </div>
  );
}
/* Search Bar */
const SearchBar = ({ setResults, data, setFilteredResults }) => {
  const [input, setInput] = useState("");
  const handleSearchIconClick = () => {
    filterResults(input);
  };
  const handleChange = (value) => {
    setInput(value);
    filterResults(value);
  };
  const filterResults = (value) => {
      /*fetch ("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => {*/
      const filteredResults = data.filter((recipe) => {
        return value && recipe.ingredient.some((ingredient) =>
          ingredient.toLowerCase().includes(value.toLowerCase())
          )
        });
        setFilteredResults(filteredResults);
      }
      useEffect(() => {
        filterResults(input);
      }, [input, data]);


return (
      <div className="input-wrapper">
          <input
              placeholder="Enter an ingredient"
              value={input}
              onChange={(e) => handleChange(e.target.value)} />
          <FaSearch id="search-icon" onClick={handleSearchIconClick} />
          <label>Search</label>
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
          {results.map((recipe, id) => {
              return <SearchResult result={recipe.ingredients.join(", ")} key={id} />;
          })}
      </div>
  );
};

export default Search