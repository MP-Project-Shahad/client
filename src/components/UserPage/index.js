import React, { Fragment, useEffect, useState } from "react";
import Nav from "./../Nav";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { edit_reducer } from "../../reducers/login";
import { useNavigate } from "react-router-dom";
import "animate.css";
import Swal from "sweetalert2";
import PasswordChecklist from "react-password-checklist";
import { storage } from "../../firebase";

const UserPage = () => {
  // eslint-disable-next-line
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);
  const [passEdit, setPassEdit] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [newPass, setNewPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (state.signIn.user) {
      setNewName(state.signIn.user.userName);
      setNewEmail(state.signIn.user.email);
      setNewAvatar(state.signIn.user.avatar);
    }
  }, []);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(state.signIn.user.avatar);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    console.log(typeof e.target.value);
    if (e.target.files[0]) {
      let file = e.target.files[0];
      setImage(file);
      handleUpload(file);
    }
  };
  // console.log(url, "here");

  const handleUpload = (img) => {
    // e.preventDefault();
    const uploadImg = storage.ref(`images/${img.name}`).put(img);

    uploadImg.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error.message, "firbase error");
      },
      () => {
        storage
          .ref("images")
          .child(img.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getInfo = async () => {
    if (state.signIn.token) {
      let res = await axios.get(`${BASE_URL}/oneUser/${state.signIn.user._id}`);
      setUser(res.data);
      console.log(res.data);
    }
  };

  //editing user info
  const editInfo = async () => {
    let res = await axios.post(
      `${BASE_URL}/editUser/${state.signIn.user._id}`,
      { newName, newEmail, newAvatar: url }
    );
    console.log(res.data, "RES DATA");
    let token = localStorage.getItem("token");

    setUser(res.data);
    let data = {
      token: token,
      newuser: res.data,
    };

    setEdit(false);
    dispatch(edit_reducer(data));
    setImage(null);
    setProgress(0);
  };

  //new password
  const editPass = async () => {
    if (newPass == passConf) {
      let res = await axios.post(
        `${BASE_URL}/resetPass/${state.signIn.user._id}`,
        { newPass }
      );
      console.log(res.data);
      setPassEdit(false);
      setNewPass("");
      setPassConf("");
    } else {
      Swal.fire({
        icon: "error",
        title: "الرجاء التأكد من تطابق الكلمة",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  const editing = () => {
    setEdit(!edit);
  };

  const passReset = () => {
    setPassEdit(!passEdit);
  };

  //to get all users for admin dashboard
  const getUsers = async () => {
    let res = await axios.get(`${BASE_URL}/users`);
    setAllUsers(res.data);
  };

  //deleting user for users & admins
  const delUser = async (id) => {
    let res = await axios.put(`${BASE_URL}/delUser/${id}`);
    console.log(res);
  };

  useEffect(() => {
    getInfo();
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [delUser]);

  return (
    <div className="userPageMainDiv">
      <Nav />
      <div className="userInfoDiv">
        {state.signIn.user ? (
          <>
            {state.signIn.user && (
              <div>
                <div className="userPageImgDiv">
                  <img
                    className="userPageImg"
                    alt="userImg"
                    src={user.avatar}
                  />
                </div>

                {edit ? (
                  <>
                    <div className="editDiv">
                      <label className="uploadLabel" id="uploadLabel">
                        <input
                          type="file"
                          name="postImg"
                          className="custom-file-input"
                          onChange={handleChange}
                        />
                      </label>
                      <progress id="progress" value={progress} max="100" />
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

                      <button className="mainBtn" onClick={() => editInfo()}>
                        حفظ التعديلات
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {passEdit ? (
                      <>
                        <input
                          required
                          type="password"
                          id="editInput"
                          placeholder="اكتب كلمة مرورك الجديدة"
                          onChange={(e) => setNewPass(e.target.value)}
                        />
                        <input
                          required
                          type="password"
                          id="editInput"
                          placeholder="اعد كتابة كلمة المرور الجديدة"
                          onChange={(e) => setPassConf(e.target.value)}
                        />
                        <PasswordChecklist
                          rules={[
                            "minLength",
                            "specialChar",
                            "number",
                            "capital",
                            "lowercase",
                          ]}
                          minLength={6}
                          value={newPass}
                          onChange={(isValid) => {
                            if (!isValid) {
                              setValid(true);
                            } else {
                              setValid(false);
                            }
                          }}
                        />
                        <button className="mainBtn" onClick={() => editPass()}>
                          حفظ كلمة المرور
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <h1 className="nameHead">{user.userName}@</h1>
                        <h2 className="mailHead">{user.email}</h2>
                        <div className="btnsDiv">
                          <button className="mainBtn" onClick={editing}>
                            تعديل
                          </button>
                          <button className="mainBtn2" onClick={passReset}>
                            تعديل كلمة المرور
                          </button>
                        </div>
                      </>
                    )}
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
                <div className="shadow"></div>

                <div className="dashBoardMainDiv">
                  <h2 dir="rtl">لوحة التحكم</h2>
                  <div className="usersListDiv" dir="rtl">
                    <div className="usersDiv">
                      {" "}
                      <table className="dashTable">
                        <thead>
                          <tr>
                            <th>اسم المستخدم</th>
                            <th>البريد الالكتروني</th>
                            <th>المستوى</th>
                            <th> حذف المستخدم</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Fragment>
                            {allUsers.map((ele) => {
                              return (
                                <>
                                  <tr>
                                    <td id="nameTd">{ele.userName}</td>
                                    <td id="mailTd">{ele.email}</td>
                                    <td id="levelTd">{ele.level}</td>
                                    <td id="delTd">
                                      {ele.isDel === true ? (
                                        <div>
                                          <img
                                            onClick={() => delUser(ele._id)}
                                            className="delIcon"
                                            alt="delIcon"
                                            src="https://img.icons8.com/external-gradak-royyan-wijaya/48/fa314a/external-delete-gradak-user-gradak-royyan-wijaya-6.png"
                                          />
                                        </div>
                                      ) : (
                                        <div>
                                          <img
                                            onClick={() => delUser(ele._id)}
                                            className="delIcon"
                                            alt="delIcon"
                                            src="https://img.icons8.com/external-gradak-royyan-wijaya/48/000000/external-delete-gradak-user-gradak-royyan-wijaya-6.png"
                                          />
                                        </div>
                                      )}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </Fragment>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            <button className="mainBtn3" onClick={() => delUser(user._id)}>
              حذف الحساب
            </button>
          </>
        ) : (
          <>
            <h2>الرجاء تسجيل الدخول لاظهار هذه الصفحة</h2>
            <button className="mainBtn" onClick={() => navigate("/login")}>
              تسجيل الدخول
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserPage;
