import React from "react";
import { InputLabel, Select, MenuItem, FormControl} from "@mui/material";

const SelectElement = ({
  name="filter", label, handleChange, value, required, isFilter
}) => {
  return (
    <>
      <FormControl fullWidth required={required}>
      <InputLabel id="category-label">{label}</InputLabel>
      <Select label={label} onChange={handleChange} name={name} value={value} labelId="category-label">
        {isFilter?(<MenuItem value="all">All</MenuItem>):null}
        <MenuItem value="accesories">Accesories</MenuItem>
        <MenuItem value="core">Core</MenuItem>
        <MenuItem value="software">Software</MenuItem>
        <MenuItem value="others">Others</MenuItem>
      </Select>
      </FormControl>
      </>
  );
};

export default SelectElement;
