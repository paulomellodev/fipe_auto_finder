/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { SelectionFipeDataSliceState } from "@/schemas/SelectionDataSlice";

export type TSelectDataPayload = {
  codigo: string;
  stateKey: "marca" | "modelo" | "ano";
};

const initialState: SelectionFipeDataSliceState = {
  value: {
    marca: "",
    modelo: "",
    ano: "",
  },
};

export const selectionFipeDataSlice = createSlice({
  name: "selectedData",
  initialState,
  reducers: {
    selectData: (state, action: PayloadAction<TSelectDataPayload>) => {
      const { payload } = action;
      state.value[payload.stateKey] = payload.codigo;
    },

    resetSelection: (
      state,
      action: PayloadAction<"marca" | "modelo" | "ano">
    ) => {
      state.value[action.payload] = "";
    },
  },
});

export const { selectData, resetSelection } = selectionFipeDataSlice.actions;
