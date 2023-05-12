import * as React from 'react';
import './WidgetLG2.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { transferActions } from "../../Datas";



export default function WidgetLG2() {
  return (
    
    <TableContainer className='containerTable'  component={Paper}>
      <Table sx={{ minWidth: 600}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Costumer</TableCell>
            <TableCell align="right">Date&nbsp;</TableCell>
            <TableCell align="right">Amount&nbsp;</TableCell>
            <TableCell align="right">Status&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transferActions.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontSize:17}} className='costumertable' component="th" scope="row">
              <img className='WidgetLImg' src={row.image}  /> {row.customer}
              </TableCell>
              <TableCell   align="right">{row.date}</TableCell>
              <TableCell align="right">{row.Amount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}