import {  Typography } from '@mui/material'
import  { useContext } from 'react'
import { UsersContext } from '..'
import { LineChart, PieChart } from '@mui/x-charts'
import MyTable from './myTable'


export default function Tables() {

    const { users, newUsers, deletedUsers} = useContext(UsersContext)
    const temp = [...users]

  return (
    <div>
      
             
              <MyTable title='Utenti in ordine di anzianità' headings={["Utente", "Età"]} data ={temp.sort((a,b)=> a.BirthDate.getFullYear() -b.BirthDate.getFullYear())}></MyTable>
              <MyTable title='Nuovi utenti' headings={["Nome Utente", "Indirizzo"] } data={newUsers}></MyTable>
              <MyTable title='Utenti Eliminati' headings={["Utente Eliminato"]} data={deletedUsers}></MyTable>

             
             
             <Typography fontWeight={'bold'}>Dati sugli anni di nascita</Typography>
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
  <Typography fontWeight={'bold'}>Dati sulle nascite mensili</Typography>
  
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
