import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromApi";
import {Videos , Loader} from "./";

import "../styles/VideoDetails.css";

function VideoDetails() {
  const [videoDetails, setvideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setvideoDetails(() => data.items[0]))
      .catch((error) => console.log(error));
    // console.log(videoDetails);
  }, [id]);

  useEffect(() => {
    fetchFromAPI(`search?part=id,snippet&relatedToVideoId=${id}`)
      .then((data) => setVideos(() => data.items))
      .catch((error) => console.log(error));
    // console.log(videos)
  }, [id]);

  if (!videoDetails) {
    return "loading...";
  }

  const {
    snippet: { title, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <div className="VideoDetails overflow-hidden">
      <div className="row" style={{ color: "white" }}>
        <div className="mx-2 col col-md-8d-flex flex-column">
          <div className="video-content">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              height="68vh"
              controls
            />
          </div>
          <div className="video-info pt-3 d-flex flex-row justify-content-between">
            <div className="w-60">
              <h5 style={{ width: "100%" }}>{title}</h5>
              <h6>{channelTitle}</h6>
            </div>
            <div className="">
              <span>{`${viewCount} views ${likeCount} likes`}</span>
            </div>
          </div>
        </div>
        <div className="w-40% col col-md-3 related-videos">
          '{!videos ? <Loader/> : <Videos videos={videos} />}
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
