import React from "react";
import styled from "styled-components";

const SearchStyles = styled.div`
  input {
    width: 350px;
    height: 50px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;

    margin: 300px 0 70px 0;
    font-size: 16px;
    outline: none;
  }

  form {
    margin: 0 30px 30px 30px;
  }
`;

const SearchForm = (props) => {
  const { searchTerm, handleChange } = props;
  return (
    <SearchStyles>
      <form>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search it, Morty..."
          onChange={handleChange}
        />
      </form>
    </SearchStyles>
  );
};

export { SearchForm };
