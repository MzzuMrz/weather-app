import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/components/searchBar.scss";
import useDebounce from "../hooks/useDebounce";

function SearchBar({ onSearch, onError }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedCity = useDebounce(city, 500);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedCity.length > 2) {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.api-ninjas.com/v1/city?name=${debouncedCity}`,
            {
              headers: {
                "X-Api-Key": "f4yE6X4kwk4kvMtiRemLeOTtPw8eKVQELW3knSph",
              },
            }
          );
          const data = await response.json();
          setSuggestions(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching city suggestions:", error);
          onError("Error fetching city suggestions");
          setLoading(false);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedCity, onError]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSelect = (selectedCity) => {
    setCity(selectedCity);
    setSuggestions([]);
    onSearch(selectedCity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      onSearch(city);
    } else {
      onError("Please enter a city name");
    }
  };

  return (
    <div className="search-bar-container">
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
      {loading && <div className="spinner"></div>}
      {suggestions.length > 0 && (
        <ul className={`suggestions-list ${loading ? "loading" : ""}`}>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelect(suggestion.name)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
