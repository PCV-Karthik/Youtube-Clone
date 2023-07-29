import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail);
  return (
    <div className="channelCardContainer">
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <img
          src={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
        />
        <div className="channelTitle">
          {channelDetail?.snippet?.title}
          <span class="material-symbols-outlined icon-fill">check_circle</span>
        </div>
        {channelDetail?.statistics?.subscriberCount && (
          <div className="subscribers">
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscribers
          </div>
        )}
      </Link>
    </div>
  );
};

export default ChannelCard;
