import { ReduxState, ReduxThunkAction } from "@/redux/store";

import { resetSelection, selectData } from "./SelectionFipeDataSlice";
import { resetDataByKey, resetVeiculo } from "../fipeDataSlice/fipeDataSlice";
import {
  fetchAllModelsByBrandAsync,
  fetchAllYearsByModelAsync,
} from "../fipeDataSlice/thunk";

export const selectBrandThunk =
  (codigoBrand: string): ReduxThunkAction =>
  (dispatch, getState) => {
    const { selections, fipeData } = getState();

    if (selections.value.modelo) {
      dispatch(resetSelection("modelo"));
      dispatch(resetDataByKey("modelos"));
    }

    if (selections.value.ano) {
      dispatch(resetSelection("ano"));
      dispatch(resetDataByKey("anos"));
    }

    if (!!fipeData.value.veiculo) {
      dispatch(resetVeiculo());
    }

    dispatch(selectData({ codigo: codigoBrand, stateKey: "marca" }));
    dispatch(fetchAllModelsByBrandAsync(codigoBrand));
  };

export const selectModelThunk =
  (codigoModel: string): ReduxThunkAction =>
  (dispatch, getState) => {
    const { selections, fipeData } = getState();

    if (selections.value.ano) {
      dispatch(resetSelection("ano"));
      dispatch(resetDataByKey("anos"));
    }

    if (!!fipeData.value.veiculo) {
      dispatch(resetVeiculo());
    }

    dispatch(selectData({ codigo: codigoModel, stateKey: "modelo" }));
    dispatch(fetchAllYearsByModelAsync(codigoModel));
  };

export const selectYearThunk =
  (codigoYear: string): ReduxThunkAction =>
  (dispatch, getState) => {
    const { fipeData } = getState();

    if (!!fipeData.value.veiculo) {
      dispatch(resetVeiculo());
    }

    dispatch(selectData({ codigo: codigoYear, stateKey: "ano" }));
  };
