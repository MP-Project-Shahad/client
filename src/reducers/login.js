const initialState = {
  user: null,
  token: "",
};

const signIn = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      const { user, token } = payload;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      return { user, token };

    case "LOGOUT":
      localStorage.clear();
      return payload;

    default:
      const tokenStorage = localStorage.getItem("token");
      const userStorage = JSON.parse(localStorage.getItem("user"));
      if (tokenStorage) return { token: tokenStorage, user: userStorage };
      else return state;
  }
};

export default signIn;

export const login = (data) => {
  // console.log(data, "reducer");
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
