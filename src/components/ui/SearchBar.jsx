// src/components/ui/SearchBar.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchIndex } from '../../data/searchIndex';
import { useSpeechRecognition } from '../../hooks/useSpeechRecognition';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); // To control visibility
  const navigate = useNavigate();

  const { text: voiceText, isListening, startListening, hasSupport } = useSpeechRecognition();

  useEffect(() => {
    if (voiceText) {
      setQuery(voiceText);
      handleSearch(voiceText);
    }
  }, [voiceText]);

  const handleSearch = (value) => {
    if (value.length > 0) {
      const filteredSuggestions = Object.keys(searchIndex).filter(key =>
        key.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true); // Show the dropdown
    } else {
      setSuggestions([]);
      setShowSuggestions(false); // Hide the dropdown
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const handleSuggestionClick = (key) => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    navigate(searchIndex[key]);
  };

  return (
    <div className="search-container">
      {/* Add onSubmit to prevent page refresh */}
      <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control rounded-pill me-2"
          type="search"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputChange} // Show suggestions on focus as well
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        
        {hasSupport && (
          <button 
            type="button" 
            className={`voice-btn ${isListening ? 'listening' : ''}`}
            onClick={startListening}
            disabled={isListening}
            title="Voice Search"
          >
            <i className="bi bi-mic-fill"></i>
          </button>
        )}
      </form>
      
      {/* Updated logic to show "No results" */}
      {showSuggestions && (
        <div className="autocomplete-items">
          {suggestions.length > 0 ? (
            suggestions.map(key => (
              <div key={key} onMouseDown={() => handleSuggestionClick(key)}>
                {key}
              </div>
            ))
          ) : (
            <div className="autocomplete-no-results">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}