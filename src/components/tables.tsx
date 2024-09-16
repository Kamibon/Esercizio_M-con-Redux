import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UsersContext } from '..'
import { LineChart, PieChart } from '@mui/x-charts'


export default function Tables() {

    const { users, newUsers, deletedUsers} = useContext(UsersContext)
    const temp = [...users]

  return (
    <div>
        <TableContainer  sx={{ maxWidth: 800, margin: '5%'}} component={Paper}>
           <Table >
             <TableHead>
                <TableRow >
                  <TableCell>User</TableCell>
                   <TableCell>Age</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
         {temp.sort((a,b)=> a.BirthDate.getFullYear() -b.BirthDate.getFullYear()).map(el=><TableRow key={el.id}>
          <TableCell>{el.Name + " " + el.Surname}</TableCell>
          <TableCell>{ 2024- el.BirthDate.getFullYear()}</TableCell>

          </TableRow>)}
          </TableBody>
             </Table>
             </TableContainer>


             <TableContainer  sx={{ maxWidth: 800, margin: '5%'}} component={Paper}>
           <Table >
             <TableHead>
                <TableRow >
                  <TableCell>New User</TableCell>
                   <TableCell>Address</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
         {newUsers.map(el=><TableRow key={el.id}>
          <TableCell>{el.Name + " " + el.Surname}</TableCell>
          <TableCell>{ el.Address}</TableCell>

          </TableRow>)}
          </TableBody>
             </Table>
             </TableContainer>

             <TableContainer  sx={{ maxWidth: 800, margin: '5%'}} component={Paper}>
           <Table >
             <TableHead>
                <TableRow >
                  <TableCell>Deleted User</TableCell>
                 
                </TableRow>
              </TableHead>
            <TableBody>
         {deletedUsers.map(el=><TableRow key={el.id}>
          <TableCell>{el.Name + " " + el.Surname}</TableCell>
         

          </TableRow>)}
          </TableBody>
             </Table>
             </TableContainer>
             
             <Typography>Dati sugli anni di nascita</Typography>
             <PieChart series={[
                   {
                     data: [
                       { id: 0, value: (users.filter(el=>el.BirthDate.getFullYear()<1980).length/users.length)*100, label: '<1980' },
                       { id: 1, value: (users.filter(el=>el.BirthDate.getFullYear()>=1980 && el.BirthDate.getFullYear()<=2000).length/users.length)*100, label: '1981<<2000' },
                       { id: 2, value: (users.filter(el=>el.BirthDate.getFullYear()>2000).length/users.length)*100, label: '>2000' },
                           ],
                   },
                      ]}   
  width={400}
  height={200}>

  </PieChart>
  <Typography>Dati sulle nascite mensili</Typography>
  
  <LineChart xAxis={[{ data: users.map(el=>el.id) }]} series={[
    {
      data: users.map(el=>el.BirthDate.getMonth()),
    },
  ]}
  width={500}
  height={300}
  >
     </LineChart>

  </div>
  )
}
