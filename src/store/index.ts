import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/auth";
import TaskReducer from "./reducers/task";

const rootReducer = combineReducers({
  auth: AuthReducer,
  task: TaskReducer,
//   user: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
