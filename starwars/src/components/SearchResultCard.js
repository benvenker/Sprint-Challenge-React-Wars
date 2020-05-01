import React from "react";
import styled from "styled-components";

const Card = styled.div`
  img {
    width: 150px;
  }

  div {
    color: black;
  }

  .search-result-card {
    border: 1px solid lightgray;
    width: 100%;
    text-align: left;
    padding: 20px;
    background-color: white;
    opacity: 95%;
  }

  .search-result-card:first-child {
    border-radius: 5px 5px 0 0;
  }

  .search-result-card:last-child {
    border-radius: 0 0 5px 5px;
  }

  .search-result-card__container {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  h3,
  .key-value-pair {
    padding: 10px 20px;
    margin: 0px;
  }

  .key {
    font-weight: bold;
  }
`;
const SearchResultCard = (props) => {
  const { result } = props;
  console.log("SearchResultCard:  ", props);

  return (
    <Card>
      <div className="search-result-card" key={result.id}>
        <div className="search-result-card__container">
          <img
            src={`https://rickandmortyapi.com/api/character/avatar/${result.id}.jpeg`}
            alt=""
          />
          <div className="text-data">
            <h3>
              {/* We'll want to link to a charaacter page */}
              <a href={`/character/${result.id}`}>{result.name}</a>
            </h3>
            <div className="key-value-pair">
              <span className="key">Status: </span>
              {result.status}
            </div>
            <div className="key-value-pair">
              <span className="key">Species: </span>
              {result.species}
            </div>
            <div className="key-value-pair">
              <span className="key">Episodes: </span>
              {/*  ddo something with episdoes here... */}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { SearchResultCard };
