import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase";
import "./style.css";
import Nav from "../Nav";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Discussion = () => {
  const state = useSelector((state) => {
    return state;
  });

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
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

  // eslint-disable-next-line
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  // const [likes, setLikes] = useState(0);

  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //getting all undeleted posts
  const getAllPosts = async () => {
    const res = await axios.get(`${BASE_URL}/allPosts`);

    setPosts(res.data);
  };

  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line
  }, []);
  //---------------------------------

  //posting
  const addPost = async (e) => {
    e.preventDefault();
    try {
      let newPost = e.target.newPost.value;
      // let postImg = e.target.postImg.value;

      // eslint-disable-next-line
      const res = await axios.post(
        `${BASE_URL}/post/${state.signIn.user._id}`,
        {
          desc: newPost,
          img: url,
        }
      );
      console.log(res, "result");
      getAllPosts();
      e.target.newPost.value = "";
      e.target.postImg.value = "";
      setImage(null);
      setProgress(0);
    } catch (error) {
      console.log(error.message);
    }
  };
  //-----------------------------------------

  //soft deleteing post
  const deletePost = async (id) => {
    try {
      // eslint-disable-next-line
      let res = await axios.delete(`${BASE_URL}/softDelPost/${id}`, {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      });
      console.log(res, "deleting");

      getAllPosts();
    } catch (error) {
      console.log(error.message);
    }
  };
  //--------------------------------------

  //to open post details
  const fullPost = (id) => {
    navigate(`/Discussion/${id}`);
  };

  //-----------------------
  return (
    <div className="discMainDiv">
      <Nav />
      <div className="postsMainDiv" dir="rtl">
        <div className="postsSecondMainDiv">
          {posts &&
            posts.reverse().map((post) => {
              return (
                <div className="postsMainDiv2" key={post._id + 11}>
                  <div className="postDiv" key={post._id + 10}>
                    <div className="contDiv">
                      <div className="topOptDiv">
                        <div className="userInfo">
                          <div>
                            <img
                              className="userImg"
                              src={post.userId.avatar}
                              alt="userImg"
                            />
                          </div>
                          <div>
                            <h4 className="posterName" key={post._id + 1}>
                              @{post.userId.userName}
                            </h4>
                          </div>
                        </div>
                        <div className="btnsDiv" key={4}>
                          <button
                            className="btn"
                            key={post._id + 5}
                            onClick={() => fullPost(post._id)}
                          >
                            <img
                              className="comIcon"
                              src="https://img.icons8.com/windows/64/000000/comment-medical.png"
                              alt="icon"
                            />
                          </button>
                          {state.signIn.token ? (
                            <>
                              {post.userId._id === state.signIn.user._id ||
                              state.signIn.user.role ===
                                "61c062111218a1d5bd184f99" ? (
                                <>
                                  {state.signIn.token ? (
                                    <button
                                      className="btn"
                                      onClick={() => deletePost(post._id)}
                                      key={post._id + 8}
                                    >
                                      <img
                                        className="comIcon"
                                        src="https://img.icons8.com/fluency-systems-regular/48/000000/filled-trash.png"
                                        alt="icon"
                                      />
                                    </button>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ) : (
                                ""
                              )}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <h2 className="postDesc" key={post._id + 2}>
                        {post.desc}
                      </h2>
                      {post.img ? (
                        <div className="postImgDiv">
                          <img className="postImg" alt="post" src={post.img} />
                        </div>
                      ) : (
                        ""
                      )}
                      <p className="timeStamp" key={post._id + 3}>
                        {post.timeStamp}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="mainUpload">
          <div className="uploadDiv">
            <form onSubmit={addPost}>
              <input
                required="you didnt write anything"
                type="text"
                name="newPost"
                className="addingInput"
                placeholder="What's happening?"
              />

              <div className="uploading">
                <label className="uploadLabel" id="uploadLabel">
                  <input
                    type="file"
                    name="postImg"
                    className="custom-file-input"
                    onChange={handleChange}
                  />
                </label>
                <progress id="progress" value={progress} max="100" />
              </div>
              {state.signIn.user ? (
                <button className="mainBtn" type="submit" dir="rtl">
                  إرسال
                </button>
              ) : (
                <button
                  className="mainBtn"
                  onClick={() => navigate("/login")}
                  dir="rtl"
                >
                  إرسال
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
