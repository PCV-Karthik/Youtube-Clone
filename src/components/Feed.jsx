import React from "react";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>{
      setVideos(data.items)
    }
    );
  }, [selectedCategory]);

  return (
    <div className="feedContainer">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="videosContainer">
        <header>
          {selectedCategory}
          <span>Videos</span>
        </header>
        <Videos videos={videos}/>
      </div>
    </div>
  );
};

export default Feed;
