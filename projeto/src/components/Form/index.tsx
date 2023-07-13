"use client";
import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { SelectInput } from "./Select";

import { useDispatch, useSelector } from "@/redux/store";
import { selectFipeData, selectSelection } from "@/redux/selectors";
import { retrieveVehicleDataAsync } from "@/redux/slices/fipeDataSlice/thunk";
import {
  selectBrandThunk,
  selectModelThunk,
  selectYearThunk,
} from "@/redux/slices/SelectionFipeDataSlice/thunk";
import { splitName } from "@/utils/splitName";

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const selectionValues = useSelector(selectSelection);
  const fipeValues = useSelector(selectFipeData);
  console.log(!selectionValues.ano);
  return (
    <Stack spacing={1} direction="column" alignItems={"center"}>
      <SelectInput
        id="brand"
        label="Marca"
        options={fipeValues.marcas}
        value={selectionValues.marca}
        dispatch={dispatch}
        thunkFunction={selectBrandThunk}
      />
      <SelectInput
        id="model"
        label="Modelo"
        options={fipeValues.modelos}
        value={selectionValues.modelo}
        dispatch={dispatch}
        thunkFunction={selectModelThunk}
      />
      {!!fipeValues.anos.length && (
        <SelectInput
          id="year"
          label="Ano"
          options={splitName(fipeValues.anos)}
          value={selectionValues.ano}
          dispatch={dispatch}
          thunkFunction={selectYearThunk}
        />
      )}
      <Button
        variant="contained"
        disabled={!selectionValues.ano}
        color="primary"
        sx={{
          width: "60%",
          background: "#5d00bf",
          ":hover": { background: "#6c1fbc" },
        }}
        onClick={() => dispatch(retrieveVehicleDataAsync(router))}
      >
        Consultar preço
      </Button>
    </Stack>
  );
};

export default Form;
