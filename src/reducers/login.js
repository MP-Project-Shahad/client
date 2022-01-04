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
      localStorage.setItem("info", JSON.stringify(user));

      return { user, token };

    case "LOGOUT":
      localStorage.clear();
      return payload;

    case "EDIT":
      const { newuser } = payload;
      let newPayload = {};
      for (const key in newuser) {
        newPayload[key] = newuser[key];
      }

      //console.log(payload, "LLLLLLLL");
      localStorage.clear();
      localStorage.setItem("token", payload.token);

      localStorage.setItem(
        "info",
        JSON.stringify(
          newuser,
          (() => {
            const seen = new WeakSet();
            return (key, value) => {
              if (typeof value == "object" && value !== null) {
                if (seen.has(value)) {
                  return;
                }

                seen.add(value);
              }
              return value;
            };
          })()
        )
      );

      return { user: newuser, token: payload.token };

    default:
      const tokenStorage = localStorage.getItem("token");
      const userStorage = JSON.parse(localStorage.getItem("info"));
      if (tokenStorage) return { token: tokenStorage, user: userStorage };
      else return state;
  }
};

export default signIn;

export const login = (data) => {
  // console.log(data, "reduceRRRRr");
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
