import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.css";
import "animate.css";
import logo from "./mp-logo.png";

const ResetPAss = () => {
  const id = useParams().id;

  const [code, setCode] = useState(0); //code from message
  // const [writtenCode, setWrittenCode] = useState(0); //code from user
  // const [newPass, setNewPass] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  //getting the security code
  const getUser = async () => {
    const res = await axios.get(`${BASE_URL}/oneUser/${id}`);
    setCode(res.data.resetCode);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  //confirming the code and setting the new password
  const passReset = async (e) => {
    e.preventDefault();

    // eslint-disable-next-line
    if (e.target[0].value == code) {
      if (e.target[1].value === e.target[2].value) {
        let pass = e.target[1].value;
        // eslint-disable-next-line
        const res = await axios.post(`${BASE_URL}/resetPass/${id}`, {
          newPass: pass,
        });
        navigate("/login");

        // console.log(res, "res here");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "رقم التحقق غير صحيح، الرجاء التأكد والمحاولة مجدداً",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      // console.log("invalid");
    }
  };

  return (
    <div>
      <div className="loginMainDiv">
        <img
          onClick={() => navigate("/")}
          className="resetLogo"
          src={logo}
          alt="logo"
        />
        <div className="loginDiv">
          <h1 className="loginHeadF" dir="rtl">
            تغيير كلمة السر
          </h1>
          <h3 dir="rtl">
            ادخل رمز التحقق المرسل على البريد الالكتروني لاتمام عملية تغيير كلمة
            المرور
          </h3>
          <div className="inputsDivR">
            <form className="forgotForm" onSubmit={passReset}>
              <input
                className="loginInput"
                required
                name="codeInput"
                placeholder="ادخل الرمز المرسل"
                // onChange={(e) => setWrittenCode(e.target.value)}
              />
              <input
                className="loginInput"
                required
                name="password"
                type="password"
                placeholder="ادخل كلمة السر الجديدة"
                // onChange={(e) => setNewPass(e.target.value)}
              />
              <input
                className="loginInput"
                required
                name="password"
                type="password"
                placeholder="اعد كتابة كلمة السر الجديدة"
              />
              <input className="mainBtn" value="تغيير" type="submit" />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPAss;
