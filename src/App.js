import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Group from "./pages/Group";
import Memories from "./pages/Memories/Memories"; // 경로 수정

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group" element={<Group />} />
          <Route path="/memories" element={<Memories />} />
          {/*<Route path="/group/:groupId/memories" element={<Memories />} />*/}
        </Routes>
      </Router>
    );
  }
}

export default App;
