import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

function VideoCard(props) {
  const { video } = props;
  console.log(video);
  const videoId = video.id.videoId;
  const channelId = video.snippet.channelId;
  const imgURL = video.snippet.thumbnails.high?.url;
  const title = video.snippet.title.substr(0, 60);
  const channel = video.snippet.channelTitle;
  return (
    <div className="video-card">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img src={imgURL ? imgURL : demoThumbnailUrl} alt="img" />
      </Link>
      <div className="video-info">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <p>{title ? title : demoVideoTitle}</p>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <span>{channel ? channel : demoChannelTitle}</span>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;
