import { createStore, applyMiddleware, combineReducers } from "redux";
// import rootReducer from "./reducers/root";
import repos from "./reducers/Repos";
// import branches from "./reducers/Branches";
import files from "./reducers/Files";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  repos,
  // branches,
  files
})


export default function configure() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
