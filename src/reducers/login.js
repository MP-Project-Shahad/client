const initialState = {
  user: null,
  token: "",
};

const signIn = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      const { user, token } = payload;
      console.log(payload, "LLLLLLLL");
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      return { user, token };

    case "LOGOUT":
      localStorage.clear();
      return payload;

    case "EDIT":
      const { newUser, newToken } = payload;
      console.log(payload.data.user, "LLLLLLLL");
      localStorage.clear();
      let newToken3 = payload.data.token;
      let newUser3 = payload.data.user;
      localStorage.setItem("token", newToken3);
      localStorage.setItem("user", JSON.stringify(newUser3));

      return { newUser3, newToken3 };

    default:
      const tokenStorage = localStorage.getItem("token");
      const userStorage = JSON.parse(localStorage.getItem("user"));
      if (tokenStorage) return { token: tokenStorage, user: userStorage };
      else return state;
  }
};

export default signIn;

export const login = (data) => {
  console.log(data, "reduceRRRRr");
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const logout = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};

export const edit_reducer = (data) => {
  console.log(data, "reduceRRRRr");
  return {
    type: "EDIT",
    payload: data,
  };
};
