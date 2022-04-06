import { ReactNode } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { default as MaterialSelect, SelectChangeEvent } from "@mui/material/Select";
import { SelectProps } from "@mui/material/Select/Select";

export interface ISelectOption {
  label: ReactNode;
  value: string | number;
}

interface ISelect extends Omit<SelectProps, "onChange"> {
  onChange: (value: string | number) => void;
  options: ISelectOption[];
  label: string;
}

const Select = ({ onChange, options, label, ...rest }: ISelect) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <MaterialSelect
        labelId="simple-select-label"
        id="simple-select"
        onChange={handleChange}
        {...rest}
      >
        <MenuItem value="">&nbsp;</MenuItem>
        {options.map((option, index) => (
          <MenuItem key={`option-${index}`} value={option.value}>{option.label}</MenuItem>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};

export default Select;