/* Core */
import {
  Action,
  AnyAction,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { TFipeDataSlice } from "@/schemas/fipeApiResponses";
import {
  fetchAllBrandsAsync,
  fetchAllModelsByBrandAsync,
  fetchAllYearsByModelAsync,
  retrieveVehicleDataAsync,
} from "./thunk";

interface RejectedAction extends Action {
  error: Error;
}

interface PendingAction extends Action {}

const initialState: TFipeDataSlice = {
  value: {
    marcas: [],
    modelos: [],
    anos: [],
    veiculo: undefined,
  },
  loading: false,
};

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith("rejected");
}

function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith("pending");
}

export const fipeDataSlice = createSlice({
  name: "fipeData",
  initialState,
  reducers: {
    resetDataByKey: (
      state,
      action: PayloadAction<"marcas" | "modelos" | "anos">
    ) => {
      state.value[action.payload] = [];
    },
    resetVeiculo: (state) => {
      state.value.veiculo = undefined;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value.marcas = action.payload;
      })
      .addCase(fetchAllModelsByBrandAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value.modelos = action.payload;
      })
      .addCase(fetchAllYearsByModelAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value.anos = action.payload;
      })
      .addCase(retrieveVehicleDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value.veiculo = action.payload;
      })
      .addMatcher(isRejectedAction, (state) => {
        state.loading = false;
      })
      .addMatcher(isPendingAction, (state) => {
        state.loading = true;
      });
  },
});

export const { resetDataByKey, resetVeiculo } = fipeDataSlice.actions;
