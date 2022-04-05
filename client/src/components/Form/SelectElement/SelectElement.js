import React from "react";
import { InputLabel, Select, MenuItem, Grid, FormControl} from "@mui/material";

const SelectElement = ({
  name, label, handleChange, value
}) => {
  return (
    <Grid item xs={12} md={6}>
      <FormControl fullWidth required>
      <InputLabel id="category-label">{label}</InputLabel>
      <Select label={label} onChange={handleChange} name={name} value={value} labelId="category-label">
        <MenuItem value="accesories">Accesories</MenuItem>
        <MenuItem value="core">Core</MenuItem>
        <MenuItem value="software">Software</MenuItem>
        <MenuItem value="others">Others</MenuItem>
      </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectElement;
