import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SearchResultCard from "./SearchResultCard";
import axios from "axios";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1); // maybe prep for pagination

  const handleChange = (event) => {
    return setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchTerm}`
      )
      .then((response) => response.data.results)
      .then((data) => setSearchResults([...data]));
    console.log({ searchResults });
  }, [searchTerm, page]);

  return (
    <div className="app">
      <SearchForm searchTerm={searchTerm} handleChange={handleChange} />
      {searchResults.map((result, i) => {
        return <SearchResultCard key={i} result={result} />;
      })}
    </div>
  );
};

export default SearchPage;
