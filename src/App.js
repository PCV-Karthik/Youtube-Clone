import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="Youtube-Clone/" exact element={<Feed />} />
        <Route path="Youtube-Clone/video/:id" element={<VideoDetail />} />
        <Route path="Youtube-Clone/channel/:id" element={<ChannelDetail />} />
        <Route path="Youtube-Clone/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </>
  );
}

export default App;
