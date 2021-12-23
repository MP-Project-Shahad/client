import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
// import Nav from "./components/Nav";
import Sign from "./components/Sign";
import Login from "./components/Login";
import Confirm from "./components/Confirm";
import UserPage from "./components/UserPage";
import ForgotPass from "./components/ForgotPass";
import ResetPass from "./components/ResetPass";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/SignUp" element={<Sign />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Confirm/:id" element={<Confirm />} />
        <Route exact path="/UserPage" element={<UserPage />} />
        <Route exact path="/ForgotPass" element={<ForgotPass />} />{" "}
        <Route exact path="/ResetPass/:id" element={<ResetPass />} />
      </Routes>
    </div>
  );
}

export default App;
