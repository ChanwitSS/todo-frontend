import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import TaskReducer from "./reducers/task";
import PropTypes from 'prop-types';

const rootReducer = combineReducers({
  task: TaskReducer,
//   user: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// store.propTypes = {
//     task: TaskReducer,
//     // user: UserReducer,
// };

export default store;
