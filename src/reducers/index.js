import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({  });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
