import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/components/searchBar.scss";
import useDebounce from "../hooks/useDebounce";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const debouncedCity = useDebounce(city, 500);

  useEffect(() => {
    if (debouncedCity) {
      onSearch(debouncedCity);
    }
  }, [debouncedCity, onSearch]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search Location..."
        value={city}
        onChange={handleChange}
      />
      <button type="submit" className="search-bar__button">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
