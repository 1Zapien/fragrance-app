import TextField from "@mui/material/TextField";
import classes from "./SearchBar.module.css";
// import { useState } from "react";
// import List from "./List";

function SearchBar(props) {
  let inputHandler = e => {
    //convert input text to lower case

    props.setInputText(e.target.value.toLowerCase());
  };

  return (
    <div className="main">
      <div className={classes.search}>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search fragrance..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
