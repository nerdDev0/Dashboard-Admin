import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { products } from "../../Datas";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./Products.css";
export default function Products() {
  const [productsData, setProductsData] = useState(products);
  let deleteProducts = (productId) => {
    setProductsData(productsData.filter((product) => product.id !== productId));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="userListUser">
            <img src={params.row.avatar} className="userListImg" />
            {params.row.title}
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="userListUser">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="userListDelete"
              onClick={() => deleteProducts(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <Box className="datagridUserList">
      <div className="userListPage">
        <DataGrid
          rows={productsData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </Box>
  );
}
