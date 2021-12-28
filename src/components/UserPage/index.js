import React from "react";
import Nav from "./../Nav";
// import { useNavigate } from "react-router";
import "./style.css";
import { useSelector } from "react-redux";
const UserPage = () => {
  // eslint-disable-next-line
  const state = useSelector((state) => {
    return state;
  });

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <div className="userPageMainDiv">
      <Nav />
      {/* <div className="shadow"></div> */}
      <div className="userInfoDiv">
        {state.signIn.user && (
          <div>
            <img
              className="userPageImg"
              alt="userIcon"
              src={state.signIn.user.avatar}
            />
            <h1 className="nameHead">@{state.signIn.user.userName}</h1>
            <h2 className="mailHead">{state.signIn.user.email}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
