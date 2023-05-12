import * as React from 'react';
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import { userRows } from "../../Datas";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./UserList.css";
export default function UserList() {
  const [userDatas, setUserDatas] = useState(userRows);
  let deleteUser=(userId)=>{
setUserDatas(userDatas.filter(user=>user.id !==userId))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="userListUser">
            <img src={params.row.avatar} className="userListImg" />
            {params.row.username}
          </Link>
        );
      },
    },
    {
      field: "status",
      headerName: "status",
      width: 150,
    },
    {
      field: "transAction",
      headerName: "transAction",
      width: 110,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={`/user/${params.row.id}`} className="userListUser">
            <button className="userListEdit">Edit</button>
           
          </Link>
           <DeleteOutlineOutlinedIcon className="userListDelete"
           onClick={()=>deleteUser(params.row.id)}
         
           />
           </>
        );
      },
    },
  ];
  return (
    <Box  className='datagridUserList'>

   
     <div className="userListPage">
      <DataGrid
     
        rows={userDatas}
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
