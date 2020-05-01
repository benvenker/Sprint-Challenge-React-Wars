import React from "react";

const SearchForm = (props) => {
  const { searchTerm, handleChange } = props;
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search it, Morty..."
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
