import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import "./style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";

const LessonsPage = () => {
  const state = useSelector((state) => {
    return state;
  });

  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getLessons = async () => {
    let level = state.signIn.user.level;
    let res = await axios.get(`${BASE_URL}/alllessons/${level}`);

    setLessons(res.data);
  };

  console.log(lessons);

  useEffect(() => {
    getLessons();
  }, []);

  return (
    <div className="LessonsPageMainDiv">
      <Nav />

      {state.signIn.token ? (
        <>
          {state.signIn.user.level === "no placement test " ? (
            <div className="testDivLessonPage">
              <div className="arTestDiv" dir="rtl">
                <h2> يجب اخذ اختبار تحديد المستوى لبدء الدروس</h2>
                <button
                  className="placementBtn"
                  dir="rtl"
                  onClick={() => navigate("/PlacementTest")}
                >
                  بدء الإختبار
                </button>
              </div>
              <div className="enTestDiv">
                <h2>
                  you have to take the placement test to start the lessons
                </h2>
                <button
                  className="placementBtn"
                  onClick={() => navigate("/PlacementTest")}
                >
                  Start the test
                </button>
              </div>
            </div>
          ) : (
            <>
              {state.signIn.user.level === "level-1" ? (
                <>
                  <div className="mainLevelLessonsDiv">
                    <h1>Level 1</h1>
                    <div className="classesContentCards">
                      {lessons.length > 0 ? (
                        <div>
                          {lessons.map((ele) => {
                            return (
                              <div className="lessonCard">
                                <h3>{ele.title}</h3>
                                <p>{ele.desc}</p>
                                <button
                                  className="mainBtn"
                                  onClick={() => navigate(`/lesson/${ele._id}`)}
                                >
                                  start Lesson
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <>
                          <p>لا يوجد دروس بعد</p>
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {state.signIn.user.level === "level-2" ? (
                    <>
                      <div className="mainLevelLessonsDiv">
                        <h1>Level 2</h1>
                        <div className="classesContentCards">
                          {lessons.length > 0 ? (
                            <div>
                              {lessons.map((ele) => {
                                return (
                                  <div className="lessonCard">
                                    <h3>{ele.title}</h3>
                                    <p>{ele.desc}</p>
                                    <button
                                      className="mainBtn"
                                      onClick={() =>
                                        navigate(`/lesson/${ele._id}`)
                                      }
                                    >
                                      start Lesson
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <>
                              <p>لا يوجد دروس بعد</p>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mainLevelLessonsDiv">
                        <h1>Level 3</h1>
                        <div className="classesContentCards">
                          {lessons.length > 0 ? (
                            <div className="classesContentCards2">
                              {lessons.map((ele) => {
                                return (
                                  <div className="lessonCard">
                                    <h3>{ele.title}</h3>
                                    <p>{ele.desc}</p>
                                    <button
                                      className="mainBtn"
                                      onClick={() =>
                                        navigate(`/lesson/${ele._id}`)
                                      }
                                    >
                                      start Lesson
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <>
                              <p>لا يوجد دروس بعد</p>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <div className="testDivLessonPage">
            <div className="arTestDiv" dir="rtl">
              <h2 dir="rtl"> الرجاء تسجيل الدخول لبدء الدروس</h2>
              <button
                className="lessonLogBtn"
                onClick={() => navigate("/login")}
              >
                تسجيل الدخول
              </button>
            </div>
            <div className="enTestDiv">
              <h2>Please Sign in to start the lessons</h2>
              <button
                className="lessonLogBtn"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LessonsPage;
