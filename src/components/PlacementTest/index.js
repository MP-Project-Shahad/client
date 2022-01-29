import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Nav from "../Nav";
import "./style.css";
// import signIn from "../../reducers/login";
import { edit_reducer } from "../../reducers/login";
import { useSelector, useDispatch } from "react-redux";

const Placement = () => {
  // eslint-disable-next-line
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const [level, setLevel] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getQuiz = async () => {
    let res = await axios.get(`${BASE_URL}/getqs/placmentTest`);
    // console.log(res.data);
    setQuestions(res.data);
  };

  const userLevel = async () => {
    if (showScore === true) {
      let level;
      if (score > 4) {
        level = "level-3";
      } else if (score > 2) {
        level = "level-2";
      } else {
        level = "level-1";
      }
      let res = await axios.post(
        `${BASE_URL}/newLevel/${state.signIn.user._id}/${level}`,
        {
          headers: { Authorization: `Bearer ${state.signIn.token}` },
        }
      );
      console.log(res, "responce");
      // console.log(level);

      let data = {
        newuser: res.data,
        token: state.signIn.token,
      };
      console.log(data, "userlevel data");

      dispatch(edit_reducer(data));
    }
  };

  // console.log(state.signIn.token);

  useEffect(() => {
    getQuiz();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    userLevel();
  }, [showScore]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const replay = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="PlacementMainDiv">
      <Nav />
      {state.signIn.token ? (
        <>
          <div className="appQuiz2" dir="rtl">
            {questions.length > 0 ? (
              <>
                {showScore ? (
                  <div className="score-section2">
                    {/* {() => userLevel()} */}
                    جبت {score} من {questions.length}
                    <div className="scoreComment">
                      {score > 4 ? (
                        <div>
                          {/* {() => setLevel("level-3")} */}
                          <p> Great job! user on last level: 3!</p>
                        </div>
                      ) : (
                        <div>
                          {score > 2 ? (
                            <div>
                              {/* {() => setLevel("level-2")} */}

                              <p> Good! user level: 2</p>
                            </div>
                          ) : (
                            <div>
                              {/* {() => setLevel("level-1")} */}

                              <p> Welcome abourd! user level: 1 </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      className="mainBtn"
                      onClick={() => navigate("/lessonsPage")}
                    >
                      Start Lessons
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="question-section2">
                      <div className="question-count2">
                        <span>السؤال {questions.length}</span>/
                        {currentQuestion + 1}
                      </div>
                      <div className="question-text2">
                        {questions[currentQuestion].qText}
                      </div>
                    </div>
                    <div className="answer-section2" key={Math.random()}>
                      {questions[currentQuestion].answers.map((answer) => (
                        <button
                          key={Math.random()}
                          className="quizBtn2"
                          onClick={() =>
                            handleAnswerOptionClick(answer.isCorrect)
                          }
                        >
                          {answer.answerText}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              ""
            )}
          </div>
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

export default Placement;
