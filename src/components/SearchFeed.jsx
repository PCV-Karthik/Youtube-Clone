import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <div className="videosContainer">
      <header>
        Search Results for:
        <span>{searchTerm} </span>
         videos
      </header>
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
