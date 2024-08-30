import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Group from "./pages/Group";
import PostView from "./pages/PostView";
import PostWrite from "./pages/PostWrite";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group" element={<Group />} />
          <Route path="/post" element={<PostView />} />
          <Route path="/post-write" element={<PostWrite />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
