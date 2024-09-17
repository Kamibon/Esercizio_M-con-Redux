import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PopupWindow from './popupWindow'

import UserCard from './userCard'
import { UsersContext } from '..'

export default function Users() {

    const filters = ['Surname', 'BirthDate', 'Address']

    const [openPopup, setOpenPopup] = useState(false)
    const [currentFilter, setCurrentFilter] = useState("Surname")
    const [searchText, setSearchText] = useState("")
    
    const { users, deletedUsers}  = useContext(UsersContext)
    const [filtered, setFiltered] = useState(users)
   
   
    
    
   useEffect(()=>{
    async function retrieveData(){
      try {
       const response = await fetch('http://miobackend.com/users');
       const data = await response.json()
       return data
       
      } catch (error) {
        console.log(error)
      }
    
    }
    retrieveData()
    
     
   }, [])

   useEffect(()=>{
    if(!searchText.length){
      setFiltered(users)
     
      return
  }
    setFiltered(users.filter(el=> {
          
      return  currentFilter === "BirthDate"?  el[currentFilter].getFullYear()<parseInt(searchText) :
       el[currentFilter].includes(searchText)})
    )
   }, [searchText])

   
   const deleteUser = (idToDelete:string)=>{
    fetch('http://miobackend.com/users/' + idToDelete, {
        method:'DELETE'
    }).catch(e=>console.log(e))
   
    deletedUsers.push(...users.splice(parseInt(idToDelete),1))
    setFiltered( prev=> {return prev.filter((el)=>el.id!==idToDelete)})
    
 }

    const togglePopup= ( open:boolean)=>{
        setOpenPopup(open)
       }

   

  return (
    <Box>
    <Typography fontWeight={'extrabold'}>I TUOI UTENTI</Typography>
    
    <FormControl>
    <TextField name='search' label="Ricerca" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></TextField>
    <InputLabel id = "usersFilter"> </InputLabel>
    <Select value={currentFilter}  labelId='usersFilter' onChange={e=>setCurrentFilter(e.target.value)}>
       {filters.map(el=><MenuItem key={el} value={el}  >{el}</MenuItem>)}
    </Select>
    </FormControl>

    <br/>
    <Button sx={{margin:2}} onClick={()=>setOpenPopup(true)} >Aggiungi utente</Button>
    
    <PopupWindow togglePopup={togglePopup} isOpen = {openPopup} setFiltered={setFiltered} ></PopupWindow>
    <Stack spacing={2}>
    
    {filtered.map(el=><UserCard key={el.id} user = {el} deleteUser= {deleteUser} ></UserCard>)}
    </Stack>
    </Box>
  )
}

 