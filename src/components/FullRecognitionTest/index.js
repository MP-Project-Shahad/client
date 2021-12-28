import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import "./../PlacementTest/style.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router";

const FullTest = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([
    {
      qText: "اول تجربة للاختبار.",
      testing: ["أول", "تجربة", "للاختبار."],
      answers: { answerText: "التالي", isCorrect: false },
    },
    {
      qText: "ثاني تجربة للاختبار.",
      testing: ["ثاني", "تجربة", "للاختبار."],
      answers: { answerText: "التالي", isCorrect: false },
    },
    {
      qText: "ثالث تجربة للاختبار.",
      testing: ["ثالث", "تجربة", "للاختبار."],
      answers: { answerText: "النتيجة", isCorrect: true },
    },
  ]);
  const [voiced, setVoiced] = useState(0);
  const [result, setResult] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [mic, setMic] = useState(false);

  const compare = () => {
    if (listening) {
      console.log("on ");
    } else {
      let test;

      test = questions[currentQuestion].testing;
      console.log(test, "testttt");

      let answer = transcript.split(" ");
      console.log(answer);
      let count = 0;
      let precent;

      let counttt = 0;

      test.forEach((c) => {
        if (
          answer.some((a) => {
            return a === c;
          })
        ) {
          count++;
        }
      });

      console.log(count);
      precent = (count * 100) / test.length;
      setVoiced(voiced + precent);
      console.log(voiced, "voiced");
      let result = `you scored ${precent.toFixed(1)} %`;
      setResult(result);
    }
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    compare();
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const listenInArabic = () => {
    SpeechRecognition.startListening({
      continuous: false,
      language: "ar-SA",
    });
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(voiced / questions.length);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="PlacementMainDiv">
      <Nav />
      <div className="appQuiz" dir="rtl">
        {questions.length > 0 ? (
          <>
            {showScore ? (
              <>
                <div className="score-section">
                  the score is {score.toFixed(2)}%
                </div>
                <button
                  className="mainBtn"
                  onClick={() => navigate("/LessonsPage")}
                >
                  العودة لصفحة الدروس
                </button>
              </>
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
                <p>Microphone: {listening ? "on" : "off"}</p>
                <button
                  className="goBtn"
                  onClick={() => {
                    listenInArabic();
                    setTimeout(() => SpeechRecognition.stopListening(), 3000);
                  }}
                >
                  <img
                    src="https://img.icons8.com/material-outlined/48/000000/microphone.png"
                    alt="mic"
                    className="micIcon"
                  />
                </button>

                <p>{transcript}</p>
                <h1>{result}</h1>

                <div className="answer-section">
                  <button
                    className="quizBtn"
                    onClick={() =>
                      handleAnswerOptionClick(
                        questions[currentQuestion].answers.isCorrect
                      )
                    }
                  >
                    {questions[currentQuestion].answers.answerText}
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FullTest;
