
import { Box, Typography, FormControl, TextField, InputLabel, Select, MenuItem, Button, Stack } from '@mui/material';
import UserCard from './userCard';
import PopupWindow from './popupWindow';
import  {  Suspense, useEffect, useState } from 'react'
import {  useAppDispatch, useAppSelector } from '../redux/store'
import {  getData, resetCreationStatusIdle, resetDeleteUserStatus, resetEditUserStatusIdle } from './services/slice'
import Alerts from './alerts'


export default function Users() {
    const filters = ['name', 'username'];
    
    const [openPopup, setOpenPopup] = useState(false);
    const [currentFilter, setCurrentFilter] = useState("name");
    const [searchText, setSearchText] = useState("");
    
    const users = useAppSelector(state => state.users.users);
    const { getUsersStatus, deleteUserStatus, createUserStatus, editUserStatus } = useAppSelector(state => state.users);
    const [filtered, setFiltered] = useState(users);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (!searchText.length) {
            setFiltered(users);
            return;
        }
        setFiltered(users.filter(el => el[currentFilter].includes(searchText)));
    }, [searchText, users, currentFilter]);
    
    useEffect(() => {
        if (deleteUserStatus === "successfully") {
            dispatch(getData());
        }
        setTimeout(() => {
            dispatch(resetDeleteUserStatus());
        }, 5000);
    }, [deleteUserStatus, dispatch]);
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(resetCreationStatusIdle());
        }, 5000);
    }, [createUserStatus, dispatch]);
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(resetEditUserStatusIdle());
        }, 5000);
    }, [editUserStatus, dispatch]);
    
    const togglePopup = (open: boolean) => {
        setOpenPopup(open);
    };
    
    if (getUsersStatus === "loading") return <Suspense> Caricamento utenti...</Suspense>;
    
    return (
        <Box>
            <Alerts></Alerts>
            <Typography fontWeight={'bold'}>I TUOI UTENTI</Typography>
            
            <FormControl>
                <TextField name='search' label="Ricerca" value={searchText} onChange={(e) => setSearchText(e.target.value)}></TextField>
                <InputLabel id="usersFilter"> </InputLabel>
                <Select value={currentFilter} labelId='usersFilter' onChange={e => setCurrentFilter(e.target.value)}>
                    {filters.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
                </Select>
            </FormControl>
            
            <br />
            <Button aria-hidden={false} sx={{ margin: 2 }} onClick={() => setOpenPopup(true)}>Aggiungi utente</Button>
            
            <PopupWindow togglePopup={togglePopup} isOpen={openPopup}></PopupWindow>
            <Stack spacing={2}>
                {filtered.map(el => <UserCard key={el.id} user={el}></UserCard>)}
            </Stack>
        </Box>
    );
}

 