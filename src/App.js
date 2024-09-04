import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Group from "./pages/Group"; // 경로 수정
import Upload from "./pages/Upload"; // 경로 수정

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group/:groupId" element={<Group />} />
          {/*<Route path="/upload" element={<Upload />} />*/}
          <Route path="/group/:groupId/upload" element={<Upload />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
