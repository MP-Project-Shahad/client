import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
// import Nav from "./components/Nav";
import Sign from "./components/Sign";
import Confirm from "./components/Confirm";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Sign" element={<Sign />} />
        <Route exact path="/Confirm" element={<Confirm />} />
        <Route exact path="/UserPage" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
