import { combineReducers } from "redux";

import general from "./general";
import pages from "./pages";

export default combineReducers({
  general,
  pages,
});
