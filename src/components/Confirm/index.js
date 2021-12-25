import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";
import logo from "./mp-logo.png";

const Confirm = () => {
  const [code, setCode] = useState("");
  const [writtenCode, setWrittenCode] = useState("");
  const id = useParams().id;

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getUser = async () => {
    let res = await axios.get(`${BASE_URL}/oneUser/${id}`);
    // console.log(res.data._id);
    setCode(res.data.key);
    console.log(code, "here");
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, [code]);

  const confirmation = async () => {
    try {
      if (writtenCode == code) {
        const res = await axios.put(`${BASE_URL}/confirm/${id}`);
        console.log("confirmed successfully!");
        navigate("/login");
      } else {
        Swal.fire({
          title: "رمز تحقق خاطئ، الرجاء التأكد واعادة المحاوله",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    } catch (error) {
      console.log("confirmation try catch Error:", error.message);
    }
  };

  useEffect(() => {
    confirmation();
  }, []);

  return (
    <div className="confirmMainDiv">
      <img
        onClick={() => navigate("/")}
        className="confirmLogo"
        src={logo}
        alt="logo"
      />
      <div className="confirmDiv">
        <h2>
          الرجاء تأكيد الحساب عن طريق كتابة الرمز <br />
          المرسل على البريد الالكتروني
        </h2>
        <div className="inputsDiv">
          <input
            className="loginInput"
            type="number"
            name="code"
            required
            placeholder="ادخل رمز التحقق"
            onChange={(e) => setWrittenCode(e.target.value)}
          />
          <button className="mainBtn" onClick={(e) => confirmation()}>
            تفعيل الحساب
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
