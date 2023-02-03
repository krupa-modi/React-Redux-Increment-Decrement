// createstore = configureStore  from redux
import { createStore } from "redux";

// import rootReducers
import rootReducer from "../reducer/reducer";

// we store all reducer inside createstore = configureStore
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export it
export default store;
