import { combineReducers } from "redux";
import subjects from "./subjectReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducers = combineReducers({
  subjects,
  apiCallsInProgress,
});

export default rootReducers;
