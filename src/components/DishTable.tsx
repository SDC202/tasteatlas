import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { type Dish } from '../interface/Dish';

export default function DishTable( { data } : { data: Dish[] } ) {

  const [rows, setRows] = useState<Dish[]>([])

  const getRows = () => {
    if (rows.length) {
      return (
        rows.slice(0, 10).map((row) => (
          <TableRow
            key={row.position}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.position}
            </TableCell>
            <TableCell align="left">{row.title} ({row.subtitle})</TableCell>
            
            {/* PENDIENTE: Valores a renderizar en cada celda  */}
            <TableCell align="left">{row.country}</TableCell>
            <TableCell align="left">{row.rating.toFixed(2)}</TableCell>
            <TableCell align="left">{row.iconic}</TableCell>
            <TableCell align="left">{row.ingredients}</TableCell>
          </TableRow>
        ))
      )
    } else {
      return <TableRow><TableCell>No data</TableCell></TableRow>
    }
      
  }

  useEffect( ()=> {
    setRows(data)
  }, [data])
  

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Puesto</TableCell>
            <TableCell align='center'>Plato</TableCell>
            
            {/* PENDIENTE: Cabeceras de las columnas  */}
            <TableCell align="left">País</TableCell>
            <TableCell align="left">Rating</TableCell>
            <TableCell align="left">Locales icónicos</TableCell>
            <TableCell align="left">Ingredientes</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {getRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
