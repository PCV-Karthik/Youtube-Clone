import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <div className="videoDetailsContainer">
      <div className="videoPlayerContainer">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls playing={true}
          muted
        />
        <div className="videoPlayingDetails">
          <div className="videoPlayingTitle">{videoDetails?.snippet.title}</div>
          <div className="videoStatistics">
            <div className="channelTitle">
              {videoDetails?.snippet?.channelTitle}
              <span className="material-symbols-outlined icon-fill">
                check_circle
              </span>
            </div>
            <div className="likes">
              {parseInt(videoDetails?.statistics.viewCount).toLocaleString()}{" "}
              views &nbsp;
              <span className="material-symbols-outlined icon-fill">thumb_up</span>
              &nbsp;
              {parseInt(
                videoDetails?.statistics.likeCount
              ).toLocaleString()}{" "}
              likes
            </div>
          </div>
        </div>
      </div>
        <Videos videos={videos} />
    </div>
  );
};

export default VideoDetail;
