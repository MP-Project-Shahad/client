import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Nav from "../Nav";
import axios from "axios";
import { useSelector } from "react-redux";

const OneDiscussion = () => {
  const state = useSelector((state) => {
    return state;
  });

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [id, setId] = useState(0);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");

  let postId = useParams().id;

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //getting the full post details
  const details = async () => {
    console.log(`${BASE_URL}/fullpost/${postId}`);
    try {
      let res = await axios.get(`${BASE_URL}/fullpost/${postId}`);

      console.log(res, "res");

      setPost(res.data[0]);
      setComments(res.data[1]);
      setId(res.data[0].userId._id);
      setAvatar(res.data[0].userId.avatar);
      setName(res.data[0].userId.userName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    details();
    // eslint-disable-next-line
  }, []);

  //posting a comment
  const comment = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      let res = await axios.post(
        `${BASE_URL}/comment/${postId}/${state.signIn.user._id}`,
        {
          desc: e.target.comment.value,
        }
      );
      details();
      e.target.comment.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  //deleteing post
  const deletePost = async (id) => {
    try {
      // eslint-disable-next-line
      let res = await axios.delete(`${BASE_URL}/softDelPost/${id}`, {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      });

      details();
    } catch (error) {
      console.log(error.message);
    }
  };

  //deleting comment
  const deleteCom = async (id) => {
    try {
      // eslint-disable-next-line
      let res = await axios.put(`${BASE_URL}/delComment/${id}`, {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      });

      details();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="oneDiscMainDiv">
      <Nav />
      {post && (
        <>
          <div className="postDetailDiv">
            <div className="userInfo" style={{ display: "flex" }}>
              {avatar && (
                <img
                  style={{
                    width: "80px",
                    borderRadius: "100%",
                    marginBottom: "10px",
                  }}
                  src={avatar}
                  alt="userImg"
                />
              )}
              {name && (
                <h4 className="posterName" key={post._id + 1}>
                  @{name}
                </h4>
              )}
            </div>

            <h2 className="name" style={{ margin: "2%", fontSize: "35px" }}>
              {post.desc}
            </h2>
            {post.img ? (
              <div
                style={{
                  // margin: "3%",
                  // marginLeft: "0%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    // maxWidth: "650px",
                    borderRadius: "10px",
                  }}
                  alt="post"
                  src={post.img}
                />
              </div>
            ) : (
              ""
            )}
            <p
              className="timeStamp"
              style={{ color: "grey", fontSize: "10px" }}
              key={postId + 3}
            >
              {post.timeStamp}
            </p>
            <br />

            <div className="btnsDivFull">
              {state.signIn.token ? (
                <>
                  {id === state.signIn.user._id ||
                  state.signIn.user.role === "61a73488b03855b1f60c356f" ? (
                    <>
                      <button
                        className="btn"
                        onClick={() => deletePost(postId)}
                        key={postId + 8}
                      >
                        <img
                          className="comIcon"
                          src="https://img.icons8.com/fluency-systems-regular/48/000000/filled-trash.png"
                          alt="icon"
                        />
                      </button>
                    </>
                  ) : (
                    ""
                  )}{" "}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          {comments && (
            <>
              {/* <div className="comDiv"> */}
              {comments.map((com) => {
                return (
                  <div className="comMainDiv" key={com._id + 1}>
                    <h3
                      key={com._id + 2}
                      style={{
                        color: "grey",
                        fontSize: "15px",
                        marginTop: "10px",
                      }}
                    >
                      @{com.userId.userName}
                    </h3>
                    <h2 key={com._id + 3} style={{ marginTop: "20px" }}>
                      {com.desc}
                    </h2>

                    <p
                      className="timeStamp"
                      style={{ color: "grey", fontSize: "10px" }}
                      key={com._id + 4}
                    >
                      {com.timeStamp}
                    </p>
                    <div className="btnsDiv">
                      {state.signIn.token ? (
                        <>
                          {com.userId._id === state.signIn.user._id ||
                          state.signIn.user.role ===
                            "61a73488b03855b1f60c356f" ? (
                            <>
                              <button
                                className="btn"
                                onClick={() => deleteCom(com._id)}
                                key={com._id + 8}
                              >
                                <img
                                  className="comIcon"
                                  src="https://img.icons8.com/fluency-systems-regular/48/000000/filled-trash.png"
                                  alt="icon"
                                />
                              </button>
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
                );
              })}
              {/* </div> */}
            </>
          )}
        </>
      )}
      <div className="addComDiv">
        {state.signIn.token ? (
          <>
            <form onSubmit={comment}>
              <input
                required
                type="text"
                name="comment"
                className="comInput"
                placeholder="Write your comment"
              />
              <button className="sendComBtn" type="submit">
                <img
                  className="comIcon"
                  src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-instagram-flatart-icons-outline-flatarticons.png"
                  alt="icon"
                />
              </button>
            </form>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default OneDiscussion;
