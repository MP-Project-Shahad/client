import axios from "axios";
import React, { useState, useEffect } from "react";
import "./quiz.css";

const Quizes = ({ quizName }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getQuiz = async () => {
    let res = await axios.get(`${BASE_URL}/getqs/${quizName}`);
    // console.log(res.data);
    setQuestions(res.data);
  };

  useEffect(() => {
    getQuiz();
    // eslint-disable-next-line
  }, []);

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
    <div className="appQuiz" dir="rtl">
      {questions.length > 0 ? (
        <>
          {showScore ? (
            <div className="score-section">
              جبت {score} من {questions.length}
              <div className="scoreComment">
                {score > 3 ? (
                  <div>
                    <p> ابهرتنا صراحة 👌🏻</p>
                  </div>
                ) : (
                  <div>
                    {score > 2 ? (
                      <div>
                        <p> لا زين وضعك تمام 👍🏼</p>
                      </div>
                    ) : (
                      <div>
                        {score > 1 ? (
                          <div>
                            <p>نص ونص تحتاج شوي تطوير 🤏🏻</p>
                          </div>
                        ) : (
                          <div>
                            {score > 0 ? (
                              <div>
                                <p>افا 1؟ ماهقيتها منك حاول تدرس </p>
                              </div>
                            ) : (
                              <div>
                                <h2>امسك يا فاشل تحتاجه </h2>
                                <img
                                  alt="book"
                                  src="https://i.ytimg.com/vi/J61k9xaZM0I/mqdefault.jpg"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {/* {(score = 0 && <>يافاشل</>)} */}
              </div>
              <button className="mainBtn" onClick={replay}>
                إعادة الإختبار
              </button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>السؤال {questions.length}</span>/{currentQuestion + 1}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].qText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answers.map((answer) => (
                  <button
                    className="quizBtn"
                    onClick={() => handleAnswerOptionClick(answer.isCorrect)}
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
  );
};

export default Quizes;
