import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import { SearchResultCard } from "./SearchResultCard";
import axios from "axios";
import styled from "styled-components";

const SearchPageStyles = styled.div`
  h1 {
    color: white;
    margin: 0;
    padding-top: 20px;
  }

  .header-image {
    width: 100%;
    height: 50%;
    background-image: url("https://d.ibtimes.co.uk/en/full/1496307/rick-morty-season-3.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    /* background-position: center center; */
    text-align: center;
    margin: auto;
  }

  .div {
    background-color: lightgreen;
  }

  .results-container {
    margin: 0 auto;
    width: 60%;
  }

  button {
    outline: none;
  }
`;

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
      <SearchPageStyles>
        <SearchForm searchTerm={searchTerm} handleChange={handleChange} />
        <div className="results-container">
          {searchResults.map((result, i) => {
            return <SearchResultCard key={i} result={result} />;
          })}
        </div>
      </SearchPageStyles>
    </div>
  );
};

export { SearchPage };
