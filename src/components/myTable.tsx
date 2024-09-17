import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { User } from './data/users'

//
export default function MyTable({title, headings, data} : {title:string, headings:string[], data:User[]}) {
  return (
    <div>
        <Typography fontWeight={'bold'}>{title}</Typography>
    <TableContainer sx={{marginY:'5%'}} component={Paper}>
       <Table >
         <TableHead>
            <TableRow >
             {headings.map(el=><TableCell key={el}>{el}</TableCell>)}
            </TableRow>
          </TableHead>
        <TableBody>
     {data.map(el=><TableRow key={el.id}>
      <TableCell>{el.Name + " " + el.Surname}</TableCell>
      <TableCell>{ 2024- el.BirthDate.getFullYear()}</TableCell>

      </TableRow>)}
      </TableBody>
         </Table>
         </TableContainer >
</div>
  )
}
