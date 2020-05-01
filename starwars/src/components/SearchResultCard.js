import React from "react";

const SearchResultCard = (props) => {
  const { result } = props;
  console.log("SearchResultCard:  ", props);

  return (
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
  );
};

export default SearchResultCard;
