import { combineReducers } from "redux";
import leads from "./leads";
import messages from "./messages";
import errors from "./errors";

export default combineReducers({
  //add reducers here
  leads,
  errors,
  messages,
});
