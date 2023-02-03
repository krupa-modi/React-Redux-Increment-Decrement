// we only create one root reduce so make one more reduce.js file

// import reducer file
import changeTheNumber from "./increment-decrement";

// create combineReducers from redux for store multiple reducer
import { combineReducers } from "redux";

// create object
const rootReducer = combineReducers({
  // using key value pair to call multiple reducer
  changeTheNumber: changeTheNumber,
});

// export it
export default rootReducer;
