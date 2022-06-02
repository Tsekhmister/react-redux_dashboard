import { combineReducers } from "redux";

import { positionReducer } from "./positions/position_reducer";
import { filterReducer } from "./filters/filter_reducer";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});