
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { User } from './services/dto'


//
interface MyTableProps {
  title: string;
  headings: string[];
  data: User[];
  information: string;
}

export default function MyTable({ title, headings, data, information }: MyTableProps) {
  return (
    <div>
      <Typography fontWeight={'bold'}>{title}</Typography>
      <TableContainer sx={{ marginY: '5%' }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'black' }}>
              {headings.map((el) => (
                <TableCell sx={{ color: 'white' }} key={el}>{el}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el) => (
              <TableRow key={el.id}>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el[information]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
