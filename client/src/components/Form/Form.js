import React, { useEffect, useState } from "react";
import { Button, Paper, Typography, Grid } from "@mui/material";
import SelectElement from "./SelectElement/SelectElement";
import Input from "./Input/Input";
import { createElement ,updateElement } from "../../api";

const initialState = {
  elementName: "",
  category: "",
  elementModel: "",
  description: "",
  quantity: "",
  price: "",
};

const Form = ({ currentId, setCurrentId, elements, setIsLoading }) => {
  const [elementData, setElementData] = useState(initialState);
  const editedElement = currentId
    ? elements.find((element) => element._id === currentId)
    : null;
  const handleChange = (e) => {
    setElementData({ ...elementData, [e.target.name]: e.target.value });
  };
  const handleClick = async () => {
    setIsLoading(true)
    if (currentId) {
      await updateElement(currentId, elementData);
    } else {
      await createElement(elementData);
    }
    handleClear();
  };
  const handleClear = () => {
    setCurrentId(null);
    setElementData(initialState);
  };
  useEffect(() => {
    if (editedElement) setElementData(editedElement);
  }, [editedElement]);
  useEffect(()=>{
    if (!currentId) handleClear()
  },[currentId])
  return (
    <Paper elevation={6}>
      <Typography variant="h5" textAlign="center">
        {currentId ? `Editing` : `Adding`} an element
      </Typography>
      <Grid container spacing={2}>
        <Input
          value={elementData.elementName}
          name="elementName"
          label="Name"
          handleChange={handleChange}
        />
        <Grid item xs={12} md={6}>
        <SelectElement
          value={elementData.category}
          name="category"
          label="Category"
          handleChange={handleChange}
          required
        />
        </Grid>
        <Input
          value={elementData.elementModel}
          name="elementModel"
          label="Model"
          handleChange={handleChange}
        />
        <Input
          value={elementData.description}
          name="description"
          label="Description"
          handleChange={handleChange}
          multiline
          rows={6}
        />
        <Input
          value={elementData.quantity}
          name="quantity"
          label="Quantity"
          half
          type="number"
          handleChange={handleChange}
        />
        <Input
          value={elementData.price}
          name="price"
          label="Price/item ($)"
          half
          type="number"
          handleChange={handleChange}
        />
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            {currentId? `CHANGE`:`ADD`}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Form;
