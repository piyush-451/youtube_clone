import React from "react";
import { SideBar, Videos, Loader } from "./";
import "../styles/Feed.css";
import { useState, useEffect } from "react";
import { fetchFromAPI } from '../utils/fetchFromApi';

function Feed() {
  const [category, setCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  function updateCategory(newCategory) {
    setCategory(() => newCategory);
  }

  useEffect(() => {
    setVideos(null);
    
    fetchFromAPI(`search?part=snippet&q=${category}`)
    .then((data) => setVideos(() => data.items))
    .catch((error) => console.log(error))
    // console.log(videos)
  }, [category]);

  // console.log(videos)

  return (
    <div className="Feed">
      <div className="sidebar-container">
        <SideBar category={category} updateCategory={updateCategory} />
      </div>
      <div className="video-container">
        {!videos ? <Loader/> : <Videos videos={videos} />}
      </div>
    </div>
  );
}

export default Feed;
