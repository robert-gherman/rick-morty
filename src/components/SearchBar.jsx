import React from "react";

const SearchBar = ({ onInputChange, onButtonClick }) => {
  return (
    <div className="searchBar-container flex justify-center pt-10">
      <input
        className="bg-nightDark w-80 h-10 border-0 rounded-lg p-2 px-6 text-base text-lightBlue"
        type="text"
        placeholder="Enter character name..."
        onChange={(event) => onInputChange(event.target.value)}
      />
      <button
        className="no-underline rounded-lg p-2 mx-2 my-0 text-sm font-header bg-blueDark font-bold hover:bg-greenDark"
        onClick={onButtonClick}
      >
        Fetch
      </button>
    </div>
  );
};

export default SearchBar;
