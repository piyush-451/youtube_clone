import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos , Loader} from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import "../styles/SearchDetails.css";

function SearchDetails() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`search?part=id,snippet&q=${searchTerm}`)
      .then((data) => setVideos(() => data.items))
      .catch((error) => console.log(error));
    // console.log(videos);
  }, [searchTerm]);

  return (
    <div className="SearchDetails" style={{ color: "white" }}>
      <h3>
        Search Result For <span style={{ color: "red" }}>{searchTerm}</span>{" "}
        Videos
      </h3>
      <div className="search-content">
        {!videos ? <Loader/> : <Videos videos={videos} />}
      </div>
    </div>
  );
}

export default SearchDetails;
