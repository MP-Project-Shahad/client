import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./../Nav";
import "./style.css";

const Lesson = () => {
  const id = useParams().id;

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [lesson, setLesson] = useState({});

  const getLesson = async () => {
    let res = await axios.get(`${BASE_URL}/lesson/${id}`);
    setLesson(res.data[0]);
  };

  console.log(lesson);
  console.log(lesson.audio);

  useEffect(() => {
    getLesson();
  }, []);

  return (
    <div className="lessonContentMainDiv">
      <Nav />
      <h1>{lesson.title}</h1>
      <h4 className="contentH4">{lesson.content}</h4>
      <audio controls className="preview">
        <source src={lesson.audio} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Lesson;
