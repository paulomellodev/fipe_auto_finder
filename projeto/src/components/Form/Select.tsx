import { ForwardRefRenderFunction, forwardRef } from "react";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  SelectProps,
} from "@mui/material";
import { IBrandsModelsAndYear } from "@/schemas/fipeApiResponses";

import { ReduxDispatch, ReduxThunkAction } from "@/redux/store";

interface ISelectInput extends SelectProps {
  label: string;
  error?: boolean;
  id: string;
  dispatch: ReduxDispatch;
  thunkFunction: (...args: any[]) => ReduxThunkAction;
  options: Array<IBrandsModelsAndYear>;
}

const SelectInputBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  ISelectInput
> = (
  { error = false, label, id, options, dispatch, thunkFunction, ...rest },
  ref
) => {
  const handleChange = (event: any) => {
    dispatch(thunkFunction(event.target.value));
  };

  return (
    <FormControl
      fullWidth
      error={error}
      disabled={!options.length}
      sx={{ my: 1 }}
    >
      <InputLabel id={"label-" + id}>{label}</InputLabel>
      <Select
        labelId={"label-" + id}
        id={id}
        label={label}
        ref={ref}
        {...rest}
        onChange={handleChange}
      >
        {options.map((item) => (
          <MenuItem key={item.codigo} value={item.codigo}>
            {item.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SelectInput = forwardRef(SelectInputBase);
