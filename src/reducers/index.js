import { combineReducers } from "redux";
import CategoriesReducer from "./categoriesReducer";
import AvisReducer from "./avisReducer";
import JobbersReducer from "./jobbersReducer";
import UsersReducer from "./usersReducer";

export default combineReducers({
  CategoriesReducer,
  AvisReducer,
  JobbersReducer,
  UsersReducer
});
