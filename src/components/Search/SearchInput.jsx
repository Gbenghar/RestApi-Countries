import React, { useState } from "react";

import classes from "./SearchInput.module.css";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    onSearch(input);
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={inputChangeHandler}
        className={classes.input}
      />
    </form>
  );
};

export default SearchInput;
