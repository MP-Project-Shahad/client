import React, { useEffect, useState } from "react";
import Nav from "./../Nav";
// import { useNavigate } from "react-router";
import "./style.css";
import { login } from "../../reducers/login";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const UserPage = () => {
  // eslint-disable-next-line
  const state = useSelector((state) => {
    return state;
  });
  //we'll make an if statment for the state.token
  //if theres a token we'll get one user data
  //and use it to show his data
  //so that we can edit and show the new names fast

  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  // const [newPass, setNewPass] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  useEffect(() => {
    setNewName(state.signIn.user.userName);
    setNewEmail(state.signIn.user.email);
    setNewAvatar(state.signIn.user.avatar);
  }, []);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const editInfo = async () => {
    console.log("here");
    // console.log(state.signIn.user._id);
    let res = await axios.post(
      `${BASE_URL}/editUser/${state.signIn.user._id}`,
      { newName, newEmail }
    );

    // console.log(res.data);

    let token = localStorage.getItem("token");
    console.log(token);
    let data = {
      token: token,
      user: res.data,
    };
    console.log(data);
    dispatch(login({ data }));

    setEdit(false);
  };

  const editing = () => {
    setEdit(!edit);
  };

  // console.log(edit);

  return (
    <div className="userPageMainDiv">
      <Nav />
      {/* <div className="shadow"></div> */}
      <div className="userInfoDiv">
        {state.signIn.user && (
          <div>
            <div className="userPageImgDiv">
              <img
                className="userPageImg"
                alt="userIcon"
                src={state.signIn.user.avatar}
              />
            </div>

            {edit ? (
              <>
                <div className="editDiv">
                  <input
                    type="text"
                    className="nameHead"
                    id="editInput"
                    defaultValue={state.signIn.user.userName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="mailHead"
                    id="editInput"
                    defaultValue={state.signIn.user.email}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                  {/* <input
                    type="password"
                    id="editInput"
                    placeholder="اكتب كلمة مرورك الجديدة"
                    onChange={() => setNewPass(e.target.value)}
                  /> */}
                  <button className="mainBtn" onClick={() => editInfo()}>
                    إتمام التعديل
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="nameHead">@{state.signIn.user.userName}</h1>
                <h2 className="mailHead">{state.signIn.user.email}</h2>
                <button className="mainBtn" onClick={editing}>
                  تعديل
                </button>
              </>
            )}
          </div>
        )}
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default UserPage;
