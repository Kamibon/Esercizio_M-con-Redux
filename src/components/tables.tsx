import {  Typography } from '@mui/material'


import { LineChart, PieChart } from '@mui/x-charts'
import MyTable from './myTable'
import { useAppSelector } from '../redux/store'


export default function Tables() {
    const { users, newUsers, deletedUsers } = useAppSelector(state => state.users);
    const temp = [...users];

    return (
        <div>
            <MyTable title='Utenti in ordine di anzianità' headings={["Utente", "Username"]} data={temp} information='username' />
            <MyTable title='Nuovi utenti' headings={["Nome Utente", "Indirizzo"]} data={newUsers} information='email' />
            <MyTable title='Utenti Eliminati' headings={["Utente Eliminato", "Email"]} data={deletedUsers} information='email' />

            <Typography fontWeight={'bold'}>Dati sugli anni di nascita</Typography>
            {/* 
            <PieChart series={[
                {
                    data: [
                        { id: 0, value: (users.filter(el => el.BirthDate.getFullYear() < 1980).length / users.length) * 100, label: '<1980' },
                        { id: 1, value: (users.filter(el => el.BirthDate.getFullYear() >= 1980 && el.BirthDate.getFullYear() <= 2000).length / users.length) * 100, label: '1981<<2000' },
                        { id: 2, value: (users.filter(el => el.BirthDate.getFullYear() > 2000).length / users.length) * 100, label: '>2000' },
                    ],
                },
            ]}
                width={400}
                height={200}
            >
            </PieChart> 
            */}

            <Typography fontWeight={'bold'}>Dati sulle nascite mensili</Typography>
            {/* 
            <LineChart xAxis={[{ data: users.map(el => el.id) }]} series={[
                {
                    data: users.map(el => el.BirthDate.getMonth()),
                },
            ]}
                width={500}
                height={300}
            >
            </LineChart> 
            */}
        </div>
    );
}
