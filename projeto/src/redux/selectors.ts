import { ReduxState } from "@/redux/store";

export const selectFipeData = (state: ReduxState) => state.fipeData.value;
export const selectSelection = (state: ReduxState) => state.selections.value;
