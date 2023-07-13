/* Instruments */

import { combineReducers } from "@reduxjs/toolkit";
import { selectionFipeDataSlice } from "./slices/SelectionFipeDataSlice/SelectionFipeDataSlice";
import { fipeDataSlice } from "./slices/fipeDataSlice/fipeDataSlice";

export const reducer = combineReducers({
  selections: selectionFipeDataSlice.reducer,
  fipeData: fipeDataSlice.reducer,
});
