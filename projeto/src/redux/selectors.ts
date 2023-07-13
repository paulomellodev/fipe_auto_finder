import { ReduxState } from "@/redux/store";

// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFipeData = (state: ReduxState) => state.fipeData.value;
export const selectSelection = (state: ReduxState) => state.selections.value;
