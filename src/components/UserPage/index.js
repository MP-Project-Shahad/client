import React, { useEffect, useState } from "react";
import Nav from "./../Nav";
// import { useNavigate } from "react-router";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../../reducers/login";
import { edit_reducer } from "../../reducers/login";
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
      console.log(res.data, "new user");
    }
  };

  const editInfo = async () => {
    let res = await axios.post(
      `${BASE_URL}/editUser/${state.signIn.user._id}`,
      { newName, newEmail }
    );
    // console.log(res.data, "RES DATA");
    // let token = localStorage.getItem("token");
    // console.log(token, "TOKEN");
    setUser(res.data);
    // let data = {
    //   token: token,
    //   user: res.data,
    // };
    // console.log(data, "DATA");
    // dispatch(edit_reducer({ data }));

    setEdit(false);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const editing = () => {
    setEdit(!edit);
  };

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
      </div>
    </div>
  );
};

export default UserPage;
