import React from 'react';
import { TextField, Grid } from '@mui/material';

const Input = ({
  name, handleChange, label, half, type, multiline, rows, value
}) => {
  return ( 
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField name={name} onChange={handleChange} variant="outlined" required fullWidth label={label} type={type} multiline={multiline} rows={rows} value={value}/>
    </Grid>
   );
}
 
export default Input;