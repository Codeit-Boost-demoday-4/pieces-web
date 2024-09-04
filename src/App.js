import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Group from "./pages/Group"; // 경로 수정
import Upload from "./pages/Upload"; // 경로 수정
import Post from "./pages/Post";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group/:groupId" element={<Group />} />
          <Route path="/group/:groupId/upload" element={<Upload />} />
          <Route path="/posts/:postId" element={<Post />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
