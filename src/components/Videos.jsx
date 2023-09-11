import React from "react";
import { VideoCard } from "./";

function Videos(props) {
  const createCard = (video, index) => (
    <li key={index} style={{listStyle:"none"}}>
      <VideoCard video={video} />
    </li>
  );
  
  return (
    <div className="Videos">
      {props.videos !== null && props.videos.map(createCard)}
    </div>
  );
}

export default Videos;
