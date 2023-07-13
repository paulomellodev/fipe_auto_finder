/* Core */
import { Action, ThunkDispatch, createAsyncThunk } from "@reduxjs/toolkit";

import type { ReduxState } from "./store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: ReduxState;
  dispatch: ThunkDispatch<ReduxState, unknown, Action<string>>;
  rejectValue: string;
}>();
