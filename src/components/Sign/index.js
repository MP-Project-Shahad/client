import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PasswordChecklist from "react-password-checklist";
import "./style.css";
import "animate.css";
// require("dotenv").config();

const Sign = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getUsers = async () => {
    const user = await axios.get(`${BASE_URL}/users`);
    setAllUsers(user.data);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const signUp = async (e) => {
    e.preventDefault();
    let exist = false;

    allUsers.filter((user) => {
      if (user.email === email || user.userName === userName) {
        exist = true;
      }
    });

    if (exist) {
      Swal.fire({
        icon: "error",
        title:
          "البريد مسجل بالفعل، الرجاء كتابة بريد الكتروني اخر او تسجيل الدخول.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }

    if (!exist) {
      const regData = {
        email,
        userName,
        password,
      };

      const res = await axios
        .post(`${BASE_URL}/register`, regData)
        .then((res) => {
          if (
            res.data ===
            "User validation failed: email: Please fill a valid email address"
          ) {
            Swal.fire({
              title: "الرجاء ادخال بريد الكتروني صحيح.",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/Confirm");
          }
        });
    }
  };

  const invalidPass = () => {
    Swal.fire({
      title: "الرجاء ادخال كلمة مرور تحقق الشروط.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
    <div className="signMainDiv">
      <h1 className="signHead">التسجيل</h1>
      <div className="inputsDiv">
        <input
          required
          type="text"
          name="userName"
          placeholder="أدخل اسم المستخدم"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          required
          type="text"
          name="email"
          placeholder="أدخل البريد الالكتروني "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          minLength={6}
          type="password"
          name="password"
          placeholder="ادخل كلمة المرور"
          onChange={(e) => setPassword(e.target.value)}
        />

        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "lowercase"]}
          minLength={6}
          value={password}
          onChange={(isValid) => {
            if (!isValid) {
              setValid(true);
            } else {
              setValid(false);
            }
          }}
        />
        <br />
        <button
          disabled={valid ? true : false}
          id="signBtn"
          onClick={password.length >= 6 ? signUp : invalidPass}
        >
          تسجيل
        </button>
      </div>
    </div>
  );
};

export default Sign;
