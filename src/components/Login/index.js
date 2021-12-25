import React, { useEffect, useState } from "react";
import axios from "axios";
import { login } from "../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "animate.css";
import Swal from "sweetalert2";
const popupTools = require("popup-tools");

const Login = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logMethod, setLogMethod] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [allUsers, setAllUsers] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getUsers = async () => {
    const user = await axios.get(`${BASE_URL}/users`);
    setAllUsers(user.data);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const logging = async (e) => {
    e.preventDefault();

    if (logMethod.length !== 0 && password.length > 5) {
      const res = await axios.post(`${BASE_URL}/login`, {
        logMethod,
        password,
      });
      console.log(res);
      if (res.data === "user not confirmed, please check your email") {
        Swal.fire({
          icon: "error",
          title: "الرجاء تأكيد الحساب، تأكد من بريدك الالكتروني",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else if (res.data === "invalid email or password") {
        Swal.fire({
          icon: "error",
          title: "المعلومات المدخلة غير صحيحة",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else if (res.data === "user is not registred or incorrect") {
        Swal.fire({
          icon: "error",
          title: "طريقة تسجيل/كلمة المرور غير صحيحة، الرجاء التأكد",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else {
        const data = {
          user: res.data.result,
          token: res.data.token,
        };
        // console.log(res);
        dispatch(login(data));

        navigate("/");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "البيانات غير صحيحة الرجاء التأكد والمحاولة مجدداً",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  const oAuth = () => {
    popupTools.popup(
      `${BASE_URL}/auth/google`,
      "Logging in with Google",
      { width: 500, height: 500 },
      (err, user) => {
        if (err) {
          console.log("caughton error:", err.message);
        } else {
          dispatch(login({ token: user.token, user: user.result }));
          navigate("/");
        }
      }
    );
  };

  return (
    <div className="loginMainDiv">
      <img
        onClick={() => navigate("/")}
        className="loginLogo"
        src="./mp-logo.png"
        alt="logo"
      />
      <div className="loginDiv">
        <h1 className="loginHead">تسجيل الدخول</h1>
        <div className="inputsDiv">
          <input
            type="text"
            required
            className="loginInput"
            placeholder="ادخل اسم المستخدم/الايميل"
            onChange={(e) => setLogMethod(e.target.value)}
          />
          <input
            type="password"
            required
            className="loginInput"
            placeholder="ادخل كلمة المرور"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mainBtn" onClick={logging}>
            تسجيل الدخول
          </button>
          <a className="forgotAnchr" href="/forgotPass">
            هل نسيت كلمة المرور؟
          </a>
          <div style={{ display: "flex" }} dir="rtl">
            <p dir="rtl"> مستخدم جديد؟</p>
            <a dir="rtl" className="forgotAnchr" href="/signup">
              سجل الان !
            </a>
          </div>
          <h4 dir="rtl">او سجل دخول باستخدام:</h4>
          <button className="googleBtn" onClick={oAuth}>
            Google+
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
