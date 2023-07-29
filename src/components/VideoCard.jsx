import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="cardContainer">
      <Link to={videoId ? `/video/${videoId}` : {}}>
        <img
          src={snippet?.thumbnails?.high?.url}
          className="card-img-top"
          alt={snippet?.title}
        />
      </Link>
      <div className="cardBody">
        <Link to={videoId ? `/video/${videoId}` : {}}>
          <h5 className="cardTitle">{snippet?.title.slice(0, 60)}</h5>
        </Link>
        <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : {}}>
          <div className="cardChannel">{snippet?.channelTitle}<span className="material-symbols-outlined icon-fill">check_circle</span></div>
          
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
