import React from "react";
import Nav from "../Nav";
import "./style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const LessonsPage = () => {
  const state = useSelector((state) => {
    return state;
  });

  const navigate = useNavigate();

  return (
    <div className="LessonsPageMainDiv">
      <Nav />

      {state.signIn.token ? (
        <>
          {state.signIn.user.level === "didn't take the placement test yet" ? (
            <div className="testDivLessonPage">
              <div className="arTestDiv">
                <h2> يجب اخذ اختبار تحديد المستوى لبدء الدروس</h2>
                <button className="placementBtn">بدء الإختبار</button>
              </div>
              <div className="enTestDiv">
                <h2>
                  you have to take the placement test to start the lessons
                </h2>
                <button className="placementBtn">Start the test</button>
              </div>
            </div>
          ) : (
            <>
              <h2>دروس المستوى المحدد للمستخدم</h2>
            </>
          )}
        </>
      ) : (
        <>
          <h2> يجب تسجيل الدخول لاظهار هذه الصفحة</h2>
          <button className="lessonLogBtn" onClick={() => navigate("/login")}>
            تسجيل الدخول
          </button>
        </>
      )}
    </div>
  );
};

export default LessonsPage;
