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
import LessonsPage from "./components/LessonsPage";
import PlacementTest from "./components/PlacementTest";
import Lesson from "./components/Lesson";
import Footer from "./components/Footer";
import Discussion from "./components/Discussion";
import OneDiscussion from "./components/OneDiscussion";
import FullRecognitionTest from "./components/FullRecognitionTest";

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
        <Route exact path="/ForgotPass" element={<ForgotPass />} />
        <Route exact path="/ResetPass/:id" element={<ResetPass />} />
        <Route exact path="/LessonsPage" element={<LessonsPage />} />
        <Route exact path="/PlacementTest" element={<PlacementTest />} />
        <Route exact path="/Lesson/:id" element={<Lesson />} />
        <Route exact path="/Discussions" element={<Discussion />} />
        <Route exact path="/Discussion/:id" element={<OneDiscussion />} />
        <Route exact path="/test" element={<FullRecognitionTest />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
