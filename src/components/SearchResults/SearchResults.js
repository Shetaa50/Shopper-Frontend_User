
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Item from '../item/Item';
import './SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`https://shopper-backend-nine.vercel.app/searchproducts?name=${searchTerm}`);
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  return (
    <div className='search-results-dad'>
      <h1>Search Results for "{searchTerm}"</h1>
      {results.length > 0 ? (
        <div className="search-results">
          {results.map(result => (
            <Item 
              key={result.id}
              id={result.id}
              name={result.name}
              image={result.image}
              new_price={result.new_price}
              old_price={result.old_price}
            />
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
