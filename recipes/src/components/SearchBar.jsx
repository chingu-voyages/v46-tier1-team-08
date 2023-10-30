import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
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