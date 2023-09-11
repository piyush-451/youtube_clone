import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log("form submitted")
    event.preventDefault();

    if (searchTerm.length)
      navigate(`/search/${searchTerm}`);
      
    setSearchTerm(() => "")
  };

  const handleChange = (event) => {
    const { value } = event.target;
    // console.log(value);
    setSearchTerm(() => value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="SearchBar">
        <input
          onChange={handleChange}
          type="text"
          placeholder="search..."
          value={searchTerm}
        />
        <button type="submit">
          <SearchIcon sx={{ color: "red" }} />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
