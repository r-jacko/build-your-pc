import React from "react";
import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";
import SelectElement from "../../Form/SelectElement/SelectElement";

const rowHeaders = ["name", "model", "category", "quantity", "price"];

const TableHeader = ({
  handleChange,
  value,
  handleSortRequest,
  valueToOrderBy,
  orderDirection,
}) => {
  const createSortHandler = (props)=> (e)=>{
    let sortValue;
    switch (props) {
      case "name":
        sortValue="elementName"
        break;
      case "model":
        sortValue="elementModel"
        break;
      case "category":
        sortValue="category"
        break;
      case "quantity":
        sortValue="quantity"
        break;
      case "price":
        sortValue="price"
        break;
      default:
        break;
    }
    handleSortRequest(e,sortValue)
  }
  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={2}>
          <SelectElement
            label="Filter by category"
            handleChange={handleChange}
            isFilter
            value={value}
          />
        </TableCell>
        {rowHeaders.map((el, index) => (
          <TableCell key={el} align={index ? "right" : "left"}>
            <TableSortLabel
            active={valueToOrderBy===el}
            direction={valueToOrderBy === el ? orderDirection : 'asc'}
            onClick={createSortHandler(el)}
            >
              {el.charAt(0).toUpperCase() + el.slice(1)}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
