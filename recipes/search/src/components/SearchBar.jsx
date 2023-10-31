import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://tasty.p.rapidapi.com/recipes/")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((ingredient) => {
                return (
                    value &&
                    ingredient &&
                    ingredient.name &&
                    ingredient.name.toLowerCase().includes(value)
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