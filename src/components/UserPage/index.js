import React, { useEffect, useState } from "react";
import Nav from "./../Nav";
// import { useNavigate } from "react-router";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { login } from "../../reducers/login";
import { edit_reducer } from "../../reducers/login";
import { toJSON } from "flatted";
const UserPage = () => {
  // eslint-disable-next-line
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  // const [newPass, setNewPass] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [user, setUser] = useState({});

  // console.log(user, "usersrsrsrsr");
  console.log(state, "shahed");
  useEffect(() => {
    setNewName(state.signIn.user.userName);
    setNewEmail(state.signIn.user.email);
    setNewAvatar(state.signIn.user.avatar);
  }, []);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getInfo = async () => {
    if (state.signIn.token) {
      let res = await axios.get(`${BASE_URL}/oneUser/${state.signIn.user._id}`);
      setUser(res.data);
      console.log(res.data, "one user");
    }
  };

  const editInfo = async () => {
    let res = await axios.post(
      `${BASE_URL}/editUser/${state.signIn.user._id}`,
      { newName, newEmail }
    );
    console.log(res.data, "RES DATA");
    let token = localStorage.getItem("token");

    setUser(res.data);
    let data = {
      token: token,
      newuser: res.data,
    };
    console.log(data, "DATA");

    setEdit(false);
    dispatch(edit_reducer(data));
  };

  useEffect(() => {
    getInfo();
  }, []);

  const editing = () => {
    setEdit(!edit);
  };

  console.log(state.signIn);

  return (
    <div className="userPageMainDiv">
      <Nav />
      {/* <div className="shadow"></div> */}
      <div className="userInfoDiv">
        {state.signIn.user && (
          <div>
            <div className="userPageImgDiv">
              <img className="userPageImg" alt="userIcon" src={user.avatar} />
            </div>

            {edit ? (
              <>
                <div className="editDiv">
                  <input
                    type="text"
                    className="nameHead"
                    id="editInput"
                    defaultValue={user.userName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="mailHead"
                    id="editInput"
                    defaultValue={user.email}
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
                <h1 className="nameHead">@{user.userName}</h1>
                <h2 className="mailHead">{user.email}</h2>
                <button className="mainBtn" onClick={editing}>
                  تعديل
                </button>
              </>
            )}
          </div>
        )}
        <br />
        <div className="shadow"></div>
        <div className="userLevelMainDiv">
          <div className="userPageArLevelDiv">
            <ul>
              <li>
                <b>Arabic level</b>: {user.level}
              </li>
            </ul>
          </div>
          <div className="userPageArLevelDiv">
            <ul dir="rtl">
              <li>
                <b>مستوى اللغة العربية</b> :
                {
                  (user.level = "didn't take the placement test yet" ? (
                    " لم يتمم اختبار المستوى بعد "
                  ) : (
                    <>
                      {
                        (user.level = "level 1" ? (
                          "المستوى 1"
                        ) : (
                          <>
                            {
                              (user.level = "level 2"
                                ? "المستوى 2"
                                : "المستوى 3")
                            }
                          </>
                        ))
                      }
                    </>
                  ))
                }
              </li>
            </ul>
          </div>
        </div>
        {
          (user.level = "didn't take the placement test yet" ? (
            <></>
          ) : (
            <>
              <div className="shadow"></div>
              <div className="userLessonsDiv">
                <h1>Lessons history</h1>
                {/*here we'll have the user lesson history  */}
              </div>
            </>
          ))
        }
        {state.signIn.user.role === "61c062111218a1d5bd184f99" ? (
          <>
            <div className="dashBoardMainDiv">
              <h2>Admin Dashboard</h2>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserPage;
