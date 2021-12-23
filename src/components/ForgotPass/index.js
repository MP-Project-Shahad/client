import axios from "axios";
import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";

const ForgotPass = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const forgotEmail = async (e) => {
    e.preventDefault();

    // setEmail(e.target[0].value);

    let res = await axios.post(`${BASE_URL}/forgotPass`, {
      email: e.target[0].value,
    });
    if (res.data === "Cannot read property 'email' of null") {
      Swal.fire({
        icon: "error",
        title: "user is not registred or incorrect",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      console.log(res, "forgot res");
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "تم الإرسال بنجاح",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    }
  };

  return (
    <div>
      <div className="loginMainDiv">
        <h1 className="loginHeadL"></h1>
        <div className="inputsDivF">
          <h3>
            رجاءً أدخل بريدك الإلكتروني. <br />
            سنرسل لك رسالة لإعادة تعيين كلمة المرور.
          </h3>
          <br />
          <form className="forgotForm" onSubmit={forgotEmail}>
            <input
              className="loginInputF"
              required
              type="email"
              name="userEmail"
              placeholder="Enter your email"
            />
            <input className="loginBtn" value="Send code" type="submit"  />
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default ForgotPass;
