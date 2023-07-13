import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { createAppAsyncThunk } from "@/redux/createAppAsyncThunk";

import { api } from "@/services/api";

import {
  IVeiculo,
  TBrandsResponse,
  TModelsResponse,
  TYearsResponse,
} from "@/schemas/fipeApiResponses";

export const fetchAllBrandsAsync = createAppAsyncThunk(
  "fipeDataSlice/fetchAllBrands",
  async () => {
    const { data } = await api.get<TBrandsResponse>("/carros/marcas");

    return data;
  }
);

export const fetchAllModelsByBrandAsync = createAppAsyncThunk(
  "fipeData/fetchAllModelsByBrand",
  async (codigoBrand: string) => {
    const { data } = await api.get<TModelsResponse>(
      `/carros/marcas/${codigoBrand}/modelos`
    );

    return data.modelos;
  }
);

export const fetchAllYearsByModelAsync = createAppAsyncThunk(
  "fipeData/fetchAllYearsByModel",
  async (codigoModel: string, { getState }) => {
    const { selections } = getState();

    const { data } = await api.get<TYearsResponse>(
      `/carros/marcas/${selections.value.marca}/modelos/${codigoModel}/anos`
    );

    return data;
  }
);

export const retrieveVehicleDataAsync = createAppAsyncThunk(
  "fipeData/retrieveVehicleDataAsync",
  async (router: AppRouterInstance, { getState }) => {
    const { selections } = getState();

    const { data } = await api.get<IVeiculo>(
      `/carros/marcas/${selections.value.marca}/modelos/${selections.value.modelo}/anos/${selections.value.ano}`
    );
    router.push("resultado");
    return data;
  }
);
