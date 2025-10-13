// src/components/ui/SearchBar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchIndex } from '../../data/searchIndex';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = Object.keys(searchIndex).filter(key =>
        key.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (key) => {
    setQuery('');
    setSuggestions([]);
    navigate(searchIndex[key]);
  };

  return (
    <div className="search-container">
      <form className="d-flex" role="search">
        <input
          className="form-control rounded-pill me-2" 
          type="search"
          placeholder="Search..."
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
          onBlur={() => setTimeout(() => setSuggestions([]), 200)} 
        />
        {/* سنضيف زر البحث الصوتي لاحقًا */}
      </form>
      {suggestions.length > 0 && (
        <div className="autocomplete-items">
          {suggestions.map(key => (
            <div key={key} onMouseDown={() => handleSuggestionClick(key)}>
              {key}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}